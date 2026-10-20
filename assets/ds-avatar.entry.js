import { r as registerInstance, a as getElement, h, H as Host } from './index-CTScrs23.js';

const userSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTEuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzhFOUFBMCIvPg0KICA8cGF0aCBkPSJNMTYuMjUwNCAxMS42NjYzQzE3LjEyNSAxMS42NjYzIDE3LjgzMzggMTIuMzc1MSAxNy44MzM4IDEzLjI0OTdWMTYuNDE2M0MxNy44MzM4IDE3LjI5MDkgMTcuMTI1IDE3Ljk5OTcgMTYuMjUwNCAxNy45OTk3SDYuMjIyNjZWMTMuMjQ5N0M2LjIyMjY2IDEyLjM3NTEgNi45MzE0NiAxMS42NjYzIDcuODA1OTkgMTEuNjY2M0gxNi4yNTA0Wk0xNi4yNTA0IDEyLjcyMTlINy44MDU5OUM3LjUxNDY2IDEyLjcyMTkgNy4yNzgyMSAxMi45NTgzIDcuMjc4MjEgMTMuMjQ5N1YxNi45NDQxSDE2LjI1MDRDMTYuNTQxOCAxNi45NDQxIDE2Ljc3ODIgMTYuNzA3NyAxNi43NzgyIDE2LjQxNjNWMTMuMjQ5N0MxNi43NzgyIDEyLjk1ODMgMTYuNTQxOCAxMi43MjE5IDE2LjI1MDQgMTIuNzIxOVpNMTIuMDI4MiA1LjMzMzAxQzEzLjQ4NTQgNS4zMzMwMSAxNC42NjcxIDYuNTE0NyAxNC42NjcxIDcuOTcxOUMxNC42NjcxIDkuNDI5MDkgMTMuNDg1NCAxMC42MTA4IDEyLjAyODIgMTAuNjEwOEMxMC41NzEgMTAuNjEwOCA5LjM4OTMyIDkuNDI5MDkgOS4zODkzMiA3Ljk3MTlDOS4zODkzMiA2LjUxNDcgMTAuNTcxIDUuMzMzMDEgMTIuMDI4MiA1LjMzMzAxVjUuMzMzMDFaTTEyLjAyODIgNi4zODg1NkMxMS4xNTM3IDYuMzg4NTYgMTAuNDQ0OSA3LjA5NzM3IDEwLjQ0NDkgNy45NzE5QzEwLjQ0NDkgOC44NDY0MiAxMS4xNTM3IDkuNTU1MjMgMTIuMDI4MiA5LjU1NTIzQzEyLjkwMjcgOS41NTUyMyAxMy42MTE1IDguODQ2NDIgMTMuNjExNSA3Ljk3MTlDMTMuNjExNSA3LjA5NzM3IDEyLjkwMjcgNi4zODg1NiAxMi4wMjgyIDYuMzg4NTZWNi4zODg1NloiIGZpbGw9IiM4RTlBQTAiLz4NCjwvc3ZnPg0K';

const dsAvatarCss = () => `:host{display:inline-flex}ds-avatar{display:inline-flex}.avatar{--avatar-overlap:0.28;position:relative;box-sizing:border-box;margin:var(--avatar-margin, 0);padding:var(--avatar-padding, 0);display:inline-flex;align-items:center;justify-content:center;overflow:hidden;text-transform:uppercase;font-weight:var(--avatar-fw, var(--font-weight-medium, 500));color:var(--white);background-color:var(--avatar-initials-bg, var(--secondary));border:var(--avatar-border, none);box-shadow:var(--avatar-shadow, none);min-width:var(--avatar-size);width:var(--avatar-size);height:var(--avatar-size);font-size:var(--avatar-fs);line-height:1;letter-spacing:var(--avatar-ls, -0.02em)}.avatar img{width:100%;height:100%;object-fit:cover}.avatar--xx-small{--avatar-size:1rem;--avatar-fs:0.4375rem}.avatar--x-small{--avatar-size:1.25rem;--avatar-fs:0.5rem}.avatar--small{--avatar-size:1.5rem;--avatar-fs:0.5625rem}.avatar--medium{--avatar-size:2rem;--avatar-fs:0.6875rem}.avatar--large{--avatar-size:2.5rem;--avatar-fs:0.8125rem}.avatar--xl{--avatar-size:3.25rem;--avatar-fs:1rem}.avatar--circle{border-radius:50%}.avatar--square{border-radius:0}.avatar--rounded{border-radius:var(--radius-sm)}.avatar--loader{position:absolute;inset:0;background-color:var(--grey-100);background-image:linear-gradient(90deg, var(--grey-100) 25%, var(--grey-50) 37%, var(--grey-100) 63%);background-size:400% 100%;animation:loading-background 1.4s ease infinite;text-indent:-9999px}.avatar--text{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}@keyframes loading-background{0%{background-position:100% 50%}100%{background-position:0 50%}}`;

const DsAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Image URL. When empty, initials from `label` are shown. */
    image;
    /** Full name used for alt text and initials (two words → two letters; one word → first two letters). */
    label = '';
    /**
     * XL ≈ 52px, large 40px, medium 32px, small 24px (design spec).
     * `x-small` / `xx-small` are compact variants for dense UIs.
     */
    size = 'medium';
    shape = 'circle';
    get el() { return getElement(this); }
    imageStatus = 'loading';
    watchImageChange() {
        this.imageStatus = this.hasImageSrc ? 'loading' : 'loaded';
    }
    get hasImageSrc() {
        return typeof this.image === 'string' && this.image.trim().length > 0;
    }
    getInitials() {
        const t = (this.label || '').trim();
        if (!t)
            return '';
        const parts = t.split(/\s+/).filter(Boolean);
        if (parts.length >= 2) {
            return `${parts[0][0] ?? ''}${parts.at(-1)?.[0] ?? ''}`.toUpperCase();
        }
        return t.slice(0, 2).toUpperCase();
    }
    componentWillLoad() {
        this.imageStatus = this.hasImageSrc ? 'loading' : 'loaded';
    }
    handleImageLoad = () => {
        this.imageStatus = 'loaded';
    };
    handleImageError = () => {
        this.imageStatus = 'error';
    };
    render() {
        const initials = this.getInitials();
        const showInitials = (!this.hasImageSrc && !!initials) ||
            (this.hasImageSrc && this.imageStatus === 'error' && !!initials);
        const showFallbackUserImg = this.hasImageSrc && this.imageStatus === 'error' && !initials;
        const showLoader = this.hasImageSrc && this.imageStatus === 'loading';
        const showPrimaryPhoto = this.hasImageSrc && this.imageStatus === 'loaded';
        const showSourceImg = this.hasImageSrc && !(this.imageStatus === 'error' && !!initials);
        const shapeUtility = this.shape === 'circle' ? 'rounded-circle' : '';
        return (h(Host, { key: '0a7c6930b9792b555c58727c954553d2e479c464' }, h("figure", { key: '6b11327ef1aa583a3321e4590b464eccf693cf7e', part: "base", class: `avatar avatar--${this.size} avatar--${this.shape} ${shapeUtility} overflow-hidden`.trim(), "aria-label": this.label || undefined }, showSourceImg && (h("img", { key: 'bbb652dfbca3b5346f29ee7365919592c5ad89c3', src: this.image, alt: this.label || '', onLoad: this.handleImageLoad, onError: this.handleImageError, style: { display: showPrimaryPhoto ? '' : 'none' } })), showFallbackUserImg && h("img", { key: 'd0bd967cb17ca670df71b3001acf276b570ffe2a', src: userSvg, alt: this.label || 'User' }), showLoader && h("div", { key: 'e214c76e024799ff9d40646d5fa24fef765d3d22', part: "loading", class: "avatar--loader", "aria-hidden": "true" }), showInitials && (h("div", { key: 'b042f2c73a66ad2f9008de1704bd6bf125e24fe0', part: "text", class: "avatar--text" }, initials)))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get watchers() { return {
        "image": [{
                "watchImageChange": 0
            }]
    }; }
};
DsAvatar.style = dsAvatarCss();

export { DsAvatar as ds_avatar };
