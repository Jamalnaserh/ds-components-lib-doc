import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface DsLogoArgs {
  logo: string;
  size: number;
  strict: boolean;
  alt: string;
  basePath: string;
}

const COMMON_LOGOS = [
  'stc-logo',
  'stc-pay',
  'stc-solutions',
  'channels',
  'intigral',
  'sirar',
];

const meta: Meta<DsLogoArgs> = {
  title: 'Components/Logo',
  component: 'ds-logo',
  parameters: {
    docs: {
      description: {
        component: [
          'Brand / partner logo loaded as a PNG from the configured logo asset',
          'directory (default `assets/logo/`).',
          '',
          'The **`logo`** prop is the file stem (slug) — kebab-case `stc-logo.png`',
          'becomes `logo="stc-logo"`. In non-strict mode the component also tries',
          'the space-separated and title-case variants (`stc logo.png`,',
          '`Stc Logo.png`) for backwards compatibility.',
          '',
          'Set **`base-path`** to override the global directory configured in',
          '`preview.ts` (or via `DsLogo.setBasePath()` in apps).',
        ].join('\n'),
      },
    },
  },
  args: {
    logo: 'stc-logo',
    size: 56,
    strict: false,
    alt: '',
    basePath: '',
  },
  argTypes: {
    logo: { control: 'text', description: 'File stem (e.g. `stc-logo`).' },
    size: {
      control: { type: 'number', min: 24, max: 160, step: 4 },
      description: 'Logo width in px. Height is intrinsic.',
      table: { defaultValue: { summary: '48' } },
    },
    strict: {
      control: 'boolean',
      description: 'Only try the kebab-case and space-separated filenames (no title-case fallback).',
    },
    alt: {
      control: 'text',
      description: 'Override the auto-generated `alt` text (`"{logo} logo"`).',
    },
    basePath: {
      control: 'text',
      description: 'Override the asset base path. Empty uses the global path from `preview.ts`.',
    },
  },
  render: (args) => html`
    <ds-logo
      logo=${args.logo}
      size=${args.size}
      ?strict=${args.strict}
      alt=${ifDefined(args.alt ? args.alt : undefined)}
      base-path=${ifDefined(args.basePath ? args.basePath : undefined)}
    ></ds-logo>
  `,
};

export default meta;

type Story = StoryObj<DsLogoArgs>;

export const Playground: Story = {};

export const BrandLineup: Story = {
  name: 'Brand lineup',
  parameters: {
    docs: {
      description: {
        story: 'A selection of brand and partner logos available in the default asset set.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:center;">
      ${COMMON_LOGOS.map(
        (slug) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
            <ds-logo logo=${slug} size="64"></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">${slug}</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const SizeScale: Story = {
  name: 'Size scale',
  render: () => html`
    <div style="display:flex; gap:24px; align-items:end; flex-wrap:wrap;">
      ${[32, 48, 64, 96, 128].map(
        (s) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-logo logo="stc-logo" size=${s}></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">${s}px</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const UnknownLogo: Story = {
  name: 'Unknown slug',
  parameters: {
    docs: {
      description: {
        story:
          'When `logo` is empty or every candidate fails to load, a neutral fallback is rendered with `aria-hidden`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-logo size="64"></ds-logo>
      <ds-logo logo="does-not-exist" size="64" strict></ds-logo>
    </div>
  `,
};
