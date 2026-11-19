import{u as l,j as e,M as r}from"./blocks-BZUxeCcr.js";import"./preload-helper-BoLA5O2a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BsDVw_Q3.js";function d(i){const s={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utilities/Overview"}),`
`,e.jsx(s.h2,{id:"utilities",children:"Utilities"}),`
`,e.jsxs(s.p,{children:["This library ships ",e.jsx(s.strong,{children:"utility classes"})," generated from design tokens. These are included in ",e.jsx(s.code,{children:"dist/ds-components/ds-components.css"}),"."]}),`
`,e.jsx(s.h3,{id:"how-to-use",children:"How to use"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"In applications"}),": include the compiled CSS bundle (or your app’s build output that includes it)."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"In Storybook"}),": the preview loads ",e.jsx(s.code,{children:"ds-components.css"}),", so utilities work out of the box."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Guideline"}),": prefer utilities for ",e.jsx(s.em,{children:"layout + spacing + small visual tweaks"}),"; prefer components for ",e.jsx(s.em,{children:"structure + interaction"}),"."]}),`
`]}),`
`,e.jsx(s.h3,{id:"naming-conventions",children:"Naming conventions"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tokens vs utilities"}),": design tokens are CSS variables (example: ",e.jsx(s.code,{children:"--space-md"}),"). Utilities are classnames (example: ",e.jsx(s.code,{children:"p-md"}),")."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Directional keys"}),":",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["padding: ",e.jsx(s.code,{children:"p"}),", ",e.jsx(s.code,{children:"px"}),", ",e.jsx(s.code,{children:"py"}),", ",e.jsx(s.code,{children:"pt"}),", ",e.jsx(s.code,{children:"pr"}),", ",e.jsx(s.code,{children:"pb"}),", ",e.jsx(s.code,{children:"pl"})]}),`
`,e.jsxs(s.li,{children:["margin: ",e.jsx(s.code,{children:"m"}),", ",e.jsx(s.code,{children:"mx"}),", ",e.jsx(s.code,{children:"my"}),", ",e.jsx(s.code,{children:"mt"}),", ",e.jsx(s.code,{children:"mr"}),", ",e.jsx(s.code,{children:"mb"}),", ",e.jsx(s.code,{children:"ml"})]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Composability"}),": utilities are meant to stack, e.g. ",e.jsx(s.code,{children:"p-md radius-md shadow-sm bg-white"}),"."]}),`
`]}),`
`,e.jsx(s.h3,{id:"color-utilities",children:"Color utilities"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Text"}),": ",e.jsx(s.code,{children:".text-{token}"})," (example: ",e.jsx(s.code,{children:".text-primary"}),", ",e.jsx(s.code,{children:".text-grey"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Background"}),": ",e.jsx(s.code,{children:".bg-{token}"})," (example: ",e.jsx(s.code,{children:".bg-off-white"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Border"}),": ",e.jsx(s.code,{children:".border-{token}"})," (example: ",e.jsx(s.code,{children:".border-light-grey"}),")"]}),`
`]}),`
`,e.jsxs(s.p,{children:["Tokens come from the DS color tokens (see ",e.jsx(s.strong,{children:"Foundations → Colors"}),")."]}),`
`,e.jsx(s.h4,{id:"examples",children:"Examples"}),`
`,e.jsxs("div",{className:"p-md radius-md shadow-sm bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"Utility colors"}),e.jsx("div",{className:"text-sm text-dark-grey mb-sm",children:e.jsx(s.p,{children:"Mix text/background/border utilities with DS tokens."})}),e.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:[e.jsx("span",{className:"p-xs radius-pill bg-off-white text-dark-grey border-light-grey",style:{borderWidth:1,borderStyle:"solid"},children:e.jsx(s.p,{children:"Neutral"})}),e.jsx("span",{className:"p-xs radius-pill bg-primary text-white",children:"Primary"}),e.jsx("span",{className:"p-xs radius-pill bg-success text-white",children:"Success"}),e.jsx("span",{className:"p-xs radius-pill bg-warning text-black",children:"Warning"}),e.jsx("span",{className:"p-xs radius-pill bg-danger text-white",children:"Danger"})]})]}),`
`,e.jsx(s.h3,{id:"spacing-utilities",children:"Spacing utilities"}),`
`,e.jsx(s.p,{children:"Generated from the spacing scale:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Padding"}),": ",e.jsx(s.code,{children:".p-{k}"}),", ",e.jsx(s.code,{children:".px-{k}"}),", ",e.jsx(s.code,{children:".py-{k}"}),", ",e.jsx(s.code,{children:".pt-{k}"}),", ",e.jsx(s.code,{children:".pr-{k}"}),", ",e.jsx(s.code,{children:".pb-{k}"}),", ",e.jsx(s.code,{children:".pl-{k}"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Margin"}),": ",e.jsx(s.code,{children:".m-{k}"}),", ",e.jsx(s.code,{children:".mx-{k}"}),", ",e.jsx(s.code,{children:".my-{k}"}),", ",e.jsx(s.code,{children:".mt-{k}"}),", ",e.jsx(s.code,{children:".mr-{k}"}),", ",e.jsx(s.code,{children:".mb-{k}"}),", ",e.jsx(s.code,{children:".ml-{k}"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Gap"}),": ",e.jsx(s.code,{children:".gap-{k}"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["Where ",e.jsx(s.code,{children:"{k}"})," matches the spacing keys (example: ",e.jsx(s.code,{children:"xs"}),", ",e.jsx(s.code,{children:"sm"}),", ",e.jsx(s.code,{children:"md"}),", ",e.jsx(s.code,{children:"lg"}),", ",e.jsx(s.code,{children:"xl"}),")."]}),`
`,e.jsx(s.h4,{id:"examples-1",children:"Examples"}),`
`,e.jsx("div",{style:{display:"grid",gap:12},children:e.jsxs("div",{className:"p-md radius-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"Spacing patterns"}),e.jsx("div",{className:"text-sm text-dark-grey mb-sm",children:e.jsx(s.p,{children:"A common “card” stack: padding + gap + optional divider."})}),e.jsxs("div",{className:"p-sm radius-md bg-off-white",style:{border:"1px dashed rgba(0,0,0,0.12)"},children:[e.jsx("div",{className:"fw-medium text-sm mb-2xs",children:"Section title"}),e.jsx("div",{className:"text-sm text-dark-grey",children:"Content block"})]}),e.jsxs("div",{className:"mt-sm",style:{display:"flex",gap:10,flexWrap:"wrap"},children:[e.jsx("ds-button",{size:"small",children:"Action"}),e.jsx("ds-button",{size:"small",shape:"outline",color:"primary",children:e.jsx(s.p,{children:"Secondary"})})]})]})}),`
`,e.jsx(s.h3,{id:"typography-utilities",children:"Typography utilities"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Font weight"}),": ",e.jsx(s.code,{children:".fw-{key}"})," (example: ",e.jsx(s.code,{children:".fw-regular"}),", ",e.jsx(s.code,{children:".fw-medium"}),", ",e.jsx(s.code,{children:".fw-bold"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Type scale"}),": ",e.jsx(s.code,{children:".text-{size}"})," (example: ",e.jsx(s.code,{children:".text-md"}),", ",e.jsx(s.code,{children:".text-lg"}),") — uses DS ",e.jsx(s.code,{children:"font-size/line-height/letter-spacing"})," tokens"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Numeric font size"}),": ",e.jsx(s.code,{children:".fs-{n}"})," for (n = 13–90) (example: ",e.jsx(s.code,{children:".fs-20"}),")"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Line height"}),": ",e.jsx(s.code,{children:".lh-{key}"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Letter spacing"}),": ",e.jsx(s.code,{children:".ls-{key}"})]}),`
`]}),`
`,e.jsx(s.h4,{id:"examples-2",children:"Examples"}),`
`,e.jsxs("div",{className:"p-md radius-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-lg",children:"Heading with utilities"}),e.jsx("div",{className:"text-sm text-dark-grey mt-2xs",children:e.jsx(s.p,{children:"This paragraph uses DS typography tokens via utility classes."})}),e.jsxs("div",{className:"mt-sm",style:{display:"grid",gap:8},children:[e.jsx("div",{className:"fw-medium text-md",children:"Row title"}),e.jsx("div",{className:"text-sm text-dark-grey",children:"Supporting text (small)"}),e.jsx("div",{className:"text-sm fw-bold",children:"Bold highlight"})]})]}),`
`,e.jsx(s.h3,{id:"radius--shadow--blur-utilities",children:"Radius / Shadow / Blur utilities"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Radius"}),": ",e.jsx(s.code,{children:".radius-{key}"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Shadow"}),": ",e.jsx(s.code,{children:".shadow-{key}"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Blur"}),": ",e.jsx(s.code,{children:".blur-{key}"})," and ",e.jsx(s.code,{children:".backdrop-blur-{key}"})]}),`
`]}),`
`,e.jsx(s.h4,{id:"examples-3",children:"Examples"}),`
`,e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:12},children:[e.jsxs("div",{className:"p-md radius-sm shadow-sm bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"shadow-sm + radius-sm"}),e.jsx("div",{className:"text-sm text-dark-grey",children:"Good for compact surfaces."})]}),e.jsxs("div",{className:"p-md radius-lg shadow-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"shadow-md + radius-lg"}),e.jsx("div",{className:"text-sm text-dark-grey",children:"Good for elevated cards / dialogs."})]}),e.jsxs("div",{className:"p-md radius-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)",position:"relative",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(135deg, rgba(var(--rgb-primary),0.15), rgba(0,0,0,0))"}}),e.jsxs("div",{style:{position:"relative"},className:"backdrop-blur-sm p-sm radius-md",children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"backdrop-blur-sm"}),e.jsx("div",{className:"text-sm text-dark-grey",children:"Use for glassy overlays (when supported)."})]})]})]}),`
`,e.jsx(s.h3,{id:"misc-utilities",children:"Misc utilities"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Text ellipsis"}),": ",e.jsx(s.code,{children:".text-ellipsis"})," (single-line truncate)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Screen-reader only"}),": ",e.jsx(s.code,{children:".sr-only"})," / ",e.jsx(s.code,{children:".visually-hidden"})]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"RTL helpers"}),": ",e.jsx(s.code,{children:".flip-rtl"})," inside ",e.jsx(s.code,{children:'[dir="rtl"]'})]}),`
`]}),`
`,e.jsx(s.h4,{id:"text-overflow--accessibility",children:"Text overflow + accessibility"}),`
`,e.jsxs("div",{className:"p-md radius-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"Text truncation"}),e.jsx("div",{className:"text-sm text-dark-grey mb-sm",children:e.jsxs(s.p,{children:["Use ",e.jsx("code",{children:".text-ellipsis"})," for single-line truncation."]})}),e.jsx("div",{className:"p-sm radius-md bg-off-white",style:{maxWidth:360},children:e.jsx("div",{className:"text-ellipsis",title:"A very long text that should truncate in a single line to keep layouts stable",children:e.jsx(s.p,{children:"A very long text that should truncate in a single line to keep layouts stable"})})}),e.jsxs("div",{className:"mt-sm text-sm text-dark-grey",children:[e.jsx("span",{className:"sr-only",children:"Screen-reader only hint"}),e.jsx("span",{"aria-hidden":"true",children:"Visible label"})]})]}),`
`,e.jsx(s.h4,{id:"rtl-helper",children:"RTL helper"}),`
`,e.jsxs("div",{dir:"rtl",className:"p-md radius-md bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"RTL example"}),e.jsx("div",{className:"text-sm text-dark-grey mb-sm",children:e.jsxs(s.p,{children:[e.jsx("code",{children:".flip-rtl"})," is useful for icons that should mirror in RTL."]})}),e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[e.jsx("ds-icon",{class:"flip-rtl",icon:"arrow-right-2",size:"22","base-path":"/assets/icon/"}),e.jsx("span",{className:"text-sm",children:"This arrow should visually flip in RTL contexts."})]})]}),`
`,e.jsx(s.h3,{id:"practical-usage-example-layout--component",children:"Practical usage example (layout + component)"}),`
`,e.jsxs("div",{className:"p-md radius-md shadow-sm bg-white",style:{border:"1px solid rgba(0,0,0,0.08)"},children:[e.jsx("div",{className:"fw-semibold text-md mb-xs",children:"Card using utilities"}),e.jsx("div",{className:"text-sm text-dark-grey",children:e.jsx(s.p,{children:"Spacing, radius, shadow and text utilities are applied via classes."})}),e.jsx("div",{className:"mt-sm",children:e.jsx("ds-button",{size:"small",children:"Utility + component"})})]})]})}function x(i={}){const{wrapper:s}={...l(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(d,{...i})}):d(i)}export{x as default};
