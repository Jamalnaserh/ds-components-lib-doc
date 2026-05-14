import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

type DsAlertType = 'info' | 'success' | 'warning' | 'danger';

const TYPES: DsAlertType[] = ['info', 'success', 'warning', 'danger'];

/**
 * Palette tokens exposed by `src/assets/style/foundations/_colors.scss`. Curated
 * subset for the picker so the dropdown stays browsable; the full list lives
 * on the docs site colours page.
 */
const COLOR_TOKENS = [
  '',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'purple-100',
  'purple-300',
  'purple-500',
  'coral-100',
  'coral-300',
  'coral-500',
  'sea-100',
  'sea-300',
  'sea-500',
  'success-100',
  'success-300',
  'success-500',
  'error-100',
  'error-300',
  'error-500',
];

interface DsAlertArgs {
  type: DsAlertType;
  icon: string;
  color: string;
  noPadding: boolean;
  noBackground: boolean;
  noBorder: boolean;
  content: string;
}

const meta: Meta<DsAlertArgs> = {
  title: 'Components/Alert',
  component: 'ds-alert',
  parameters: {
    docs: {
      description: {
        component: [
          'Inline notification with an optional leading icon (`<ds-icon>`).',
          '',
          'Use `type` — **success**, **info**, **warning**, **danger** — to drive the',
          'default tint/border/icon colours and the live‑region `role`',
          '(`alert` for warning/danger, `status` otherwise).',
          '',
          'Use `color` with any foundation palette token (same keys as the colours',
          'page, e.g. `purple-500`, `coral-100`, `primary`) to override visuals',
          'while keeping `type` for accessibility.',
          '',
          '**Modifiers:** `no-padding` removes inner padding and gap;',
          '`no-background` uses a transparent fill; `no-border` removes the stroke.',
          'Combine `no-background` and `no-border` for borderless, text-only banners.',
        ].join('\n'),
      },
    },
  },
  args: {
    type: 'warning',
    icon: 'info',
    color: '',
    noPadding: false,
    noBackground: false,
    noBorder: false,
    content: 'This is an alert message.',
  },
  argTypes: {
    type: {
      control: 'select',
      options: TYPES,
      description:
        'Semantic category. Drives default palette and the live-region role (`alert` for warning/danger, `status` otherwise).',
      table: { defaultValue: { summary: 'warning' } },
    },
    icon: {
      control: 'text',
      description: 'Icon id passed to `<ds-icon>`. Leave empty to render text only.',
    },
    color: {
      control: 'select',
      options: COLOR_TOKENS,
      description:
        'Foundation palette token (e.g. `purple-500`, `coral-100`). Overrides background / border / icon colour from `type`.',
    },
    noPadding: {
      control: 'boolean',
      description: 'Remove inner padding (gap between icon and body is preserved).',
      table: { defaultValue: { summary: 'false' } },
    },
    noBackground: {
      control: 'boolean',
      description: 'Transparent background. Border remains unless `noBorder` is also set.',
      table: { defaultValue: { summary: 'false' } },
    },
    noBorder: {
      control: 'boolean',
      description: 'Remove the border. Pair with `noBackground` for text-only banners.',
      table: { defaultValue: { summary: 'false' } },
    },
    content: {
      control: 'text',
      description: 'Slotted body content.',
      table: { category: 'Slots' },
    },
  },
  // Use Lit's property bindings (`.prop=`) instead of attribute bindings
  // (`attr=`). For Stencil web components, properties are the source of
  // truth; reflected attributes are derived. Property bindings invoke the
  // JS setter directly, guaranteeing each Storybook control change
  // triggers a re-render — and assigning `undefined` reliably removes the
  // reflected attribute (important for `color` so the
  // `:host(:not([color]))` palette rules apply when no token is picked).
  render: (args) => html`
    <ds-alert
      .type=${args.type}
      .icon=${args.icon || undefined}
      .color=${args.color || undefined}
      .noPadding=${args.noPadding}
      .noBackground=${args.noBackground}
      .noBorder=${args.noBorder}
    >
      ${args.content}
    </ds-alert>
  `,
};

