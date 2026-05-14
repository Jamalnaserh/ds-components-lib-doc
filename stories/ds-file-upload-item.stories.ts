import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface FileUploadItemData {
  id?: number;
  name?: string;
  size?: string | number;
  extension?: string;
  errorMsg?: string;
}

const SAMPLE_FILE: FileUploadItemData = {
  id: 1,
  name: 'site-plan.pdf',
  size: 1_482_000,
};

const SAMPLE_ERROR: FileUploadItemData = {
  id: 2,
  name: 'oversized.png',
  size: 25_000_000,
  errorMsg: 'File exceeds the 10MB limit.',
};

interface DsFileUploadItemArgs {
  file: string;
  readonly: boolean;
  showRetry: boolean;
  showRemove: boolean;
  retryLabel: string;
  removeLabel: string;
}

const meta: Meta<DsFileUploadItemArgs> = {
  title: 'Components/File Upload Item',
  component: 'ds-file-upload-item',
  parameters: {
    docs: {
      description: {
        component: [
          'Row representing a single uploaded file. Pair with **`ds-file-uploader`**',
          'to render the list of selected files.',
          '',
          'The **`file`** prop accepts a `{ name, size, errorMsg, extension, id }` object',
          '(JSX) or its JSON-stringified form (HTML). The icon is derived from the',
          'file extension; setting `errorMsg` swaps it to a warning glyph and surfaces',
          'the message under the row.',
          '',
          'Two actions are rendered by default and can be hidden individually:',
          '`dsFileUploadItemRetry` (refresh icon) and `dsFileUploadItemRemove`',
          '(trash icon). `readonly` removes the action area entirely.',
        ].join('\n'),
      },
    },
    actions: { handles: ['dsFileUploadItemRetry', 'dsFileUploadItemRemove'] },
  },
  args: {
    file: JSON.stringify(SAMPLE_FILE),
    readonly: false,
    showRetry: true,
    showRemove: true,
    retryLabel: 'Replace file',
    removeLabel: 'Remove file',
  },
  argTypes: {
    file: {
      control: 'text',
      description:
        'JSON-encoded `{ id?, name?, size?, extension?, errorMsg? }`. The icon is inferred from the file extension.',
    },
    readonly: { control: 'boolean', description: 'Hide all action buttons.' },
    showRetry: { control: 'boolean', description: 'Show the retry / replace button.' },
    showRemove: { control: 'boolean', description: 'Show the remove button.' },
    retryLabel: { control: 'text', description: 'Accessible label for the retry button.' },
    removeLabel: { control: 'text', description: 'Accessible label for the remove button.' },
  },
  render: (args) => html`
    <div style="max-width: 480px;">
      <ds-file-upload-item
        file=${args.file}
        ?readonly=${args.readonly}
        .showRetry=${args.showRetry}
        .showRemove=${args.showRemove}
        retry-label=${ifDefined(args.retryLabel ? args.retryLabel : undefined)}
        remove-label=${ifDefined(args.removeLabel ? args.removeLabel : undefined)}
        @dsFileUploadItemRetry=${(e: CustomEvent) => console.log('retry', e.detail)}
        @dsFileUploadItemRemove=${(e: CustomEvent) => console.log('remove', e.detail)}
      ></ds-file-upload-item>
    </div>
  `,
};

export default meta;

type Story = StoryObj<DsFileUploadItemArgs>;

export const Playground: Story = {};

export const FileTypes: Story = {
  name: 'File type icons',
  parameters: {
    docs: {
      description: {
        story:
          'The leading icon is derived from the file extension. Common types (`pdf`, `jpg`, `png`, `docx`, `xlsx`, `msg`, …) get their own glyph; unknown extensions fall back to `file-o`.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:8px; max-width: 480px;">
      ${[
        { name: 'site-plan.pdf', size: 1_482_000 },
        { name: 'team-photo.jpg', size: 2_400_000 },
        { name: 'logo.png', size: 612_300 },
        { name: 'proposal.docx', size: 184_200 },
        { name: 'budget.xlsx', size: 96_300 },
        { name: 'meeting.msg', size: 32_100 },
        { name: 'archive.zip', size: 15_400_000 },
      ].map(
        (f) => html`<ds-file-upload-item file=${JSON.stringify(f)}></ds-file-upload-item>`,
      )}
    </div>
  `,
};

export const ErrorState: Story = {
  name: 'Error state',
  parameters: {
    docs: {
      description: {
        story:
          '`errorMsg` swaps the icon to a warning glyph, applies an error background, and renders the message under the row.',
      },
    },
  },
  render: () => html`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(SAMPLE_ERROR)}></ds-file-upload-item>
    </div>
  `,
};

export const Readonly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Set `readonly` to hide the action area entirely — useful in detail views.',
      },
    },
  },
  render: () => html`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(SAMPLE_FILE)} readonly></ds-file-upload-item>
    </div>
  `,
};

export const InList: Story = {
  name: 'In a list',
  parameters: {
    docs: {
      description: {
        story:
          'Pairs naturally with `ds-file-uploader` to confirm what the user has selected. Listen for the retry / remove events to keep your state in sync.',
      },
    },
  },
  render: () => html`
    <div style="display:grid; gap:8px; max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(SAMPLE_FILE)}></ds-file-upload-item>
      <ds-file-upload-item
        file=${JSON.stringify({ name: 'team-photo.jpg', size: 2_400_000 })}
      ></ds-file-upload-item>
      <ds-file-upload-item file=${JSON.stringify(SAMPLE_ERROR)}></ds-file-upload-item>
    </div>
  `,
};
