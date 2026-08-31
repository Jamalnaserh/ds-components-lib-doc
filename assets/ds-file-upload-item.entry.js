import { r as registerInstance, c as createEvent, h, H as Host } from './index-CTScrs23.js';

const dsFileUploadItemCss = () => `.ds-file-upload-item{display:block;width:100%}.ds-file-upload-item__row{display:flex;align-items:center;gap:0.75rem;min-height:3.5rem;padding:0.625rem 0.875rem;background:var(--white);border:1px solid var(--grey-200);border-radius:var(--radius-lg)}.ds-file-upload-item__row--error{background:rgba(var(--rgb-error-500), 10%);border-color:var(--error-500)}.ds-file-upload-item__row--pdf:not(.ds-file-upload-item__row--error) .ds-file-upload-item__icon{color:var(--error-500)}.ds-file-upload-item__icon{display:inline-flex;flex-shrink:0;line-height:0;color:var(--primary)}.ds-file-upload-item__meta{display:flex;flex-direction:column;justify-content:center;gap:0.125rem;flex:1;min-width:0}.ds-file-upload-item__name{font-size:var(--font-size-text-sm, 0.875rem);font-weight:var(--font-weight-semibold, 600);color:var(--black);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ds-file-upload-item__size{font-size:var(--font-size-text-xs, 0.75rem);font-weight:var(--font-weight-regular, 400);color:var(--dark-grey)}.ds-file-upload-item__actions{display:flex;align-items:center;gap:0.375rem;flex-shrink:0}.ds-file-upload-item__btn{display:inline-flex;align-items:center;justify-content:center;width:2.25rem;height:2.25rem;padding:0;border:1px solid var(--grey-200);border-radius:50%;background:var(--white);cursor:pointer;color:var(--dark-grey);transition:background-color 0.12s ease, border-color 0.12s ease, color 0.12s ease}.ds-file-upload-item__btn:hover{background:var(--off-white);border-color:var(--grey-400)}.ds-file-upload-item__btn:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.ds-file-upload-item__btn--retry{color:var(--dark-grey)}.ds-file-upload-item__btn--remove{border-color:rgba(var(--rgb-error-500), 35%);color:var(--error-500)}.ds-file-upload-item__btn--remove:hover{background:rgba(var(--rgb-error-500), 10%);border-color:var(--error-500)}.ds-file-upload-item__error{margin:0.375rem 0 0;font-size:0.75rem;color:var(--error-500)}`;

const DsFileUploadItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.retryEvent = createEvent(this, "dsFileUploadItemRetry");
        this.removeEvent = createEvent(this, "dsFileUploadItemRemove");
    }
    /** JSON string in HTML, object in JSX. */
    file = '{}';
    readonly = false;
    /** Circular retry / replace control (design: refresh). */
    showRetry;
    retryLabel = 'Replace file';
    /** Delete control (brand red). */
    showRemove;
    removeLabel = 'Remove file';
    retryEvent;
    removeEvent;
    _file = {};
    fileWatcher(v) {
        if (!v) {
            this._file = {};
            return;
        }
        if (typeof v === 'string') {
            try {
                this._file = JSON.parse(v);
            }
            catch {
                this._file = { name: String(v) };
            }
            return;
        }
        this._file = v;
    }
    componentWillLoad() {
        this.fileWatcher(this.file);
    }
    static SIZE_UNITS = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB',
    ];
    formatFileSize(x) {
        if (x === undefined || x === '')
            return '';
        let l = 0;
        let n = parseInt(String(x), 10) || 0;
        if (n === 0)
            return '0 B';
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        const rounded = n >= 10 || l === 0 ? Math.floor(n) : Math.round(n * 10) / 10;
        return `${rounded} ${DsFileUploadItem.SIZE_UNITS[l] ?? 'B'}`;
    }
    iconFromName(name) {
        if (this._file?.errorMsg)
            return 'warning';
        if (!name)
            return 'file-o';
        const parts = name.split('.');
        let ext = parts.length > 1 ? parts[parts.length - 1] : '';
        ext = ext.toLowerCase();
        if (ext === 'jpeg')
            ext = 'jpg';
        if (ext === 'msg')
            return 'email-icon';
        return ext || 'file-o';
    }
    onRetry = () => {
        this.retryEvent.emit({ value: { ...this._file } });
    };
    onRemove = () => {
        this.removeEvent.emit({ value: { ...this._file } });
    };
    isPdf() {
        const n = this._file?.name ?? '';
        return /\.pdf$/i.test(n);
    }
    render() {
        const name = this._file?.name ?? '';
        const icon = this.iconFromName(name);
        const showRetry = this.showRetry !== false;
        const showRemove = this.showRemove !== false;
        return (h(Host, { key: 'ae3d740fc274396d2951b3fe9524c40baa4727f0', class: "ds-file-upload-item" }, h("div", { key: '878f605fbbb832c69c4adc83863efb699bdf6e3e', class: {
                'ds-file-upload-item__row': true,
                'ds-file-upload-item__row--error': !!this._file?.errorMsg,
                'ds-file-upload-item__row--pdf': this.isPdf(),
            }, part: "base" }, h("div", { key: '7a042855e05dc4c1189bd664367e255626b3f194', class: "ds-file-upload-item__icon", part: "icon" }, h("ds-icon", { key: '6d3431d8e91f098953c1d9bd235b099887a34ade', class: "fs-28", icon: icon })), h("div", { key: '2d63f8b85b430986655cce9a76699ab96122057f', class: "ds-file-upload-item__meta", part: "meta" }, h("span", { key: '32fef1c1d1009a580e1cf83fa91cff5ac1cea45f', class: "ds-file-upload-item__name", part: "name" }, name), this._file?.size != null && String(this._file.size) !== '' ? (h("span", { class: "ds-file-upload-item__size", part: "size" }, this.formatFileSize(this._file.size))) : null), !this.readonly && (showRetry || showRemove) ? (h("div", { class: "ds-file-upload-item__actions", part: "actions" }, showRetry ? (h("button", { type: "button", class: "ds-file-upload-item__btn ds-file-upload-item__btn--retry", "aria-label": this.retryLabel, onClick: this.onRetry }, h("ds-icon", { class: "fs-18", icon: "refresh" }))) : null, showRemove ? (h("button", { type: "button", class: "ds-file-upload-item__btn ds-file-upload-item__btn--remove", "aria-label": this.removeLabel, onClick: this.onRemove }, h("ds-icon", { class: "fs-18", icon: "trash-2" }))) : null)) : null), this._file?.errorMsg ? (h("p", { class: "ds-file-upload-item__error", part: "error" }, this._file.errorMsg)) : null));
    }
    static get watchers() { return {
        "file": [{
                "fileWatcher": 0
            }]
    }; }
};
DsFileUploadItem.style = dsFileUploadItemCss();

export { DsFileUploadItem as ds_file_upload_item };
