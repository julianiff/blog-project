export class MouseController {
    constructor(host) {
        this.pos = { x: 0, y: 0 };
        this._onMouseMove = ({ clientX, clientY }) => {
            this.pos = { x: clientX, y: clientY };
            this.host.requestUpdate();
        };
        this.host = host;
        host.addController(this);
    }
    hostConnected() {
        window.addEventListener('mousemove', this._onMouseMove);
    }
    hostDisconnected() {
        window.removeEventListener('mousemove', this._onMouseMove);
    }
}
//# sourceMappingURL=mouse-controller.js.map