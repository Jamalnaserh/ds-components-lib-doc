import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface DsFlagArgs {
  code: string;
  size: number;
  rounded: boolean;
  strict: boolean;
  alt: string;
  basePath: string;
}

const COMMON = ['SA', 'AE', 'QA', 'BH', 'KW', 'OM', 'EG', 'JO', 'IQ', 'US', 'GB', 'FR', 'DE', 'JP'];

const meta: Meta<DsFlagArgs> = {
  title: 'Components/Flag',
  component: 'ds-flag',
  parameters: {
    docs: {
      description: {
        component: [
          'Country / region flag rendered as a PNG from `assets/flag/`.',
          '',
          'Pass an ISO-style **`code`** (e.g. `SA`, `AE`, `GB-2`). In non-strict',
          'mode the component will try numbered variants such as `2 - SA.png`',
          'or `4 QA.png` before giving up — useful when shipping a heterogeneous',
          'set of source files. **`strict`** restricts the lookup to',
          '`{CODE}.png` only.',
          '',
          '**`base-path`** overrides the default asset directory. Storybook',
          'sets a global base path in `preview.ts`, so you usually don’t need',
          'to provide it.',
        ].join('\n'),
      },
    },
  },
  args: {
    code: 'SA',
    size: 28,
    rounded: true,
    strict: false,
    alt: '',
    basePath: '',
  },
  argTypes: {
    code: { control: 'text', description: 'Region code (e.g. `SA`, `AE`, `GB-2`).' },
    size: {
      control: { type: 'number', min: 12, max: 96, step: 2 },
      description: 'Pixel size — square (width = height).',
      table: { defaultValue: { summary: '24' } },
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded (circle) vs rectangle. Defaults to rounded.',
      table: { defaultValue: { summary: 'true' } },
    },
    strict: {
      control: 'boolean',
      description: 'Only try `{CODE}.png` (no numbered fallbacks).',
      table: { defaultValue: { summary: 'false' } },
    },
    alt: {
      control: 'text',
      description: 'Override the auto-generated `alt` text (`"Flag {CODE}"`).',
    },
    basePath: {
      control: 'text',
      description:
        'Override the asset base path. Empty uses the global path set in `preview.ts`.',
    },
  },
  render: (args) => html`
    <ds-flag
      code=${args.code}
      size=${args.size}
      ?rounded=${args.rounded}
      ?strict=${args.strict}
      alt=${ifDefined(args.alt ? args.alt : undefined)}
      base-path=${ifDefined(args.basePath ? args.basePath : undefined)}
    ></ds-flag>
  `,
};

export default meta;

type Story = StoryObj<DsFlagArgs>;

export const Playground: Story = {};

export const CommonFlags: Story = {
  name: 'Common flags',
  parameters: {
    docs: {
      description: {
        story: 'A starter set of regional / international flags.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
      ${COMMON.map(
        (c) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code=${c} size="32"></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">${c}</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const SizeScale: Story = {
  name: 'Size scale',
  parameters: {
    docs: {
      description: {
        story:
          'Pass `size` as a number (px). The host is always square; the inner image fills the host.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      ${[16, 20, 24, 32, 40, 56].map(
        (s) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code="SA" size=${s}></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">${s}px</code>
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
          '`rounded` toggles between a circle clip and a rounded rectangle.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rounded</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded="false"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rectangle</code>
      </div>
    </div>
  `,
};

export const StrictMode: Story = {
  name: 'Strict lookup',
  parameters: {
    docs: {
      description: {
        story:
          '`strict` only tries the exact `{CODE}.png` filename. If your asset folder has numbered variants only, leave `strict` off so the component can fall back.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40" strict></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">strict</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">with fallback</code>
      </div>
    </div>
  `,
};

export const UnknownCode: Story = {
  name: 'Unknown code',
  parameters: {
    docs: {
      description: {
        story:
          'When `code` is empty or every candidate fails to load, a neutral placeholder is rendered with `aria-hidden`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-flag code="" size="40"></ds-flag>
      <ds-flag code="ZZ" size="40" strict></ds-flag>
    </div>
  `,
};
