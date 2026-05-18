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

/**
 * Absolute asset dirs, computed once against the gh-pages deploy root.
 *
 * Why per-element attributes instead of `DsIcon.setPath()`:
 *
 *   The components resolve their asset dir as
 *     instance `path`/`base-path` prop  →  static `setPath()`  →  getAssetPath()
 *
 *   The static `setPath()` route is unreliable here. Stencil lazy-loads the
 *   real `DsIcon` class (`*.entry.js`) only when the first `<ds-icon>` renders,
 *   so at preview-init time `customElements.get('ds-icon')` is the lazy *proxy*
 *   constructor, not the implementation class that owns `static _globalPath`.
 *   `proxy.setPath(...)` is a no-op; `_globalPath` stays `null`; the component
 *   falls back to `getAssetPath('../../assets/icon/')`, which resolves against
 *   the bundle's `resourcesUrl` (`/<repo>/assets/`) and climbs two levels to
 *   `https://<owner>.github.io/assets/icon/…` — the 404 you see.
 *
 *   The instance prop has the highest priority and is read at render time, so
 *   stamping it on every element as it enters the DOM is race-free and immune
 *   to the bundle/class-identity problem.
 */
const ASSET_DIRS = {
  icon: new URL('assets/icon/', deployRoot).href,
  logo: new URL('assets/logo/', deployRoot).href,
  flag: new URL('assets/flag/', deployRoot).href,
} as const;

/** tag → (attribute that overrides the asset dir, absolute dir value). */
const PATH_ATTR: ReadonlyArray<readonly [tag: string, attr: string, dir: string]> = [
  ['ds-icon', 'path', ASSET_DIRS.icon],
  ['ds-logo', 'base-path', ASSET_DIRS.logo],
  ['ds-flag', 'base-path', ASSET_DIRS.flag],
];

function stampElement(el: Element): void {
  const tag = el.tagName.toLowerCase();
  for (const [t, attr, dir] of PATH_ATTR) {
    if (t !== tag) continue;
    if (el.getAttribute(attr) !== dir) {
      el.setAttribute(attr, dir);
    }
    return;
  }
}

/** Stamp everything already in a subtree (the element itself + descendants). */
function stampTree(root: ParentNode | Element): void {
  if (root instanceof Element) stampElement(root);
  root
    .querySelectorAll?.('ds-icon, ds-logo, ds-flag')
    .forEach((el) => stampElement(el));
}

/**
 * Single observer for the whole iframe document. Stamps the `path`/`base-path`
 * attribute on each component as soon as it is inserted — before Stencil's
 * `componentWillLoad` reads it — so the very first fetch already targets the
 * correct gh-pages subpath. No re-fetch / cache-bust needed.
 */
let observer: MutationObserver | undefined;
function startObserver(): void {
  if (observer) return;
  stampTree(document); // anything already present
  observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          stampTree(node as Element);
        }
      });
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

startObserver();

/**
 * Load Stencil from the static `/assets/` tree (see `staticDirs` in main.ts).
 *
 * Do NOT `import from 'ds-components-lib/loader'` here. Vite would bundle a
 * second copy of the Stencil runtime into the iframe while lazy-loaded
 * `*.entry.js` chunks import `./index-*.js` from `/assets/`, which breaks
 * `<Host>` detection and surfaces as createElementNS('[object Object]').
 */
const stencilModuleUrl = new URL('assets/ds-components.js', deployRoot).href;

async function bootstrapStencil(): Promise<void> {
  try {
    await import(/* @vite-ignore */ stencilModuleUrl);
    console.log('✓ Stencil module imported from', stencilModuleUrl);
  } catch (e) {
    console.error('✗ Failed to load Stencil components:', e);
    return;
  }
  await Promise.all([
    customElements.whenDefined('ds-icon'),
    customElements.whenDefined('ds-logo'),
    customElements.whenDefined('ds-flag'),
  ]);
  // Re-stamp once after definition in case any element upgraded before the
  // observer caught it (defensive; the observer normally wins the race).
  stampTree(document);
  console.log('✓ Asset dirs stamped per-element (deploy root):', deployRoot);
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
    async () => {
      await stencilReady;
      return {};
    },
  ],
  decorators: [
    (story) => {
      const rendered = story();
      // Story markup is built synchronously here but not yet connected; the
      // observer stamps on insertion. This rAF pass is a belt-and-suspenders
      // sweep for anything the observer might miss during fast re-renders.
      requestAnimationFrame(() => stampTree(document));
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
