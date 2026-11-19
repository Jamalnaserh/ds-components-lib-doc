import { r as registerInstance, h, H as Host } from './index-CTScrs23.js';

const dsBreadcrumbCss = () => `.ds-breadcrumb{display:block}.ds-breadcrumb__list{display:flex;align-items:center;flex-wrap:wrap;gap:0;list-style:none;margin:0;padding:0;font-size:var(--font-size-text-sm, 0.875rem);line-height:var(--lh-text-sm, 1.25rem)}.ds-breadcrumb__item{display:inline-flex;align-items:center;max-width:100%}.ds-breadcrumb__link{display:inline-flex;align-items:center;color:var(--dark-grey);text-decoration:none;font-weight:var(--font-weight-regular, 400);transition:color 0.12s ease}.ds-breadcrumb__link:hover{color:var(--primary)}.ds-breadcrumb__link:focus-visible{outline:2px solid var(--primary);outline-offset:2px;border-radius:var(--radius-xs)}.ds-breadcrumb__home-wrap{display:inline-flex;align-items:center;gap:0.375rem}.ds-breadcrumb__home{display:inline-flex;align-items:center;flex-shrink:0;line-height:0}.ds-breadcrumb__sep{display:inline-flex;align-items:center;justify-content:center;margin-inline:0.5rem;color:var(--grey-200);line-height:0;flex-shrink:0}.ds-breadcrumb__current{color:var(--black);font-weight:var(--font-weight-semibold, 600)}[dir=rtl] .ds-breadcrumb__sep ds-icon{transform:scaleX(-1)}`;

const DsBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Trail segments: JSON string in HTML, e.g.
     * `[{"label":"Home","href":"/"},{"label":"eServices","href":"/es"},{"label":"Service name"}]`
     * Last item should have no `href` so it is shown as the current page (bold, not a link).
     */
    items = '[]';
    /** Prepends a home outline icon to the first link (design default). */
    homeIcon;
    /** Icon size (px) for home and chevron. */
    iconSize = 18;
    /** Accessible name for the nav landmark. */
    ariaLabel = 'Breadcrumb';
    _items = [];
    itemsWatcher(v) {
        this._items = this.normalizeItems(v);
    }
    componentWillLoad() {
        this.itemsWatcher(this.items);
    }
    normalizeItems(raw) {
        if (raw == null || raw === '')
            return [];
        if (typeof raw === 'string') {
            try {
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed))
                    return [];
                return parsed
                    .filter((x) => x != null && typeof x.label === 'string')
                    .map((x) => ({
                    label: String(x.label).trim(),
                    href: x.href != null && String(x.href).length > 0
                        ? String(x.href)
                        : undefined,
                }))
                    .filter((x) => x.label.length > 0);
            }
            catch {
                return [];
            }
        }
        return raw
            .map((x) => ({
            label: String(x.label ?? '').trim(),
            href: x.href != null && String(x.href).length > 0 ? String(x.href) : undefined,
        }))
            .filter((x) => x.label.length > 0);
    }
    render() {
        const list = this._items;
        const n = list.length;
        const chevronSize = Math.max(14, Math.round(this.iconSize * 0.95));
        const homeIcon = this.homeIcon !== false;
        if (n === 0) {
            return (h(Host, null, h("nav", { class: "ds-breadcrumb", "aria-label": this.ariaLabel })));
        }
        return (h(Host, null, h("nav", { class: "ds-breadcrumb", "aria-label": this.ariaLabel }, h("ol", { class: "ds-breadcrumb__list" }, list.map((seg, i) => {
            const isLast = i === n - 1;
            const showHomeGlyph = homeIcon && i === 0 && !isLast;
            const showHomeGlyphOnly = homeIcon && i === 0 && isLast;
            const body = isLast ? (h("span", { class: "ds-breadcrumb__current", "aria-current": "page" }, showHomeGlyphOnly ? (h("span", { class: "ds-breadcrumb__home-wrap" }, h("span", { class: "ds-breadcrumb__home", "aria-hidden": "true" }, h("ds-icon", { class: `fs-${this.iconSize}`, icon: "home-o" })), seg.label)) : (seg.label))) : (h("a", { class: "ds-breadcrumb__link", href: seg.href ?? '#' }, showHomeGlyph ? (h("span", { class: "ds-breadcrumb__home-wrap" }, h("span", { class: "ds-breadcrumb__home", "aria-hidden": "true" }, h("ds-icon", { class: `fs-${this.iconSize}`, icon: "home-o" })), seg.label)) : (seg.label)));
            return (h("li", { class: "ds-breadcrumb__item", key: `${i}-${seg.label}` }, body, !isLast ? (h("span", { class: "ds-breadcrumb__sep", "aria-hidden": "true" }, h("ds-icon", { class: `fs-${chevronSize}`, icon: "arrow-right-2" }))) : null));
        })))));
    }
    static get watchers() { return {
        "items": [{
                "itemsWatcher": 0
            }]
    }; }
};
DsBreadcrumb.style = dsBreadcrumbCss();

export { DsBreadcrumb as ds_breadcrumb };
