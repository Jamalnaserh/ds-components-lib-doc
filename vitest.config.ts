import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { resolveDsComponentsLibRoot } from './scripts/resolve-ds-lib-root.mjs';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const dsComponentsLibRoot = resolveDsComponentsLibRoot();

// Storybook + Vitest integration.
//
// Runs every story as a test (mounting the component and executing its `play`
// function) inside a headless Chromium via Playwright.
//
// Run from `doc/`:
//   npx playwright install        (one-time, downloads browsers)
//   npm run test                  (single-shot)
//   npm run test -- --watch       (watch mode)
export default defineConfig({
  // Lazy chunks live under the installed `ds-components-lib` package (npm).
  server: {
    fs: {
      allow: [dirname, dsComponentsLibRoot],
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
    // Coverage: published package ships `dist/`, not `src/` — instrument built output.
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: [
        path.join(dsComponentsLibRoot, 'dist', '**', '*.{js,mjs,cjs}'),
      ],
      exclude: [
        '**/*.d.ts',
        '**/*.spec.ts',
        '**/*.test.ts',
        '**/*.stories.ts',
      ],
    },
  },
});
