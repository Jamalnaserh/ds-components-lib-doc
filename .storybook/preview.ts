import type { Preview } from '@storybook/web-components-vite';

/**
 * Deploy root for gh-pages (e.g. `https://…/ds-components-lib-doc/`).
 *
 * `document.baseURI` in the Storybook iframe often resolves to the site root
 * (`https://jamalnaserh.github.io/`), which makes icon URLs miss the repo
 * subpath. Vite `base` from main.ts is inlined as `import.meta.env.BASE_URL`.
 */
function getDeployRoot(): string {
  const viteBase = import.meta.env.BASE_URL ?? '/';
  return new URL(viteBase, window.location.origin).href;
}

const deployRoot = getDeployRoot();

/**
 * Load Stencil from the static `/assets/` tree (see `staticDirs` in main.ts).
 *
 * Do NOT `import from 'ds-components-lib/loader'` here. Vite would bundle a
 * second copy of the Stencil runtime into the iframe while lazy-loaded
 * `*.entry.js` chunks import `./index-*.js` from `/assets/`, which breaks
 * `<Host>` detection and surfaces as createElementNS('[object Object]').
 */
const stencilModuleUrl = new URL('assets/ds-components.js', deployRoot).href;

try {
  await import(/* @vite-ignore */ stencilModuleUrl);
  console.log('✓ Stencil components loaded from', stencilModuleUrl);
} catch (e) {
  console.error('✗ Failed to load Stencil components:', e);
}

const setAssetBasePaths = (): void => {
  const configure = (tag: string, subpath: string): void => {
    const Ctor = customElements.get(tag) as { setBasePath?: (path: string) => void } | undefined;
    if (!Ctor?.setBasePath) {
      console.warn(`⚠ ${tag} not registered — skipping base path`);
      return;
    }
    Ctor.setBasePath(new URL(subpath, deployRoot).href);
  };

  configure('ds-icon', 'assets/icon/');
  configure('ds-logo', 'assets/logo/');
  configure('ds-flag', 'assets/flag/');
};

await Promise.all([
  customElements.whenDefined('ds-icon'),
  customElements.whenDefined('ds-logo'),
  customElements.whenDefined('ds-flag'),
]);

setAssetBasePaths();
console.log('✓ Asset base paths configured (deploy root):', deployRoot);

(() => {
  const stylesheetHref = new URL('ds-components/ds-components.css', deployRoot).href;
  if (!document.querySelector(`link[href="${stylesheetHref}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stylesheetHref;
    document.head.appendChild(link);
    console.log('✓ Global stylesheet loaded:', stylesheetHref);
  }
})();

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    options: {
      storySort: {
        order: ['Foundations', 'Utilities', 'Components'],
      },
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: 'var(--off-white)' },
        { name: 'white', value: 'var(--white)' },
        { name: 'black', value: 'var(--black)' },
      ],
    },
    a11y: {
      test: 'error',
      config: {
        rules: [
          { id: 'color-contrast', enabled: false },
          { id: 'landmark-unique', enabled: false },
        ],
      },
    },
  },
};

export default preview;
