import{b as t}from"./iframe-BsDVw_Q3.js";import{o as p}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const d=["small","medium","large"],c=["default","primary","secondary","info","success","warning","error","draft","approved"],u=["","purple-100","purple-300","purple-500","coral-100","coral-300","coral-500","sea-100","sea-300","sea-500","success-100","success-300","success-500","error-100","error-300","error-500","grey-100","grey-300","grey-500"],g={title:"Components/Status",component:"ds-status",parameters:{docs:{description:{component:["Compact status badge with semantic presets and palette overrides.","","**`status`** picks one of the semantic keys (`default`, `primary`,","`success`, `warning`, `error`, `draft`, `approved`, …) — each maps to","a tinted background and label using the foundation `--rgb-*` tokens.","","**`palette`** overrides the colour while keeping the semantic accessibility","role — pass any palette token (e.g. `purple-500`, `coral-100`).","","**`status-icon`** prepends a coloured dot. **`no-opacity`** switches to a","solid fill with white label (use sparingly for high-emphasis pills)."].join(`
`)}}},args:{status:"success",palette:"",size:"small",statusIcon:!1,noOpacity:!1,icon:!1,label:"Active"},argTypes:{status:{control:"select",options:c,description:"Semantic status key. Drives tint + label colour.",table:{defaultValue:{summary:"default"}}},palette:{control:"select",options:u,description:"Override colour with any palette token."},size:{control:"select",options:d,description:"Pill size. Small is the design default (22px height).",table:{defaultValue:{summary:"small"}}},statusIcon:{control:"boolean",description:"Show a leading coloured dot."},noOpacity:{control:"boolean",description:"Solid fill — saturated background + white label."},icon:{control:"boolean",description:"Icon-only badge (square aspect)."},label:{control:"text",description:"Slotted label text.",table:{category:"Slots"}}},render:s=>t`
    <ds-status
      status=${s.status}
      palette=${p(s.palette?s.palette:void 0)}
      size=${s.size}
      ?status-icon=${s.statusIcon}
      ?no-opacity=${s.noOpacity}
      ?icon=${s.icon}
    >
      ${s.label}
    </ds-status>
  `},e={},a={name:"Semantic statuses",parameters:{docs:{description:{story:"Default tinted variant — soft background with the matching label colour."}}},render:()=>t`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      ${c.map(s=>t`<ds-status status=${s}>${s}</ds-status>`)}
    </div>
  `},r={name:"Palette overrides",parameters:{docs:{description:{story:"Any foundation palette token can be used via `palette`. Use this for product- or domain-specific pills that don’t fit the semantic axis."}}},render:()=>t`
    <div style="display:grid; gap:8px;">
      ${["purple","coral","sea","success","error"].map(s=>t`
          <div style="display:flex; gap:8px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${s}</code>
            ${["100","300","500"].map(l=>t`
                <ds-status palette="${s}-${l}">${s}-${l}</ds-status>
              `)}
          </div>
        `)}
    </div>
  `},o={render:()=>t`
    <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
      ${d.map(s=>t`<ds-status status="success" size=${s}>${s}</ds-status>`)}
    </div>
  `},n={name:"With status dot",parameters:{docs:{description:{story:"`status-icon` adds a leading coloured dot — useful for online / live indicators."}}},render:()=>t`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      <ds-status status="success" status-icon>Online</ds-status>
      <ds-status status="warning" status-icon>At risk</ds-status>
      <ds-status status="error" status-icon>Offline</ds-status>
      <ds-status status="draft" status-icon>Draft</ds-status>
    </div>
  `},i={name:"Solid fill (no-opacity)",parameters:{docs:{description:{story:"`no-opacity` flips to a saturated fill with a white label. Reserve for high-emphasis states (alerts, hero pills)."}}},render:()=>t`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      ${["success","warning","error","primary","info"].map(s=>t`<ds-status status=${s} no-opacity>${s}</ds-status>`)}
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Semantic statuses',
  parameters: {
    docs: {
      description: {
        story: 'Default tinted variant — soft background with the matching label colour.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      \${SEMANTIC_STATUSES.map(s => html\`<ds-status status=\${s}>\${s}</ds-status>\`)}
    </div>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Palette overrides',
  parameters: {
    docs: {
      description: {
        story: 'Any foundation palette token can be used via \`palette\`. Use this for product- or domain-specific pills that don’t fit the semantic axis.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:8px;">
      \${['purple', 'coral', 'sea', 'success', 'error'].map(family => html\`
          <div style="display:flex; gap:8px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">\${family}</code>
            \${['100', '300', '500'].map(tint => html\`
                <ds-status palette="\${family}-\${tint}">\${family}-\${tint}</ds-status>
              \`)}
          </div>
        \`)}
    </div>
  \`
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  render: () => html`\n    <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">\n      ${SIZES.map(s => html`<ds-status status="success" size=${s}>${s}</ds-status>`)}\n    </div>\n  `\n}',...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With status dot',
  parameters: {
    docs: {
      description: {
        story: '\`status-icon\` adds a leading coloured dot — useful for online / live indicators.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      <ds-status status="success" status-icon>Online</ds-status>
      <ds-status status="warning" status-icon>At risk</ds-status>
      <ds-status status="error" status-icon>Offline</ds-status>
      <ds-status status="draft" status-icon>Draft</ds-status>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Solid fill (no-opacity)',
  parameters: {
    docs: {
      description: {
        story: '\`no-opacity\` flips to a saturated fill with a white label. Reserve for high-emphasis states (alerts, hero pills).'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
      \${['success', 'warning', 'error', 'primary', 'info'].map(s => html\`<ds-status status=\${s} no-opacity>\${s}</ds-status>\`)}
    </div>
  \`
}`,...i.parameters?.docs?.source}}};const h=["Playground","SemanticStatuses","PaletteOverrides","Sizes","WithDot","SolidFill"];export{r as PaletteOverrides,e as Playground,a as SemanticStatuses,o as Sizes,i as SolidFill,n as WithDot,h as __namedExportsOrder,g as default};
