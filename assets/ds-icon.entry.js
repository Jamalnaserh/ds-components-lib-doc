import { r as registerInstance, c as createEvent, d as getAssetPath, h, H as Host } from './index-CTScrs23.js';

/**
 * Status-aware icon artwork for `ds-icon`.
 *
 * Icons listed here swap between an outline (no `status`) and a filled
 * semantic colour (with `status`). The `color` prop is intentionally
 * independent — when `status` is set, baked-in fills/strokes are preserved.
 *
 * To add another status icon: append an entry to {@link STATUS_ICON_ART}
 * with `outline` (use `currentColor`) and `filled` (use `{{status}}`
 * placeholders for every fill/stroke that should pick up the status colour).
 */
/** DS semantic hex colours — keep in sync with foundations/_colors.scss. */
const ICON_STATUS_COLORS = {
    info: '#1bced8', // $sea-500 / $info
    success: '#00c48c', // $success-500
    warning: '#ffdc40', // $yellow-500 / $warning
    danger: '#cf2544', // $error-500 / $danger
};
const STATUS_COLOR_PLACEHOLDER = '{{status}}';
/**
 * Registry of icons that respond to the `status` prop.
 * Keys are normalised icon ids (no `icon-` prefix, no `.svg`).
 */
const STATUS_ICON_ART = {
    flag: {
        outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 20.5h2m0 0h2m-2 0V.5m14 1h-14v8h14l-2-4z"/></svg>`,
        filled: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21"><path fill="${STATUS_COLOR_PLACEHOLDER}" d="M16.5 1.5h-14v8h14l-2-4z"/><path stroke="${STATUS_COLOR_PLACEHOLDER}" stroke-linecap="round" stroke-linejoin="round" d="M.5 20.5h2m0 0h2m-2 0V.5m14 1h-14v8h14l-2-4z"/></svg>`,
    },
    star: {
        outline: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21"><path fill="currentColor" fill-rule="evenodd" d="M10.89 1.99 8.95 7.439a1.5 1.5 0 0 1-1.414.997H2.113l4.525 3.107a1.5 1.5 0 0 1 .564 1.74l-.942-.336a.5.5 0 0 0-.188-.58L.218 8.347A.5.5 0 0 1 .5 7.435h7.035a.5.5 0 0 0 .472-.332l2.41-6.77a.5.5 0 0 1 .942 0l2.41 6.77a.5.5 0 0 0 .472.332h7.035a.5.5 0 0 1 .284.912l-5.855 4.02a.5.5 0 0 0-.188.58l2.354 6.61a.5.5 0 0 1-.754.58l-5.946-4.082a.5.5 0 0 0-.566 0L4.66 20.137a.5.5 0 0 1-.754-.58l2.354-6.61.942.335-1.836 5.157 4.674-3.209a1.5 1.5 0 0 1 1.698 0l4.675 3.21-1.837-5.158a1.5 1.5 0 0 1 .564-1.74l4.526-3.107h-5.424a1.5 1.5 0 0 1-1.413-.997zm6.04 17.902Z" clip-rule="evenodd"/></svg>`,
        filled: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 21"><path fill="${STATUS_COLOR_PLACEHOLDER}" d="m13.389 7.51-2-5-.5-1-.5 1-2.5 5.5h-7l.5.5 5 3.5.5 1-2 6.5 6-4 6 3.5-2-6 .5-1 1.5-1 4-3h-7z"/><path fill="${STATUS_COLOR_PLACEHOLDER}" fill-rule="evenodd" d="M10.89 1.99 8.95 7.439a1.5 1.5 0 0 1-1.414.997H2.113l4.525 3.107a1.5 1.5 0 0 1 .564 1.74l-.942-.336a.5.5 0 0 0-.188-.58L.218 8.347A.5.5 0 0 1 .5 7.435h7.035a.5.5 0 0 0 .472-.332l2.41-6.77a.5.5 0 0 1 .942 0l2.41 6.77a.5.5 0 0 0 .472.332h7.035a.5.5 0 0 1 .284.912l-5.855 4.02a.5.5 0 0 0-.188.58l2.354 6.61a.5.5 0 0 1-.754.58l-5.946-4.082a.5.5 0 0 0-.566 0L4.66 20.137a.5.5 0 0 1-.754-.58l2.354-6.61.942.335-1.836 5.157 4.674-3.209a1.5 1.5 0 0 1 1.698 0l4.675 3.21-1.837-5.158a1.5 1.5 0 0 1 .564-1.74l4.526-3.107h-5.424a1.5 1.5 0 0 1-1.413-.997zm6.04 17.902" clip-rule="evenodd"/></svg>`,
    },
};
/** Icon ids that support the `status` prop (e.g. `flag`, `star`). */
function isStatusCapableIcon(id) {
    return Object.prototype.hasOwnProperty.call(STATUS_ICON_ART, id);
}
function isIconStatus(value) {
    return !!value && Object.prototype.hasOwnProperty.call(ICON_STATUS_COLORS, value);
}
/**
 * Resolve SVG markup for a status-capable icon.
 * With a valid `status` → filled + semantic colour.
 * Without → outline using `currentColor` (so `color` still works).
 */
