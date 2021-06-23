export class OffsetController {
    constructor(host) {
        this._onScroll = () => {
            this.offsetTop = this.host.offsetTop;
            this.host.requestUpdate();
        };
        (this.host = host).addController(this);
    }
    hostConnected() {
        window.addEventListener('scroll', this._onScroll);
    }
    hostDisconnected() {
        window.removeEventListener('scroll', this._onScroll);
    }
}
//# sourceMappingURL=offset-controller.js.map