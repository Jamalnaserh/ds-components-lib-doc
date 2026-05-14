import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { expect, waitFor } from 'storybook/test';

type DsButtonShape = 'default' | 'outline' | 'frame' | 'text';
type DsButtonSize = 'small' | 'medium' | 'large';
type DsButtonStatus = 'default' | 'disabled' | 'loading';
type DsButtonIconMode = '' | 'left' | 'right' | 'only';

const SHAPES: DsButtonShape[] = ['default', 'outline', 'frame', 'text'];
const SIZES: DsButtonSize[] = ['small', 'medium', 'large'];
const STATUSES: DsButtonStatus[] = ['default', 'disabled', 'loading'];

const SEMANTIC_COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'danger'];

const PALETTE_COLORS = [
  '',
  ...SEMANTIC_COLORS,
  'purple-100', 'purple-300', 'purple-500',
  'coral-100', 'coral-300', 'coral-500',
  'moon-100', 'moon-300', 'moon-500',
  'orange-100', 'orange-300', 'orange-500',
  'yellow-100', 'yellow-300', 'yellow-500',
  'sea-100', 'sea-300', 'sea-500',
  'white', 'black', 'dark-grey', 'light-grey',
  'grey-50', 'grey-100', 'grey-200', 'grey-300', 'grey-400', 'grey-500',
];

interface DsButtonArgs {
  label: string;
  color: string;
  shape: DsButtonShape;
  size: DsButtonSize;
  status: DsButtonStatus;
  iconMode: DsButtonIconMode;
  rounded: boolean;
  caret: boolean;
  full: boolean;
  wide: boolean;
  noPadding: boolean;
  noSpace: boolean;
  href: string;
  target: string;
}

const meta: Meta<DsButtonArgs> = {
  title: 'Components/Button',
  component: 'ds-button',
  parameters: {
    docs: {
      description: {
        component: [
          'Versatile button. Renders as a `<button>` by default, or as `<a>` when',
          '`href` is provided. Controls visual style via three axes:',
          '',
          '- **`color`** — semantic (`primary`/`secondary`/`info`/`success`/`warning`/`danger`)',
          '  or any foundation palette token (e.g. `purple-500`, `coral-100`, `sea-300`).',
          '- **`shape`** — `default` (filled), `outline`, `frame`, or `text`.',
          '- **`size`** — `small`, `medium` (default), `large`.',
          '',
          '**Icon slots:** put a `<ds-icon>` in the `prefix` or `suffix` slot and set',
          '`icon="left"`, `icon="right"`, or `icon="true"` for icon-only buttons.',
          '',
          '**State:** `status` accepts `default` / `disabled` / `loading`. Loading',
          'shows a spinner and toggles `aria-busy`. When `href` is set, disabled',
          'is communicated via `tabindex="-1"` and `aria-disabled` instead of the',
          'native `disabled` attribute.',
        ].join('\n'),
      },
    },
  },
  args: {
    label: 'Button',
    color: 'primary',
    shape: 'default',
    size: 'medium',
    status: 'default',
    iconMode: '',
    rounded: false,
    caret: false,
    full: false,
    wide: false,
    noPadding: false,
    noSpace: false,
    href: '',
    target: '',
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    color: {
      control: 'select',
      options: PALETTE_COLORS,
      description: 'Semantic colour or foundation palette token.',
      table: { defaultValue: { summary: 'primary' } },
    },
    shape: {
      control: 'select',
      options: SHAPES,
      description: 'Visual style. `default` = filled.',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Button size. Defaults to `medium`.',
      table: { defaultValue: { summary: 'medium' } },
    },
    status: {
      control: 'select',
      options: STATUSES,
      description: 'Lifecycle state. `loading` shows a spinner; `disabled` blocks interaction.',
      table: { defaultValue: { summary: 'default' } },
    },
    iconMode: {
      control: 'select',
      options: ['', 'left', 'right', 'only'],
      description:
        '`left`/`right` show an icon in the matching slot; `only` renders an icon-only button (no label).',
    },
    rounded: { control: 'boolean', description: 'Pill shape.' },
    caret: { control: 'boolean', description: 'Trailing dropdown caret.' },
    full: { control: 'boolean', description: 'Full container width (100%).' },
    wide: { control: 'boolean', description: 'Extra horizontal padding.' },
    noPadding: { control: 'boolean', description: 'Remove padding (keeps width/height).' },
    noSpace: { control: 'boolean', description: 'Remove padding and shrink to content.' },
    href: {
      control: 'text',
      description: 'Setting a URL renders the button as `<a>`.',
      table: { category: 'Link' },
    },
    target: {
      control: 'select',
      options: ['', '_self', '_blank', '_parent', '_top'],
      description: 'Link target. Only applies when `href` is set.',
      table: { category: 'Link' },
    },
  },
  render: (args) => {
    const iconOnly = args.iconMode === 'only';
    const iconLeft = args.iconMode === 'left';
    const iconRight = args.iconMode === 'right';
    const iconProp: boolean | string = iconOnly
      ? true
      : iconLeft
      ? 'left'
      : iconRight
      ? 'right'
      : false;

    return html`
      <ds-button
        color=${ifDefined(args.color ? args.color : undefined)}
        shape=${args.shape}
        size=${args.size}
        status=${args.status}
        icon=${ifDefined(iconProp ? String(iconProp) : undefined)}
        ?rounded=${args.rounded}
        ?caret=${args.caret}
        ?full=${args.full}
        ?wide=${args.wide}
        ?no-padding=${args.noPadding}
        ?no-space=${args.noSpace}
        href=${ifDefined(args.href ? args.href : undefined)}
        target=${ifDefined(args.target ? args.target : undefined)}
        aria-label=${ifDefined(iconOnly ? args.label : undefined)}
      >
        ${iconLeft
          ? html`<ds-icon slot="prefix" icon="check" size="18"></ds-icon>`
          : null}
        ${iconOnly
          ? html`<ds-icon icon="check" size="18"></ds-icon>`
          : html`${args.label}`}
        ${iconRight
          ? html`<ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>`
          : null}
      </ds-button>
    `;
  },
};

