import transformJsonToLit from 'json-to-lit-transformer';
import { directive, Directive } from 'lit/directive.js';
import { Views } from './ressources/views';
import { LitCoilConnectedEvent } from './UpdateControllerConnectedEvent';
export class BuildViewsController {
    constructor(host, viewInput) {
        this.host = host;
        host.addController(this);
        if (viewInput)
            this.renderViews = directive(RenderContent)(Views[viewInput]);
    }
    _updateRender(view) {
        this.renderViews = directive(RenderContent)(Views[view]);
        this.host.requestUpdate();
    }
    hostConnected() {
        window.addEventListener(LitCoilConnectedEvent.eventName, (e) => this._updateRender(e.view), false);
    }
    hostDisconnected() {
        window.removeEventListener(LitCoilConnectedEvent.eventName, (e) => this._updateRender(e.view), false);
    }
}
class RenderContent extends Directive {
    render(input) {
        return transformJsonToLit(input);
    }
}
//# sourceMappingURL=build-views-controller.js.map