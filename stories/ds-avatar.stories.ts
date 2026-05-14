import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DsAvatarSize = 'xl' | 'large' | 'medium' | 'small' | 'x-small' | 'xx-small';
type DsAvatarShape = 'circle' | 'square' | 'rounded';

const SIZES: DsAvatarSize[] = ['xl', 'large', 'medium', 'small', 'x-small', 'xx-small'];
const SHAPES: DsAvatarShape[] = ['circle', 'square', 'rounded'];

interface DsAvatarArgs {
  label: string;
  image: string;
  size: DsAvatarSize;
  shape: DsAvatarShape;
}

const meta: Meta<DsAvatarArgs> = {
  title: 'Components/Avatar',
  component: 'ds-avatar',
  parameters: {
    docs: {
      description: {
        component: [
          'User identity surface. Renders an image when `image` resolves; otherwise',
          'falls back to initials extracted from `label` (two words → first letter of',
          'each; one word → first two letters). If the image fails to load and no',
          'label is provided, a default user illustration is shown.',
          '',
          'Sizes follow the design spec: **xl** ≈ 52px, **large** 40px, **medium**',
          '32px, **small** 24px, with **x-small** and **xx-small** for dense UIs.',
        ].join('\n'),
      },
    },
  },
  args: {
    label: 'Aisha Al Qahtani',
    image: '',
    size: 'medium',
    shape: 'circle',
  },
  argTypes: {
    label: {
      control: 'text',
      description:
        'Full name. Drives the `aria-label`, the `alt` text on the image, and the initials when no image is set.',
    },
    image: {
      control: 'text',
      description: 'Image URL. When empty, initials from `label` are shown instead.',
    },
    size: {
      control: 'select',
      options: SIZES,
      description: 'Visual size. Defaults to `medium` (32px).',
      table: { defaultValue: { summary: 'medium' } },
    },
    shape: {
      control: 'select',
      options: SHAPES,
      description: 'Frame shape — `circle` (default), `rounded`, or `square`.',
      table: { defaultValue: { summary: 'circle' } },
    },
  },
  render: (args) => html`
    <ds-avatar
      label=${ifDefined(args.label ? args.label : undefined)}
      image=${ifDefined(args.image ? args.image : undefined)}
      size=${args.size}
      shape=${args.shape}
    ></ds-avatar>
  `,
};

export default meta;

type Story = StoryObj<DsAvatarArgs>;

export const Playground: Story = {};

export const AllSizes: Story = {
  name: 'All sizes',
  parameters: {
    docs: {
      description: {
        story:
          'Reference scale per the design spec. Use **xl/large/medium/small** for surfaces and **x-small/xx-small** for dense lists and inline mentions.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      ${SIZES.map(
        (size) => html`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="DS" size=${size}></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">${size}</code>
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
          '`circle` is the default and the most common. `rounded` is a softened square for compact list rows; `square` for brand or product badges.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      ${SHAPES.map(
        (shape) => html`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="Aisha Al Qahtani" shape=${shape} size="large"></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">${shape}</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const InitialsFallback: Story = {
  name: 'Initials fallback',
  parameters: {
    docs: {
      description: {
        story:
          'When no `image` is set, the avatar derives initials from `label`. Two words → first letter of each; one word → first two letters; empty label → default user illustration.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar label="Aisha Al Qahtani" size="large"></ds-avatar>
      <ds-avatar label="Noura" size="large"></ds-avatar>
      <ds-avatar label="" size="large"></ds-avatar>
    </div>
  `,
};

export const WithImage: Story = {
  name: 'With image',
  parameters: {
    docs: {
      description: {
        story:
          'When `image` is provided, the photo is shown. If the URL fails to load, the avatar falls back to initials (or to the default user illustration if there are none).',
      },
    },
  },
  render: () => html`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar
        label="Noura Sami"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=60"
        size="large"
      ></ds-avatar>
      <ds-avatar
        label="Invalid image → initials"
        image="/this-does-not-exist.png"
        size="large"
      ></ds-avatar>
      <ds-avatar label="" image="/this-does-not-exist.png" size="large"></ds-avatar>
    </div>
  `,
};
