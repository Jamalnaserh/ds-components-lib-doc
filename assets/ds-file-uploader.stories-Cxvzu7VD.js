import{b as t}from"./iframe-BsDVw_Q3.js";import{o}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const s=["centered","horizontal"],u={title:"Components/File Uploader",component:"ds-file-uploader",parameters:{docs:{description:{component:["Drag-and-drop file picker with two layouts:","","- **`centered`** — large stacked drop zone (default).","- **`horizontal`** — compact row (icon left, copy right).","","Emits **`dsFileUploaderChange`** with `{ files: File[] }` on selection","or drop. Exposes `openPicker()` and `clearInput()` imperative methods","for programmatic control."].join(`
`)}},actions:{handles:["dsFileUploaderChange"]}},args:{variant:"centered",label:"Upload Attachments",primaryLead:"Select a file or",primaryEmphasis:"drag and drop here",secondaryText:"JPG, PNG or PDF, file size no more than 10MB",hintText:"",accept:".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf",multiple:!1,disabled:!1,iconSize:40},argTypes:{variant:{control:"select",options:s,description:"Layout — `centered` (default) or `horizontal`.",table:{defaultValue:{summary:"centered"}}},label:{control:"text",description:"Field label above the drop zone."},primaryLead:{control:"text",description:"Lead text before the emphasised phrase."},primaryEmphasis:{control:"text",description:"Bold call-to-action phrase."},secondaryText:{control:"text",description:"Smaller constraint line under the primary line."},hintText:{control:"text",description:"Optional helper text below the drop zone."},accept:{control:"text",description:'Mirror of `<input type="file" accept>`.'},multiple:{control:"boolean",description:"Allow selecting more than one file."},disabled:{control:"boolean",description:"Disable picker, drop, and keyboard activation."},iconSize:{control:{type:"number",min:16,max:72,step:2},description:"Cloud icon size in px.",table:{defaultValue:{summary:"40"}}}},render:e=>t`
    <ds-file-uploader
      variant=${e.variant}
      label=${o(e.label?e.label:void 0)}
      primary-lead=${o(e.primaryLead?e.primaryLead:void 0)}
      primary-emphasis=${o(e.primaryEmphasis?e.primaryEmphasis:void 0)}
      secondary-text=${o(e.secondaryText?e.secondaryText:void 0)}
      hint-text=${o(e.hintText?e.hintText:void 0)}
      accept=${o(e.accept?e.accept:void 0)}
      ?multiple=${e.multiple}
      ?disabled=${e.disabled}
      icon-size=${e.iconSize}
      @dsFileUploaderChange=${d=>console.log("dsFileUploaderChange",d.detail.files)}
    ></ds-file-uploader>
  `},r={},a={parameters:{docs:{description:{story:"Side-by-side comparison of the two layouts. Choose `horizontal` for compact form rows; keep `centered` for large empty-state drop zones."}}},render:()=>t`
    <div style="display:grid; gap:24px;">
      ${s.map(e=>t`
          <div style="display:grid; gap:8px;">
            <code style="font-size:11px; color: var(--dark-grey);">variant="${e}"</code>
            <ds-file-uploader variant=${e} label="Upload attachment"></ds-file-uploader>
          </div>
        `)}
    </div>
  `},i={name:"With hint text",parameters:{docs:{description:{story:"Use `hint-text` for inline guidance or links shown below the drop zone."}}},render:()=>t`
    <ds-file-uploader
      label="Supporting documents"
      hint-text="Include one ID copy and any prior approvals. We keep uploads encrypted at rest."
    ></ds-file-uploader>
  `},n={name:"Multiple files",parameters:{docs:{description:{story:"Setting `multiple` lets users pick or drop several files at once. Listen for `dsFileUploaderChange` and inspect `event.detail.files`."}}},render:()=>t`
    <ds-file-uploader
      label="Photos"
      primary-emphasis="drop your photos here"
      secondary-text="JPG, PNG up to 10 MB each"
      accept="image/jpeg,image/png"
      multiple
      @dsFileUploaderChange=${e=>alert(`Selected ${e.detail.files.length} file(s)`)}
    ></ds-file-uploader>
  `},l={parameters:{docs:{description:{story:'Disabled state: pointer, keyboard, and drop are blocked; `aria-disabled="true"` is set.'}}},render:()=>t`
    <ds-file-uploader label="Upload attachment" disabled></ds-file-uploader>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison of the two layouts. Choose \`horizontal\` for compact form rows; keep \`centered\` for large empty-state drop zones.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:24px;">
      \${VARIANTS.map(v => html\`
          <div style="display:grid; gap:8px;">
            <code style="font-size:11px; color: var(--dark-grey);">variant="\${v}"</code>
            <ds-file-uploader variant=\${v} label="Upload attachment"></ds-file-uploader>
          </div>
        \`)}
    </div>
  \`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With hint text',
  parameters: {
    docs: {
      description: {
        story: 'Use \`hint-text\` for inline guidance or links shown below the drop zone.'
      }
    }
  },
  render: () => html\`
    <ds-file-uploader
      label="Supporting documents"
      hint-text="Include one ID copy and any prior approvals. We keep uploads encrypted at rest."
    ></ds-file-uploader>
  \`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Multiple files',
  parameters: {
    docs: {
      description: {
        story: 'Setting \`multiple\` lets users pick or drop several files at once. Listen for \`dsFileUploaderChange\` and inspect \`event.detail.files\`.'
      }
    }
  },
  render: () => html\`
    <ds-file-uploader
      label="Photos"
      primary-emphasis="drop your photos here"
      secondary-text="JPG, PNG up to 10 MB each"
      accept="image/jpeg,image/png"
      multiple
      @dsFileUploaderChange=\${(e: CustomEvent<{
    files: File[];
  }>) => alert(\`Selected \${e.detail.files.length} file(s)\`)}
    ></ds-file-uploader>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled state: pointer, keyboard, and drop are blocked; \`aria-disabled="true"\` is set.'
      }
    }
  },
  render: () => html\`
    <ds-file-uploader label="Upload attachment" disabled></ds-file-uploader>
  \`
}`,...l.parameters?.docs?.source}}};const h=["Playground","Variants","WithHint","MultipleFiles","Disabled"];export{l as Disabled,n as MultipleFiles,r as Playground,a as Variants,i as WithHint,h as __namedExportsOrder,u as default};