export default meta;

type Story = StoryObj<DsAlertArgs>;

export const Playground: Story = {};

export const AllTypes: Story = {
  name: 'All types',
  parameters: {
    docs: {
      description: {
        story:
          'Default palette per semantic `type`. Warning and danger render with `role="alert"`; info and success render with `role="status"`.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      <ds-alert type="info" icon="info">Info — neutral, informational message.</ds-alert>
      <ds-alert type="success" icon="check-circle">Success — operation completed.</ds-alert>
      <ds-alert type="warning" icon="warning">Warning — review before continuing.</ds-alert>
      <ds-alert type="danger" icon="error">Danger — destructive or blocking issue.</ds-alert>
    </div>
  `,
};

export const WithoutIcon: Story = {
  name: 'Without icon',
  parameters: {
    docs: {
      description: {
        story: 'Omit `icon` to render a text-only alert. Body slot fills the full width.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      <ds-alert type="info">Plain info alert without an icon.</ds-alert>
      <ds-alert type="warning">Plain warning alert without an icon.</ds-alert>
    </div>
  `,
};

export const ColorOverrides: Story = {
  name: 'Color overrides',
  parameters: {
    docs: {
      description: {
        story:
          '`color` accepts any foundation palette token. The semantic `role` is still determined by `type`, so accessibility is preserved.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      <ds-alert type="info" icon="info" color="purple-500">
        <strong>color="purple-500"</strong> — brand accent over an informational alert.
      </ds-alert>
      <ds-alert type="success" icon="check-circle" color="sea-300">
        <strong>color="sea-300"</strong> — calm success surface.
      </ds-alert>
      <ds-alert type="warning" icon="warning" color="coral-100">
        <strong>color="coral-100"</strong> — softened warning tint.
      </ds-alert>
      <ds-alert type="danger" icon="error" color="error-500">
        <strong>color="error-500"</strong> — saturated danger surface.
      </ds-alert>
    </div>
  `,
};

export const Modifiers: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Compact and ghost variants. `no-padding` removes inner padding (gap is preserved). `no-background` makes the surface transparent. `no-border` removes the stroke.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      <ds-alert type="info" icon="info" no-padding>
        <code>no-padding</code> — compact, flush against the parent.
      </ds-alert>
      <ds-alert type="warning" icon="warning" no-background>
        <code>no-background</code> — transparent fill, border kept.
      </ds-alert>
      <ds-alert type="success" icon="check-circle" no-border>
        <code>no-border</code> — solid fill, no stroke.
      </ds-alert>
      <ds-alert type="danger" icon="error" no-background no-border>
        <code>no-background no-border</code> — text-only banner.
      </ds-alert>
    </div>
  `,
};

export const Borderless: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Common combination for inline form messages: borderless, transparent, optional `no-padding` for dense layouts.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:8px; padding:16px; background: var(--white); border-radius:12px;">
      <label style="font-weight:600;">Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        style="padding:8px 12px; border-radius:8px; border:1px solid var(--light-grey);"
      />
      <ds-alert type="danger" icon="error" no-background no-border no-padding>
        Enter a valid email address.
      </ds-alert>
    </div>
  `,
};

export const RichContent: Story = {
  name: 'Rich content',
  parameters: {
    docs: {
      description: {
        story:
          'The default slot accepts arbitrary markup — headings, links, and inline actions all work.',
      },
    },
  },
  render: () => html`
    <ds-alert type="warning" icon="warning">
      <div style="display:grid; gap:6px;">
        <strong>Pending approval</strong>
        <span>
          Your request is awaiting review.
          <a href="#" style="color: inherit; text-decoration: underline;">View status</a>
          or
          <a href="#" style="color: inherit; text-decoration: underline;">cancel request</a>.
        </span>
      </div>
    </ds-alert>
  `,
};
