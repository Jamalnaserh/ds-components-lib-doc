import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const STATUSES = ['', 'active', 'pending', 'blocked', 'error', 'draft', 'inactive'];

interface DsCardArgs {
  cardStatus: string;
  withImage: boolean;
  withHeader: boolean;
  withFooter: boolean;
}

const meta: Meta<DsCardArgs> = {
  title: 'Components/Card',
  component: 'ds-card',
  parameters: {
    docs: {
      description: {
        component: [
          'Layout container with four optional regions:',
          '',
          '- **`image`** — hero or media at the top.',
          '- **`header`** — title + actions row.',
          '- **default** — main content.',
          '- **`footer`** — footer actions or metadata.',
          '',
          '`card-status` sets a left status strip and a `card--status-<value>` root',
          'class so apps can theme the surface per state (`active`, `pending`,',
          '`blocked`, `error`, `draft`, `inactive`).',
        ].join('\n'),
      },
    },
  },
  args: {
    cardStatus: 'active',
    withImage: true,
    withHeader: true,
    withFooter: true,
  },
  argTypes: {
    cardStatus: {
      control: 'select',
      options: STATUSES,
      description: 'Status strip + root modifier class.',
    },
    withImage: { control: 'boolean', description: 'Render the `image` slot.' },
    withHeader: { control: 'boolean', description: 'Render the `header` slot.' },
    withFooter: { control: 'boolean', description: 'Render the `footer` slot.' },
  },
  render: (args) => html`
    <ds-card
      card-status=${ifDefined(args.cardStatus ? args.cardStatus : undefined)}
      style="--card-image-height: 160px; --card-padding: 16px; max-width: 360px;"
    >
      ${args.withImage
        ? html`<img
            slot="image"
            alt="Team collaboration"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
            style="width:100%; height: 160px; object-fit: cover;"
          />`
        : null}
      ${args.withHeader
        ? html`<div
            slot="header"
            style="display:flex; align-items:center; justify-content:space-between; gap:12px;"
          >
            <div>
              <div style="font-weight:700; color: var(--dark-blue, var(--primary));">
                Workspace request
              </div>
              <div style="font-size:12px; color: var(--dark-grey);">REQ-10294</div>
            </div>
            <ds-button shape="text" color="primary" size="small">View</ds-button>
          </div>`
        : null}
      <div style="display:grid; gap:10px;">
        <div style="color: var(--dark-grey);">
          A realistic body area: description text, metadata, and content that can wrap across lines.
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <ds-status color="primary" size="small">Primary</ds-status>
          <ds-status color="grey-200" size="small">Tag</ds-status>
        </div>
      </div>
      ${args.withFooter
        ? html`<div
            slot="footer"
            style="display:flex; align-items:center; justify-content:space-between; gap:12px;"
          >
            <div style="font-size:12px; color: var(--dark-grey);">Updated 2 hours ago</div>
            <ds-button color="primary" size="small">Approve</ds-button>
          </div>`
        : null}
    </ds-card>
  `,
};

export default meta;

type Story = StoryObj<DsCardArgs>;

export const Playground: Story = {};

export const SlotCombinations: Story = {
  name: 'Slot combinations',
  parameters: {
    docs: {
      description: {
        story:
          'Each region renders only when its slot has content. Mix and match `image`, `header`, default, and `footer` freely.',
      },
    },
  },
  render: () => html`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"
    >
      <ds-card style="--card-padding: 16px;">
        <div slot="header" style="font-weight:700;">Header + body</div>
        Body only content.
      </ds-card>

      <ds-card style="--card-padding: 16px;">
        <img
          slot="image"
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=60"
          style="width:100%; height: 140px; object-fit: cover;"
        />
        Image + body
      </ds-card>

      <ds-card style="--card-padding: 16px;">Body only (no header / image / footer).</ds-card>

      <ds-card style="--card-padding: 16px;">
        <div slot="footer" style="display:flex; justify-content:flex-end;">
          <ds-button color="primary" size="small">Action</ds-button>
        </div>
        Body + footer
      </ds-card>
    </div>
  `,
};

export const StatusVariants: Story = {
  name: 'Status variants',
  parameters: {
    docs: {
      description: {
        story:
          '`card-status` adds a coloured left strip and a `card--status-<value>` class on the root. Apps can override or extend the status palette in their own stylesheet.',
      },
    },
  },
  render: () => html`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;"
    >
      ${STATUSES.filter(Boolean).map(
        (s) => html`
          <ds-card card-status=${s} style="--card-padding: 14px;">
            <div
              slot="header"
              style="font-weight:700; display:flex; justify-content:space-between;"
            >
              <span style="text-transform: capitalize;">${s}</span>
              <ds-icon icon="info" size="18" color="var(--dark-grey)"></ds-icon>
            </div>
            Status strip + root modifier class for styling.
          </ds-card>
        `,
      )}
    </div>
  `,
};
