import{b as o}from"./iframe-BsDVw_Q3.js";import{o as r}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const l=["stc-logo","stc-pay","stc-solutions","channels","intigral","sirar"],p={title:"Components/Logo",component:"ds-logo",parameters:{docs:{description:{component:["Brand / partner logo loaded as a PNG from the configured logo asset","directory (default `assets/logo/`).","","The **`logo`** prop is the file stem (slug) — kebab-case `stc-logo.png`",'becomes `logo="stc-logo"`. In non-strict mode the component also tries',"the space-separated and title-case variants (`stc logo.png`,","`Stc Logo.png`) for backwards compatibility.","","Set **`base-path`** to override the global directory configured in","`preview.ts` (or via `DsLogo.setBasePath()` in apps)."].join(`
`)}}},args:{logo:"stc-logo",size:56,strict:!1,alt:"",basePath:""},argTypes:{logo:{control:"text",description:"File stem (e.g. `stc-logo`)."},size:{control:{type:"number",min:24,max:160,step:4},description:"Logo width in px. Height is intrinsic.",table:{defaultValue:{summary:"48"}}},strict:{control:"boolean",description:"Only try the kebab-case and space-separated filenames (no title-case fallback)."},alt:{control:"text",description:'Override the auto-generated `alt` text (`"{logo} logo"`).'},basePath:{control:"text",description:"Override the asset base path. Empty uses the global path from `preview.ts`."}},render:e=>o`
    <ds-logo
      logo=${e.logo}
      size=${e.size}
      ?strict=${e.strict}
      alt=${r(e.alt?e.alt:void 0)}
      base-path=${r(e.basePath?e.basePath:void 0)}
    ></ds-logo>
  `},s={},t={name:"Brand lineup",parameters:{docs:{description:{story:"A selection of brand and partner logos available in the default asset set."}}},render:()=>o`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:center;">
      ${l.map(e=>o`
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
            <ds-logo logo=${e} size="64"></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">${e}</code>
          </div>
        `)}
    </div>
  `},a={name:"Size scale",render:()=>o`
    <div style="display:flex; gap:24px; align-items:end; flex-wrap:wrap;">
      ${[32,48,64,96,128].map(e=>o`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-logo logo="stc-logo" size=${e}></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">${e}px</code>
          </div>
        `)}
    </div>
  `},n={name:"Unknown slug",parameters:{docs:{description:{story:"When `logo` is empty or every candidate fails to load, a neutral fallback is rendered with `aria-hidden`."}}},render:()=>o`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-logo size="64"></ds-logo>
      <ds-logo logo="does-not-exist" size="64" strict></ds-logo>
    </div>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Brand lineup',
  parameters: {
    docs: {
      description: {
        story: 'A selection of brand and partner logos available in the default asset set.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:24px; flex-wrap:wrap; align-items:center;">
      \${COMMON_LOGOS.map(slug => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
            <ds-logo logo=\${slug} size="64"></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">\${slug}</code>
          </div>
        \`)}
    </div>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Size scale',
  render: () => html\`
    <div style="display:flex; gap:24px; align-items:end; flex-wrap:wrap;">
      \${[32, 48, 64, 96, 128].map(s => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-logo logo="stc-logo" size=\${s}></ds-logo>
            <code style="font-size:11px; color: var(--dark-grey);">\${s}px</code>
          </div>
        \`)}
    </div>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Unknown slug',
  parameters: {
    docs: {
      description: {
        story: 'When \`logo\` is empty or every candidate fails to load, a neutral fallback is rendered with \`aria-hidden\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:center;">
      <ds-logo size="64"></ds-logo>
      <ds-logo logo="does-not-exist" size="64" strict></ds-logo>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};const g=["Playground","BrandLineup","SizeScale","UnknownLogo"];export{t as BrandLineup,s as Playground,a as SizeScale,n as UnknownLogo,g as __namedExportsOrder,p as default};
