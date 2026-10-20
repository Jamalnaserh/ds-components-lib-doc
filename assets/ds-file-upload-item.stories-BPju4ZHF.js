import{b as i}from"./iframe-BsDVw_Q3.js";import{o as l}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const d={id:1,name:"site-plan.pdf",size:1482e3},p={id:2,name:"oversized.png",size:25e6,errorMsg:"File exceeds the 10MB limit."},y={title:"Components/File Upload Item",component:"ds-file-upload-item",parameters:{docs:{description:{component:["Row representing a single uploaded file. Pair with **`ds-file-uploader`**","to render the list of selected files.","","The **`file`** prop accepts a `{ name, size, errorMsg, extension, id }` object","(JSX) or its JSON-stringified form (HTML). The icon is derived from the","file extension; setting `errorMsg` swaps it to a warning glyph and surfaces","the message under the row.","","Two actions are rendered by default and can be hidden individually:","`dsFileUploadItemRetry` (refresh icon) and `dsFileUploadItemRemove`","(trash icon). `readonly` removes the action area entirely."].join(`
`)}},actions:{handles:["dsFileUploadItemRetry","dsFileUploadItemRemove"]}},args:{file:JSON.stringify(d),readonly:!1,showRetry:!0,showRemove:!0,retryLabel:"Replace file",removeLabel:"Remove file"},argTypes:{file:{control:"text",description:"JSON-encoded `{ id?, name?, size?, extension?, errorMsg? }`. The icon is inferred from the file extension."},readonly:{control:"boolean",description:"Hide all action buttons."},showRetry:{control:"boolean",description:"Show the retry / replace button."},showRemove:{control:"boolean",description:"Show the remove button."},retryLabel:{control:"text",description:"Accessible label for the retry button."},removeLabel:{control:"text",description:"Accessible label for the remove button."}},render:e=>i`
    <div style="max-width: 480px;">
      <ds-file-upload-item
        file=${e.file}
        ?readonly=${e.readonly}
        .showRetry=${e.showRetry}
        .showRemove=${e.showRemove}
        retry-label=${l(e.retryLabel?e.retryLabel:void 0)}
        remove-label=${l(e.removeLabel?e.removeLabel:void 0)}
        @dsFileUploadItemRetry=${a=>console.log("retry",a.detail)}
        @dsFileUploadItemRemove=${a=>console.log("remove",a.detail)}
      ></ds-file-upload-item>
    </div>
  `},t={},n={name:"File type icons",parameters:{docs:{description:{story:"The leading icon is derived from the file extension. Common types (`pdf`, `jpg`, `png`, `docx`, `xlsx`, `msg`, …) get their own glyph; unknown extensions fall back to `file-o`."}}},render:()=>i`
    <div style="display:grid; gap:8px; max-width: 480px;">
      ${[{name:"site-plan.pdf",size:1482e3},{name:"team-photo.jpg",size:24e5},{name:"logo.png",size:612300},{name:"proposal.docx",size:184200},{name:"budget.xlsx",size:96300},{name:"meeting.msg",size:32100},{name:"archive.zip",size:154e5}].map(e=>i`<ds-file-upload-item file=${JSON.stringify(e)}></ds-file-upload-item>`)}
    </div>
  `},o={name:"Error state",parameters:{docs:{description:{story:"`errorMsg` swaps the icon to a warning glyph, applies an error background, and renders the message under the row."}}},render:()=>i`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(p)}></ds-file-upload-item>
    </div>
  `},r={parameters:{docs:{description:{story:"Set `readonly` to hide the action area entirely — useful in detail views."}}},render:()=>i`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(d)} readonly></ds-file-upload-item>
    </div>
  `},s={name:"In a list",parameters:{docs:{description:{story:"Pairs naturally with `ds-file-uploader` to confirm what the user has selected. Listen for the retry / remove events to keep your state in sync."}}},render:()=>i`
    <div style="display:grid; gap:8px; max-width: 480px;">
      <ds-file-upload-item file=${JSON.stringify(d)}></ds-file-upload-item>
      <ds-file-upload-item
        file=${JSON.stringify({name:"team-photo.jpg",size:24e5})}
      ></ds-file-upload-item>
      <ds-file-upload-item file=${JSON.stringify(p)}></ds-file-upload-item>
    </div>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'File type icons',
  parameters: {
    docs: {
      description: {
        story: 'The leading icon is derived from the file extension. Common types (\`pdf\`, \`jpg\`, \`png\`, \`docx\`, \`xlsx\`, \`msg\`, …) get their own glyph; unknown extensions fall back to \`file-o\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:8px; max-width: 480px;">
      \${[{
    name: 'site-plan.pdf',
    size: 1_482_000
  }, {
    name: 'team-photo.jpg',
    size: 2_400_000
  }, {
    name: 'logo.png',
    size: 612_300
  }, {
    name: 'proposal.docx',
    size: 184_200
  }, {
    name: 'budget.xlsx',
    size: 96_300
  }, {
    name: 'meeting.msg',
    size: 32_100
  }, {
    name: 'archive.zip',
    size: 15_400_000
  }].map(f => html\`<ds-file-upload-item file=\${JSON.stringify(f)}></ds-file-upload-item>\`)}
    </div>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Error state',
  parameters: {
    docs: {
      description: {
        story: '\`errorMsg\` swaps the icon to a warning glyph, applies an error background, and renders the message under the row.'
      }
    }
  },
  render: () => html\`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=\${JSON.stringify(SAMPLE_ERROR)}></ds-file-upload-item>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Set \`readonly\` to hide the action area entirely — useful in detail views.'
      }
    }
  },
  render: () => html\`
    <div style="max-width: 480px;">
      <ds-file-upload-item file=\${JSON.stringify(SAMPLE_FILE)} readonly></ds-file-upload-item>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'In a list',
  parameters: {
    docs: {
      description: {
        story: 'Pairs naturally with \`ds-file-uploader\` to confirm what the user has selected. Listen for the retry / remove events to keep your state in sync.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:8px; max-width: 480px;">
      <ds-file-upload-item file=\${JSON.stringify(SAMPLE_FILE)}></ds-file-upload-item>
      <ds-file-upload-item
        file=\${JSON.stringify({
    name: 'team-photo.jpg',
    size: 2_400_000
  })}
      ></ds-file-upload-item>
      <ds-file-upload-item file=\${JSON.stringify(SAMPLE_ERROR)}></ds-file-upload-item>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};const h=["Playground","FileTypes","ErrorState","Readonly","InList"];export{o as ErrorState,n as FileTypes,s as InList,t as Playground,r as Readonly,h as __namedExportsOrder,y as default};