function resolveStatusIconSvg(id, status) {
    const art = STATUS_ICON_ART[id];
    if (!art)
        return null;
    if (isIconStatus(status)) {
        const hex = ICON_STATUS_COLORS[status];
        return art.filled.split(STATUS_COLOR_PLACEHOLDER).join(hex);
    }
    return art.outline;
}

const dsIconCss = () => `:host{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;box-sizing:border-box;vertical-align:middle;line-height:0;color:currentColor;width:1em;height:1em}.ds-icon__root{display:flex;width:100%;height:100%;align-items:center;justify-content:center;line-height:0}.ds-icon__root :where(svg){display:block;width:100%;height:100%;max-width:100%;max-height:100%}.ds-icon__loading{box-sizing:border-box;width:55%;height:55%;border:2px solid rgba(var(--rgb-dark-grey), 0.35);border-top-color:currentcolor;border-radius:50%;animation:ds-icon-spin 0.75s linear infinite}.ds-icon__fallback{display:flex;align-items:center;justify-content:center;width:55%;height:55%;min-width:10px;min-height:10px;box-sizing:border-box}.ds-icon__fallback-svg{display:block;width:100%;height:100%}.ds-icon__fallback-ring{opacity:0.38}.ds-icon__fallback-mark{opacity:0.72}@keyframes ds-icon-spin{to{transform:rotate(360deg)}}`;

const DsIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dsIconLoad = createEvent(this, "dsIconLoad");
        this.dsIconError = createEvent(this, "dsIconError");
    }
    // ─── public API ─────────────────────────────────────────────────────────────
    /**
     * Primary icon id.
     * Accepts any of these formats (all resolve to the same file):
     *   "home" | "icon-home" | "icon-home.svg" | "icon home" | "icon-home-f"
     */
    icon;
    /** Alias of `icon` — kept for backwards-compatibility. */
    name;
    /**
     * Icon color. Accepts any DS color token (semantic or palette).
     * Mapped to a `fc-{token}` utility class on the host — no inline style.
     * Omit to inherit from the parent element.
     *
     * Independent of `status`: on status-capable icons with `status` set,
     * semantic fills come from `status` and are not rewritten to currentColor.
     */
    color;
    /**
     * Semantic status for status-capable icons (`flag`, `star`).
     * When set, renders the filled status artwork with the matching DS
     * semantic colour (`info` / `success` / `warning` / `danger`).
     * When omitted, those icons use their outline artwork and follow `color`
     * / inherited `currentColor` as usual.
     * Has no effect on icons that are not status-capable.
     */
    status;
    /**
     * Preserve the original colors baked into the fetched SVG. By default
     * the loader rewrites any `fill="#xxx"` / `stroke="#xxx"` attributes
     * to `currentColor` so the `color` prop actually works. Set this to
     * true for icons that are intentionally multicolor (flags, brand logos,
     * illustrations). Automatically applied when `status` paints a
     * status-capable icon.
     */
    preserveColors = false;
    /**
     * Base URL of the icon asset directory **for this instance**.
     * Takes priority over `DsIcon.setPath()` and automatic detection.
     */
    path;
    /**
     * Disable suffix variant probing (`-f`, `-o`, `-2`, etc.).
     * When true, only the exact filename is fetched. Recommended for
     * production where you know your icon ids exactly — avoids the latency
     * of multiple 404s and prevents accidental variant resolution.
     */
    strict = false;
    /**
     * Explicit width set as an **attribute** on the inner `<svg>` element.
     * Numbers are treated as pixels; strings pass through (`"24"`, `"2rem"`).
     * When omitted the SVG uses its intrinsic/viewBox width (typically `1em`
     * from the stylesheet).
     */
    width;
    /**
     * Explicit height set as an **attribute** on the inner `<svg>` element.
     * Numbers are treated as pixels; strings pass through.
     * When omitted the SVG uses its intrinsic/viewBox height.
     */
    height;
    /**
     * Shorthand font-size step. Mapped to `fs-{size}` utility class on the
     * host (e.g. `size="50"` → class `fs-50`). Because the icon box defaults
     * to `1em × 1em`, scaling `font-size` scales the icon proportionally.
     * Can be combined with explicit `width`/`height` for non-square overrides.
     */
    size;
    /**
     * Overrides the root `<svg>` element's `viewBox` after the asset loads
     * (e.g. `0 0 24 24`). Does not refetch; useful for alignment or
     * normalizing inconsistent artwork.
     * HTML usage: `viewbox="0 0 24 24"` (attribute name is case-insensitive).
     */
    viewBox;
    /** Fired when the icon SVG has been loaded and rendered. */
    dsIconLoad;
    /** Fired when no candidate URL returned a valid SVG. */
    dsIconError;
    // ─── global base-path ───────────────────────────────────────────────────────
    /**
     * Set the icon asset base URL once for the entire application.
     * Call this in your Angular `main.ts` BEFORE any `<ds-icon>` is rendered:
     *
     *   import { DsIcon } from '@stc/ds-components';
     *   DsIcon.setPath('/assets/icon/');
     */
    static setPath(dir) {
        DsIcon._globalPath = DsIcon.normaliseDirPath(dir);
        DsIcon.cache.clear();
    }
    /** Read the resolved global icon directory URL (mostly for debugging/tests). */
    static getPath() {
        return DsIcon._globalPath;
    }
    /** @deprecated Use `DsIcon.setPath()` instead. */
    static setBasePath(dir) {
        DsIcon.setPath(dir);
    }
    /** @deprecated Use `DsIcon.getPath()` instead. */
    static getBasePath() {
        return DsIcon.getPath();
    }
    /** Clear the in-memory cache. Useful in tests or after hot-reloading icons. */
    static clearCache() {
        DsIcon.cache.clear();
    }
    // ─── internals ──────────────────────────────────────────────────────────────
    static _globalPath = null;
    static cache = new Map();
    svgMarkup = '';
    loading = false;
    loadFailed = false;
    /** Monotonically-increasing token to discard stale fetches on rapid prop changes. */
    requestToken = 0;
    // ─── lifecycle ──────────────────────────────────────────────────────────────
    componentWillLoad() {
        // Kick off the load but do NOT await it here. Awaiting blocks first render
        // and prevents the loading state from ever being visible. We let the first
        // render show the loading state; the @State update from loadSvg() triggers
        // the second render with the SVG.
        void this.loadSvg();
    }
    watchInputs() {
        void this.loadSvg();
    }
    watchPreserveColors() {
        // Toggling preserve-colors on/off means the cached markup is wrong
        // for this instance — re-process from cache (which still holds the
        // original sanitized SVG). Status-capable icons re-resolve from the
        // in-component registry instead of the fetch cache.
        void this.loadSvg();
    }
    /**
     * True when this instance should keep baked-in status fills (skip
     * currentColor rewriting). `color` may still set an `fc-*` class on the
     * host, but it must not override the status paint.
     */
    usesStatusFill() {
        const id = this.getIconId();
        return isIconStatus(this.status) && isStatusCapableIcon(id);
    }
    // ─── host class composition (zero inline styles) ────────────────────────────
    /**
     * Build the class map for the `<Host>` element.
     *
     * - `color="coral-500"` → `{ 'fc-coral-500': true }`
     * - `size="50"`         → `{ 'fs-50': true }`
     *
     * Returns `undefined` when no classes need to be added.
     */
    getHostClasses() {
        const classes = {};
        let hasAny = false;
        if (this.color) {
            classes[`fc-${this.color}`] = true;
            hasAny = true;
        }
        if (this.size !== undefined && this.size !== null && this.size !== '') {
            classes[`fs-${this.size}`] = true;
            hasAny = true;
        }
        return hasAny ? classes : undefined;
    }
    // ─── SVG attribute injection (width / height / viewBox) ─────────────────────
    /**
     * Convert a prop value to a string suitable for an SVG attribute.
     * Numbers → pixels string; strings pass through.
     */
    formatSvgAttr(value) {
        if (value === undefined || value === null || value === '')
            return undefined;
        if (typeof value === 'number') {
            return Number.isFinite(value) ? `${value}` : undefined;
        }
        const s = String(value).trim();
        return s || undefined;
    }
    /**
     * Inject `width` and/or `height` attributes onto the root `<svg>` tag.
     * Replaces existing attributes if present, or inserts new ones.
     * This keeps sizing on the SVG element itself — no inline style on the host.
     */
    applySvgDimensions(svg) {
        const s = this.formatSvgAttr(this.size);
        const w = this.formatSvgAttr(this.width) ?? s;
        const h = this.formatSvgAttr(this.height) ?? s;
        if (!w && !h)
            return svg;
        return svg.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
            let without = attrs;
            if (w) {
                without = without.replace(/\swidth\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
            }
            if (h) {
                without = without.replace(/\sheight\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
            }
            const spacer = without.length && !/^\s/.test(without) ? ' ' : '';
            const widthAttr = w ? ` width="${this.escapeXmlAttr(w)}"` : '';
            const heightAttr = h ? ` height="${this.escapeXmlAttr(h)}"` : '';
            return `<svg${without}${spacer}${widthAttr}${heightAttr}>`;
        });
    }
    /**
     * Replace or insert `viewBox` on the root `<svg>` tag (first match only).
     */
    applySvgViewBoxOverride(svg) {
        const vb = this.viewBox?.trim();
        if (!vb)
            return svg;
        return svg.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
            const without = attrs.replace(/\sviewBox\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
            const spacer = without.length && !/^\s/.test(without) ? ' ' : '';
            return `<svg${without}${spacer} viewBox="${this.escapeXmlAttr(vb)}">`;
        });
    }
    escapeXmlAttr(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/\r?\n/g, ' ');
    }
    // ─── path resolution ────────────────────────────────────────────────────────
    /**
     * Normalise a path string into an absolute directory URL ending with `/`.
     * Resolves against `<base href>` if present, otherwise the document origin
     * (NOT `document.baseURI`, which on a deep route like `/customers/123`
     * would otherwise resolve relative paths against the current page path).
     */
    static normaliseDirPath(raw) {
        const withSlash = raw.endsWith('/') ? raw : `${raw}/`;
        if (globalThis.document === undefined || globalThis.window === undefined) {
            return withSlash;
        }
        try {
            // Honour <base href> if set; otherwise anchor at origin so deep routes
            // don't accidentally resolve relative paths against the current path.
            const base = DsIcon.getDocumentBase();
            return new URL(withSlash, base).href;
        }
        catch {
            return withSlash;
        }
    }
    /** Returns <base href> if set, else `${origin}/`. */
    static getDocumentBase() {
        const baseEl = document.querySelector('base[href]');
        if (baseEl?.href)
            return baseEl.href;
        return `${globalThis.window.location.origin}/`;
    }
    /**
     * Resolve the icon directory URL.
     * Priority: instance prop → static setting → bundled assets directory.
     */
    getBaseDir() {
        if (this.path)
            return DsIcon.normaliseDirPath(this.path);
        if (DsIcon._globalPath)
            return DsIcon._globalPath;
        return getAssetPath('../../assets/icon/');
    }
    // ─── icon id normalisation ──────────────────────────────────────────────────
    getIconId() {
        let raw = (this.icon ?? this.name ?? '').trim();
        if (!raw)
            return '';
        raw = raw.toLowerCase();
        raw = raw.replaceAll(/\s+/g, '-');
        if (raw.startsWith('icon-'))
            raw = raw.slice(5);
        if (raw.endsWith('.svg'))
            raw = raw.slice(0, -4);
        raw = raw.replaceAll(/-{2,}/g, '-');
        return raw;
    }
    // ─── candidate URLs ─────────────────────────────────────────────────────────
    candidateUrls(id, baseDir) {
        const stem = `icon-${id}`;
        const seen = new Set();
        const push = (filename) => {
            try {
                seen.add(new URL(filename, baseDir).href);
            }
            catch {
                seen.add(baseDir + filename);
            }
        };
        // Always try the exact filename first.
        push(`${stem}.svg`);
        if (this.strict)
            return [...seen];
        // Non-strict: try common variants. If id already has a known suffix, also
        // try the bare stem so `home-f` falls back to `home`.
        if (/-(f|o|\d+)$/.test(id)) {
            push(`icon-${id.replace(/-(f|o|\d+)$/, '')}.svg`);
        }
        push(`${stem}-f.svg`);
        push(`${stem}-o.svg`);
        push(`${stem}-2.svg`);
        return [...seen];
    }
    // ─── sanitization ───────────────────────────────────────────────────────────
    /**
     * Strip script tags, inline event handlers, and javascript: URLs.
     * The component renders SVG via innerHTML inside shadow DOM, so any of
     * these would execute in the host page. Far from a full sanitizer — for
     * truly untrusted icons, host the assets yourself or run them through DOMPurify.
     */
    sanitizeSvg(raw) {
        let out = raw;
        // Remove <script>…</script>
        out = out.replaceAll(/<script\b[\s\S]*?<\/script>/gi, '');
        // Remove on* event handlers: on<word>="…" or '…' or unquoted up to a space/>
        out = out.replaceAll(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
        // Neutralise javascript: in href / xlink:href
        out = out.replaceAll(/\b(href|xlink:href)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, '$1="#"');
        return out;
    }
    // ─── color normalisation ────────────────────────────────────────────────────
    /**
     * Rewrite hardcoded color attributes on the SVG so the `color` prop /
     * inherited `color` actually takes effect.
     *
     * Specifically:
     *   • `fill="#xxx"`   → `fill="currentColor"`
     *   • `stroke="#xxx"` → `stroke="currentColor"`
     *   • `fill="rgb(…)"`   → `fill="currentColor"`
     *   • `stroke="rgb(…)"` → `stroke="currentColor"`
     *
     * Preserves explicit `fill="none"` / `stroke="none"` — those are
     * structural (an unfilled shape, an outline-only path), not color.
     * Preserves URL references (`fill="url(#gradient)"`) — those point to
     * `<defs>` and rewriting them would break the artwork.
     *
     * Inline `style="fill:#xxx"` attributes are also normalised. CSS `<style>`
     * blocks inside the SVG are left alone (rare in icon assets, and parsing
     * CSS safely with a regex is a losing game).
     *
     * No-op when `preserveColors` is true, or when `status` is painting a
     * status-capable icon (status colours must stay independent of `color`).
     */
    forceCurrentColor(svg) {
        if (this.preserveColors || this.usesStatusFill())
            return svg;
        let out = svg;
        // fill="<color>" / stroke="<color>" — but only if it's an actual color
        // value (hex, rgb(), rgba(), hsl(), named color word). Skip `none`,
        // `currentColor`, `inherit`, `transparent`, and `url(#…)` references.
        out = out.replaceAll(/\b(fill|stroke)\s*=\s*(["'])((?!none\b|currentColor\b|inherit\b|transparent\b|url\()[^"']+)\2/gi, '$1="currentColor"');
        // Inline style attributes: style="…; fill: #abc; stroke: rgb(…); …"
        out = out.replaceAll(/\bstyle\s*=\s*(["'])([^"']*)\1/gi, (_, quote, body) => {
            const cleaned = body.replace(/\b(fill|stroke)\s*:\s*(?!none\b|currentColor\b|inherit\b|transparent\b|url\()[^;"']+/gi, '$1: currentColor');
            return `style=${quote}${cleaned}${quote}`;
        });
        return out;
    }
    // ─── fetch ──────────────────────────────────────────────────────────────────
    async fetchFirstValid(urls) {
        if (typeof fetch === 'undefined')
            return null;
        for (const url of urls) {
            try {
                const res = await fetch(url, { credentials: 'same-origin' });
                if (!res.ok)
                    continue;
                const text = await res.text();
                if (!/<svg[\s>]/i.test(text))
                    continue;
                return { url, svg: this.sanitizeSvg(text) };
            }
            catch {
                /* try next */
            }
        }
        return null;
    }
    async loadSvg() {
        const myToken = ++this.requestToken;
        const id = this.getIconId();
        // Reset error state up-front so a re-render of an empty `icon` clears prior failures.
        this.loadFailed = false;
        if (!id) {
            this.svgMarkup = '';
            this.loading = false;
            return;
        }
        // Status-capable icons (`flag`, `star`) resolve from the in-component
        // registry so outline ↔ filled swaps stay local and easy to extend.
        if (isStatusCapableIcon(id)) {
            const svg = resolveStatusIconSvg(id, this.status);
            if (svg) {
                this.loading = false;
                this.svgMarkup = svg;
                this.dsIconLoad.emit({ id, url: `status://${id}${this.status ? `?status=${this.status}` : ''}` });
                return;
            }
        }
        const baseDir = this.getBaseDir();
        // Cache key does NOT include preserveColors — the cache stores the
        // sanitized-but-otherwise-original SVG; color normalisation runs
        // per-instance at use time (see render()).
        const cacheKey = `${baseDir}::${id}::${this.strict ? 'strict' : 'loose'}`;
        // Cache stores Promises so concurrent requests for the same icon dedupe.
        let pending = DsIcon.cache.get(cacheKey);
        if (!pending) {
            const urls = this.candidateUrls(id, baseDir);
            pending = this.fetchFirstValid(urls).then((hit) => {
                if (!hit) {
                    // Bubble failure detail via a sentinel — see catch in caller.
                    const err = new Error('ds-icon: not found');
                    err.tried = urls;
                    throw err;
                }
                this.dsIconLoad.emit({ id, url: hit.url });
                return hit.svg;
            });
            DsIcon.cache.set(cacheKey, pending);
            // If the fetch ultimately fails, drop it from cache so a later retry
            // (e.g. after the host fixes a path) can succeed.
            pending.catch(() => DsIcon.cache.delete(cacheKey));
        }
        this.loading = true;
        this.svgMarkup = '';
        try {
            const svg = await pending;
            // Discard if a newer request superseded this one.
            if (myToken !== this.requestToken)
                return;
            this.svgMarkup = svg;
            this.loading = false;
        }
        catch (err) {
            if (myToken !== this.requestToken)
                return;
            this.loadFailed = true;
            this.svgMarkup = '';
            this.loading = false;
            const tried = err &&
                typeof err === 'object' &&
                'tried' in err &&
                Array.isArray(err.tried)
                ? err.tried
                : [];
            this.dsIconError.emit({ id, tried });
        }
    }
    // ─── render ─────────────────────────────────────────────────────────────────
    render() {
        const hostClasses = this.getHostClasses();
        if (!this.getIconId()) {
            return h(Host, { "aria-hidden": "true", class: hostClasses });
        }
        if (this.loading && !this.svgMarkup) {
            return (h(Host, { "aria-busy": "true", "aria-hidden": "true", class: hostClasses }, h("span", { class: "ds-icon__loading" })));
        }
        const fallbackViewBox = this.viewBox?.trim() || '0 0 24 24';
        if (this.loadFailed || !this.svgMarkup) {
            const fw = this.formatSvgAttr(this.width);
            const fh = this.formatSvgAttr(this.height);
            return (h(Host, { "aria-hidden": "true", class: hostClasses }, h("span", { class: "ds-icon__fallback" }, h("svg", { class: "ds-icon__fallback-svg", viewBox: fallbackViewBox, width: fw, height: fh, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false" }, h("circle", { class: "ds-icon__fallback-ring", cx: "12", cy: "12", r: "9.25", fill: "none", stroke: "currentColor", "stroke-width": "1.75" }), h("text", { class: "ds-icon__fallback-mark", x: "12", y: "16.75", "text-anchor": "middle", "font-size": "11.5", "font-family": "system-ui, -apple-system, 'Segoe UI', sans-serif", "font-weight": "700", fill: "currentColor" }, "?")))));
        }
        // Pipeline: cached SVG → viewBox override → dimensions → color normalisation.
        // Color step runs per-instance because preserveColors / status fill are
        // per-instance (`status` skips rewriting so it never fights `color`).
        let processed = this.applySvgViewBoxOverride(this.svgMarkup);
        processed = this.applySvgDimensions(processed);
        processed = this.forceCurrentColor(processed);
        return (h(Host, { "aria-hidden": "true", class: hostClasses }, h("div", { class: "ds-icon__root", innerHTML: processed })));
    }
    static get assetsDirs() { return ["../../assets/icon"]; }
    static get watchers() { return {
        "icon": [{
                "watchInputs": 0
            }],
        "name": [{
                "watchInputs": 0
            }],
        "path": [{
                "watchInputs": 0
            }],
        "strict": [{
                "watchInputs": 0
            }],
        "status": [{
                "watchInputs": 0
            }],
        "preserveColors": [{
                "watchPreserveColors": 0
            }]
    }; }
};
DsIcon.style = dsIconCss();

export { DsIcon as ds_icon };
