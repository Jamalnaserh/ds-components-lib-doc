import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface DsSlaArgs {
  value: number;
  maxValue: number;
  canvasScale: number;
  innerLineColor: string;
  outerLineColor: string;
  innerLineWidth: number;
  outerLineWidth: number;
  customValue: string;
}

const meta: Meta<DsSlaArgs> = {
  title: 'Components/SLA',
  component: 'ds-sla',
  parameters: {
    docs: {
      description: {
        component: [
          'Circular gauge that shows `value / maxValue` as a progress arc with',
          'a centred label. Use it for SLA, completion percentage, quotas, or any',
          '“X of Y” reading.',
          '',
          'Not a linear progress bar — for that, a dedicated `ds-progress` is',
          'on the roadmap. For numeric badges, see `ds-status`.',
          '',
          'The default colour scheme uses an off-white track (`innerLineColor`)',
          'and the brand success green (`outerLineColor`). Override either to',
          'match a status semantic — passing palette CSS variables (e.g.',
          '`var(--danger)`) keeps the gauge in lockstep with the foundations.',
        ].join('\n'),
      },
    },
  },
  args: {
    value: 65,
    maxValue: 100,
    canvasScale: 96,
    innerLineColor: '#FAFAFA',
    outerLineColor: '#02C389',
    innerLineWidth: 6,
    outerLineWidth: 6,
    customValue: '',
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current value. Arc = `value / maxValue`.',
    },
    maxValue: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'Denominator. Used in the default centre label `value/maxValue`.',
      table: { defaultValue: { summary: '100' } },
    },
    canvasScale: {
      control: { type: 'number', min: 40, max: 240, step: 4 },
      description: 'Total SVG width and height in px.',
      table: { defaultValue: { summary: '80' } },
    },
    innerLineColor: {
      control: 'color',
      description: 'Track (background arc) stroke.',
      table: { defaultValue: { summary: '#FAFAFA' } },
    },
    outerLineColor: {
      control: 'color',
      description: 'Progress arc stroke. Pass `var(--token)` to use a foundation colour.',
      table: { defaultValue: { summary: '#02C389' } },
    },
    innerLineWidth: {
      control: { type: 'number', min: 1, max: 16, step: 1 },
      description: 'Track stroke width.',
      table: { defaultValue: { summary: '4' } },
    },
    outerLineWidth: {
      control: { type: 'number', min: 1, max: 16, step: 1 },
      description: 'Progress stroke width.',
      table: { defaultValue: { summary: '4' } },
    },
    customValue: {
      control: 'text',
      description: 'Replace the default `value/maxValue` label. Empty restores the default.',
    },
  },
  render: (args) => html`
    <ds-sla
      value=${args.value}
      max-value=${args.maxValue}
      canvas-scale=${args.canvasScale}
      inner-line-color=${args.innerLineColor}
      outer-line-color=${args.outerLineColor}
      inner-line-width=${args.innerLineWidth}
      outer-line-width=${args.outerLineWidth}
      custom-value=${ifDefined(args.customValue ? args.customValue : undefined)}
    ></ds-sla>
  `,
};

export default meta;

type Story = StoryObj<DsSlaArgs>;

export const Playground: Story = {};

export const ProgressScale: Story = {
  name: 'Progress scale',
  parameters: {
    docs: {
      description: {
        story: 'Arc fills proportionally from 0 to `maxValue`.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${[0, 25, 50, 75, 100].map(
        (v) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-sla value=${v} max-value="100" canvas-scale="80"></ds-sla>
            <code style="font-size:11px; color: var(--dark-grey);">${v}%</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const SemanticColors: Story = {
  name: 'Semantic colour overrides',
  parameters: {
    docs: {
      description: {
        story:
          'Map the progress arc to a foundation token using `var(--…)`. Use this to communicate health: `success` on track, `warning` for risk, `danger` for breached SLAs.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-sla value="92" outer-line-color="var(--success)" canvas-scale="88"></ds-sla>
        <code style="font-size:11px; color: var(--dark-grey);">success</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-sla value="68" outer-line-color="var(--warning)" canvas-scale="88"></ds-sla>
        <code style="font-size:11px; color: var(--dark-grey);">warning</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-sla value="22" outer-line-color="var(--danger)" canvas-scale="88"></ds-sla>
        <code style="font-size:11px; color: var(--dark-grey);">danger</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-sla value="48" outer-line-color="var(--primary)" canvas-scale="88"></ds-sla>
        <code style="font-size:11px; color: var(--dark-grey);">primary</code>
      </div>
    </div>
  `,
};

export const SizeScale: Story = {
  name: 'Size scale',
  render: () => html`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${[48, 64, 80, 96, 128, 160].map(
        (s) => html`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-sla
              value="72"
              canvas-scale=${s}
              inner-line-width="6"
              outer-line-width="6"
            ></ds-sla>
            <code style="font-size:11px; color: var(--dark-grey);">${s}px</code>
          </div>
        `,
      )}
    </div>
  `,
};

export const CustomLabel: Story = {
  name: 'Custom label',
  parameters: {
    docs: {
      description: {
        story:
          'Override the default `value/maxValue` label with `custom-value` — handy for percentages, units, or short status text.',
      },
    },
  },
  render: () => html`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-sla value="72" canvas-scale="96" custom-value="72%"></ds-sla>
      <ds-sla
        value="3"
        max-value="5"
        canvas-scale="96"
        custom-value="3 / 5"
        outer-line-color="var(--primary)"
      ></ds-sla>
      <ds-sla
        value="100"
        canvas-scale="96"
        custom-value="DONE"
        outer-line-color="var(--success)"
      ></ds-sla>
    </div>
  `,
};
