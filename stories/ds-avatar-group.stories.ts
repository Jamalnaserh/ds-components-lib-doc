import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DsAvatarSize = 'xl' | 'large' | 'medium' | 'small' | 'x-small' | 'xx-small';

const SIZES: DsAvatarSize[] = ['xl', 'large', 'medium', 'small', 'x-small', 'xx-small'];

const SAMPLE_PEOPLE: Array<{ label: string; image?: string }> = [
  {
    label: 'Maha',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=60',
  },
  {
    label: 'Khalid',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=60',
  },
  { label: 'Salem' },
];

interface DsAvatarGroupArgs {
  size: DsAvatarSize;
  overflow: string;
  addButton: boolean;
  addLabel: string;
}

const meta: Meta<DsAvatarGroupArgs> = {
  title: 'Components/Avatar Group',
  component: 'ds-avatar-group',
  parameters: {
    docs: {
      description: {
        component: [
          'Horizontal stack of overlapping `<ds-avatar>` elements.',
          '',
          'Provide avatars in the default slot. The optional **`overflow`** prop',
          'renders a circular count badge (e.g. `"+3"`), and **`add-button`** renders',
          'a trailing `+` control that emits `dsAvatarGroupAdd` on click.',
          '',
          'Keep nested `<ds-avatar size>` matching the group `size` for consistent overlap spacing.',
        ].join('\n'),
      },
    },
    actions: { handles: ['dsAvatarGroupAdd'] },
  },
  args: {
    size: 'medium',
    overflow: '+3',
    addButton: true,
    addLabel: 'Add',
  },
  argTypes: {
    size: {
      control: 'select',
      options: SIZES,
      description: 'Group + nested avatar size. Defaults to `medium`.',
      table: { defaultValue: { summary: 'medium' } },
    },
    overflow: {
      control: 'text',
      description: 'Optional count badge appended after avatars, e.g. `"+3"`.',
    },
    addButton: {
      control: 'boolean',
      description: 'Render a circular "+" control. Emits `dsAvatarGroupAdd`.',
      table: { defaultValue: { summary: 'false' } },
    },
    addLabel: {
      control: 'text',
      description: 'Accessible label for the add control.',
      table: { defaultValue: { summary: 'Add' } },
    },
  },
  render: (args) => html`
    <ds-avatar-group
      size=${args.size}
      overflow=${ifDefined(args.overflow ? args.overflow : undefined)}
      ?add-button=${args.addButton}
      add-label=${ifDefined(args.addLabel ? args.addLabel : undefined)}
      @dsAvatarGroupAdd=${() => console.log('dsAvatarGroupAdd')}
    >
      ${SAMPLE_PEOPLE.map(
        (p) => html`
          <ds-avatar
            size=${args.size}
            label=${p.label}
            image=${ifDefined(p.image)}
          ></ds-avatar>
        `,
      )}
    </ds-avatar-group>
  `,
};

export default meta;

type Story = StoryObj<DsAvatarGroupArgs>;

export const Playground: Story = {};

export const AllSizes: Story = {
  name: 'All sizes',
  parameters: {
    docs: {
      description: {
        story: 'Group size scales the inner overlap and applies to every nested avatar.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:16px;">
      ${SIZES.map(
        (s) => html`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:72px; font-size:11px; color: var(--dark-grey);">${s}</code>
            <ds-avatar-group size=${s} overflow="+2">
              <ds-avatar size=${s} label="AA"></ds-avatar>
              <ds-avatar size=${s} label="BB"></ds-avatar>
              <ds-avatar size=${s} label="CC"></ds-avatar>
            </ds-avatar-group>
          </div>
        `,
      )}
    </div>
  `,
};

export const WithOverflow: Story = {
  name: 'With overflow badge',
  parameters: {
    docs: {
      description: {
        story:
          'Use `overflow` to summarise hidden avatars. The badge becomes a sibling element at the end of the stack.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; align-items:center; gap:24px; flex-wrap:wrap;">
      <ds-avatar-group overflow="+5">
        <ds-avatar label="Maha"></ds-avatar>
        <ds-avatar label="Khalid"></ds-avatar>
        <ds-avatar label="Salem"></ds-avatar>
      </ds-avatar-group>
      <ds-avatar-group overflow="+99">
        <ds-avatar label="Hana"></ds-avatar>
        <ds-avatar label="Yara"></ds-avatar>
      </ds-avatar-group>
    </div>
  `,
};

export const WithAddButton: Story = {
  name: 'With add button',
  parameters: {
    docs: {
      description: {
        story:
          'Combine `add-button` with `overflow` to show both — the add control always renders last. Open the browser console to see the `dsAvatarGroupAdd` event fire on click.',
      },
    },
  },
  render: () => html`
    <ds-avatar-group
      overflow="+3"
      add-button
      add-label="Invite teammate"
      @dsAvatarGroupAdd=${() => console.log('dsAvatarGroupAdd')}
    >
      <ds-avatar label="Maha"></ds-avatar>
      <ds-avatar label="Khalid"></ds-avatar>
      <ds-avatar label="Salem"></ds-avatar>
    </ds-avatar-group>
  `,
};
