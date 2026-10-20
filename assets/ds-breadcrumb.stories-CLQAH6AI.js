import{b as r}from"./iframe-BsDVw_Q3.js";import{o as m}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const d=[{label:"Home",href:"/"},{label:"eServices",href:"/eservices"},{label:"Requests",href:"/eservices/requests"},{label:"Request details"}],c=[{label:"Home",href:"/"},{label:"Dashboard"}],l=[{label:"Home",href:"/"},{label:"Safety",href:"/safety"},{label:"Work permits",href:"/safety/permits"},{label:"Hot work",href:"/safety/permits/hot"},{label:"Permit #HW-2026-014"}],b={title:"Components/Breadcrumb",component:"ds-breadcrumb",parameters:{docs:{description:{component:["Navigation trail showing the user’s position in a hierarchy.","","Provide `items` as an **array** in JS or a **JSON string** in HTML.","Each entry has `label` and optional `href`. Omit `href` on the last",'entry so it renders as the current page (`aria-current="page"`,',"bold, not a link). Invalid JSON renders an empty `<nav>` rather than","throwing.","","When `home-icon` is enabled (default), a home outline icon is prepended","to the first link. Chevrons between segments use the `arrow-right-2` icon","sized relative to `icon-size`."].join(`
`)}}},args:{items:JSON.stringify(d),homeIcon:!0,iconSize:18,ariaLabel:"Breadcrumb"},argTypes:{items:{control:"text",description:"JSON-encoded array of `{ label, href? }` segments."},homeIcon:{control:"boolean",description:"Prepend a home outline icon to the first link.",table:{defaultValue:{summary:"true"}}},iconSize:{control:{type:"number",min:12,max:28,step:1},description:"Icon size in px for the home glyph and chevrons.",table:{defaultValue:{summary:"18"}}},ariaLabel:{control:"text",description:"Accessible name for the `<nav>` landmark.",table:{defaultValue:{summary:"Breadcrumb"}}}},render:e=>r`
    <ds-breadcrumb
      items=${e.items}
      ?home-icon=${e.homeIcon}
      icon-size=${e.iconSize}
      aria-label=${m(e.ariaLabel?e.ariaLabel:void 0)}
    ></ds-breadcrumb>
  `},s={},a={name:"Without home icon",parameters:{docs:{description:{story:'Set `home-icon="false"` (or omit the attribute via the prop) to suppress the leading home glyph.'}}},render:()=>r`
    <ds-breadcrumb items=${JSON.stringify(d)} home-icon="false"></ds-breadcrumb>
  `},t={name:"Short trail",parameters:{docs:{description:{story:"Two-segment trail — useful for `Home → <Page>` headers."}}},render:()=>r`<ds-breadcrumb items=${JSON.stringify(c)}></ds-breadcrumb>`},n={name:"Long trail",parameters:{docs:{description:{story:"Deep hierarchy. The last segment is rendered as the current page; everything else is a link."}}},render:()=>r`<ds-breadcrumb items=${JSON.stringify(l)}></ds-breadcrumb>`},o={name:"Icon size scale",parameters:{docs:{description:{story:"The `icon-size` prop scales both the home glyph and the chevrons. Chevrons render at 95% of the home size, clamped to ≥14px."}}},render:()=>r`
    <div style="display:grid; gap:12px;">
      ${[14,18,22,26].map(e=>r`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:56px; font-size:11px; color: var(--dark-grey);">${e}px</code>
            <ds-breadcrumb items=${JSON.stringify(c)} icon-size=${e}></ds-breadcrumb>
          </div>
        `)}
    </div>
  `},i={name:"Invalid JSON",parameters:{docs:{description:{story:"If `items` is not valid JSON, the breadcrumb renders empty (safe default) rather than throwing."}}},render:()=>r`<ds-breadcrumb items="[this is not json]"></ds-breadcrumb>`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Without home icon',
  parameters: {
    docs: {
      description: {
        story: 'Set \`home-icon="false"\` (or omit the attribute via the prop) to suppress the leading home glyph.'
      }
    }
  },
  render: () => html\`
    <ds-breadcrumb items=\${JSON.stringify(ITEMS_DEFAULT)} home-icon="false"></ds-breadcrumb>
  \`
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Short trail',
  parameters: {
    docs: {
      description: {
        story: 'Two-segment trail — useful for \`Home → <Page>\` headers.'
      }
    }
  },
  render: () => html\`<ds-breadcrumb items=\${JSON.stringify(ITEMS_SHORT)}></ds-breadcrumb>\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Long trail',
  parameters: {
    docs: {
      description: {
        story: 'Deep hierarchy. The last segment is rendered as the current page; everything else is a link.'
      }
    }
  },
  render: () => html\`<ds-breadcrumb items=\${JSON.stringify(ITEMS_LONG)}></ds-breadcrumb>\`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Icon size scale',
  parameters: {
    docs: {
      description: {
        story: 'The \`icon-size\` prop scales both the home glyph and the chevrons. Chevrons render at 95% of the home size, clamped to ≥14px.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:12px;">
      \${[14, 18, 22, 26].map(s => html\`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:56px; font-size:11px; color: var(--dark-grey);">\${s}px</code>
            <ds-breadcrumb items=\${JSON.stringify(ITEMS_SHORT)} icon-size=\${s}></ds-breadcrumb>
          </div>
        \`)}
    </div>
  \`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Invalid JSON',
  parameters: {
    docs: {
      description: {
        story: 'If \`items\` is not valid JSON, the breadcrumb renders empty (safe default) rather than throwing.'
      }
    }
  },
  render: () => html\`<ds-breadcrumb items="[this is not json]"></ds-breadcrumb>\`
}`,...i.parameters?.docs?.source}}};const y=["Playground","WithoutHomeIcon","ShortTrail","LongTrail","IconSizes","InvalidJson"];export{o as IconSizes,i as InvalidJson,n as LongTrail,s as Playground,t as ShortTrail,a as WithoutHomeIcon,y as __namedExportsOrder,b as default};
