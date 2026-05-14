import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DsStatusSize = 'small' | 'medium' | 'large';

const SIZES: DsStatusSize[] = ['small', 'medium', 'large'];

const SEMANTIC_STATUSES = [
  'default',
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
  'draft',
  'approved',
];

const PALETTE_TOKENS = [
  '',
  'purple-100', 'purple-300', 'purple-500',
  'coral-100', 'coral-300', 'coral-500',
  'sea-100', 'sea-300', 'sea-500',
  'success-100', 'success-300', 'success-500',
  'error-100', 'error-300', 'error-500',
  'grey-100', 'grey-300', 'grey-500',
];

interface DsStatusArgs {
  status: string;
  palette: string;
  size: DsStatusSize;
  statusIcon: boolean;
  noOpacity: boolean;
  icon: boolean;
  label: string;
}

const meta: Meta<DsStatusArgs> = {
  title: 'Components/Status',
  component: 'ds-status',
  parameters: {
    docs: {
      description: {
        component: [
          'Compact status badge with semantic presets and palette overrides.',
          '',
          '**`status`** picks one of the semantic keys (`default`, `primary`,',
          '`success`, `warning`, `error`, `draft`, `approved`, …) — each maps to',
          'a tinted background and label using the foundation `--rgb-*` tokens.',
          '',
          '**`palette`** overrides the colour while keeping the semantic accessibility',
          'role — pass any palette token (e.g. `purple-500`, `coral-100`).',
          '',
          '**`status-icon`** prepends a coloured dot. **`no-opacity`** switches to a',
          'solid fill with white label (use sparingly for high-emphasis pills).',
        ].join('\n'),
      },
    },
  },
  args: {
    status: 'success',
    palette: '',
    size: 'small',
    statusIcon: false,
    noOpacity: false,
    icon: false,
    label: 'Active',
  },
  argTypes: {
    status: {
      control: 'select',
      options: SEMANTIC_STATUSES,
      description: 'Semantic status key. Drives tint + label colour.',
      table: { defaultValue: { summary: 'default' } },
    },
    palette: {
      control: 'select',
      options: PALETTE_TOKENS,
      description: 'Override colour with any palette token.',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Pill size. Small is the design default (22px height).',
      table: { defaultValue: { summary: 'small' } },
    },
    statusIcon: {
      control: 'boolean',
      description: 'Show a leading coloured dot.',
    },
    noOpacity: {
      control: 'boolean',
      description: 'Solid fill — saturated background + white label.',
    },
    icon: {
      control: 'boolean',
      description: 'Icon-only badge (square aspect).',
    },
    label: {
      control: 'text',
      description: 'Slotted label text.',
      table: { category: 'Slots' },
    },
  },
  render: (args) => html`
    <ds-status
      status=${args.status}
      palette=${ifDefined(args.palette ? args.palette : undefined)}
      size=${args.size}
      ?status-icon=${args.statusIcon}
      ?no-opacity=${args.noOpacity}
      ?icon=${args.icon}
    >
      ${args.label}
    </ds-status>
  `,
};

export default meta;

type Story = StoryObj<DsStatusArgs>;

export const Playground: Story = {};

export const SemanticStatuses: Story = {
  name: 'Semantic statuses',
  parameters: {
    docs: {
      description: {
        story: 'Default tinted variant — soft background with the matching label colour.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      ${SEMANTIC_STATUSES.map(
        (s) => html`<ds-status status=${s}>${s}</ds-status>`,
      )}
    </div>
  `,
};

export const PaletteOverrides: Story = {
  name: 'Palette overrides',
  parameters: {
    docs: {
      description: {
        story:
          'Any foundation palette token can be used via `palette`. Use this for product- or domain-specific pills that don’t fit the semantic axis.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:8px;">
      ${['purple', 'coral', 'sea', 'success', 'error'].map(
        (family) => html`
          <div style="display:flex; gap:8px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${family}</code>
            ${['100', '300', '500'].map(
              (tint) => html`
                <ds-status palette="${family}-${tint}">${family}-${tint}</ds-status>
              `,
            )}
          </div>
        `,
      )}
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
      ${SIZES.map(
        (s) => html`<ds-status status="success" size=${s}>${s}</ds-status>`,
      )}
    </div>
  `,
};

export const WithDot: Story = {
  name: 'With status dot',
  parameters: {
    docs: {
      description: {
        story:
          '`status-icon` adds a leading coloured dot — useful for online / live indicators.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      <ds-status status="success" status-icon>Online</ds-status>
      <ds-status status="warning" status-icon>At risk</ds-status>
      <ds-status status="error" status-icon>Offline</ds-status>
      <ds-status status="draft" status-icon>Draft</ds-status>
    </div>
  `,
};

export const SolidFill: Story = {
  name: 'Solid fill (no-opacity)',
  parameters: {
    docs: {
      description: {
        story:
          '`no-opacity` flips to a saturated fill with a white label. Reserve for high-emphasis states (alerts, hero pills).',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      ${['success', 'warning', 'error', 'primary', 'info'].map(
        (s) => html`<ds-status status=${s} no-opacity>${s}</ds-status>`,
      )}
    </div>
  `,
};
