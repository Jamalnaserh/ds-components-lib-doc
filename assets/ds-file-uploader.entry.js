import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CTScrs23.js';

const dsFileUploaderCss = () => `.ds-file-uploader{display:block;width:100%}.ds-file-uploader__label{display:block;font-size:var(--font-size-text-sm, 0.875rem);font-weight:var(--font-weight-semibold, 600);color:var(--black);margin-bottom:0.5rem}.ds-file-uploader__zone{--fu-bg:var(--off-white);--fu-border:var(--grey-200);--fu-icon:var(--grey-400);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:0.75rem;min-height:7.5rem;padding:1.25rem 1rem;background:var(--fu-bg);border:1px dashed var(--fu-border);border-radius:var(--radius-lg);cursor:pointer;color:var(--fu-icon);transition:border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease}.ds-file-uploader__zone:hover:not(.ds-file-uploader__zone--disabled){--fu-border:var(--grey-400)}.ds-file-uploader__zone:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.ds-file-uploader__zone--horizontal{flex-direction:row;text-align:start;align-items:center;justify-content:flex-start;min-height:5rem;padding:1rem 1.25rem;gap:1rem}.ds-file-uploader__zone--horizontal .ds-file-uploader__copy{align-items:flex-start}.ds-file-uploader__zone--horizontal .ds-file-uploader__primary,.ds-file-uploader__zone--horizontal .ds-file-uploader__secondary{text-align:start}.ds-file-uploader__zone--drag{--fu-bg:color-mix(in srgb, var(--primary) 6%, var(--white) 94%);--fu-border:var(--primary)}.ds-file-uploader__zone--disabled{cursor:not-allowed;opacity:0.55}.ds-file-uploader__icon{display:inline-flex;line-height:0;flex-shrink:0}.ds-file-uploader__copy{display:flex;flex-direction:column;gap:0.25rem;min-width:0}.ds-file-uploader__primary{margin:0;font-size:var(--font-size-text-sm, 0.875rem);line-height:1.4;color:var(--black)}.ds-file-uploader__primary-lead{font-weight:var(--font-weight-regular, 400)}.ds-file-uploader__primary-emphasis{font-weight:var(--font-weight-semibold, 600)}.ds-file-uploader__secondary{margin:0;font-size:var(--font-size-text-xs, 0.75rem);line-height:1.35;color:var(--dark-grey)}.ds-file-uploader__hint{margin:0.5rem 0 0;font-size:var(--font-size-text-xs, 0.75rem);color:var(--dark-grey)}.ds-file-uploader__input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}`;

const DsFileUploader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeEvent = createEvent(this, "dsFileUploaderChange");
    }
    get el() { return getElement(this); }
    /** Large stacked layout vs compact row (icon left, copy right). */
    variant = 'centered';
    /** Field label shown above the drop zone. */
    label = 'Upload Attachments';
    /** Line before the emphasised phrase, e.g. “Select a file or”. */
    primaryLead = 'Select a file or';
    /** Bold segment, e.g. “drag and drop here”. */
    primaryEmphasis = 'drag and drop here';
    /** Smaller constraint line under the primary line. */
    secondaryText = 'JPG, PNG or PDF, file size no more than 10MB';
    /** Optional helper under the drop zone. */
    hintText = '';
    accept = '.jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf';
    multiple = false;
    disabled = false;
    name = '';
    /** `input[type=file]` `capture` hint when supported. */
    capture;
    iconSize = 40;
    changeEvent;
    isDragging = false;
    inputRef;
    async openPicker() {
        if (this.disabled)
            return;
        this.inputRef?.click();
    }
    async clearInput() {
        if (this.inputRef)
            this.inputRef.value = '';
    }
    emitFiles(fileList) {
        if (!fileList?.length)
            return;
        this.changeEvent.emit({ files: Array.from(fileList) });
    }
    onInputChange = (ev) => {
        const input = ev.target;
        this.emitFiles(input.files);
    };
    onZoneClick = () => {
        void this.openPicker();
    };
    onZoneKeyDown = (ev) => {
        if (this.disabled)
            return;
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            void this.openPicker();
        }
    };
    onDragOver = (ev) => {
        if (this.disabled)
            return;
        ev.preventDefault();
        ev.stopPropagation();
        this.isDragging = true;
    };
    onDragLeave = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.isDragging = false;
    };
    onDrop = (ev) => {
        if (this.disabled)
            return;
        ev.preventDefault();
        ev.stopPropagation();
        this.isDragging = false;
        const dt = ev.dataTransfer;
        if (!dt?.files?.length)
            return;
        this.emitFiles(dt.files);
        if (this.inputRef)
            this.inputRef.value = '';
    };
    render() {
        const zoneClasses = {
            'ds-file-uploader__zone': true,
            'ds-file-uploader__zone--horizontal': this.variant === 'horizontal',
            'ds-file-uploader__zone--drag': this.isDragging,
            'ds-file-uploader__zone--disabled': this.disabled,
        };
        return (h(Host, { key: '1e62918f00c369e699ebfcf7e380a8f66395f259', class: "ds-file-uploader" }, this.label ? (h("div", { class: "ds-file-uploader__label", part: "label" }, this.label)) : null, h("div", { key: '2bb30462c9db731f64b05daa43b1c9e9755661e7', class: zoneClasses, part: "zone", role: "button", tabIndex: this.disabled ? -1 : 0, "aria-disabled": this.disabled ? 'true' : 'false', "aria-label": this.label || 'Upload file', onClick: this.onZoneClick, onKeyDown: this.onZoneKeyDown, onDragOver: this.onDragOver, onDragLeave: this.onDragLeave, onDrop: this.onDrop }, h("span", { key: '085ca83f39c5b841003aec83ed2c586f3e4bc079', class: "ds-file-uploader__icon", "aria-hidden": "true", part: "icon" }, h("ds-icon", { key: 'b473d81b41a9d8e173cd465c0ef062d2ebfe137f', class: `fs-${this.iconSize}`, icon: "upload-to-cloud" })), h("div", { key: 'd16d0398b353163014d34bfe530abce54ad8113c', class: "ds-file-uploader__copy", part: "copy" }, h("p", { key: 'b34435ef06668e3ef00d40fd4b67ae0460332c15', class: "ds-file-uploader__primary" }, h("span", { key: 'a5343557392fa4c51dfca0e2c3c736d587d514dc', class: "ds-file-uploader__primary-lead" }, this.primaryLead, " "), h("strong", { key: 'ff27fcd25de906af6432843272e9274d22b0b982', class: "ds-file-uploader__primary-emphasis" }, this.primaryEmphasis)), this.secondaryText ? (h("p", { class: "ds-file-uploader__secondary" }, this.secondaryText)) : null)), h("input", { key: '4b570759e22a70728a63f7f51f41ddd5f7553b30', class: "ds-file-uploader__input", type: "file", name: this.name || undefined, accept: this.accept || undefined, multiple: this.multiple, disabled: this.disabled, capture: this.capture || undefined, "aria-hidden": "true", tabIndex: -1, ref: (el) => (this.inputRef = el), onChange: this.onInputChange }), this.hintText ? (h("p", { class: "ds-file-uploader__hint", part: "hint" }, this.hintText)) : null));
    }
};
DsFileUploader.style = dsFileUploaderCss();

export { DsFileUploader as ds_file_uploader };