export default meta;

type Story = StoryObj<DsButtonArgs>;

export const Playground: Story = {};

export const SemanticColors: Story = {
  name: 'Semantic colors',
  parameters: {
    docs: {
      description: {
        story: 'Default `color` keys map to the semantic tokens defined in the foundations colours page.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${SEMANTIC_COLORS.map(
        (c) => html`<ds-button color=${c}>${c}</ds-button>`,
      )}
    </div>
  `,
};

export const PaletteColors: Story = {
  name: 'Palette colors',
  parameters: {
    docs: {
      description: {
        story:
          'Any foundation palette token can be used as `color`. Tints map directly to the colours page swatches.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:8px;">
      ${['purple', 'coral', 'moon', 'orange', 'yellow', 'sea'].map(
        (family) => html`
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${family}</code>
            ${['100', '300', '500'].map(
              (tint) => html`
                <ds-button color="${family}-${tint}" size="small">${family}-${tint}</ds-button>
              `,
            )}
          </div>
        `,
      )}
    </div>
  `,
};

export const Shapes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`default` filled, `outline` stroked, `frame` thicker bordered, `text` link-like with no chrome.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${SHAPES.map(
        (s) => html`<ds-button color="primary" shape=${s}>${s}</ds-button>`,
      )}
    </div>
  `,
};

export const AllSizes: Story = {
  name: 'All sizes',
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${SIZES.map((s) => html`<ds-button color="primary" size=${s}>${s}</ds-button>`)}
    </div>
  `,
};

