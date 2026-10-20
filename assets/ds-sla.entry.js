import { r as registerInstance, h, H as Host } from './index-CTScrs23.js';

const dsSlaCss = () => `:host{display:inline-block;line-height:0}svg{display:block}svg .ds-sla__progress{transition:stroke-dashoffset 0.6s ease}.ds-sla__label{fill:var(--black, #1d252d);font-size:0.6875rem;font-weight:var(--font-weight-semibold, 600);font-family:var(--font-family-base, system-ui, sans-serif)}`;

const DsSla = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Denominator shown in the center as `value/maxValue` unless `customValue` is set. */
    maxValue = 100;
    /** Current value; progress arc = value / maxValue. */
    value = 0;
    /** SVG width/height in pixels. */
    canvasScale = 80;
    /** Track (background arc) stroke color. */
    innerLineColor = '#FAFAFA';
    /** Progress arc stroke color. */
    outerLineColor = '#02C389';
    /** Track stroke width. */
    innerLineWidth = 4;
    /** Progress stroke width. */
    outerLineWidth = 4;
    /** When non-empty, replaces the default `value/maxValue` label in the center. */
    customValue = '';
    radius = 0;
    strokeDasharray = 0;
    strokeDashoffset = 0;
    transform = '';
    componentWillLoad() {
        this.recalculate();
    }
    recalculate() {
        const scale = Math.max(1, this.canvasScale);
        const outerW = Math.max(0, this.outerLineWidth);
        this.radius = scale / 2 - outerW;
        if (this.radius < 0)
            this.radius = 0;
        this.strokeDasharray = Math.PI * (this.radius * 2);
        this.transform = `rotate(-90 ${scale / 2} ${scale / 2})`;
        const max = Math.max(0, this.maxValue);
        const v = Math.max(0, this.value);
        if (max === 0) {
            this.strokeDashoffset = this.strokeDasharray;
        }
        else if (v >= max) {
            this.strokeDashoffset = 0;
        }
        else {
            this.strokeDashoffset = ((max - v) / max) * this.strokeDasharray;
        }
    }
    render() {
        const scale = Math.max(1, this.canvasScale);
        const label = this.customValue.trim().length > 0
            ? this.customValue.trim()
            : `${this.value}/${this.maxValue}`;
        return (h(Host, { key: 'e025c06713f0001434b79b6a0b5d4e01489d5943' }, h("svg", { key: '2603eeeae6cf76191b0db307bd30cd59008c2cc3', part: "base", width: `${scale}px`, height: `${scale}px`, "aria-hidden": this.customValue ? undefined : 'true' }, h("circle", { key: '505a34b0a389b9a06a796d0cc70ed7f872824050', fill: "transparent", cx: scale / 2, cy: scale / 2, r: this.radius, stroke: this.innerLineColor, "stroke-width": this.innerLineWidth }), h("circle", { key: '33ddbb011c56814c43ba796d0d992839a7e6aa15', class: "ds-sla__progress", fill: "transparent", transform: this.transform, cx: scale / 2, cy: scale / 2, r: this.radius, stroke: this.outerLineColor, "stroke-width": this.outerLineWidth, "stroke-dasharray": this.strokeDasharray, "stroke-dashoffset": this.strokeDashoffset, "stroke-linecap": "round" }), h("text", { key: 'b0bba18be3c8c31e4826022c3ee8a21cdbbfd03b', part: "text", class: "ds-sla__label", x: scale / 2, y: scale / 2, "text-anchor": "middle", "dominant-baseline": "central" }, label))));
    }
    static get watchers() { return {
        "maxValue": [{
                "recalculate": 0
            }],
        "value": [{
                "recalculate": 0
            }],
        "canvasScale": [{
                "recalculate": 0
            }],
        "innerLineWidth": [{
                "recalculate": 0
            }],
        "outerLineWidth": [{
                "recalculate": 0
            }]
    }; }
};
DsSla.style = dsSlaCss();

export { DsSla as ds_sla };
