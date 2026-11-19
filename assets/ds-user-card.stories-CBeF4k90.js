import{b as e}from"./iframe-BsDVw_Q3.js";import"./preload-helper-BoLA5O2a.js";const c=["xl","large","medium","small","x-small","xx-small"],l=["circle","square","rounded"],d={id:1,name:"Aisha Al Qahtani",title:"Operations manager",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=60"},u={title:"Components/User Card",component:"ds-user-card",parameters:{docs:{description:{component:["Identity summary — avatar, name, title, and an optional content slot","for supplementary details (badges, contact lines, actions).","","**`user-info`** accepts a `{ name, title, image? }` object (JSX) or its","JSON-stringified form (HTML). Invalid JSON renders nothing — the host","stays empty.","","The default slot is rendered below the name + title; use the **`close`**","slot for a dismiss control on the right side."].join(`
`)}}},args:{userInfo:JSON.stringify(d),imageSize:"medium",imageShape:"circle",body:""},argTypes:{userInfo:{control:"text",description:"JSON-encoded `{ name, title, image? }`."},imageSize:{control:"select",options:c,description:"Avatar size. Defaults to `medium`.",table:{defaultValue:{summary:"medium"}}},imageShape:{control:"select",options:l,description:"Avatar shape.",table:{defaultValue:{summary:"circle"}}},body:{control:"text",description:"Optional supplementary content (rendered under name + title).",table:{category:"Slots"}}},render:s=>e`
    <ds-user-card
      user-info=${s.userInfo}
      image-size=${s.imageSize}
      image-shape=${s.imageShape}
    >
      ${s.body?e`<div>${s.body}</div>`:null}
    </ds-user-card>
  `},t={},r={name:"Avatar sizes",parameters:{docs:{description:{story:"The avatar scales independently from the typography."}}},render:()=>e`
    <div style="display:grid; gap:12px;">
      ${c.map(s=>e`
          <ds-user-card user-info=${JSON.stringify(d)} image-size=${s}></ds-user-card>
        `)}
    </div>
  `},a={name:"Without photo (initials)",parameters:{docs:{description:{story:"When `image` is omitted, the avatar derives initials from the user name."}}},render:()=>e`
    <ds-user-card
      user-info=${JSON.stringify({name:"Khalid Al Mutairi",title:"Site supervisor"})}
    ></ds-user-card>
  `},n={name:"With supplementary content",parameters:{docs:{description:{story:"Drop badges, contact rows, or actions into the default slot."}}},render:()=>e`
    <ds-user-card user-info=${JSON.stringify(d)}>
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top: 6px;">
        <ds-status status="success" status-icon size="small">Online</ds-status>
        <ds-status palette="purple-100" size="small">Operations</ds-status>
      </div>
    </ds-user-card>
  `},o={name:"With close control",parameters:{docs:{description:{story:"Use the `close` slot to add a dismiss control aligned to the right of the card — typical for chips, mentions, and assignment pickers."}}},render:()=>e`
    <ds-user-card user-info=${JSON.stringify(d)} image-size="small">
      <ds-button
        slot="close"
        shape="text"
        color="dark-grey"
        size="small"
        no-space
        icon="true"
        aria-label="Remove user"
      >
        <ds-icon icon="close" size="18"></ds-icon>
      </ds-button>
    </ds-user-card>
  `},i={name:"Invalid JSON",parameters:{docs:{description:{story:"If `user-info` is not valid JSON, the host stays empty rather than throwing."}}},render:()=>e`<ds-user-card user-info="[this is not json]"></ds-user-card>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Avatar sizes',
  parameters: {
    docs: {
      description: {
        story: 'The avatar scales independently from the typography.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:12px;">
      \${SIZES.map(s => html\`
          <ds-user-card user-info=\${JSON.stringify(SAMPLE_USER)} image-size=\${s}></ds-user-card>
        \`)}
    </div>
  \`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Without photo (initials)',
  parameters: {
    docs: {
      description: {
        story: 'When \`image\` is omitted, the avatar derives initials from the user name.'
      }
    }
  },
  render: () => html\`
    <ds-user-card
      user-info=\${JSON.stringify({
    name: 'Khalid Al Mutairi',
    title: 'Site supervisor'
  })}
    ></ds-user-card>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With supplementary content',
  parameters: {
    docs: {
      description: {
        story: 'Drop badges, contact rows, or actions into the default slot.'
      }
    }
  },
  render: () => html\`
    <ds-user-card user-info=\${JSON.stringify(SAMPLE_USER)}>
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top: 6px;">
        <ds-status status="success" status-icon size="small">Online</ds-status>
        <ds-status palette="purple-100" size="small">Operations</ds-status>
      </div>
    </ds-user-card>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With close control',
  parameters: {
    docs: {
      description: {
        story: 'Use the \`close\` slot to add a dismiss control aligned to the right of the card — typical for chips, mentions, and assignment pickers.'
      }
    }
  },
  render: () => html\`
    <ds-user-card user-info=\${JSON.stringify(SAMPLE_USER)} image-size="small">
      <ds-button
        slot="close"
        shape="text"
        color="dark-grey"
        size="small"
        no-space
        icon="true"
        aria-label="Remove user"
      >
        <ds-icon icon="close" size="18"></ds-icon>
      </ds-button>
    </ds-user-card>
  \`
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Invalid JSON',
  parameters: {
    docs: {
      description: {
        story: 'If \`user-info\` is not valid JSON, the host stays empty rather than throwing.'
      }
    }
  },
  render: () => html\`<ds-user-card user-info="[this is not json]"></ds-user-card>\`
}`,...i.parameters?.docs?.source}}};const h=["Playground","AvatarSizes","InitialsFallback","WithBody","WithCloseSlot","InvalidJson"];export{r as AvatarSizes,a as InitialsFallback,i as InvalidJson,t as Playground,n as WithBody,o as WithCloseSlot,h as __namedExportsOrder,u as default};