export const WithIcons: Story = {
  name: 'With icons',
  parameters: {
    docs: {
      description: {
        story:
          'Slot `<ds-icon>` into `prefix` / `suffix` and set `icon="left|right"`. For icon-only buttons set `icon="true"` and pass an `aria-label`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" icon="left">
        <ds-icon slot="prefix" icon="check" size="18"></ds-icon>
        Approve
      </ds-button>
      <ds-button color="primary" shape="outline" icon="right">
        Continue
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button color="primary" icon="true" aria-label="Confirm">
        <ds-icon icon="check" size="18"></ds-icon>
      </ds-button>
      <ds-button color="danger" shape="outline" icon="true" aria-label="Delete">
        <ds-icon icon="trash-o" size="18"></ds-icon>
      </ds-button>
    </div>
  `,
};

export const StatusStates: Story = {
  name: 'Status states',
  parameters: {
    docs: {
      description: {
        story:
          '`status="loading"` swaps the prefix area for a spinner and sets `aria-busy="true"`. `status="disabled"` blocks pointer events and emits `aria-disabled`.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      ${(['default', 'outline', 'text'] as DsButtonShape[]).map(
        (shape) => html`
          <div style="display:flex; gap:12px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${shape}</code>
            ${STATUSES.map(
              (status) => html`
                <ds-button color="primary" shape=${shape} status=${status}>${status}</ds-button>
              `,
            )}
          </div>
        `,
      )}
    </div>
  `,
};

export const AsLink: Story = {
  name: 'As link',
  parameters: {
    docs: {
      description: {
        story:
          'When `href` is set, the component renders `<a>` instead of `<button>`. `target="_blank"` automatically gets `rel="noopener noreferrer"`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button href="/local" color="primary">Internal link</ds-button>
      <ds-button
        href="https://example.com"
        target="_blank"
        color="primary"
        shape="outline"
        icon="right"
      >
        External
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button href="/file.pdf" download="report.pdf" color="primary" shape="text">
        Download report
      </ds-button>
    </div>
  `,
};

export const WidthModifiers: Story = {
  name: 'Width modifiers',
  parameters: {
    docs: {
      description: {
        story:
          '`full` stretches to the parent. `wide` adds extra horizontal padding. `no-padding` strips padding but keeps the size; `no-space` strips both padding and size — useful for inline icon-only triggers.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px; max-width: 480px;">
      <ds-button color="primary" full>full</ds-button>
      <ds-button color="primary" shape="outline" wide>wide</ds-button>
      <div style="display:flex; gap:12px; align-items:center;">
        <ds-button color="primary" shape="text" no-padding>no-padding</ds-button>
        <ds-button
          color="primary"
          shape="text"
          no-space
          icon="true"
          role="button"
          aria-label="More"
        >
          <ds-icon icon="more" size="20"></ds-icon>
        </ds-button>
      </div>
    </div>
  `,
};

export const RoundedAndCaret: Story = {
  name: 'Rounded + caret',
  parameters: {
    docs: {
      description: {
        story:
          '`rounded` makes the button pill-shaped. `caret` appends a dropdown indicator — combine with `icon="left"` for split-button-style triggers.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" rounded>Rounded</ds-button>
      <ds-button color="primary" shape="outline" caret>Dropdown</ds-button>
      <ds-button color="primary" rounded caret icon="left">
        <ds-icon slot="prefix" icon="filter" size="18"></ds-icon>
        Filter
      </ds-button>
    </div>
  `,
};

export const PlayDisabled: Story = {
  name: 'Interaction: disabled blocks click',
  args: {
    label: 'Submit',
    color: 'primary',
    status: 'disabled',
    iconMode: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates Storybook’s interaction tests via a `play` function. Verifies that the host reflects `status="disabled"` and that the inner `<button>` inside the shadow root is natively disabled. Run via the **Interactions** panel or `npm run test` (Vitest addon).',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    await customElements.whenDefined('ds-button');

    const host = canvasElement.querySelector('ds-button') as HTMLElement | null;

    await step('Host reflects status="disabled"', async () => {
      await expect(host).toBeTruthy();
      await expect(host).toHaveAttribute('status', 'disabled');
    });

    await step('Inner <button> is natively disabled', async () => {
      const inner = await waitFor(
        () => {
          const el = host?.shadowRoot?.querySelector('button');
          if (!el) throw new Error('Inner <button> not rendered yet');
          return el;
        },
        { timeout: 2000 },
      );
      await expect(inner).toBeDisabled();
      await expect(inner).toHaveAttribute('aria-disabled', 'true');
    });
  },
};
