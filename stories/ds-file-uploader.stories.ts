import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type DsFileUploaderVariant = 'centered' | 'horizontal';

const VARIANTS: DsFileUploaderVariant[] = ['centered', 'horizontal'];

interface DsFileUploaderArgs {
  variant: DsFileUploaderVariant;
  label: string;
  primaryLead: string;
  primaryEmphasis: string;
  secondaryText: string;
  hintText: string;
  accept: string;
  multiple: boolean;
  disabled: boolean;
  iconSize: number;
}

const meta: Meta<DsFileUploaderArgs> = {
  title: 'Components/File Uploader',
  component: 'ds-file-uploader',
  parameters: {
    docs: {
      description: {
        component: [
          'Drag-and-drop file picker with two layouts:',
          '',
          '- **`centered`** — large stacked drop zone (default).',
          '- **`horizontal`** — compact row (icon left, copy right).',
          '',
          'Emits **`dsFileUploaderChange`** with `{ files: File[] }` on selection',
          'or drop. Exposes `openPicker()` and `clearInput()` imperative methods',
          'for programmatic control.',
        ].join('\n'),
      },
    },
    actions: { handles: ['dsFileUploaderChange'] },
  },
  args: {
    variant: 'centered',
    label: 'Upload Attachments',
    primaryLead: 'Select a file or',
    primaryEmphasis: 'drag and drop here',
    secondaryText: 'JPG, PNG or PDF, file size no more than 10MB',
    hintText: '',
    accept: '.jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf',
    multiple: false,
    disabled: false,
    iconSize: 40,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: VARIANTS,
      description: 'Layout — `centered` (default) or `horizontal`.',
      table: { defaultValue: { summary: 'centered' } },
    },
    label: { control: 'text', description: 'Field label above the drop zone.' },
    primaryLead: { control: 'text', description: 'Lead text before the emphasised phrase.' },
    primaryEmphasis: { control: 'text', description: 'Bold call-to-action phrase.' },
    secondaryText: { control: 'text', description: 'Smaller constraint line under the primary line.' },
    hintText: { control: 'text', description: 'Optional helper text below the drop zone.' },
    accept: { control: 'text', description: 'Mirror of `<input type="file" accept>`.' },
    multiple: { control: 'boolean', description: 'Allow selecting more than one file.' },
    disabled: { control: 'boolean', description: 'Disable picker, drop, and keyboard activation.' },
    iconSize: {
      control: { type: 'number', min: 16, max: 72, step: 2 },
      description: 'Cloud icon size in px.',
      table: { defaultValue: { summary: '40' } },
    },
  },
  render: (args) => html`
    <ds-file-uploader
      variant=${args.variant}
      label=${ifDefined(args.label ? args.label : undefined)}
      primary-lead=${ifDefined(args.primaryLead ? args.primaryLead : undefined)}
      primary-emphasis=${ifDefined(args.primaryEmphasis ? args.primaryEmphasis : undefined)}
      secondary-text=${ifDefined(args.secondaryText ? args.secondaryText : undefined)}
      hint-text=${ifDefined(args.hintText ? args.hintText : undefined)}
      accept=${ifDefined(args.accept ? args.accept : undefined)}
      ?multiple=${args.multiple}
      ?disabled=${args.disabled}
      icon-size=${args.iconSize}
      @dsFileUploaderChange=${(e: CustomEvent<{ files: File[] }>) =>
        console.log('dsFileUploaderChange', e.detail.files)}
    ></ds-file-uploader>
  `,
};

export default meta;

type Story = StoryObj<DsFileUploaderArgs>;

export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison of the two layouts. Choose `horizontal` for compact form rows; keep `centered` for large empty-state drop zones.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:24px;">
      ${VARIANTS.map(
        (v) => html`
          <div style="display:grid; gap:8px;">
            <code style="font-size:11px; color: var(--dark-grey);">variant="${v}"</code>
            <ds-file-uploader variant=${v} label="Upload attachment"></ds-file-uploader>
          </div>
        `,
      )}
    </div>
  `,
};

export const WithHint: Story = {
  name: 'With hint text',
  parameters: {
    docs: {
      description: {
        story: 'Use `hint-text` for inline guidance or links shown below the drop zone.',
      },
    },
  },
  render: () => html`
    <ds-file-uploader
      label="Supporting documents"
      hint-text="Include one ID copy and any prior approvals. We keep uploads encrypted at rest."
    ></ds-file-uploader>
  `,
};

export const MultipleFiles: Story = {
  name: 'Multiple files',
  parameters: {
    docs: {
      description: {
        story:
          'Setting `multiple` lets users pick or drop several files at once. Listen for `dsFileUploaderChange` and inspect `event.detail.files`.',
      },
    },
  },
  render: () => html`
    <ds-file-uploader
      label="Photos"
      primary-emphasis="drop your photos here"
      secondary-text="JPG, PNG up to 10 MB each"
      accept="image/jpeg,image/png"
      multiple
      @dsFileUploaderChange=${(e: CustomEvent<{ files: File[] }>) =>
        alert(`Selected ${e.detail.files.length} file(s)`)}
    ></ds-file-uploader>
  `,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state: pointer, keyboard, and drop are blocked; `aria-disabled="true"` is set.',
      },
    },
  },
  render: () => html`
    <ds-file-uploader label="Upload attachment" disabled></ds-file-uploader>
  `,
};
