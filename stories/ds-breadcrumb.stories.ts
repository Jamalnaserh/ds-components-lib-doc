import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const ITEMS_DEFAULT: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'eServices', href: '/eservices' },
  { label: 'Requests', href: '/eservices/requests' },
  { label: 'Request details' },
];

const ITEMS_SHORT: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, { label: 'Dashboard' }];

const ITEMS_LONG: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Safety', href: '/safety' },
  { label: 'Work permits', href: '/safety/permits' },
  { label: 'Hot work', href: '/safety/permits/hot' },
  { label: 'Permit #HW-2026-014' },
];

interface DsBreadcrumbArgs {
  items: string;
  homeIcon: boolean;
  iconSize: number;
  ariaLabel: string;
}

const meta: Meta<DsBreadcrumbArgs> = {
  title: 'Components/Breadcrumb',
  component: 'ds-breadcrumb',
  parameters: {
    docs: {
      description: {
        component: [
          'Navigation trail showing the user’s position in a hierarchy.',
          '',
          'Provide `items` as an **array** in JS or a **JSON string** in HTML.',
          'Each entry has `label` and optional `href`. Omit `href` on the last',
          'entry so it renders as the current page (`aria-current="page"`,',
          'bold, not a link). Invalid JSON renders an empty `<nav>` rather than',
          'throwing.',
          '',
          'When `home-icon` is enabled (default), a home outline icon is prepended',
          'to the first link. Chevrons between segments use the `arrow-right-2` icon',
          'sized relative to `icon-size`.',
        ].join('\n'),
      },
    },
  },
  args: {
    items: JSON.stringify(ITEMS_DEFAULT),
    homeIcon: true,
    iconSize: 18,
    ariaLabel: 'Breadcrumb',
  },
  argTypes: {
    items: {
      control: 'text',
      description: 'JSON-encoded array of `{ label, href? }` segments.',
    },
    homeIcon: {
      control: 'boolean',
      description: 'Prepend a home outline icon to the first link.',
      table: { defaultValue: { summary: 'true' } },
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 28, step: 1 },
      description: 'Icon size in px for the home glyph and chevrons.',
      table: { defaultValue: { summary: '18' } },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name for the `<nav>` landmark.',
      table: { defaultValue: { summary: 'Breadcrumb' } },
    },
  },
  render: (args) => html`
    <ds-breadcrumb
      items=${args.items}
      ?home-icon=${args.homeIcon}
      icon-size=${args.iconSize}
      aria-label=${ifDefined(args.ariaLabel ? args.ariaLabel : undefined)}
    ></ds-breadcrumb>
  `,
};

export default meta;

type Story = StoryObj<DsBreadcrumbArgs>;

export const Playground: Story = {};

export const WithoutHomeIcon: Story = {
  name: 'Without home icon',
  parameters: {
    docs: {
      description: {
        story: 'Set `home-icon="false"` (or omit the attribute via the prop) to suppress the leading home glyph.',
      },
    },
  },
  render: () => html`
    <ds-breadcrumb items=${JSON.stringify(ITEMS_DEFAULT)} home-icon="false"></ds-breadcrumb>
  `,
};

export const ShortTrail: Story = {
  name: 'Short trail',
  parameters: {
    docs: {
      description: {
        story: 'Two-segment trail — useful for `Home → <Page>` headers.',
      },
    },
  },
  render: () => html`<ds-breadcrumb items=${JSON.stringify(ITEMS_SHORT)}></ds-breadcrumb>`,
};

export const LongTrail: Story = {
  name: 'Long trail',
  parameters: {
    docs: {
      description: {
        story:
          'Deep hierarchy. The last segment is rendered as the current page; everything else is a link.',
      },
    },
  },
  render: () => html`<ds-breadcrumb items=${JSON.stringify(ITEMS_LONG)}></ds-breadcrumb>`,
};

export const IconSizes: Story = {
  name: 'Icon size scale',
  parameters: {
    docs: {
      description: {
        story:
          'The `icon-size` prop scales both the home glyph and the chevrons. Chevrons render at 95% of the home size, clamped to ≥14px.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:12px;">
      ${[14, 18, 22, 26].map(
        (s) => html`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:56px; font-size:11px; color: var(--dark-grey);">${s}px</code>
            <ds-breadcrumb items=${JSON.stringify(ITEMS_SHORT)} icon-size=${s}></ds-breadcrumb>
          </div>
        `,
      )}
    </div>
  `,
};

export const InvalidJson: Story = {
  name: 'Invalid JSON',
  parameters: {
    docs: {
      description: {
        story:
          'If `items` is not valid JSON, the breadcrumb renders empty (safe default) rather than throwing.',
      },
    },
  },
  render: () => html`<ds-breadcrumb items="[this is not json]"></ds-breadcrumb>`,
};
