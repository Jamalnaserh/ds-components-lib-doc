import{b as s}from"./iframe-BsDVw_Q3.js";import{o as i}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const l=["SA","AE","QA","BH","KW","OM","EG","JO","IQ","US","GB","FR","DE","JP"],m={title:"Components/Flag",component:"ds-flag",parameters:{docs:{description:{component:["Country / region flag rendered as a PNG from `assets/flag/`.","","Pass an ISO-style **`code`** (e.g. `SA`, `AE`, `GB-2`). In non-strict","mode the component will try numbered variants such as `2 - SA.png`","or `4 QA.png` before giving up — useful when shipping a heterogeneous","set of source files. **`strict`** restricts the lookup to","`{CODE}.png` only.","","**`base-path`** overrides the default asset directory. Storybook","sets a global base path in `preview.ts`, so you usually don’t need","to provide it."].join(`
`)}}},args:{code:"SA",size:28,rounded:!0,strict:!1,alt:"",basePath:""},argTypes:{code:{control:"text",description:"Region code (e.g. `SA`, `AE`, `GB-2`)."},size:{control:{type:"number",min:12,max:96,step:2},description:"Pixel size — square (width = height).",table:{defaultValue:{summary:"24"}}},rounded:{control:"boolean",description:"Rounded (circle) vs rectangle. Defaults to rounded.",table:{defaultValue:{summary:"true"}}},strict:{control:"boolean",description:"Only try `{CODE}.png` (no numbered fallbacks).",table:{defaultValue:{summary:"false"}}},alt:{control:"text",description:'Override the auto-generated `alt` text (`"Flag {CODE}"`).'},basePath:{control:"text",description:"Override the asset base path. Empty uses the global path set in `preview.ts`."}},render:e=>s`
    <ds-flag
      code=${e.code}
      size=${e.size}
      ?rounded=${e.rounded}
      ?strict=${e.strict}
      alt=${i(e.alt?e.alt:void 0)}
      base-path=${i(e.basePath?e.basePath:void 0)}
    ></ds-flag>
  `},a={},t={name:"Common flags",parameters:{docs:{description:{story:"A starter set of regional / international flags."}}},render:()=>s`
    <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
      ${l.map(e=>s`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code=${e} size="32"></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">${e}</code>
          </div>
        `)}
    </div>
  `},n={name:"Size scale",parameters:{docs:{description:{story:"Pass `size` as a number (px). The host is always square; the inner image fills the host."}}},render:()=>s`
    <div style="display:flex; gap:16px; align-items:center;">
      ${[16,20,24,32,40,56].map(e=>s`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code="SA" size=${e}></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">${e}px</code>
          </div>
        `)}
    </div>
  `},r={parameters:{docs:{description:{story:"`rounded` toggles between a circle clip and a rounded rectangle."}}},render:()=>s`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rounded</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded="false"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rectangle</code>
      </div>
    </div>
  `},o={name:"Strict lookup",parameters:{docs:{description:{story:"`strict` only tries the exact `{CODE}.png` filename. If your asset folder has numbered variants only, leave `strict` off so the component can fall back."}}},render:()=>s`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40" strict></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">strict</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">with fallback</code>
      </div>
    </div>
  `},d={name:"Unknown code",parameters:{docs:{description:{story:"When `code` is empty or every candidate fails to load, a neutral placeholder is rendered with `aria-hidden`."}}},render:()=>s`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-flag code="" size="40"></ds-flag>
      <ds-flag code="ZZ" size="40" strict></ds-flag>
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Common flags',
  parameters: {
    docs: {
      description: {
        story: 'A starter set of regional / international flags.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
      \${COMMON.map(c => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code=\${c} size="32"></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">\${c}</code>
          </div>
        \`)}
    </div>
  \`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Size scale',
  parameters: {
    docs: {
      description: {
        story: 'Pass \`size\` as a number (px). The host is always square; the inner image fills the host.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:center;">
      \${[16, 20, 24, 32, 40, 56].map(s => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-flag code="SA" size=\${s}></ds-flag>
            <code style="font-size:11px; color: var(--dark-grey);">\${s}px</code>
          </div>
        \`)}
    </div>
  \`
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`rounded\` toggles between a circle clip and a rounded rectangle.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rounded</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="SA" size="40" rounded="false"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">rectangle</code>
      </div>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Strict lookup',
  parameters: {
    docs: {
      description: {
        story: '\`strict\` only tries the exact \`{CODE}.png\` filename. If your asset folder has numbered variants only, leave \`strict\` off so the component can fall back.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:center;">
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40" strict></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">strict</code>
      </div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
        <ds-flag code="QA" size="40"></ds-flag>
        <code style="font-size:11px; color: var(--dark-grey);">with fallback</code>
      </div>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Unknown code',
  parameters: {
    docs: {
      description: {
        story: 'When \`code\` is empty or every candidate fails to load, a neutral placeholder is rendered with \`aria-hidden\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-flag code="" size="40"></ds-flag>
      <ds-flag code="ZZ" size="40" strict></ds-flag>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};const f=["Playground","CommonFlags","SizeScale","Shapes","StrictMode","UnknownCode"];export{t as CommonFlags,a as Playground,r as Shapes,n as SizeScale,o as StrictMode,d as UnknownCode,f as __namedExportsOrder,m as default};
