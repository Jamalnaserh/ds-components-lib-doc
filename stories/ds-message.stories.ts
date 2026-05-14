import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DsMessageType = 'general' | 'emptyCard' | 'emptyList' | 'notAuthorized' | 'noConnection';

const TYPES_KEBAB = ['general', 'empty-card', 'empty-list', 'not-authorized', 'no-connection'];

interface DsMessageArgs {
  type: string;
  label: string;
  image: string;
  body: string;
}

const meta: Meta<DsMessageArgs> = {
  title: 'Components/Message',
  component: 'ds-message',
  parameters: {
    docs: {
      description: {
        component: [
          'Empty / error / unauthorised state with an illustration, a headline,',
          'and a slot for follow-up actions.',
          '',
          '**`type`** picks the built-in illustration when **`image`** is not',
          'provided (or when an external URL fails to load):',
          '',
          '| `type`          | Use for                            |',
          '| --------------- | ---------------------------------- |',
          '| `general`       | Generic empty state (default).     |',
          '| `empty-card`    | A card region with no data yet.    |',
          '| `empty-list`    | A list / table with no rows.       |',
          '| `not-authorized`| Permission-denied screens.         |',
          '| `no-connection` | Offline / network failure.         |',
          '',
          'Pass actions (buttons, links) into the default slot — they render',
          'directly under the headline.',
        ].join('\n'),
      },
    },
  },
  args: {
    type: 'general',
    label: 'Nothing to show yet',
    image: '',
    body: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: TYPES_KEBAB,
      description: 'Illustration preset (used when `image` is empty or fails to load).',
      table: { defaultValue: { summary: 'general' } },
    },
    label: { control: 'text', description: 'Headline shown under the illustration.' },
    image: {
      control: 'text',
      description: 'Optional image URL. Falls back to the `type` illustration on load error.',
    },
    body: {
      control: 'text',
      description: 'Slotted content under the headline (typically actions).',
      table: { category: 'Slots' },
    },
  },
  render: (args) => html`
    <div style="max-width: 420px;">
      <ds-message
        type=${args.type}
        label=${ifDefined(args.label ? args.label : undefined)}
        image=${ifDefined(args.image ? args.image : undefined)}
      >
        ${args.body ? html`<div>${args.body}</div>` : null}
      </ds-message>
    </div>
  `,
};

export default meta;

type Story = StoryObj<DsMessageArgs>;

export const Playground: Story = {};

export const AllTypes: Story = {
  name: 'All illustration types',
  parameters: {
    docs: {
      description: {
        story:
          'Default illustrations per `type`. Pair them with descriptive headlines and a single primary action.',
      },
    },
  },
  render: () => html`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;"
    >
      <ds-message type="general" label="Nothing to show yet"></ds-message>
      <ds-message type="empty-card" label="No items in this card"></ds-message>
      <ds-message type="empty-list" label="No requests found"></ds-message>
      <ds-message
        type="not-authorized"
        label="You don't have access to this page"
      ></ds-message>
      <ds-message type="no-connection" label="You're offline"></ds-message>
    </div>
  `,
};

export const WithActions: Story = {
  name: 'With actions',
  parameters: {
    docs: {
      description: {
        story: 'Drop one or two action buttons into the default slot. Keep copy short.',
      },
    },
  },
  render: () => html`
    <div style="max-width: 380px;">
      <ds-message type="empty-list" label="No requests found">
        <div style="display:flex; gap:8px; justify-content:center;">
          <ds-button color="primary">Create request</ds-button>
          <ds-button color="primary" shape="text">Clear filters</ds-button>
        </div>
      </ds-message>
    </div>
  `,
};

export const CustomImage: Story = {
  name: 'Custom image',
  parameters: {
    docs: {
      description: {
        story:
          'Provide an external `image`. If the URL fails to load, the component falls back to the illustration for `type`.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <ds-message
        type="general"
        image="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=60"
        label="Custom hero image"
      ></ds-message>
      <ds-message
        type="empty-card"
        image="/does-not-exist.png"
        label="Falls back to type illustration"
      ></ds-message>
    </div>
  `,
};
