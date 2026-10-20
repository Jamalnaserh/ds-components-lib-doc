import{b as a}from"./iframe-BsDVw_Q3.js";import{o as m}from"./if-defined-DgRtBnIM.js";import"./preload-helper-BoLA5O2a.js";const{expect:v,waitFor:I}=__STORYBOOK_MODULE_TEST__,G=["","primary","secondary","info","success","warning","danger","purple-100","purple-300","purple-500","coral-100","coral-300","coral-500","moon-100","moon-300","moon-500","orange-100","orange-300","orange-500","yellow-100","yellow-300","yellow-500","sea-100","sea-300","sea-500","white","black","dark-grey","light-grey","off-white","grey-50","grey-100","grey-200","grey-400","grey-500"],V=["","info","success","warning","danger"],j=[8,10,12,14,16,18,20,24,28,32,36,40,48,56,64,72,80,96],D=[8,10,12,14,16,18,20,24,28,32,36,40,44,48,56,64,72,80,96,104,128],K=[{label:"Semantic",values:["primary","secondary","info","success","warning","danger"]},{label:"Neutrals",values:["black","dark-grey","grey-500","grey-400","grey-200","grey-100","grey-50","light-grey","off-white","white"]},{label:"Purple",values:["purple-100","purple-200","purple-300","purple-400","purple-500"]},{label:"Coral",values:["coral-100","coral-200","coral-300","coral-400","coral-500"]},{label:"Moon",values:["moon-100","moon-200","moon-300","moon-400","moon-500"]},{label:"Orange",values:["orange-100","orange-200","orange-300","orange-400","orange-500"]},{label:"Yellow",values:["yellow-100","yellow-200","yellow-300","yellow-500"]},{label:"Sea",values:["sea-100","sea-200","sea-300","sea-400","sea-500"]}],ee={title:"Components/Icon",component:"ds-icon",parameters:{docs:{description:{component:["Inline SVG icon loaded from `assets/icon/` (or your configured base path).","",'**Color** — pass any DS color token via `color="primary"` /','`color="coral-500"`. The host gets the matching `var(--token)` value,',"and the SVG follows via `currentColor`. SVGs that ship with hardcoded","fills are rewritten on load (override with `preserve-colors` for","multicolour artwork like flags or logos).","","**Status** — on status-capable icons (`flag`, `star`), set",'`status="info"` | `success` | `warning` | `danger` for filled semantic',"artwork. Omit `status` for outline (still follows `color`).","`status` does **not** change `color` — when set, baked-in status fills","win and are not rewritten to `currentColor`.","","**Sizing** — set `size` for a square box, or `width` / `height`","independently (numbers → px). `width` / `height` override `size` when","both are set. Without them the host falls back to `1.5em` (see component","stylesheet), so you can also size via parent `font-size` or `fs-*` utilities.","","**Repo assets** — in the library repo, `npm run optimize:icons:svgo` is","SVGO + optional trim only; theme colours are applied at runtime here,","not baked into SVG files.","","**Storybook** — Controls and the “All icons” grid set `width` / `height`","explicitly (including programmatic `innerHTML`) so sizing stays reliable;","the `size` attribute is the same square shorthand in real HTML apps.","","**Path resolution** — `path` per instance > `DsIcon.setPath()` global >","bundled `assets/icon/` directory. Storybook sets a global path in","`preview.ts`, so you rarely need to set `path` on individual icons.","","Fires **`dsIconLoad`** when the SVG is in the DOM and **`dsIconError`**","when no candidate URL returned a valid SVG."].join(`
`)}},actions:{handles:["dsIconLoad","dsIconError"]}},args:{icon:"check-circle",color:"primary",status:"",size:"",width:"32",height:"32",viewBox:"",strict:!1,preserveColors:!1,path:""},argTypes:{icon:{control:"text",description:"Icon id. Accepts `home`, `icon-home`, `icon-home.svg`, `icon home`, `icon-home-f`."},color:{control:"select",options:G,description:"Foundation colour token. Empty inherits from parent. Independent of `status` on flag / star."},status:{control:"select",options:[...V],description:"Semantic status for `flag` / `star` (`info` | `success` | `warning` | `danger`). Empty = outline. Does not change `color`."},size:{control:"text",description:'Square shorthand (`size="24"` → 24×24 px). Leave empty to use `width` / `height` only. If both are set, `width` / `height` win.'},width:{control:"text",description:"CSS width. Numbers are treated as px; strings pass through (`24`, `2rem`, `100%`)."},height:{control:"text",description:"CSS height. Numbers are treated as px; strings pass through."},viewBox:{control:"text",description:"Override the loaded SVG root `viewBox` after fetch (no refetch)."},strict:{control:"boolean",description:"Disable suffix variant probing (`-f`, `-o`, `-2`)."},preserveColors:{control:"boolean",description:"Keep the original fills/strokes (use for multicolour artwork)."},path:{control:"text",description:"Override the icon directory for this instance."}},render:e=>a`
    <ds-icon
      icon=${e.icon}
      color=${m(e.color?e.color:void 0)}
      status=${m(e.status?e.status:void 0)}
      size=${m(e.size?e.size:void 0)}
      width=${m(e.width?e.width:void 0)}
      height=${m(e.height?e.height:void 0)}
      viewbox=${m(e.viewBox?e.viewBox:void 0)}
      ?strict=${e.strict}
      ?preserve-colors=${e.preserveColors}
      path=${m(e.path?e.path:void 0)}
    ></ds-icon>
  `},q={},T={name:"All icons",tags:["autodocs","test"],parameters:{docs:{description:{story:"Full searchable catalogue of every icon shipped with the library, sourced from the build-time manifest at `/icon-names.json`. Filter by name, change page size, and live-tweak **width / height** and **color** to see how any swatch from the design tokens lands on the catalogue. **Click any icon** to copy its name to the clipboard. Use the **Component tests** widget (Interactions ▸ Accessibility) to verify the controls and a11y in one shot."}},a11y:{test:"todo"}},render:()=>{const e=`icon-gallery-${Math.random().toString(16).slice(2)}`;return queueMicrotask(()=>{const t=document.getElementById(e);t&&Y(t)}),a`
      <div id=${e} class="ig">
        <div class="ig-controls">
          <input
            data-role="search"
            type="search"
            placeholder="Search icons…"
            class="ig-input"
            aria-label="Search icons"
          />
          <label class="ig-field">
            <span class="ig-field-text">Size</span>
            <select data-role="icon-size" class="ig-select" aria-label="Icon size">
              ${D.map(t=>a`<option value=${t} ?selected=${t===48}>${t}px</option>`)}
            </select>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Color</span>
            <select data-role="icon-color" class="ig-select" aria-label="Icon color">
              <option value="">inherit</option>
              ${K.map(t=>a`
                  <optgroup label=${t.label}>
                    ${t.values.map(o=>a`<option value=${o} ?selected=${o==="black"}>${o}</option>`)}
                  </optgroup>
                `)}
            </select>
            <span class="ig-swatch" data-role="swatch" aria-hidden="true"></span>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Per page</span>
            <select data-role="page-size" class="ig-select" aria-label="Icons per page">
              <option value="36">36</option>
              <option value="60">60</option>
              <option value="120" selected>120</option>
              <option value="240">240</option>
            </select>
          </label>
        </div>
        <div class="ig-grid" data-role="grid"></div>
        <div class="ig-footer">
          <span class="ig-range" data-role="range">Loading…</span>
          <div class="ig-pager">
            <button type="button" class="ig-btn" data-role="prev" aria-label="Previous page">
              ‹ Prev
            </button>
            <span class="ig-page" data-role="page-info">—</span>
            <button type="button" class="ig-btn" data-role="next" aria-label="Next page">
              Next ›
            </button>
          </div>
        </div>
      </div>
    `},play:async({canvasElement:e,step:t})=>{const o=e.querySelector(".ig");await v(o).toBeTruthy();const g=o.querySelector('input[data-role="search"]'),b=o.querySelector('[data-role="icon-size"]'),x=o.querySelector('[data-role="icon-color"]'),w=o.querySelector('[data-role="next"]'),c=o.querySelector('[data-role="page-info"]'),d=o.querySelector('[data-role="grid"]');await t("Manifest loads and grid renders cards",async()=>{await I(()=>{if(!d.querySelector(".ig-card"))throw new Error("Gallery grid is empty — manifest not loaded yet")},{timeout:4e3})}),await t("Pagination advances to page 2",async()=>{const r=c.textContent;w.click(),await I(()=>v(c.textContent).not.toBe(r)),await v(c.textContent).toMatch(/Page 2/)}),await t("Search filters the grid to home-* icons",async()=>{g.value="home",g.dispatchEvent(new Event("input",{bubbles:!0})),await I(()=>{const r=[...d.querySelectorAll(".ig-card")].map(n=>n.dataset.name??"");if(!r.length)throw new Error("No results yet");if(!r.every(n=>n.includes("home")))throw new Error("Filter returned non-matching icons: "+r.join(","))})}),await t("Size + Color controls update the icons live",async()=>{b.value="40",b.dispatchEvent(new Event("change",{bubbles:!0})),x.value="primary",x.dispatchEvent(new Event("change",{bubbles:!0})),await I(()=>{const r=d.querySelector("ds-icon");if(!r)throw new Error("No icon rendered");v(r.getAttribute("size")).toBe("40"),v(r.classList.contains("fs-40")).toBe(!0),v(r.getAttribute("color")).toBe("primary");const{width:n,height:p}=r.getBoundingClientRect();if(n<36||p<36)throw new Error(`Icon box too small (${n}×${p}); size control not applied`)})}),await t("Clear search so the gallery opens unfiltered",async()=>{g.value="",g.dispatchEvent(new Event("input",{bubbles:!0}))})}},L={name:"Size scale",parameters:{docs:{description:{story:"Square sizes via matching `width` / `height` (what this gallery and Controls use for reliable Storybook rendering). See **Size shorthand** for the `size` attribute."}}},render:()=>a`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${j.map(e=>a`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" width=${e} height=${e} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">${e}px</code>
          </div>
        `)}
    </div>
  `},N={name:"Size shorthand",parameters:{docs:{description:{story:'Same square box using the **`size`** prop (`size="24"` → 24×24 px). In apps you can use either `size` or matching `width` / `height`; when both are set, `width` / `height` take precedence.'}}},render:()=>a`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      ${j.map(e=>a`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" size=${e} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">size="${e}"</code>
          </div>
        `)}
    </div>
  `},O={name:"Non-square box",parameters:{docs:{description:{story:"Use **`width`** and **`height`** independently when the icon box is not square. The `size` shorthand always produces a square."}}},render:()=>a`
    <div style="display:flex; gap:24px; align-items:center; flex-wrap:wrap;">
      <ds-icon icon="arrow-right-2" width="48" height="24" color="primary"></ds-icon>
      <code style="font-size:12px; color: var(--dark-grey);">width="48" height="24"</code>
    </div>
  `},M={name:"Colour tokens",parameters:{docs:{description:{story:"Every foundation token usable on `ds-button` works here too. Empty `color` inherits from the parent."}}},render:()=>a`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; padding: 12px; background: var(--white); border-radius: 12px;"
    >
      ${G.filter(Boolean).map(e=>a`
          <div
            style="display:flex; align-items:center; gap:8px; padding: 6px 8px; border-radius: 8px; background: rgba(0,0,0,0.02);"
          >
            <ds-icon icon="check-circle" width="22" height="22" color=${e}></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">${e}</code>
          </div>
        `)}
    </div>
  `},P={name:"Inherited colour",parameters:{docs:{description:{story:"When `color` is omitted, the icon uses `currentColor`, so it inherits whatever `color` is set on the parent element. Great for icons inside links or status pills."}}},render:()=>a`
    <div style="display:grid; gap:12px;">
      <div style="color: var(--success); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="check-circle" width="20" height="20"></ds-icon>
        Inherits <code>var(--success)</code> from parent.
      </div>
      <div style="color: var(--danger); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="error" width="20" height="20"></ds-icon>
        Inherits <code>var(--danger)</code> from parent.
      </div>
      <a
        href="#"
        style="color: var(--primary); display:inline-flex; gap:6px; align-items:center;"
      >
        <ds-icon icon="arrow-right-2" width="18" height="18"></ds-icon>
        Link-coloured icon
      </a>
    </div>
  `},B={name:"Status (flag & star)",parameters:{docs:{description:{story:["Status-capable icons (`flag`, `star`) swap outline artwork for a filled","semantic colour when `status` is set (`info` | `success` | `warning` | `danger`).","","Omit `status` for outline (still follows `color`).","`status` does **not** change `color` — when both are set, status paint wins."].join(`
`)}}},render:()=>a`
    <div style="display:grid; gap:24px;">
      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Flag</strong> — outline vs semantic status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="danger"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="danger"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="success"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="success"</code>
          </div>
        </div>
      </div>

      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Star</strong> — outline vs status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning" color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status + color<br />(status wins)</code>
          </div>
        </div>
      </div>
    </div>
  `},A={name:"Status playground",args:{icon:"flag",color:"dark-grey",status:"info",size:"32",width:"",height:""},parameters:{docs:{description:{story:"Try `icon` as `flag` or `star` and toggle `status` in Controls. Clear `status` to see outline + `color`."}}}};let F=null;function Z(){if(!F){const e=new URL("icon-names.json",document.baseURI).toString();F=fetch(e,{cache:"no-store"}).then(t=>t.ok?t.json():{iconNames:[]}).then(t=>Array.isArray(t?.iconNames)?t.iconNames.map(String):[]).catch(()=>[])}return F}function y(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}async function W(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();const o=document.execCommand("copy");return document.body.removeChild(t),o}catch{return!1}}async function Y(e){if(e.dataset.igInit==="true")return;e.dataset.igInit="true";const t=e.querySelector('input[data-role="search"]'),o=e.querySelector('[data-role="grid"]'),g=e.querySelector('[data-role="range"]'),b=e.querySelector('[data-role="page-info"]'),x=e.querySelector('[data-role="prev"]'),w=e.querySelector('[data-role="next"]'),c=e.querySelector('[data-role="page-size"]'),d=e.querySelector('[data-role="icon-size"]'),r=e.querySelector('[data-role="icon-color"]'),n=e.querySelector('[data-role="swatch"]');if(!t||!o||!g||!b||!x||!w||!c||!d||!r||!n)return;const p=await Z();let k="",i=0,z=Number(c.value)||60,$=Number(d.value)||24,u=r.value;const H=()=>k?p.filter(s=>s.toLowerCase().includes(k)):p,R=()=>{n.style.background=u?`var(--${u})`:"transparent",n.style.borderColor=u?`var(--${u})`:"rgba(0,0,0,0.18)"},h=()=>{const s=H(),l=Math.max(1,Math.ceil(s.length/z));i>l-1&&(i=l-1),i<0&&(i=0);const f=i*z,E=Math.min(f+z,s.length),C=s.slice(f,E),U=u?` color="${y(u)}"`:"";e.style.setProperty("--ig-icon-size",`${$}px`),o.innerHTML=C.length?C.map(S=>`<button class="ig-card" type="button" title="Copy ${y(S)}" aria-label="Copy icon name ${y(S)}" data-name="${y(S)}"><ds-icon icon="${y(S)}" class="fs-${$}" size="${$}"${U}></ds-icon><div class="ig-name">${y(S)}</div></button>`).join(""):`<div class="ig-empty">No icons match “${y(k)}”.</div>`,g.textContent=s.length?`Showing ${f+1}–${E} of ${s.length}${p.length!==s.length?` (filtered from ${p.length})`:""}`:p.length?"No matches":"Manifest missing — from the `doc/` folder run `npm run generate:icons`.",b.textContent=`Page ${i+1} / ${l}`,x.disabled=i<=0,w.disabled=i>=l-1,R()};t.addEventListener("input",()=>{k=t.value.trim().toLowerCase(),i=0,h()}),c.addEventListener("change",()=>{z=Number(c.value)||60,i=0,h()}),d.addEventListener("change",()=>{$=Number(d.value)||24,h()}),r.addEventListener("change",()=>{u=r.value,h()}),x.addEventListener("click",()=>{i-=1,h()}),w.addEventListener("click",()=>{i+=1,h()});let _=null;o.addEventListener("click",s=>{const l=s.target.closest(".ig-card");if(!l)return;const f=l.dataset.name;f&&W(f).then(E=>{E&&(o.querySelectorAll(".ig-card.is-copied").forEach(C=>C.classList.remove("is-copied")),l.classList.add("is-copied"),_&&clearTimeout(_),_=setTimeout(()=>l.classList.remove("is-copied"),1200))})}),h()}if(typeof document<"u"&&!document.getElementById("icon-gallery-style")){const e=document.createElement("style");e.id="icon-gallery-style",e.textContent=`
    .ig {
      font-family: var(--font-family-base, system-ui);
      background: var(--white);
      border-radius: 12px;
      padding: 16px;
      display: grid;
      gap: 12px;
    }
    .ig-controls {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
    }
    .ig-input {
      flex: 1 1 240px;
      min-width: 200px;
      padding: 10px 12px;
      border-radius: 12px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      outline: none;
    }
    .ig-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(var(--rgb-primary), 0.15);
    }
    .ig-size-label,
    .ig-field {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      color: var(--dark-grey);
    }
    .ig-field-text,
    .ig-size-text {
      white-space: nowrap;
    }
    .ig-swatch {
      width: 18px;
      height: 18px;
      border-radius: 6px;
      border: 1px solid rgba(0,0,0,0.18);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.6);
      flex-shrink: 0;
    }
    .ig-select {
      padding: 8px 10px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      color: inherit;
      outline: none;
    }
    .ig-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
      gap: 8px;
    }
    .ig-grid ds-icon {
      font-size: var(--ig-icon-size, 48px);
    }
    .ig-card {
      display: grid;
      justify-items: center;
      gap: 8px;
      padding: 12px 8px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.06);
      background: rgba(0,0,0,0.02);
      cursor: pointer;
      text-align: center;
      transition: background 120ms, border-color 120ms, box-shadow 120ms;
    }
    .ig-card:hover {
      background: var(--white);
      border-color: rgba(var(--rgb-primary), 0.35);
      box-shadow: var(--shadow-sm);
    }
    .ig-card.is-copied {
      border-color: var(--success);
      background: rgba(var(--rgb-success), 0.08);
      box-shadow: var(--shadow-sm);
    }
    .ig-card.is-copied .ig-name::after {
      content: ' ✓';
      color: var(--success);
    }
    .ig-name {
      font-size: 11px;
      line-height: 1.2;
      color: var(--dark-grey);
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ig-empty {
      grid-column: 1 / -1;
      padding: 32px 16px;
      text-align: center;
      color: var(--dark-grey);
      font-size: 13px;
    }
    .ig-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 4px;
      border-top: 1px solid rgba(0,0,0,0.06);
      margin-top: 4px;
    }
    .ig-range {
      font-size: 12px;
      color: var(--dark-grey);
    }
    .ig-pager {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .ig-btn {
      padding: 6px 12px;
      border-radius: 10px;
      border: 1px solid rgba(0,0,0,0.12);
      background: var(--white);
      color: inherit;
      cursor: pointer;
      font-size: 13px;
    }
    .ig-btn:hover:not(:disabled) {
      border-color: rgba(var(--rgb-primary), 0.35);
      box-shadow: var(--shadow-sm);
    }
    .ig-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .ig-page {
      font-size: 12px;
      color: var(--dark-grey);
      min-width: 96px;
      text-align: center;
    }
  `,document.head.appendChild(e)}q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"{}",...q.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'All icons',
  tags: ['autodocs', 'test'],
  parameters: {
    docs: {
      description: {
        story: 'Full searchable catalogue of every icon shipped with the library, sourced from the build-time manifest at \`/icon-names.json\`. Filter by name, change page size, and live-tweak **width / height** and **color** to see how any swatch from the design tokens lands on the catalogue. **Click any icon** to copy its name to the clipboard. Use the **Component tests** widget (Interactions ▸ Accessibility) to verify the controls and a11y in one shot.'
      }
    },
    a11y: {
      test: 'todo'
    }
  },
  render: () => {
    const id = \`icon-gallery-\${Math.random().toString(16).slice(2)}\`;
    queueMicrotask(() => {
      const root = document.getElementById(id);
      if (root) void initGallery(root);
    });
    return html\`
      <div id=\${id} class="ig">
        <div class="ig-controls">
          <input
            data-role="search"
            type="search"
            placeholder="Search icons…"
            class="ig-input"
            aria-label="Search icons"
          />
          <label class="ig-field">
            <span class="ig-field-text">Size</span>
            <select data-role="icon-size" class="ig-select" aria-label="Icon size">
              \${ICON_SIZES.map(s => html\`<option value=\${s} ?selected=\${s === 48}>\${s}px</option>\`)}
            </select>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Color</span>
            <select data-role="icon-color" class="ig-select" aria-label="Icon color">
              <option value="">inherit</option>
              \${ICON_COLOR_OPTIONS.map(group => html\`
                  <optgroup label=\${group.label}>
                    \${group.values.map(c => html\`<option value=\${c} ?selected=\${c === 'black'}>\${c}</option>\`)}
                  </optgroup>
                \`)}
            </select>
            <span class="ig-swatch" data-role="swatch" aria-hidden="true"></span>
          </label>
          <label class="ig-field">
            <span class="ig-field-text">Per page</span>
            <select data-role="page-size" class="ig-select" aria-label="Icons per page">
              <option value="36">36</option>
              <option value="60">60</option>
              <option value="120" selected>120</option>
              <option value="240">240</option>
            </select>
          </label>
        </div>
        <div class="ig-grid" data-role="grid"></div>
        <div class="ig-footer">
          <span class="ig-range" data-role="range">Loading…</span>
          <div class="ig-pager">
            <button type="button" class="ig-btn" data-role="prev" aria-label="Previous page">
              ‹ Prev
            </button>
            <span class="ig-page" data-role="page-info">—</span>
            <button type="button" class="ig-btn" data-role="next" aria-label="Next page">
              Next ›
            </button>
          </div>
        </div>
      </div>
    \`;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const root = canvasElement.querySelector<HTMLElement>('.ig');
    await expect(root).toBeTruthy();
    const search = root!.querySelector<HTMLInputElement>('input[data-role="search"]')!;
    const iconSize = root!.querySelector<HTMLSelectElement>('[data-role="icon-size"]')!;
    const iconColor = root!.querySelector<HTMLSelectElement>('[data-role="icon-color"]')!;
    const next = root!.querySelector<HTMLButtonElement>('[data-role="next"]')!;
    const pageInfo = root!.querySelector<HTMLElement>('[data-role="page-info"]')!;
    const grid = root!.querySelector<HTMLElement>('[data-role="grid"]')!;
    await step('Manifest loads and grid renders cards', async () => {
      await waitFor(() => {
        if (!grid.querySelector('.ig-card')) throw new Error('Gallery grid is empty — manifest not loaded yet');
      }, {
        timeout: 4000
      });
    });
    await step('Pagination advances to page 2', async () => {
      const before = pageInfo.textContent;
      next.click();
      await waitFor(() => expect(pageInfo.textContent).not.toBe(before));
      await expect(pageInfo.textContent).toMatch(/Page 2/);
    });
    await step('Search filters the grid to home-* icons', async () => {
      search.value = 'home';
      search.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      await waitFor(() => {
        const names = [...grid.querySelectorAll<HTMLElement>('.ig-card')].map(c => c.dataset.name ?? '');
        if (!names.length) throw new Error('No results yet');
        if (!names.every(n => n.includes('home'))) throw new Error('Filter returned non-matching icons: ' + names.join(','));
      });
    });
    await step('Size + Color controls update the icons live', async () => {
      iconSize.value = '40';
      iconSize.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      iconColor.value = 'primary';
      iconColor.dispatchEvent(new Event('change', {
        bubbles: true
      }));
      await waitFor(() => {
        const sample = grid.querySelector('ds-icon');
        if (!sample) throw new Error('No icon rendered');
        expect(sample.getAttribute('size')).toBe('40');
        expect(sample.classList.contains('fs-40')).toBe(true);
        expect(sample.getAttribute('color')).toBe('primary');
        const {
          width,
          height
        } = sample.getBoundingClientRect();
        if (width < 36 || height < 36) {
          throw new Error(\`Icon box too small (\${width}×\${height}); size control not applied\`);
        }
      });
    });

    // \`play()\` mutates the real canvas DOM; Storybook keeps that state when the
    // run finishes, so an empty search would otherwise stay stuck on "home".
    await step('Clear search so the gallery opens unfiltered', async () => {
      search.value = '';
      search.dispatchEvent(new Event('input', {
        bubbles: true
      }));
    });
  }
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Size scale',
  parameters: {
    docs: {
      description: {
        story: 'Square sizes via matching \`width\` / \`height\` (what this gallery and Controls use for reliable Storybook rendering). See **Size shorthand** for the \`size\` attribute.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      \${SIZE_STEPS.map(s => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" width=\${s} height=\${s} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">\${s}px</code>
          </div>
        \`)}
    </div>
  \`
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Size shorthand',
  parameters: {
    docs: {
      description: {
        story: 'Same square box using the **\`size\`** prop (\`size="24"\` → 24×24 px). In apps you can use either \`size\` or matching \`width\` / \`height\`; when both are set, \`width\` / \`height\` take precedence.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:16px; align-items:end; flex-wrap:wrap;">
      \${SIZE_STEPS.map(s => html\`
          <div style="display:flex; flex-direction:column; align-items:center; gap:6px;">
            <ds-icon icon="check-circle" size=\${s} color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">size="\${s}"</code>
          </div>
        \`)}
    </div>
  \`
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Non-square box',
  parameters: {
    docs: {
      description: {
        story: 'Use **\`width\`** and **\`height\`** independently when the icon box is not square. The \`size\` shorthand always produces a square.'
      }
    }
  },
  render: () => html\`
    <div style="display:flex; gap:24px; align-items:center; flex-wrap:wrap;">
      <ds-icon icon="arrow-right-2" width="48" height="24" color="primary"></ds-icon>
      <code style="font-size:12px; color: var(--dark-grey);">width="48" height="24"</code>
    </div>
  \`
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Colour tokens',
  parameters: {
    docs: {
      description: {
        story: 'Every foundation token usable on \`ds-button\` works here too. Empty \`color\` inherits from the parent.'
      }
    }
  },
  render: () => html\`
    <div
      style="display:grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; padding: 12px; background: var(--white); border-radius: 12px;"
    >
      \${COLOR_TOKENS.filter(Boolean).map(c => html\`
          <div
            style="display:flex; align-items:center; gap:8px; padding: 6px 8px; border-radius: 8px; background: rgba(0,0,0,0.02);"
          >
            <ds-icon icon="check-circle" width="22" height="22" color=\${c}></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey);">\${c}</code>
          </div>
        \`)}
    </div>
  \`
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Inherited colour',
  parameters: {
    docs: {
      description: {
        story: 'When \`color\` is omitted, the icon uses \`currentColor\`, so it inherits whatever \`color\` is set on the parent element. Great for icons inside links or status pills.'
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:12px;">
      <div style="color: var(--success); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="check-circle" width="20" height="20"></ds-icon>
        Inherits <code>var(--success)</code> from parent.
      </div>
      <div style="color: var(--danger); display:flex; gap:8px; align-items:center;">
        <ds-icon icon="error" width="20" height="20"></ds-icon>
        Inherits <code>var(--danger)</code> from parent.
      </div>
      <a
        href="#"
        style="color: var(--primary); display:inline-flex; gap:6px; align-items:center;"
      >
        <ds-icon icon="arrow-right-2" width="18" height="18"></ds-icon>
        Link-coloured icon
      </a>
    </div>
  \`
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Status (flag & star)',
  parameters: {
    docs: {
      description: {
        story: ['Status-capable icons (\`flag\`, \`star\`) swap outline artwork for a filled', 'semantic colour when \`status\` is set (\`info\` | \`success\` | \`warning\` | \`danger\`).', '', 'Omit \`status\` for outline (still follows \`color\`).', '\`status\` does **not** change \`color\` — when both are set, status paint wins.'].join('\\n')
      }
    }
  },
  render: () => html\`
    <div style="display:grid; gap:24px;">
      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Flag</strong> — outline vs semantic status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="danger"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="danger"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="flag" size="32" status="success"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="success"</code>
          </div>
        </div>
      </div>

      <div>
        <p style="margin:0 0 12px; font-size:13px; color: var(--dark-grey);">
          <strong>Star</strong> — outline vs status
        </p>
        <div
          style="display:grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap:12px;"
        >
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" color="dark-grey"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">outline</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="warning"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="info"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status="info"</code>
          </div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:8px; padding:12px; border-radius:10px; border:1px solid rgba(0,0,0,0.08); background:rgba(0,0,0,0.02);">
            <ds-icon icon="star" size="32" status="warning" color="primary"></ds-icon>
            <code style="font-size:11px; color: var(--dark-grey); text-align:center;">status + color<br />(status wins)</code>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Status playground',
  args: {
    icon: 'flag',
    color: 'dark-grey',
    status: 'info',
    size: '32',
    width: '',
    height: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Try \`icon\` as \`flag\` or \`star\` and toggle \`status\` in Controls. Clear \`status\` to see outline + \`color\`.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};const te=["Playground","AllIcons","SizeScale","SizeShorthand","NonSquare","ColorTokens","InheritedColor","StatusIcons","StatusPlayground"];export{T as AllIcons,M as ColorTokens,P as InheritedColor,O as NonSquare,q as Playground,L as SizeScale,N as SizeShorthand,B as StatusIcons,A as StatusPlayground,te as __namedExportsOrder,ee as default};
