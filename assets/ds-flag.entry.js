import { r as registerInstance, a as getElement, d as getAssetPath, h, H as Host } from './index-CTScrs23.js';
import { n as normaliseDirPath } from './document-base-fmgU4TUC.js';

const dsFlagCss = () => `:host{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0;flex-shrink:0}.ds-flag__img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;border:1px solid rgba(var(--rgb-black), 0.12)}.ds-flag__img--circle{border-radius:50%}.ds-flag__img--rect{border-radius:var(--radius-sm)}.ds-flag__fallback{display:block;width:100%;height:100%;border-radius:50%;background:rgba(var(--rgb-black), 0.08)}`;

const DsFlag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Region code, e.g. `SA`, `us`, `GB-2`. */
    code = '';
    basePath;
    size = 24;
    alt;
    /** When true, only `{CODE}.png` is tried. */
    strict = false;
    /** Visual treatment: full rectangle or rounded (circle false = slight radius). */
    rounded;
    static setBasePath(path) {
        DsFlag._globalBasePath = normaliseDirPath(path);
    }
    static getBasePath() {
        return DsFlag._globalBasePath;
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
        if (DsFlag._globalBasePath)
            return DsFlag._globalBasePath;
        return getAssetPath('../../assets/flag/');
    }
    normaliseCode() {
        return (this.code ?? '')
            .trim()
            .toUpperCase()
            .replaceAll(/\s+/g, '');
    }
    buildCandidates() {
        const c = this.normaliseCode();
        if (!c)
            return [];
        const base = this.getBaseDir();
        const seen = new Set();
        const out = [];
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
        push(`${c}.png`);
        if (!this.strict) {
            push(`${c.toLowerCase()}.png`);
            push(`2 - ${c}.png`);
            push(`1- ${c}.png`);
            push(`1-${c}.png`);
            push(`4 ${c}.png`);
            push(`5 ${c}.png`);
            push(`6 ${c}.png`);
            push(`${c}-1.png`);
            push(`${c}-2.png`);
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
            height: sizeVal,
        };
        if (!candidates.length || !this.normaliseCode()) {
            return (h(Host, { style: hostStyle, "aria-hidden": "true" }, h("span", { class: "ds-flag__fallback" })));
        }
        const url = candidates[Math.min(this.candidateIndex, candidates.length - 1)];
        const code = this.normaliseCode();
        const alt = this.alt ?? `Flag ${code}`;
        const rounded = this.rounded !== false;
        return (h(Host, { style: hostStyle }, h("img", { class: {
                'ds-flag__img': true,
                'ds-flag__img--circle': rounded,
                'ds-flag__img--rect': !rounded,
            }, src: url, alt: alt, loading: "lazy", decoding: "async", onError: this.onImgError })));
    }
    static get assetsDirs() { return ["../../assets/flag"]; }
    static get watchers() { return {
        "code": [{
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
DsFlag.style = dsFlagCss();

export { DsFlag as ds_flag };
