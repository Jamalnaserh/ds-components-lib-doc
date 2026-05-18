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

const ASSET_TAGS: ReadonlyArray<readonly [tag: string, subpath: string]> = [
  ['ds-icon', 'assets/icon/'],
  ['ds-logo', 'assets/logo/'],
  ['ds-flag', 'assets/flag/'],
];

type StencilCtor =
  | { setBasePath?: (path: string) => void; setPath?: (path: string) => void }
  | undefined;

/**
 * Tracks which tags already had their absolute asset path applied, so repeated
 * calls (loaders/decorators) are cheap no-ops once a tag is configured — but a
 * tag that is *not yet registered* is left unmarked so a later call retries it.
 */
const configured = new Set<string>();

function applyBasePath(tag: string, subpath: string): boolean {
  if (configured.has(tag)) return true;
  const Ctor = customElements.get(tag) as StencilCtor;
  if (!Ctor) return false; // not registered yet — caller should retry later
  const absoluteDir = new URL(subpath, deployRoot).href;
  if (typeof Ctor.setPath === 'function') {
    Ctor.setPath(absoluteDir);
  } else if (typeof Ctor.setBasePath === 'function') {
    Ctor.setBasePath(absoluteDir);
  } else {
    // Registered but no path API — nothing more we can do; don't spin forever.
    configured.add(tag);
    return true;
  }
  configured.add(tag);
  return true;
}

/** Apply to every tag that is currently registered. Returns true once all done. */
function setAssetBasePaths(): boolean {
  let allDone = true;
  for (const [tag, subpath] of ASSET_TAGS) {
    if (!applyBasePath(tag, subpath)) allDone = false;
  }
  return allDone;
}

/**
 * Icons that started loading before `setPath()` used Stencil's `getAssetPath`
 * fallback (`/assets/icon/…`). Re-trigger a fetch after the global path is set.
 */
function refreshMountedIcons(): void {
  document.querySelectorAll('ds-icon, ds-logo, ds-flag').forEach((el) => {
    for (const attr of ['icon', 'name', 'src']) {
      const val = el.getAttribute(attr);
      if (val != null) {
        el.removeAttribute(attr);
        el.setAttribute(attr, val);
      }
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

/**
 * Resolve only once every asset tag is actually defined AND has had its base
 * path set. The Stencil esm bundle self-registers asynchronously, so awaiting
 * the import is *not* enough — we must await `whenDefined` for each tag, then
 * set the path before any story paints an icon.
 */
async function bootstrapStencil(): Promise<void> {
  try {
    await import(/* @vite-ignore */ stencilModuleUrl);
    console.log('✓ Stencil module imported from', stencilModuleUrl);
  } catch (e) {
    console.error('✗ Failed to load Stencil components:', e);
    return;
  }

  // Wait for the components to genuinely register before touching the
  // constructor. This is what was missing — `customElements.get()` was
  // `undefined` at call time, so every early `setPath()` was skipped and
  // icons fell back to the site-root path → 404.
  await Promise.all(
    ASSET_TAGS.map(([tag]) => customElements.whenDefined(tag)),
  );

  setAssetBasePaths();
  refreshMountedIcons();
  console.log('✓ Asset base paths configured (deploy root):', deployRoot);
}

const stencilReady = bootstrapStencil();

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
    // Block every story's first paint until Stencil is registered and the
    // asset base path is set. This is the key ordering guarantee.
    async () => {
      await stencilReady;
      return {};
    },
  ],
  decorators: [
    (story) => {
      // Cheap no-op once configured; retries any tag not yet registered.
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
