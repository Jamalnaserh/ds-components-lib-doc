import{b as a}from"./iframe-BsDVw_Q3.js";import{o as n}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const o=["xl","large","medium","small","x-small","xx-small"],d=["circle","square","rounded"],f={title:"Components/Avatar",component:"ds-avatar",parameters:{docs:{description:{component:["User identity surface. Renders an image when `image` resolves; otherwise","falls back to initials extracted from `label` (two words → first letter of","each; one word → first two letters). If the image fails to load and no","label is provided, a default user illustration is shown.","","Sizes follow the design spec: **xl** ≈ 52px, **large** 40px, **medium**","32px, **small** 24px, with **x-small** and **xx-small** for dense UIs."].join(`
`)}}},args:{label:"Aisha Al Qahtani",image:"",size:"medium",shape:"circle"},argTypes:{label:{control:"text",description:"Full name. Drives the `aria-label`, the `alt` text on the image, and the initials when no image is set."},image:{control:"text",description:"Image URL. When empty, initials from `label` are shown instead."},size:{control:"select",options:o,description:"Visual size. Defaults to `medium` (32px).",table:{defaultValue:{summary:"medium"}}},shape:{control:"select",options:d,description:"Frame shape — `circle` (default), `rounded`, or `square`.",table:{defaultValue:{summary:"circle"}}}},render:e=>a`
    <ds-avatar
      label=${n(e.label?e.label:void 0)}
      image=${n(e.image?e.image:void 0)}
      size=${e.size}
      shape=${e.shape}
    ></ds-avatar>
  `},s={},r={name:"All sizes",parameters:{docs:{description:{story:"Reference scale per the design spec. Use **xl/large/medium/small** for surfaces and **x-small/xx-small** for dense lists and inline mentions."}}},render:()=>a`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      ${o.map(e=>a`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="DS" size=${e}></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">${e}</code>
          </div>
        `)}
    </div>
  `},t={parameters:{docs:{description:{story:"`circle` is the default and the most common. `rounded` is a softened square for compact list rows; `square` for brand or product badges."}}},render:()=>a`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      ${d.map(e=>a`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="Aisha Al Qahtani" shape=${e} size="large"></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">${e}</code>
          </div>
        `)}
    </div>
  `},i={name:"Initials fallback",parameters:{docs:{description:{story:"When no `image` is set, the avatar derives initials from `label`. Two words → first letter of each; one word → first two letters; empty label → default user illustration."}}},render:()=>a`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar label="Aisha Al Qahtani" size="large"></ds-avatar>
      <ds-avatar label="Noura" size="large"></ds-avatar>
      <ds-avatar label="" size="large"></ds-avatar>
    </div>
  `},l={name:"With image",parameters:{docs:{description:{story:"When `image` is provided, the photo is shown. If the URL fails to load, the avatar falls back to initials (or to the default user illustration if there are none)."}}},render:()=>a`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar
        label="Noura Sami"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=60"
        size="large"
      ></ds-avatar>
      <ds-avatar
        label="Invalid image → initials"
        image="/this-does-not-exist.png"
        size="large"
      ></ds-avatar>
      <ds-avatar label="" image="/this-does-not-exist.png" size="large"></ds-avatar>
    </div>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All sizes',
  parameters: {
    docs: {
      description: {
        story: 'Reference scale per the design spec. Use **xl/large/medium/small** for surfaces and **x-small/xx-small** for dense lists and inline mentions.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      \${SIZES.map(size => html\`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="DS" size=\${size}></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">\${size}</code>
          </div>
        \`)}
    </div>
  \`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '\`circle\` is the default and the most common. \`rounded\` is a softened square for compact list rows; \`square\` for brand or product badges.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      \${SHAPES.map(shape => html\`
          <div style="display:grid; gap:6px; justify-items:center;">
            <ds-avatar label="Aisha Al Qahtani" shape=\${shape} size="large"></ds-avatar>
            <code style="font-size:11px; color: var(--dark-grey);">\${shape}</code>
          </div>
        \`)}
    </div>
  \`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Initials fallback',
  parameters: {
    docs: {
      description: {
        story: 'When no \`image\` is set, the avatar derives initials from \`label\`. Two words → first letter of each; one word → first two letters; empty label → default user illustration.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar label="Aisha Al Qahtani" size="large"></ds-avatar>
      <ds-avatar label="Noura" size="large"></ds-avatar>
      <ds-avatar label="" size="large"></ds-avatar>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With image',
  parameters: {
    docs: {
      description: {
        story: 'When \`image\` is provided, the photo is shown. If the URL fails to load, the avatar falls back to initials (or to the default user illustration if there are none).'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
      <ds-avatar
        label="Noura Sami"
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=60"
        size="large"
      ></ds-avatar>
      <ds-avatar
        label="Invalid image → initials"
        image="/this-does-not-exist.png"
        size="large"
      ></ds-avatar>
      <ds-avatar label="" image="/this-does-not-exist.png" size="large"></ds-avatar>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};const g=["Playground","AllSizes","Shapes","InitialsFallback","WithImage"];export{r as AllSizes,i as InitialsFallback,s as Playground,t as Shapes,l as WithImage,g as __namedExportsOrder,f as default};
