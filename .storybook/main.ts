import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/web-components-vite';
import { resolveDsComponentsLibRoot } from '../scripts/resolve-ds-lib-root.mjs';

/**
 * Resolve the repo name for `STORYBOOK_BASE_PATH`.
 *
 * Priority:
 *   1. `STORYBOOK_BASE_PATH` (explicit override, e.g. for custom deploys)
 *   2. `GITHUB_REPOSITORY` (set automatically by GitHub Actions — "owner/repo")
 *   3. Fallback constant — only used for local builds outside CI.
 *
 * This keeps the config portable: if the repo is renamed, no code change
 * is needed for the gh-pages build to keep working.
 */
const FALLBACK_REPO_NAME = 'ds-components-lib-doc';

const resolveBasePath = (): string => {
  if (process.env.STORYBOOK_BASE_PATH) {
    console.log('🔧 STORYBOOK_BASE_PATH override:', process.env.STORYBOOK_BASE_PATH);
    return process.env.STORYBOOK_BASE_PATH;
  }
  const ghRepo = process.env.GITHUB_REPOSITORY; // "owner/repo"
  if (ghRepo?.includes('/')) {
    const basePath = `/${ghRepo.split('/')[1]}`;
    console.log('🔧 GITHUB_REPOSITORY resolved to:', basePath);
    return basePath;
  }
  console.log('🔧 Using FALLBACK_REPO_NAME:', `/${FALLBACK_REPO_NAME}`);
  return `/${FALLBACK_REPO_NAME}`;
};

const isProd = process.env.NODE_ENV === 'production';
const isVitest = process.env.VITEST === 'true';
const dirname = path.dirname(fileURLToPath(import.meta.url));
const docRoot = path.resolve(dirname, '..');

console.log('=== Storybook Main Config ===');
console.log('isProd:', isProd);
console.log('isVitest:', isVitest);
console.log('docRoot:', docRoot);

/** Installed npm package root (works for doc-only repos; see `resolve-ds-lib-root.mjs`). */
let dsComponentsLibRoot: string;
try {
  dsComponentsLibRoot = resolveDsComponentsLibRoot();
  console.log('✓ dsComponentsLibRoot resolved:', dsComponentsLibRoot);
} catch (e) {
  console.error('✗ Failed to resolve dsComponentsLibRoot:', e);
  throw e;
}

const basePath = resolveBasePath();
console.log('basePath:', basePath);

const staticDirsConfig = [
  { from: path.join(dsComponentsLibRoot, 'dist', 'assets'), to: '/assets' },
  // Stencil lazy-loads `./${tag}.entry.js` next to the Vite iframe chunk in
  // `/assets/`. Those files live under `dist/esm/`, not `dist/assets/`; without
  // this copy, gh-pages hits 404 on `.../assets/ds-icon.entry.js` and tags
  // stay undefined (`Constructor for "ds-icon#undefined" was not found`).
  { from: path.join(dsComponentsLibRoot, 'dist', 'esm'), to: '/assets' },
  {
    from: path.join(dsComponentsLibRoot, 'dist', 'ds-components'),
    to: '/ds-components',
  },
  { from: path.join(docRoot, 'public'), to: '/' },
];

console.log('📁 Static dirs config:');
staticDirsConfig.forEach((dir, i) => {
  console.log(`  [${i}] from: ${dir.from}`);
  console.log(`       to:   ${dir.to}`);
});

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',
  env: (existing) => ({
    ...existing,
    STORYBOOK_BASE_PATH: isProd ? basePath : '',
  }),
  staticDirs: staticDirsConfig,
  stories: ['../stories/**/*.stories.@(js|ts)', '../stories/**/*.mdx'],
  // `@chromatic-com/storybook`'s preset hits a Node ESM `require()` race
  // condition when Storybook is loaded synchronously by the Vitest plugin.
  // Skip it under Vitest; the addon is still active for `npm run storybook`
  // and `npm run build`.
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    ...(isVitest ? [] : ['@chromatic-com/storybook']),
  ],
  // Stencil package tree (same resolution as `import "ds-components-lib/loader"`).
  viteFinal: async (cfg) => {
    return {
      ...cfg,
      // Storybook 10 + the Vite builder has no `--base-path` CLI flag —
      // Vite's own `base` is what controls the prefix used in emitted
      // asset URLs (`/<repo>/assets/iframe-*.js`). Set it here so the
      // gh-pages build resolves chunks correctly at
      // `https://owner.github.io/<repo>/`.
      base: isProd ? `${basePath}/` : '/',
      optimizeDeps: {
        ...cfg.optimizeDeps,
        include: [
          ...(cfg.optimizeDeps?.include ?? []),
          'react',
          'react-dom',
          '@storybook/addon-docs/blocks',
        ],
      },
      server: {
        ...cfg.server,
        fs: {
          ...cfg.server?.fs,
          allow: [
            ...(cfg.server?.fs?.allow ?? []),
            docRoot,
            dsComponentsLibRoot,
          ],
        },
      },
    };
  },
};

console.log('=== End Config ===\n');

export default config;
