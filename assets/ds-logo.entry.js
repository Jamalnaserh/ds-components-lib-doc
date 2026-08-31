import { r as registerInstance, a as getElement, d as getAssetPath, h, H as Host } from './index-CTScrs23.js';
import { n as normaliseDirPath } from './document-base-fmgU4TUC.js';

const dsLogoCss = () => `:host{display:inline-flex;align-items:center;vertical-align:middle;line-height:0}.ds-logo__img{display:block;width:100%;height:auto;max-height:100%;object-fit:contain;object-position:center}.ds-logo__fallback{display:block;width:100%;aspect-ratio:2/1;max-height:2rem;border-radius:var(--radius-sm);background:rgba(var(--rgb-black), 0.08)}`;

const DsLogo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** File stem slug under the logo directory (see `basePath` / `setBasePath`). */
    logo;
    basePath;
    size = 48;
    alt;
    /**
     * When false (default), tries `stc logo.png` then `stc-logo.png` then title-case stem.
     */
    strict = false;
    static setBasePath(path) {
        DsLogo._globalBasePath = normaliseDirPath(path);
    }
    static getBasePath() {
        return DsLogo._globalBasePath;
    }
    static _globalBasePath = null;
    get host() { return getElement(this); }
    candidateIndex = 0;
    resetCandidate() {
        this.candidateIndex = 0;
    }
    getBaseDir() {
        if (this.basePath)
            return normaliseDirPath(this.basePath);
        if (DsLogo._globalBasePath)
            return DsLogo._globalBasePath;
        return getAssetPath('../../assets/logo/');
    }
    getLogoSlug() {
        let raw = (this.logo ?? '').trim();
        if (!raw)
            return '';
        raw = raw.toLowerCase();
        raw = raw.replaceAll(/\s+/g, '-');
        if (raw.endsWith('.png'))
            raw = raw.slice(0, -4);
        raw = raw.replaceAll(/-{2,}/g, '-');
        return raw;
    }
    buildCandidates() {
        const slug = this.getLogoSlug();
        if (!slug)
            return [];
        const spaced = slug.replaceAll('-', ' ');
        const seen = new Set();
        const out = [];
        const base = this.getBaseDir();
        const push = (filename) => {
            try {
                const u = new URL(filename, base).href;
                if (!seen.has(u)) {
                    seen.add(u);
                    out.push(u);
                }
            }
            catch {
                const u = base + filename;
                if (!seen.has(u)) {
                    seen.add(u);
                    out.push(u);
                }
            }
        };
        push(`${slug}.png`);
        if (spaced !== slug) {
            push(`${spaced}.png`);
        }
        if (!this.strict) {
            const title = spaced.replaceAll(/\b\w/g, (c) => c.toUpperCase());
            if (title !== spaced)
                push(`${title}.png`);
        }
        return out;
    }
    onImgError = () => {
        const all = this.buildCandidates();
        if (this.candidateIndex < all.length - 1) {
            this.candidateIndex += 1;
        }
    };
    render() {
        const candidates = this.buildCandidates();
        const sizeVal = typeof this.size === 'number' ? `${this.size}px` : this.size;
        const hostStyle = {
            width: sizeVal,
            minWidth: sizeVal,
        };
        if (!candidates.length) {
            return (h(Host, { style: hostStyle, "aria-hidden": "true" }, h("span", { class: "ds-logo__fallback" })));
        }
        const url = candidates[Math.min(this.candidateIndex, candidates.length - 1)];
        const alt = this.alt ?? (this.logo ? `${this.logo} logo` : 'Logo');
        return (h(Host, { style: hostStyle }, h("img", { class: "ds-logo__img", src: url, alt: alt, loading: "lazy", decoding: "async", onError: this.onImgError })));
    }
    static get assetsDirs() { return ["../../assets/logo"]; }
    static get watchers() { return {
        "logo": [{
                "resetCandidate": 0
            }],
        "basePath": [{
                "resetCandidate": 0
            }],
        "strict": [{
                "resetCandidate": 0
            }]
    }; }
};
DsLogo.style = dsLogoCss();

export { DsLogo as ds_logo };
