import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type AvatarSize = 'xl' | 'large' | 'medium' | 'small' | 'x-small' | 'xx-small';
type AvatarShape = 'circle' | 'square' | 'rounded';

const SIZES: AvatarSize[] = ['xl', 'large', 'medium', 'small', 'x-small', 'xx-small'];
const SHAPES: AvatarShape[] = ['circle', 'square', 'rounded'];

interface User {
  id?: number;
  name: string;
  title: string;
  image?: string;
}

const SAMPLE_USER: User = {
  id: 1,
  name: 'Aisha Al Qahtani',
  title: 'Operations manager',
  image:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=60',
};

interface DsUserCardArgs {
  userInfo: string;
  imageSize: AvatarSize;
  imageShape: AvatarShape;
  body: string;
}

const meta: Meta<DsUserCardArgs> = {
  title: 'Components/User Card',
  component: 'ds-user-card',
  parameters: {
    docs: {
      description: {
        component: [
          'Identity summary — avatar, name, title, and an optional content slot',
          'for supplementary details (badges, contact lines, actions).',
          '',
          '**`user-info`** accepts a `{ name, title, image? }` object (JSX) or its',
          'JSON-stringified form (HTML). Invalid JSON renders nothing — the host',
          'stays empty.',
          '',
          'The default slot is rendered below the name + title; use the **`close`**',
          'slot for a dismiss control on the right side.',
        ].join('\n'),
      },
    },
  },
  args: {
    userInfo: JSON.stringify(SAMPLE_USER),
    imageSize: 'medium',
    imageShape: 'circle',
    body: '',
  },
  argTypes: {
    userInfo: {
      control: 'text',
      description: 'JSON-encoded `{ name, title, image? }`.',
    },
    imageSize: {
      control: 'select',
      options: SIZES,
      description: 'Avatar size. Defaults to `medium`.',
      table: { defaultValue: { summary: 'medium' } },
    },
    imageShape: {
      control: 'select',
      options: SHAPES,
      description: 'Avatar shape.',
      table: { defaultValue: { summary: 'circle' } },
    },
    body: {
      control: 'text',
      description: 'Optional supplementary content (rendered under name + title).',
      table: { category: 'Slots' },
    },
  },
  render: (args) => html`
    <ds-user-card
      user-info=${args.userInfo}
      image-size=${args.imageSize}
      image-shape=${args.imageShape}
    >
      ${args.body ? html`<div>${args.body}</div>` : null}
    </ds-user-card>
  `,
};

export default meta;

type Story = StoryObj<DsUserCardArgs>;

export const Playground: Story = {};

export const AvatarSizes: Story = {
  name: 'Avatar sizes',
  parameters: {
    docs: {
      description: {
        story: 'The avatar scales independently from the typography.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      ${SIZES.map(
        (s) => html`
          <ds-user-card user-info=${JSON.stringify(SAMPLE_USER)} image-size=${s}></ds-user-card>
        `,
      )}
    </div>
  `,
};

export const InitialsFallback: Story = {
  name: 'Without photo (initials)',
  parameters: {
    docs: {
      description: {
        story: 'When `image` is omitted, the avatar derives initials from the user name.',
      },
    },
  },
  render: () => html`
    <ds-user-card
      user-info=${JSON.stringify({ name: 'Khalid Al Mutairi', title: 'Site supervisor' })}
    ></ds-user-card>
  `,
};

export const WithBody: Story = {
  name: 'With supplementary content',
  parameters: {
    docs: {
      description: {
        story: 'Drop badges, contact rows, or actions into the default slot.',
      },
    },
  },
  render: () => html`
    <ds-user-card user-info=${JSON.stringify(SAMPLE_USER)}>
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top: 6px;">
        <ds-status status="success" status-icon size="small">Online</ds-status>
        <ds-status palette="purple-100" size="small">Operations</ds-status>
      </div>
    </ds-user-card>
  `,
};

export const WithCloseSlot: Story = {
  name: 'With close control',
  parameters: {
    docs: {
      description: {
        story:
          'Use the `close` slot to add a dismiss control aligned to the right of the card — typical for chips, mentions, and assignment pickers.',
      },
    },
  },
  render: () => html`
    <ds-user-card user-info=${JSON.stringify(SAMPLE_USER)} image-size="small">
      <ds-button
        slot="close"
        shape="text"
        color="dark-grey"
        size="small"
        no-space
        icon="true"
        aria-label="Remove user"
      >
        <ds-icon icon="close" size="18"></ds-icon>
      </ds-button>
    </ds-user-card>
  `,
};

export const InvalidJson: Story = {
  name: 'Invalid JSON',
  parameters: {
    docs: {
      description: {
        story: 'If `user-info` is not valid JSON, the host stays empty rather than throwing.',
      },
    },
  },
  render: () => html`<ds-user-card user-info="[this is not json]"></ds-user-card>`,
};
