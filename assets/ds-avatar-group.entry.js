import { r as registerInstance, c as createEvent, h, H as Host } from './index-CTScrs23.js';

const dsAvatarGroupCss = () => `:host{display:inline-flex}.avatar-group-host{display:inline-flex}.avatar-group{--ag-overlap:0.28;display:inline-flex;align-items:center;gap:0}.avatar-group--xx-small{--ag-size:1rem;--ag-fs:0.375rem}.avatar-group--x-small{--ag-size:1.25rem;--ag-fs:0.4375rem}.avatar-group--small{--ag-size:1.5rem;--ag-fs:0.5rem}.avatar-group--medium{--ag-size:2rem;--ag-fs:0.625rem}.avatar-group--large{--ag-size:2.5rem;--ag-fs:0.75rem}.avatar-group--xl{--ag-size:3.25rem;--ag-fs:0.875rem}.avatar-group__items{display:inline-flex;align-items:center}.avatar-group__items>*{position:relative;z-index:0}.avatar-group__items>*:nth-child(1){z-index:1}.avatar-group__items>*:nth-child(2){z-index:2}.avatar-group__items>*:nth-child(3){z-index:3}.avatar-group__items>*:nth-child(4){z-index:4}.avatar-group__items>*:nth-child(5){z-index:5}.avatar-group__items>*:nth-child(6){z-index:6}.avatar-group__items>*:nth-child(7){z-index:7}.avatar-group__items>*:nth-child(8){z-index:8}.avatar-group__items>*:nth-child(9){z-index:9}.avatar-group__items>*:nth-child(10){z-index:10}.avatar-group__items>*:nth-child(11){z-index:11}.avatar-group__items>*:nth-child(12){z-index:12}.avatar-group__items>*+*{margin-inline-start:calc(var(--ag-size) * var(--ag-overlap) * -1)}.avatar-group__overflow{box-sizing:border-box;flex-shrink:0;min-width:var(--ag-size);width:var(--ag-size);height:var(--ag-size);margin-inline-start:calc(var(--ag-size) * var(--ag-overlap) * -1);z-index:20;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background-color:var(--light-grey, #f7f8f9);color:var(--dark-grey, #89979f);font-size:var(--ag-fs);font-weight:var(--font-weight-medium, 500);line-height:1}.avatar-group__add{box-sizing:border-box;flex-shrink:0;min-width:var(--ag-size);width:var(--ag-size);height:var(--ag-size);margin-inline-start:calc(var(--ag-size) * var(--ag-overlap) * -1);z-index:21;display:inline-flex;align-items:center;justify-content:center;padding:0;border-radius:50%;border:1px solid var(--grey-200, #e6e9eb);background-color:var(--white, #fff);cursor:pointer;transition:background-color 0.15s ease, border-color 0.15s ease}.avatar-group__add:hover{background-color:var(--off-white, #fbfbfc)}.avatar-group__add:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.avatar-group__add-icon{font-size:calc(var(--ag-fs) * 1.75);line-height:1;font-weight:var(--font-weight-regular, 400);color:var(--secondary)}`;

const DsAvatarGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.add = createEvent(this, "dsAvatarGroupAdd");
    }
    /**
     * Should match the `size` of nested `ds-avatar` for consistent overlap spacing.
     */
    size = 'medium';
    /** When set, renders a circular count badge after avatars (e.g. "+3"). */
    overflow;
    /** Renders a circular "+" control after avatars (and after overflow, if any). */
    addButton = false;
    /** Accessible label for the add control. */
    addLabel = 'Add';
    add;
    onAddClick = () => {
        this.add.emit();
    };
    render() {
        return (h(Host, { key: '4d642410b77ac93e180d1e26008a9009257e9ca2', class: "avatar-group-host" }, h("div", { key: 'efd8f2c73cf2577a0ff7b4974a60e550dcb487f6', class: `avatar-group avatar-group--${this.size}`, part: "base" }, h("div", { key: '0b71628039a9580c6223e0430917baba8d973ba1', class: "avatar-group__items" }, h("slot", { key: '58130d1ee20d3fddbe3e42e22a9b3ed20548efd9' })), this.overflow ? (h("span", { class: "avatar-group__overflow", part: "overflow", "aria-label": this.overflow }, this.overflow)) : null, this.addButton ? (h("button", { type: "button", class: "avatar-group__add", part: "add", "aria-label": this.addLabel, onClick: this.onAddClick }, h("span", { class: "avatar-group__add-icon", "aria-hidden": "true" }, "+"))) : null)));
    }
};
DsAvatarGroup.style = dsAvatarGroupCss();

export { DsAvatarGroup as ds_avatar_group };
