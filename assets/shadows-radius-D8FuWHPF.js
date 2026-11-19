import{u as r,j as s,M as o}from"./blocks-BZUxeCcr.js";import"./preload-helper-BoLA5O2a.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BsDVw_Q3.js";function i(a){const d={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...a.components};return s.jsxs(s.Fragment,{children:[s.jsx(o,{title:"Foundations/Shadows & Radius"}),`
`,s.jsx(d.h2,{id:"shadows--radius",children:"Shadows & Radius"}),`
`,s.jsx(d.p,{children:"These tokens are exposed as CSS variables (examples):"}),`
`,s.jsxs(d.ul,{children:[`
`,s.jsxs(d.li,{children:["shadows: ",s.jsx(d.code,{children:"--shadow-sm"}),", ",s.jsx(d.code,{children:"--shadow-md"}),", ",s.jsx(d.code,{children:"--shadow-lg"})]}),`
`,s.jsxs(d.li,{children:["radius: ",s.jsx(d.code,{children:"--radius-sm"}),", ",s.jsx(d.code,{children:"--radius-md"}),", ",s.jsx(d.code,{children:"--radius-lg"})]}),`
`]}),`
`,s.jsx(d.h3,{id:"cards",children:"Cards"}),`
`,s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16},children:[{shadow:"shadow-sm",radius:"radius-sm"},{shadow:"shadow-md",radius:"radius-md"},{shadow:"shadow-lg",radius:"radius-lg"}].map(e=>s.jsxs("div",{style:{background:"var(--white)",border:"1px solid rgba(0,0,0,0.08)",borderRadius:`var(--${e.radius})`,boxShadow:`var(--${e.shadow})`,padding:16,fontFamily:"var(--font-family-base)",fontSize:13},children:[s.jsx("div",{style:{fontWeight:600},children:e.shadow}),s.jsx("div",{style:{opacity:.7},children:e.radius})]},e.shadow))})]})}function c(a={}){const{wrapper:d}={...r(),...a.components};return d?s.jsx(d,{...a,children:s.jsx(i,{...a})}):i(a)}export{c as default};
