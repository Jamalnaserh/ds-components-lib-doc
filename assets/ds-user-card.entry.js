import { r as registerInstance, h, H as Host } from './index-CTScrs23.js';

const dsUserCardCss = () => `:host{display:block}.user-card{min-width:200px;max-width:100%;height:var(--user-card-height, auto);position:relative;padding:var(--user-card-padding, 0);text-align:var(--user-card-align, inherit);background-color:var(--user-card-bg, transparent);display:var(--user-card-display, flex);align-items:var(--user-card-align, flex-start);gap:var(--user-card-gap, 1rem)}.user-card .user-info{display:var(--user-details-display, flex);align-items:var(--user-details-align, baseline);flex-direction:var(--user-details-direction, column);flex-grow:1;gap:var(--user-details-gap, 0.3rem);line-height:1;padding:var(--user-info-padding, 0.3rem 0)}.user-card .user-info .name{--user-fc:var(--black);--user-fs:0.875rem;--user-fw:500;color:var(--user-fc, #000);font-size:var(--user-fs, 0.875rem);font-weight:var(--user-fw, 500);overflow-wrap:anywhere;width:100%}.user-card .user-info .title{--title-fc:var(--dark-gray);--title-fs:0.75rem;--title-fw:400;color:var(--title-fc, #808080);font-size:var(--title-fs, 0.75rem);font-weight:var(--title-fw, 400);overflow-wrap:anywhere;width:100%}.user-card .user-info .title:empty{display:none}.user-card .user-info .body{width:100%}.user-card .user-info .body:empty{display:none}`;

const DsUserCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    imageSize = 'medium';
    imageShape = 'circle';
    userInfo;
    _userInfo;
    userInfoWatcher(newValue) {
        if (typeof newValue === 'string') {
            try {
                this._userInfo = JSON.parse(newValue);
            }
            catch {
                this._userInfo = undefined;
            }
        }
        else {
            this._userInfo = newValue;
        }
    }
    componentWillLoad() {
        this.userInfoWatcher(this.userInfo);
    }
    render() {
        return (h(Host, { key: 'd438492731c763aa360b410af77377ae603f7105' }, this._userInfo && (h("section", { key: '59626ee7c1fbc451855eddc5d276203b1d711360', part: "base", class: "user-card" }, h("ds-avatar", { key: '5bd57659223559102808336d979db37cacc5fa7b', part: "image", size: this.imageSize, shape: this.imageShape, exportparts: "base: avatar_base", image: this._userInfo.image, label: this._userInfo.name }), h("div", { key: 'b195ea1a04a9677443ae88ea9af15b0d21a10811', part: "details", class: "user-info" }, h("span", { key: '84fdd83ea3ab53bc6105af64b294fdefb7796861', part: "name", class: "name" }, this._userInfo.name), h("span", { key: '71d6367a4e835e35b29a22248b11c7fc4b4e1a9f', part: "title", class: "title" }, this._userInfo.title), h("div", { key: '89cdb25e25ce5731357717b987ca288c99fcf052', part: "body", class: "body" }, h("slot", { key: '146cba8aaa67d1968f9b2b01cf54801207d08c00' }))), h("slot", { key: '4db8891cb1ef1ee290605c45df7835dbba8d1866', name: "close" })))));
    }
    static get watchers() { return {
        "userInfo": [{
                "userInfoWatcher": 0
            }]
    }; }
};
DsUserCard.style = dsUserCardCss();

export { DsUserCard as ds_user_card };
