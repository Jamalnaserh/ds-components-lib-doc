import { defineCustomElements } from 'ds-components-lib/loader';

// Add error handling for defineCustomElements
try {
  defineCustomElements();
  console.log('✓ Custom elements loaded successfully');
} catch (e) {
  console.error('✗ Failed to load custom elements:', e);
}

const trySetBasePaths = () => {
  const DsIcon = customElements.get('ds-icon');
  const DsLogo = customElements.get('ds-logo');
  const DsFlag = customElements.get('ds-flag');

  if (!DsIcon) console.warn('⚠ ds-icon not registered');
  if (!DsLogo) console.warn('⚠ ds-logo not registered');
  if (!DsFlag) console.warn('⚠ ds-flag not registered');

  const baseUri = globalThis.document?.baseURI ?? '/';
  DsIcon?.setBasePath?.(new URL('assets/icon/', baseUri).toString());
  DsLogo?.setBasePath?.(new URL('assets/logo/', baseUri).toString());
  DsFlag?.setBasePath?.(new URL('assets/flag/', baseUri).toString());
};

// Prefer synchronous base-path setup so early-rendered icons use the correct
// asset URLs in Storybook.
trySetBasePaths();

// Fallback: if elements are defined slightly after this file runs, wait for them.
void (async () => {
  const [DsIcon, DsLogo, DsFlag] = await Promise.all([
    customElements.whenDefined('ds-icon'),
    customElements.whenDefined('ds-logo'),
    customElements.whenDefined('ds-flag'),
  ]);

  const baseUri = globalThis.document?.baseURI ?? '/';
  DsIcon?.setBasePath?.(new URL('assets/icon/', baseUri).toString());
  DsLogo?.setBasePath?.(new URL('assets/logo/', baseUri).toString());
  DsFlag?.setBasePath?.(new URL('assets/flag/', baseUri).toString());

  console.log('✓ Base paths configured for ds-icon, ds-logo, ds-flag');
})();

(() => {
  const baseUri = globalThis.document?.baseURI ?? '/';
  const href = new URL('ds-components/ds-components.css', baseUri).pathname;
  const existing = document.querySelector(`link[href="${href}"]`);
  if (!existing) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
    console.log('✓ Global stylesheet loaded:', href);
  }
})();

const preview = {
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
      // `'error'` makes the addon fail Storybook's test runs whenever
      // axe-core surfaces a violation. Individual stories that still need
      // grace can opt back to `'todo'` (warn only) or `'off'`.
      test: 'error',
      // Catalogue-level rule relaxations. These remain visible in the a11y
      // panel as warnings but do not fail the suite, because:
      //   • `color-contrast` — design-system swatch & caption pages
      //     intentionally display low-contrast tokens (e.g. `--dark-grey`
      //     against `--white`) so consumers can see what each token looks
      //     like. Treat in real apps.
      //   • `landmark-unique` — many stories render multiple variants of
      //     the same component (e.g. several breadcrumbs side by side),
      //     each generating an identical `<nav aria-label>` landmark.
      // To re-enable on a per-story basis:
      //   parameters: { a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } } }
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
