import{b as t}from"./iframe-BsDVw_Q3.js";import{o as a}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const{expect:i,waitFor:$}=__STORYBOOK_MODULE_TEST__,x=["default","outline","frame","text"],w=["small","medium","large"],v=["default","disabled","loading"],S=["primary","secondary","info","success","warning","danger"],k=["",...S,"purple-100","purple-300","purple-500","coral-100","coral-300","coral-500","moon-100","moon-300","moon-500","orange-100","orange-300","orange-500","yellow-100","yellow-300","yellow-500","sea-100","sea-300","sea-500","white","black","dark-grey","light-grey","grey-50","grey-100","grey-200","grey-300","grey-400","grey-500"],D={title:"Components/Button",component:"ds-button",parameters:{docs:{description:{component:["Versatile button. Renders as a `<button>` by default, or as `<a>` when","`href` is provided. Controls visual style via three axes:","","- **`color`** — semantic (`primary`/`secondary`/`info`/`success`/`warning`/`danger`)","  or any foundation palette token (e.g. `purple-500`, `coral-100`, `sea-300`).","- **`shape`** — `default` (filled), `outline`, `frame`, or `text`.","- **`size`** — `small`, `medium` (default), `large`.","","**Icon slots:** put a `<ds-icon>` in the `prefix` or `suffix` slot and set",'`icon="left"`, `icon="right"`, or `icon="true"` for icon-only buttons.',"","**State:** `status` accepts `default` / `disabled` / `loading`. Loading","shows a spinner and toggles `aria-busy`. When `href` is set, disabled",'is communicated via `tabindex="-1"` and `aria-disabled` instead of the',"native `disabled` attribute."].join(`
`)}}},args:{label:"Button",color:"primary",shape:"default",size:"medium",status:"default",iconMode:"",rounded:!1,caret:!1,full:!1,wide:!1,noPadding:!1,noSpace:!1,href:"",target:""},argTypes:{label:{control:"text",table:{category:"Content"}},color:{control:"select",options:k,description:"Semantic colour or foundation palette token.",table:{defaultValue:{summary:"primary"}}},shape:{control:"select",options:x,description:"Visual style. `default` = filled.",table:{defaultValue:{summary:"default"}}},size:{control:"select",options:w,description:"Button size. Defaults to `medium`.",table:{defaultValue:{summary:"medium"}}},status:{control:"select",options:v,description:"Lifecycle state. `loading` shows a spinner; `disabled` blocks interaction.",table:{defaultValue:{summary:"default"}}},iconMode:{control:"select",options:["","left","right","only"],description:"`left`/`right` show an icon in the matching slot; `only` renders an icon-only button (no label)."},rounded:{control:"boolean",description:"Pill shape."},caret:{control:"boolean",description:"Trailing dropdown caret."},full:{control:"boolean",description:"Full container width (100%)."},wide:{control:"boolean",description:"Extra horizontal padding."},noPadding:{control:"boolean",description:"Remove padding (keeps width/height)."},noSpace:{control:"boolean",description:"Remove padding and shrink to content."},href:{control:"text",description:"Setting a URL renders the button as `<a>`.",table:{category:"Link"}},target:{control:"select",options:["","_self","_blank","_parent","_top"],description:"Link target. Only applies when `href` is set.",table:{category:"Link"}}},render:e=>{const n=e.iconMode==="only",o=e.iconMode==="left",s=e.iconMode==="right",r=n?!0:o?"left":s?"right":!1;return t`
      <ds-button
        color=${a(e.color?e.color:void 0)}
        shape=${e.shape}
        size=${e.size}
        status=${e.status}
        icon=${a(r?String(r):void 0)}
        ?rounded=${e.rounded}
        ?caret=${e.caret}
        ?full=${e.full}
        ?wide=${e.wide}
        ?no-padding=${e.noPadding}
        ?no-space=${e.noSpace}
        href=${a(e.href?e.href:void 0)}
        target=${a(e.target?e.target:void 0)}
        aria-label=${a(n?e.label:void 0)}
      >
        ${o?t`<ds-icon slot="prefix" icon="check" size="18"></ds-icon>`:null}
        ${n?t`<ds-icon icon="check" size="18"></ds-icon>`:t`${e.label}`}
        ${s?t`<ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>`:null}
      </ds-button>
    `}},d={},l={name:"Semantic colors",parameters:{docs:{description:{story:"Default `color` keys map to the semantic tokens defined in the foundations colours page."}}},render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${S.map(e=>t`<ds-button color=${e}>${e}</ds-button>`)}
    </div>
  `},c={name:"Palette colors",parameters:{docs:{description:{story:"Any foundation palette token can be used as `color`. Tints map directly to the colours page swatches."}}},render:()=>t`
    <div style="display:grid; gap:8px;">
      ${["purple","coral","moon","orange","yellow","sea"].map(e=>t`
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${e}</code>
            ${["100","300","500"].map(n=>t`
                <ds-button color="${e}-${n}" size="small">${e}-${n}</ds-button>
              `)}
          </div>
        `)}
    </div>
  `},p={parameters:{docs:{description:{story:"`default` filled, `outline` stroked, `frame` thicker bordered, `text` link-like with no chrome."}}},render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${x.map(e=>t`<ds-button color="primary" shape=${e}>${e}</ds-button>`)}
    </div>
  `},u={name:"All sizes",render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      ${w.map(e=>t`<ds-button color="primary" size=${e}>${e}</ds-button>`)}
    </div>
  `},m={name:"With icons",parameters:{docs:{description:{story:'Slot `<ds-icon>` into `prefix` / `suffix` and set `icon="left|right"`. For icon-only buttons set `icon="true"` and pass an `aria-label`.'}}},render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" icon="left">
        <ds-icon slot="prefix" icon="check" size="18"></ds-icon>
        Approve
      </ds-button>
      <ds-button color="primary" shape="outline" icon="right">
        Continue
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button color="primary" icon="true" aria-label="Confirm">
        <ds-icon icon="check" size="18"></ds-icon>
      </ds-button>
      <ds-button color="danger" shape="outline" icon="true" aria-label="Delete">
        <ds-icon icon="trash-o" size="18"></ds-icon>
      </ds-button>
    </div>
  `},b={name:"Status states",parameters:{docs:{description:{story:'`status="loading"` swaps the prefix area for a spinner and sets `aria-busy="true"`. `status="disabled"` blocks pointer events and emits `aria-disabled`.'}}},render:()=>t`
    <div style="display:grid; gap:12px;">
      ${["default","outline","text"].map(e=>t`
          <div style="display:flex; gap:12px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">${e}</code>
            ${v.map(n=>t`
                <ds-button color="primary" shape=${e} status=${n}>${n}</ds-button>
              `)}
          </div>
        `)}
    </div>
  `},f={name:"As link",parameters:{docs:{description:{story:'When `href` is set, the component renders `<a>` instead of `<button>`. `target="_blank"` automatically gets `rel="noopener noreferrer"`.'}}},render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button href="/local" color="primary">Internal link</ds-button>
      <ds-button
        href="https://example.com"
        target="_blank"
        color="primary"
        shape="outline"
        icon="right"
      >
        External
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button href="/file.pdf" download="report.pdf" color="primary" shape="text">
        Download report
      </ds-button>
    </div>
  `},y={name:"Width modifiers",parameters:{docs:{description:{story:"`full` stretches to the parent. `wide` adds extra horizontal padding. `no-padding` strips padding but keeps the size; `no-space` strips both padding and size — useful for inline icon-only triggers."}}},render:()=>t`
    <div style="display:grid; gap:12px; max-width: 480px;">
      <ds-button color="primary" full>full</ds-button>
      <ds-button color="primary" shape="outline" wide>wide</ds-button>
      <div style="display:flex; gap:12px; align-items:center;">
        <ds-button color="primary" shape="text" no-padding>no-padding</ds-button>
        <ds-button
          color="primary"
          shape="text"
          no-space
          icon="true"
          role="button"
          aria-label="More"
        >
          <ds-icon icon="more" size="20"></ds-icon>
        </ds-button>
      </div>
    </div>
  `},h={name:"Rounded + caret",parameters:{docs:{description:{story:'`rounded` makes the button pill-shaped. `caret` appends a dropdown indicator — combine with `icon="left"` for split-button-style triggers.'}}},render:()=>t`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" rounded>Rounded</ds-button>
      <ds-button color="primary" shape="outline" caret>Dropdown</ds-button>
      <ds-button color="primary" rounded caret icon="left">
        <ds-icon slot="prefix" icon="filter" size="18"></ds-icon>
        Filter
      </ds-button>
    </div>
  `},g={name:"Interaction: disabled blocks click",args:{label:"Submit",color:"primary",status:"disabled",iconMode:""},parameters:{docs:{description:{story:'Demonstrates Storybook’s interaction tests via a `play` function. Verifies that the host reflects `status="disabled"` and that the inner `<button>` inside the shadow root is natively disabled. Run via the **Interactions** panel or `npm run test` (Vitest addon).'}}},play:async({canvasElement:e,step:n})=>{await customElements.whenDefined("ds-button");const o=e.querySelector("ds-button");await n('Host reflects status="disabled"',async()=>{await i(o).toBeTruthy(),await i(o).toHaveAttribute("status","disabled")}),await n("Inner <button> is natively disabled",async()=>{const s=await $(()=>{const r=o?.shadowRoot?.querySelector("button");if(!r)throw new Error("Inner <button> not rendered yet");return r},{timeout:2e3});await i(s).toBeDisabled(),await i(s).toHaveAttribute("aria-disabled","true")})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Semantic colors',
  parameters: {
    docs: {
      description: {
        story: 'Default \`color\` keys map to the semantic tokens defined in the foundations colours page.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      \${SEMANTIC_COLORS.map(c => html\`<ds-button color=\${c}>\${c}</ds-button>\`)}
    </div>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Palette colors',
  parameters: {
    docs: {
      description: {
        story: 'Any foundation palette token can be used as \`color\`. Tints map directly to the colours page swatches.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:8px;">
      \${['purple', 'coral', 'moon', 'orange', 'yellow', 'sea'].map(family => html\`
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">\${family}</code>
            \${['100', '300', '500'].map(tint => html\`
                <ds-button color="\${family}-\${tint}" size="small">\${family}-\${tint}</ds-button>
              \`)}
          </div>
        \`)}
    </div>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: \'`default` filled, `outline` stroked, `frame` thicker bordered, `text` link-like with no chrome.\'\n      }\n    }\n  },\n  render: () => html`\n    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">\n      ${SHAPES.map(s => html`<ds-button color="primary" shape=${s}>${s}</ds-button>`)}\n    </div>\n  `\n}',...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All sizes',
  render: () => html\`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      \${SIZES.map(s => html\`<ds-button color="primary" size=\${s}>\${s}</ds-button>\`)}
    </div>
  \`
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With icons',
  parameters: {
    docs: {
      description: {
        story: 'Slot \`<ds-icon>\` into \`prefix\` / \`suffix\` and set \`icon="left|right"\`. For icon-only buttons set \`icon="true"\` and pass an \`aria-label\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" icon="left">
        <ds-icon slot="prefix" icon="check" size="18"></ds-icon>
        Approve
      </ds-button>
      <ds-button color="primary" shape="outline" icon="right">
        Continue
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button color="primary" icon="true" aria-label="Confirm">
        <ds-icon icon="check" size="18"></ds-icon>
      </ds-button>
      <ds-button color="danger" shape="outline" icon="true" aria-label="Delete">
        <ds-icon icon="trash-o" size="18"></ds-icon>
      </ds-button>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Status states',
  parameters: {
    docs: {
      description: {
        story: '\`status="loading"\` swaps the prefix area for a spinner and sets \`aria-busy="true"\`. \`status="disabled"\` blocks pointer events and emits \`aria-disabled\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:12px;">
      \${(['default', 'outline', 'text'] as DsButtonShape[]).map(shape => html\`
          <div style="display:flex; gap:12px; align-items:center;">
            <code style="width:64px; font-size:11px; color: var(--dark-grey);">\${shape}</code>
            \${STATUSES.map(status => html\`
                <ds-button color="primary" shape=\${shape} status=\${status}>\${status}</ds-button>
              \`)}
          </div>
        \`)}
    </div>
  \`
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'As link',
  parameters: {
    docs: {
      description: {
        story: 'When \`href\` is set, the component renders \`<a>\` instead of \`<button>\`. \`target="_blank"\` automatically gets \`rel="noopener noreferrer"\`.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button href="/local" color="primary">Internal link</ds-button>
      <ds-button
        href="https://example.com"
        target="_blank"
        color="primary"
        shape="outline"
        icon="right"
      >
        External
        <ds-icon slot="suffix" icon="arrow-right-2" size="18"></ds-icon>
      </ds-button>
      <ds-button href="/file.pdf" download="report.pdf" color="primary" shape="text">
        Download report
      </ds-button>
    </div>
  \`
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Width modifiers',
  parameters: {
    docs: {
      description: {
        story: '\`full\` stretches to the parent. \`wide\` adds extra horizontal padding. \`no-padding\` strips padding but keeps the size; \`no-space\` strips both padding and size — useful for inline icon-only triggers.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:12px; max-width: 480px;">
      <ds-button color="primary" full>full</ds-button>
      <ds-button color="primary" shape="outline" wide>wide</ds-button>
      <div style="display:flex; gap:12px; align-items:center;">
        <ds-button color="primary" shape="text" no-padding>no-padding</ds-button>
        <ds-button
          color="primary"
          shape="text"
          no-space
          icon="true"
          role="button"
          aria-label="More"
        >
          <ds-icon icon="more" size="20"></ds-icon>
        </ds-button>
      </div>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Rounded + caret',
  parameters: {
    docs: {
      description: {
        story: '\`rounded\` makes the button pill-shaped. \`caret\` appends a dropdown indicator — combine with \`icon="left"\` for split-button-style triggers.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
      <ds-button color="primary" rounded>Rounded</ds-button>
      <ds-button color="primary" shape="outline" caret>Dropdown</ds-button>
      <ds-button color="primary" rounded caret icon="left">
        <ds-icon slot="prefix" icon="filter" size="18"></ds-icon>
        Filter
      </ds-button>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Interaction: disabled blocks click',
  args: {
    label: 'Submit',
    color: 'primary',
    status: 'disabled',
    iconMode: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates Storybook’s interaction tests via a \`play\` function. Verifies that the host reflects \`status="disabled"\` and that the inner \`<button>\` inside the shadow root is natively disabled. Run via the **Interactions** panel or \`npm run test\` (Vitest addon).'
      }
    }
  },
  play: async ({
    canvasElement,
    step
  }) => {
    await customElements.whenDefined('ds-button');
    const host = canvasElement.querySelector('ds-button') as HTMLElement | null;
    await step('Host reflects status="disabled"', async () => {
      await expect(host).toBeTruthy();
      await expect(host).toHaveAttribute('status', 'disabled');
    });
    await step('Inner <button> is natively disabled', async () => {
      const inner = await waitFor(() => {
        const el = host?.shadowRoot?.querySelector('button');
        if (!el) throw new Error('Inner <button> not rendered yet');
        return el;
      }, {
        timeout: 2000
      });
      await expect(inner).toBeDisabled();
      await expect(inner).toHaveAttribute('aria-disabled', 'true');
    });
  }
}`,...g.parameters?.docs?.source}}};const R=["Playground","SemanticColors","PaletteColors","Shapes","AllSizes","WithIcons","StatusStates","AsLink","WidthModifiers","RoundedAndCaret","PlayDisabled"];export{u as AllSizes,f as AsLink,c as PaletteColors,g as PlayDisabled,d as Playground,h as RoundedAndCaret,l as SemanticColors,p as Shapes,b as StatusStates,y as WidthModifiers,m as WithIcons,R as __namedExportsOrder,D as default};
