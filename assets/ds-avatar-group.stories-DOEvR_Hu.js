import{b as e}from"./iframe-BsDVw_Q3.js";import{o as d}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const n=["xl","large","medium","small","x-small","xx-small"],i=[{label:"Maha",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=60"},{label:"Khalid",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=60"},{label:"Salem"}],m={title:"Components/Avatar Group",component:"ds-avatar-group",parameters:{docs:{description:{component:["Horizontal stack of overlapping `<ds-avatar>` elements.","","Provide avatars in the default slot. The optional **`overflow`** prop",'renders a circular count badge (e.g. `"+3"`), and **`add-button`** renders',"a trailing `+` control that emits `dsAvatarGroupAdd` on click.","","Keep nested `<ds-avatar size>` matching the group `size` for consistent overlap spacing."].join(`
`)}},actions:{handles:["dsAvatarGroupAdd"]}},args:{size:"medium",overflow:"+3",addButton:!0,addLabel:"Add"},argTypes:{size:{control:"select",options:n,description:"Group + nested avatar size. Defaults to `medium`.",table:{defaultValue:{summary:"medium"}}},overflow:{control:"text",description:'Optional count badge appended after avatars, e.g. `"+3"`.'},addButton:{control:"boolean",description:'Render a circular "+" control. Emits `dsAvatarGroupAdd`.',table:{defaultValue:{summary:"false"}}},addLabel:{control:"text",description:"Accessible label for the add control.",table:{defaultValue:{summary:"Add"}}}},render:a=>e`
    <ds-avatar-group
      size=${a.size}
      overflow=${d(a.overflow?a.overflow:void 0)}
      ?add-button=${a.addButton}
      add-label=${d(a.addLabel?a.addLabel:void 0)}
      @dsAvatarGroupAdd=${()=>console.log("dsAvatarGroupAdd")}
    >
      ${i.map(l=>e`
          <ds-avatar
            size=${a.size}
            label=${l.label}
            image=${d(l.image)}
          ></ds-avatar>
        `)}
    </ds-avatar-group>
  `},r={},t={name:"All sizes",parameters:{docs:{description:{story:"Group size scales the inner overlap and applies to every nested avatar."}}},render:()=>e`
    <div style="display:grid; gap:16px;">
      ${n.map(a=>e`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:72px; font-size:11px; color: var(--dark-grey);">${a}</code>
            <ds-avatar-group size=${a} overflow="+2">
              <ds-avatar size=${a} label="AA"></ds-avatar>
              <ds-avatar size=${a} label="BB"></ds-avatar>
              <ds-avatar size=${a} label="CC"></ds-avatar>
            </ds-avatar-group>
          </div>
        `)}
    </div>
  `},s={name:"With overflow badge",parameters:{docs:{description:{story:"Use `overflow` to summarise hidden avatars. The badge becomes a sibling element at the end of the stack."}}},render:()=>e`
    <div style="display:flex; align-items:center; gap:24px; flex-wrap:wrap;">
      <ds-avatar-group overflow="+5">
        <ds-avatar label="Maha"></ds-avatar>
        <ds-avatar label="Khalid"></ds-avatar>
        <ds-avatar label="Salem"></ds-avatar>
      </ds-avatar-group>
      <ds-avatar-group overflow="+99">
        <ds-avatar label="Hana"></ds-avatar>
        <ds-avatar label="Yara"></ds-avatar>
      </ds-avatar-group>
    </div>
  `},o={name:"With add button",parameters:{docs:{description:{story:"Combine `add-button` with `overflow` to show both — the add control always renders last. Open the browser console to see the `dsAvatarGroupAdd` event fire on click."}}},render:()=>e`
    <ds-avatar-group
      overflow="+3"
      add-button
      add-label="Invite teammate"
      @dsAvatarGroupAdd=${()=>console.log("dsAvatarGroupAdd")}
    >
      <ds-avatar label="Maha"></ds-avatar>
      <ds-avatar label="Khalid"></ds-avatar>
      <ds-avatar label="Salem"></ds-avatar>
    </ds-avatar-group>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'All sizes',
  parameters: {
    docs: {
      description: {
        story: 'Group size scales the inner overlap and applies to every nested avatar.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:16px;">
      \${SIZES.map(s => html\`
          <div style="display:flex; align-items:center; gap:12px;">
            <code style="width:72px; font-size:11px; color: var(--dark-grey);">\${s}</code>
            <ds-avatar-group size=\${s} overflow="+2">
              <ds-avatar size=\${s} label="AA"></ds-avatar>
              <ds-avatar size=\${s} label="BB"></ds-avatar>
              <ds-avatar size=\${s} label="CC"></ds-avatar>
            </ds-avatar-group>
          </div>
        \`)}
    </div>
  \`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With overflow badge',
  parameters: {
    docs: {
      description: {
        story: 'Use \`overflow\` to summarise hidden avatars. The badge becomes a sibling element at the end of the stack.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; align-items:center; gap:24px; flex-wrap:wrap;">
      <ds-avatar-group overflow="+5">
        <ds-avatar label="Maha"></ds-avatar>
        <ds-avatar label="Khalid"></ds-avatar>
        <ds-avatar label="Salem"></ds-avatar>
      </ds-avatar-group>
      <ds-avatar-group overflow="+99">
        <ds-avatar label="Hana"></ds-avatar>
        <ds-avatar label="Yara"></ds-avatar>
      </ds-avatar-group>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With add button',
  parameters: {
    docs: {
      description: {
        story: 'Combine \`add-button\` with \`overflow\` to show both — the add control always renders last. Open the browser console to see the \`dsAvatarGroupAdd\` event fire on click.'
      }
    }
  },
  render: () => html\`
    <ds-avatar-group
      overflow="+3"
      add-button
      add-label="Invite teammate"
      @dsAvatarGroupAdd=\${() => console.log('dsAvatarGroupAdd')}
    >
      <ds-avatar label="Maha"></ds-avatar>
      <ds-avatar label="Khalid"></ds-avatar>
      <ds-avatar label="Salem"></ds-avatar>
    </ds-avatar-group>
  \`
}`,...o.parameters?.docs?.source}}};const u=["Playground","AllSizes","WithOverflow","WithAddButton"];export{t as AllSizes,r as Playground,o as WithAddButton,s as WithOverflow,u as __namedExportsOrder,m as default};
