import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';

const COLOR_TOKENS = [
  '',
  'primary', 'secondary', 'info', 'success', 'warning', 'danger',
  'purple-100', 'purple-300', 'purple-500',
  'coral-100', 'coral-300', 'coral-500',
  'moon-100', 'moon-300', 'moon-500',
  'orange-100', 'orange-300', 'orange-500',
  'yellow-100', 'yellow-300', 'yellow-500',
  'sea-100', 'sea-300', 'sea-500',
  'white', 'black', 'dark-grey', 'light-grey', 'off-white',
  'grey-50', 'grey-100', 'grey-200', 'grey-400', 'grey-500',
];

/** Semantic `status` values for status-capable icons (`flag`, `star`). */
const STATUS_TOKENS = ['', 'info', 'success', 'warning', 'danger'] as const;

/** Common square sizes for the “Size scale” story (px). */
const SIZE_STEPS = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96];

/** Options in the “All icons” gallery size control (px). */
const ICON_SIZES = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96, 104, 128];

const ICON_COLOR_OPTIONS: { label: string; values: string[] }[] = [
  { label: 'Semantic', values: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'] },
  {
    label: 'Neutrals',
    values: ['black', 'dark-grey', 'grey-500', 'grey-400', 'grey-200', 'grey-100', 'grey-50', 'light-grey', 'off-white', 'white'],
  },
  { label: 'Purple', values: ['purple-100', 'purple-200', 'purple-300', 'purple-400', 'purple-500'] },
  { label: 'Coral', values: ['coral-100', 'coral-200', 'coral-300', 'coral-400', 'coral-500'] },
  { label: 'Moon', values: ['moon-100', 'moon-200', 'moon-300', 'moon-400', 'moon-500'] },
  { label: 'Orange', values: ['orange-100', 'orange-200', 'orange-300', 'orange-400', 'orange-500'] },
  { label: 'Yellow', values: ['yellow-100', 'yellow-200', 'yellow-300', 'yellow-500'] },
  { label: 'Sea', values: ['sea-100', 'sea-200', 'sea-300', 'sea-400', 'sea-500'] },
];

interface DsIconArgs {
  icon: string;
  color: string;
  /** Semantic status for `flag` / `star`. Empty = outline. */
  status: string;
  /** Square shorthand: same as matching `width` and `height`. Omitted when empty. */
  size: string;
  width: string;
  height: string;
  viewBox: string;
  strict: boolean;
  preserveColors: boolean;
  path: string;
}

const meta: Meta<DsIconArgs> = {
  title: 'Components/Icon',
  component: 'ds-icon',
  parameters: {
    docs: {
      description: {
        component: [
          'Inline SVG icon loaded from `assets/icon/` (or your configured base path).',
          '',
          '**Color** — pass any DS color token via `color="primary"` /',
          '`color="coral-500"`. The host gets the matching `var(--token)` value,',
          'and the SVG follows via `currentColor`. SVGs that ship with hardcoded',
          'fills are rewritten on load (override with `preserve-colors` for',
          'multicolour artwork like flags or logos).',
          '',
          '**Status** — on status-capable icons (`flag`, `star`), set',
          '`status="info"` | `success` | `warning` | `danger` for filled semantic',
          'artwork. Omit `status` for outline (still follows `color`).',
          '`status` does **not** change `color` — when set, baked-in status fills',
          'win and are not rewritten to `currentColor`.',
          '',
          '**Sizing** — set `size` for a square box, or `width` / `height`',
          'independently (numbers → px). `width` / `height` override `size` when',
          'both are set. Without them the host falls back to `1.5em` (see component',
          'stylesheet), so you can also size via parent `font-size` or `fs-*` utilities.',
          '',
          '**Repo assets** — in the library repo, `npm run optimize:icons:svgo` is',
          'SVGO + optional trim only; theme colours are applied at runtime here,',
          'not baked into SVG files.',
          '',
          '**Storybook** — Controls and the “All icons” grid set `width` / `height`',
          'explicitly (including programmatic `innerHTML`) so sizing stays reliable;',
          'the `size` attribute is the same square shorthand in real HTML apps.',
          '',
          '**Path resolution** — `path` per instance > `DsIcon.setPath()` global >',
          'bundled `assets/icon/` directory. Storybook sets a global path in',
          '`preview.ts`, so you rarely need to set `path` on individual icons.',
          '',
          'Fires **`dsIconLoad`** when the SVG is in the DOM and **`dsIconError`**',
          'when no candidate URL returned a valid SVG.',
        ].join('\n'),
      },
    },
    actions: { handles: ['dsIconLoad', 'dsIconError'] },
  },
  args: {
    icon: 'check-circle',
    color: 'primary',
    status: '',
    size: '',
    width: '32',
    height: '32',
    viewBox: '',
    strict: false,
    preserveColors: false,
    path: '',
  },
  argTypes: {
    icon: {
      control: 'text',
      description:
        'Icon id. Accepts `home`, `icon-home`, `icon-home.svg`, `icon home`, `icon-home-f`.',
    },
    color: {
      control: 'select',
      options: COLOR_TOKENS,
      description:
        'Foundation colour token. Empty inherits from parent. Independent of `status` on flag / star.',
    },
    status: {
      control: 'select',
      options: [...STATUS_TOKENS],
      description:
        'Semantic status for `flag` / `star` (`info` | `success` | `warning` | `danger`). Empty = outline. Does not change `color`.',
    },
    size: {
      control: 'text',
      description:
        'Square shorthand (`size="24"` → 24×24 px). Leave empty to use `width` / `height` only. If both are set, `width` / `height` win.',
    },
    width: {
      control: 'text',
      description: 'CSS width. Numbers are treated as px; strings pass through (`24`, `2rem`, `100%`).',
    },
    height: {
      control: 'text',
      description: 'CSS height. Numbers are treated as px; strings pass through.',
    },
    viewBox: {
      control: 'text',
      description: 'Override the loaded SVG root `viewBox` after fetch (no refetch).',
    },
    strict: {
      control: 'boolean',
      description: 'Disable suffix variant probing (`-f`, `-o`, `-2`).',
    },
    preserveColors: {
      control: 'boolean',
      description: 'Keep the original fills/strokes (use for multicolour artwork).',
    },
    path: {
      control: 'text',
      description: 'Override the icon directory for this instance.',
    },
  },
  render: (args) => html`
    <ds-icon
      icon=${args.icon}
      color=${ifDefined(args.color ? args.color : undefined)}
      status=${ifDefined(args.status ? args.status : undefined)}
      size=${ifDefined(args.size ? args.size : undefined)}
      width=${ifDefined(args.width ? args.width : undefined)}
      height=${ifDefined(args.height ? args.height : undefined)}
      viewbox=${ifDefined(args.viewBox ? args.viewBox : undefined)}
      ?strict=${args.strict}
      ?preserve-colors=${args.preserveColors}
      path=${ifDefined(args.path ? args.path : undefined)}
    ></ds-icon>
  `,
};

export default meta;

type Story = StoryObj<DsIconArgs>;

export const Playground: Story = {};

export const AllIcons: Story = {
  name: 'All icons',
  tags: ['autodocs', 'test'],
  parameters: {
    docs: {
      description: {
        story:
          'Full searchable catalogue of every icon shipped with the library, sourced from the build-time manifest at `/icon-names.json`. Filter by name, change page size, and live-tweak **width / height** and **color** to see how any swatch from the design tokens lands on the catalogue. **Click any icon** to copy its name to the clipboard. Use the **Component tests** widget (Interactions ▸ Accessibility) to verify the controls and a11y in one shot.',
      },
    },
    a11y: { test: 'todo' },
  },
  render: () => {
    const id = `icon-gallery-${Math.random().toString(16).slice(2)}`;
    queueMicrotask(() => {
      const root = document.getElementById(id);
      if (root) void initGallery(root);
    });
    return html`
      <div id=${id} class="ig">
        <div class="ig-controls">
          <input
            data-role="search"
            type="search"
            placeholder="Search icons…"
            class="ig-input"
            aria-label="Search icons"
          />
          <label class="ig-field">
            <span class="ig-field-text">Size</span>
            <select data-role="icon-size" class="ig-select" aria-label="Icon size">
              ${ICON_SIZES.map(
                (s) => html`<option value=${s} ?selected=${s === 48}>${s}px</option>`,
              )}
            </select>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Color</span>
            <select data-role="icon-color" class="ig-select" aria-label="Icon color">
              <option value="">inherit</option>
              ${ICON_COLOR_OPTIONS.map(
                (group) => html`
                  <optgroup label=${group.label}>
                    ${group.values.map(
                      (c) => html`<option value=${c} ?selected=${c === 'black'}>${c}</option>`,
                    )}
                  </optgroup>
                `,
              )}
            </select>
            <span class="ig-swatch" data-role="swatch" aria-hidden="true"></span>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Per page</span>
            <select data-role="page-size" class="ig-select" aria-label="Icons per page">
              <option value="36">36</option>
              <option value="60">60</option>
              <option value="120" selected>120</option>
              <option value="240">240</option>
            </select>
          </label>
        </div>
        <div class="ig-grid" data-role="grid"></div>
        <div class="ig-footer">
          <span class="ig-range" data-role="range">Loading…</span>
          <div class="ig-pager">
            <button type="button" class="ig-btn" data-role="prev" aria-label="Previous page">
              ‹ Prev
            </button>
            <span class="ig-page" data-role="page-info">—</span>
            <button type="button" class="ig-btn" data-role="next" aria-label="Next page">
              Next ›
            </button>
          </div>
        </div>
      </div>
    `;
  },
  play: async ({ canvasElement, step }) => {
    const root = canvasElement.querySelector<HTMLElement>('.ig');
    await expect(root).toBeTruthy();

    const search = root!.querySelector<HTMLInputElement>('input[data-role="search"]')!;
    const iconSize = root!.querySelector<HTMLSelectElement>('[data-role="icon-size"]')!;
    const iconColor = root!.querySelector<HTMLSelectElement>('[data-role="icon-color"]')!;
    const next = root!.querySelector<HTMLButtonElement>('[data-role="next"]')!;
    const pageInfo = root!.querySelector<HTMLElement>('[data-role="page-info"]')!;
    const grid = root!.querySelector<HTMLElement>('[data-role="grid"]')!;

    await step('Manifest loads and grid renders cards', async () => {
      await waitFor(
        () => {
          if (!grid.querySelector('.ig-card'))
            throw new Error('Gallery grid is empty — manifest not loaded yet');
        },
        { timeout: 4000 },
      );
    });

    await step('Pagination advances to page 2', async () => {
      const before = pageInfo.textContent;
      next.click();
      await waitFor(() => expect(pageInfo.textContent).not.toBe(before));
      await expect(pageInfo.textContent).toMatch(/Page 2/);
    });

    await step('Search filters the grid to home-* icons', async () => {
      search.value = 'home';
      search.dispatchEvent(new Event('input', { bubbles: true }));
      await waitFor(() => {
        const names = [...grid.querySelectorAll<HTMLElement>('.ig-card')].map(
          (c) => c.dataset.name ?? '',
        );
        if (!names.length) throw new Error('No results yet');
        if (!names.every((n) => n.includes('home')))
          throw new Error('Filter returned non-matching icons: ' + names.join(','));
      });
    });

    await step('Size + Color controls update the icons live', async () => {
      iconSize.value = '40';
      iconSize.dispatchEvent(new Event('change', { bubbles: true }));
      iconColor.value = 'primary';
      iconColor.dispatchEvent(new Event('change', { bubbles: true }));
      await waitFor(() => {
        const sample = grid.querySelector('ds-icon');
        if (!sample) throw new Error('No icon rendered');
        expect(sample.getAttribute('size')).toBe('40');
        expect(sample.classList.contains('fs-40')).toBe(true);
        expect(sample.getAttribute('color')).toBe('primary');
        const { width, height } = sample.getBoundingClientRect();
        if (width < 36 || height < 36) {
          throw new Error(`Icon box too small (${width}×${height}); size control not applied`);
        }
      });
    });

    // `play()` mutates the real canvas DOM; Storybook keeps that state when the
    // run finishes, so an empty search would otherwise stay stuck on "home".
    await step('Clear search so the gallery opens unfiltered', async () => {
      search.value = '';
      search.dispatchEvent(new Event('input', { bubbles: true }));
    });
  },
};

export const SizeScale: Story = {
  name: 'Size scale',
  parameters: {
    docs: {
      description: {
        story:
          'Square sizes via matching `width` / `height` (what this gallery and Controls use for reliable Storybook rendering). See **Size shorthand** for the `size` attribute.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${SIZE_STEPS.map(
        (s) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" width=${s} height=${s} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">${s}px</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const SizeShorthand: Story = {
  name: 'Size shorthand',
  parameters: {
    docs: {
      description: {
        story:
          'Same square box using the **`size`** prop (`size="24"` → 24×24 px). In apps you can use either `size` or matching `width` / `height`; when both are set, `width` / `height` take precedence.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${SIZE_STEPS.map(
        (s) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" size=${s} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">size="${s}"</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const NonSquare: Story = {
  name: 'Non-square box',
  parameters: {
    docs: {
      description: {
        story:
          'Use **`width`** and **`height`** independently when the icon box is not square. The `size` shorthand always produces a square.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:24px; align-items:center; flex-wrap:wrap;">
      <ds-icon icon="arrow-right-2" width="48" height="24" color="primary"></ds-icon>
      <code style="font-size:12px; color: var(--dark-grey);">width="48" height="24"</code>
    </div>
  `,
};

export const ColorTokens: Story = {
  name: 'Colour tokens',
  parameters: {
    docs: {
      description: {
        story:
          'Every foundation token usable on `ds-button` works here too. Empty `color` inherits from the parent.',
      },
    },
  },
  render: () => html`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; padding: 12px; background: var(--white); border-radius: 12px;"
    >
      ${COLOR_TOKENS.filter(Boolean).map(
        (c) => html`
          <div
            style="display:flex; align-items:center; gap:8px; padding: 6px 8px; border-radius: 8px; background: rgba(0,0,0,0.02);"
          >
            <ds-icon icon="check-circle" width="22" height="22" color=${c}></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">${c}</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const InheritedColor: Story = {
  name: 'Inherited colour',
  parameters: {
    docs: {
      description: {
        story:
          'When `color` is omitted, the icon uses `currentColor`, so it inherits whatever `color` is set on the parent element. Great for icons inside links or status pills.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      <div style="color: var(--success); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="check-circle" width="20" height="20"></ds-icon>
        Inherits <code>var(--success)</code> from parent.
      </div>
      <div style="color: var(--danger); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="error" width="20" height="20"></ds-icon>
        Inherits <code>var(--danger)</code> from parent.
      </div>
      <a
        href="#"
        style="color: var(--primary); display:inline-flex; gap:6px; align-items:center;"
      >
        <ds-icon icon="arrow-right-2" width="18" height="18"></ds-icon>
        Link-coloured icon
      </a>
    </div>
  `,
};

export const StatusIcons: Story = {
  name: 'Status (flag & star)',
  parameters: {
    docs: {
      description: {
        story: [
          'Status-capable icons (`flag`, `star`) swap outline artwork for a filled',
          'semantic colour when `status` is set (`info` | `success` | `warning` | `danger`).',
          '',
          'Omit `status` for outline (still follows `color`).',
          '`status` does **not** change `color` — when both are set, status paint wins.',
        ].join('\n'),
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:24px;">
      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Flag</strong> — outline vs semantic status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="danger"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="danger"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="success"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="success"</code>
          </div>
        </div>
      </div>

      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Star</strong> — outline vs status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning" color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status + color<br />(status wins)</code>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const StatusPlayground: Story = {
  name: 'Status playground',
  args: {
    icon: 'flag',
    color: 'dark-grey',
    status: 'info',
    size: '32',
    width: '',
    height: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Try `icon` as `flag` or `star` and toggle `status` in Controls. Clear `status` to see outline + `color`.',
      },
    },
  },
};

// ─── All icons: full searchable + paginated catalogue ──────────────────────

let manifestPromise: Promise<string[]> | null = null;
function loadIconManifest(): Promise<string[]> {
  if (!manifestPromise) {
    const url = new URL('icon-names.json', document.baseURI).toString();
    manifestPromise = fetch(url, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : { iconNames: [] }))
      .then((d: { iconNames?: unknown }) =>
        Array.isArray(d?.iconNames) ? (d.iconNames as unknown[]).map(String) : [],
      )
      .catch(() => []);
  }
  return manifestPromise;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to legacy copy
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

async function initGallery(root: HTMLElement): Promise<void> {
  if (root.dataset.igInit === 'true') return;
  root.dataset.igInit = 'true';

  const search = root.querySelector<HTMLInputElement>('input[data-role="search"]');
  const grid = root.querySelector<HTMLElement>('[data-role="grid"]');
  const range = root.querySelector<HTMLElement>('[data-role="range"]');
  const pageInfo = root.querySelector<HTMLElement>('[data-role="page-info"]');
  const prev = root.querySelector<HTMLButtonElement>('[data-role="prev"]');
  const next = root.querySelector<HTMLButtonElement>('[data-role="next"]');
  const pageSizeSelect = root.querySelector<HTMLSelectElement>('[data-role="page-size"]');
  const iconSizeSelect = root.querySelector<HTMLSelectElement>('[data-role="icon-size"]');
  const iconColorSelect = root.querySelector<HTMLSelectElement>('[data-role="icon-color"]');
  const swatch = root.querySelector<HTMLElement>('[data-role="swatch"]');
  if (
    !search ||
    !grid ||
    !range ||
    !pageInfo ||
    !prev ||
    !next ||
    !pageSizeSelect ||
    !iconSizeSelect ||
    !iconColorSelect ||
    !swatch
  )
    return;

  const icons = await loadIconManifest();

  let query = '';
  let page = 0;
  let pageSize = Number(pageSizeSelect.value) || 60;
  let iconSize = Number(iconSizeSelect.value) || 24;
  let iconColor = iconColorSelect.value;

  const getFiltered = (): string[] =>
    query ? icons.filter((x) => x.toLowerCase().includes(query)) : icons;

  const syncSwatch = (): void => {
    swatch.style.background = iconColor ? `var(--${iconColor})` : 'transparent';
    swatch.style.borderColor = iconColor ? `var(--${iconColor})` : 'rgba(0,0,0,0.18)';
  };

  const render = (): void => {
    const list = getFiltered();
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    if (page > totalPages - 1) page = totalPages - 1;
    if (page < 0) page = 0;
    const start = page * pageSize;
    const end = Math.min(start + pageSize, list.length);
    const slice = list.slice(start, end);
    const colorAttr = iconColor ? ` color="${escapeHtml(iconColor)}"` : '';

    root.style.setProperty('--ig-icon-size', `${iconSize}px`);

    grid.innerHTML = slice.length
      ? slice
          .map(
            (name) =>
              `<button class="ig-card" type="button" title="Copy ${escapeHtml(name)}" aria-label="Copy icon name ${escapeHtml(name)}" data-name="${escapeHtml(name)}">` +
              `<ds-icon icon="${escapeHtml(name)}" class="fs-${iconSize}" size="${iconSize}"${colorAttr}></ds-icon>` +
              `<div class="ig-name">${escapeHtml(name)}</div>` +
              `</button>`,
          )
          .join('')
      : `<div class="ig-empty">No icons match “${escapeHtml(query)}”.</div>`;

    range.textContent = list.length
      ? `Showing ${start + 1}–${end} of ${list.length}${icons.length !== list.length ? ` (filtered from ${icons.length})` : ''}`
      : icons.length
      ? 'No matches'
      : 'Manifest missing — from the `doc/` folder run `npm run generate:icons`.';

    pageInfo.textContent = `Page ${page + 1} / ${totalPages}`;
    prev.disabled = page <= 0;
    next.disabled = page >= totalPages - 1;
    syncSwatch();
  };

  search.addEventListener('input', () => {
    query = search.value.trim().toLowerCase();
    page = 0;
    render();
  });
  pageSizeSelect.addEventListener('change', () => {
    pageSize = Number(pageSizeSelect.value) || 60;
    page = 0;
    render();
  });
  iconSizeSelect.addEventListener('change', () => {
    iconSize = Number(iconSizeSelect.value) || 24;
    render();
  });
  iconColorSelect.addEventListener('change', () => {
    iconColor = iconColorSelect.value;
    render();
  });
  prev.addEventListener('click', () => {
    page -= 1;
    render();
  });
  next.addEventListener('click', () => {
    page += 1;
    render();
  });

  let copiedTimer: ReturnType<typeof setTimeout> | null = null;
  grid.addEventListener('click', (ev) => {
    const card = (ev.target as HTMLElement).closest<HTMLElement>('.ig-card');
    if (!card) return;
    const name = card.dataset.name;
    if (!name) return;
    void copyToClipboard(name).then((ok) => {
      if (!ok) return;
      grid.querySelectorAll('.ig-card.is-copied').forEach((c) => c.classList.remove('is-copied'));
      card.classList.add('is-copied');
      if (copiedTimer) clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => card.classList.remove('is-copied'), 1200);
    });
  });

  render();
}

if (typeof document !== 'undefined' && !document.getElementById('icon-gallery-style')) {
  const style = document.createElement('style');
  style.id = 'icon-gallery-style';
  style.textContent = `
    .ig {
      font-family: var(--font-family-base, system-ui);
      background: var(--white);
      border-radius: 12px;
      padding: 16px;
      display: grid;
      gap: 12px;
    }
    .ig-controls {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .ig-input {
      flex: 1 1 240px;
      min-width: 200px;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      outline: none;
    }
    .ig-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(var(--rgb-primary), 0.15);
    }
    .ig-size-label,
    .ig-field {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: var(--dark-grey);
    }
    .ig-field-text,
    .ig-size-text {
      white-space: nowrap;
    }
    .ig-swatch {
      width: 18px;
      height: 18px;
      border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.18);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.6);
      flex-shrink: 0;
    }
    .ig-select {
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      color: inherit;
      outline: none;
    }
    .ig-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
      gap: 8px;
    }
    .ig-grid ds-icon {
      font-size: var(--ig-icon-size, 48px);
    }
    .ig-card {
      display: grid;
      justify-items: center;
      gap: 8px;
      padding: 12px 8px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.06);
      background: rgba(0,0,0,0.02);
      cursor: pointer;
      text-align: center;
      transition: background 120ms, border-color 120ms, box-shadow 120ms;
    }
    .ig-card:hover {
      background: var(--white);
      border-color: rgba(var(--rgb-primary), 0.35);
      box-shadow: var(--shadow-sm);
    }
    .ig-card.is-copied {
      border-color: var(--success);
      background: rgba(var(--rgb-success), 0.08);
      box-shadow: var(--shadow-sm);
    }
    .ig-card.is-copied .ig-name::after {
      content: ' ✓';
      color: var(--success);
    }
    .ig-name {
      font-size: 11px;
      line-height: 1.2;
      color: var(--dark-grey);
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ig-empty {
      grid-column: 1 / -1;
      padding: 32px 16px;
      text-align: center;
      color: var(--dark-grey);
      font-size: 13px;
    }
    .ig-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 4px;
      border-top: 1px solid rgba(0,0,0,0.06);
      margin-top: 4px;
    }
    .ig-range {
      font-size: 12px;
      color: var(--dark-grey);
    }
    .ig-pager {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .ig-btn {
      padding: 6px 12px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      color: inherit;
      cursor: pointer;
      font-size: 13px;
    }
    .ig-btn:hover:not(:disabled) {
      border-color: rgba(var(--rgb-primary), 0.35);
      box-shadow: var(--shadow-sm);
    }
    .ig-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .ig-page {
      font-size: 12px;
      color: var(--dark-grey);
      min-width: 96px;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
}
