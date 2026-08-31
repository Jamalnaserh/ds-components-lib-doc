import{b as e}from"./iframe-BsDVw_Q3.js";import{o as d}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const o=["","active","pending","blocked","error","draft","inactive"],l={title:"Components/Card",component:"ds-card",parameters:{docs:{description:{component:["Layout container with four optional regions:","","- **`image`** — hero or media at the top.","- **`header`** — title + actions row.","- **default** — main content.","- **`footer`** — footer actions or metadata.","","`card-status` sets a left status strip and a `card--status-<value>` root","class so apps can theme the surface per state (`active`, `pending`,","`blocked`, `error`, `draft`, `inactive`)."].join(`
`)}}},args:{cardStatus:"active",withImage:!0,withHeader:!0,withFooter:!0},argTypes:{cardStatus:{control:"select",options:o,description:"Status strip + root modifier class."},withImage:{control:"boolean",description:"Render the `image` slot."},withHeader:{control:"boolean",description:"Render the `header` slot."},withFooter:{control:"boolean",description:"Render the `footer` slot."}},render:t=>e`
    <ds-card
      card-status=${d(t.cardStatus?t.cardStatus:void 0)}
      style="--card-image-height: 160px; --card-padding: 16px; max-width: 360px;"
    >
      ${t.withImage?e`<img
            slot="image"
            alt="Team collaboration"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
            style="width:100%; height: 160px; object-fit: cover;"
          />`:null}
      ${t.withHeader?e`<div
            slot="header"
            style="display:flex; align-items:center; justify-content:space-between; gap:12px;"
          >
            <div>
              <div style="font-weight:700; color: var(--dark-blue, var(--primary));">
                Workspace request
              </div>
              <div style="font-size:12px; color: var(--dark-grey);">REQ-10294</div>
            </div>
            <ds-button shape="text" color="primary" size="small">View</ds-button>
          </div>`:null}
      <div style="display:grid; gap:10px;">
        <div style="color: var(--dark-grey);">
          A realistic body area: description text, metadata, and content that can wrap across lines.
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <ds-status color="primary" size="small">Primary</ds-status>
          <ds-status color="grey-200" size="small">Tag</ds-status>
        </div>
      </div>
      ${t.withFooter?e`<div
            slot="footer"
            style="display:flex; align-items:center; justify-content:space-between; gap:12px;"
          >
            <div style="font-size:12px; color: var(--dark-grey);">Updated 2 hours ago</div>
            <ds-button color="primary" size="small">Approve</ds-button>
          </div>`:null}
    </ds-card>
  `},a={},r={name:"Slot combinations",parameters:{docs:{description:{story:"Each region renders only when its slot has content. Mix and match `image`, `header`, default, and `footer` freely."}}},render:()=>e`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"
    >
      <ds-card style="--card-padding: 16px;">
        <div slot="header" style="font-weight:700;">Header + body</div>
        Body only content.
      </ds-card>

      <ds-card style="--card-padding: 16px;">
        <img
          slot="image"
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=60"
          style="width:100%; height: 140px; object-fit: cover;"
        />
        Image + body
      </ds-card>

      <ds-card style="--card-padding: 16px;">Body only (no header / image / footer).</ds-card>

      <ds-card style="--card-padding: 16px;">
        <div slot="footer" style="display:flex; justify-content:flex-end;">
          <ds-button color="primary" size="small">Action</ds-button>
        </div>
        Body + footer
      </ds-card>
    </div>
  `},s={name:"Status variants",parameters:{docs:{description:{story:"`card-status` adds a coloured left strip and a `card--status-<value>` class on the root. Apps can override or extend the status palette in their own stylesheet."}}},render:()=>e`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;"
    >
      ${o.filter(Boolean).map(t=>e`
          <ds-card card-status=${t} style="--card-padding: 14px;">
            <div
              slot="header"
              style="font-weight:700; display:flex; justify-content:space-between;"
            >
              <span style="text-transform: capitalize;">${t}</span>
              <ds-icon icon="info" size="18" color="var(--dark-grey)"></ds-icon>
            </div>
            Status strip + root modifier class for styling.
          </ds-card>
        `)}
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Slot combinations',
  parameters: {
    docs: {
      description: {
        story: 'Each region renders only when its slot has content. Mix and match \`image\`, \`header\`, default, and \`footer\` freely.'
      }
    }
  },
  render: () => html\`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"
    >
      <ds-card style="--card-padding: 16px;">
        <div slot="header" style="font-weight:700;">Header + body</div>
        Body only content.
      </ds-card>

      <ds-card style="--card-padding: 16px;">
        <img
          slot="image"
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=60"
          style="width:100%; height: 140px; object-fit: cover;"
        />
        Image + body
      </ds-card>

      <ds-card style="--card-padding: 16px;">Body only (no header / image / footer).</ds-card>

      <ds-card style="--card-padding: 16px;">
        <div slot="footer" style="display:flex; justify-content:flex-end;">
          <ds-button color="primary" size="small">Action</ds-button>
        </div>
        Body + footer
      </ds-card>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Status variants',
  parameters: {
    docs: {
      description: {
        story: '\`card-status\` adds a coloured left strip and a \`card--status-<value>\` class on the root. Apps can override or extend the status palette in their own stylesheet.'
      }
    }
  },
  render: () => html\`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;"
    >
      \${STATUSES.filter(Boolean).map(s => html\`
          <ds-card card-status=\${s} style="--card-padding: 14px;">
            <div
              slot="header"
              style="font-weight:700; display:flex; justify-content:space-between;"
            >
              <span style="text-transform: capitalize;">\${s}</span>
              <ds-icon icon="info" size="18" color="var(--dark-grey)"></ds-icon>
            </div>
            Status strip + root modifier class for styling.
          </ds-card>
        \`)}
    </div>
  \`
}`,...s.parameters?.docs?.source}}};const p=["Playground","SlotCombinations","StatusVariants"];export{a as Playground,r as SlotCombinations,s as StatusVariants,p as __namedExportsOrder,l as default};
