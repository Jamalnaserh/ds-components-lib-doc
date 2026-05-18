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

/** Align `<base href>` so Stencil path helpers resolve under the gh-pages subpath. */
function ensureDeployBaseTag(): void {
  const existing = document.querySelector('base[data-ds-storybook-base]');
  if (existing) {
    existing.setAttribute('href', deployRoot);
    return;
  }
  const base = document.createElement('base');
  base.setAttribute('data-ds-storybook-base', '');
  base.href = deployRoot;
  document.head.prepend(base);
}

ensureDeployBaseTag();

const setAssetBasePaths = (): void => {
  const configure = (tag: string, subpath: string): void => {
    const Ctor = customElements.get(tag) as
      | { setBasePath?: (path: string) => void; setPath?: (path: string) => void }
      | undefined;
    const absoluteDir = new URL(subpath, deployRoot).href;
    if (typeof Ctor?.setPath === 'function') {
      Ctor.setPath(absoluteDir);
    } else if (typeof Ctor?.setBasePath === 'function') {
      Ctor.setBasePath(absoluteDir);
    } else {
      console.warn(`⚠ ${tag} not registered — skipping base path`);
    }
  };

  configure('ds-icon', 'assets/icon/');
  configure('ds-logo', 'assets/logo/');
  configure('ds-flag', 'assets/flag/');
};

/**
 * Icons that started loading before `setPath()` used Stencil's `getAssetPath`
 * fallback (`/assets/icon/…`). Re-trigger a fetch after the global path is set.
 */
function refreshMountedIcons(): void {
  document.querySelectorAll('ds-icon').forEach((el) => {
    const icon = el.getAttribute('icon');
    const name = el.getAttribute('name');
    if (icon) {
      el.removeAttribute('icon');
      el.setAttribute('icon', icon);
    } else if (name) {
      el.removeAttribute('name');
      el.setAttribute('name', name);
    }
  });
}

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
  // Set paths in the same turn as registration — before stories paint icons.
  setAssetBasePaths();
  console.log('✓ Stencil components loaded from', stencilModuleUrl);
  console.log('✓ Asset base paths configured (deploy root):', deployRoot);
} catch (e) {
  console.error('✗ Failed to load Stencil components:', e);
}

await Promise.all([
  customElements.whenDefined('ds-icon'),
  customElements.whenDefined('ds-logo'),
  customElements.whenDefined('ds-flag'),
]);

// Belt-and-suspenders after custom elements are fully defined.
setAssetBasePaths();

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
  loaders: [
    async () => {
      setAssetBasePaths();
      return {};
    },
  ],
  decorators: [
    (story) => {
      setAssetBasePaths();
      const rendered = story();
      requestAnimationFrame(() => {
        refreshMountedIcons();
      });
      return rendered;
    },
  ],
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
