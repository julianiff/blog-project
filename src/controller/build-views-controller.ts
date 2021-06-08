import {ReactiveController, ReactiveControllerHost} from 'lit';
import {directive, Directive, DirectiveResult} from 'lit/directive.js';
import {Views, viewVariants} from './ressources/views';
import {transformJsonToLit} from './transformJsonToLit';
import {LitCoilConnectedEvent} from './UpdateControllerConnectedEvent';

export class BuildViewsController implements ReactiveController {
  host: ReactiveControllerHost;
  renderViews: DirectiveResult;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);

    this.renderViews = directive(RenderContent)(Views["Intro"]);
  }

  private _updateRender(view: viewVariants) {
    this.renderViews = directive(RenderContent)(Views[view]);
    this.host.requestUpdate();
  }

  hostConnected() {
    window.addEventListener(
      LitCoilConnectedEvent.eventName,
      (e: any) => this._updateRender(e.view),
      false
    );
  }

  hostDisconnected() {
    window.removeEventListener(
      LitCoilConnectedEvent.eventName,
      (e: any) => this._updateRender(e.view),
      false
    );
  }
}

class RenderContent extends Directive {
  render(input: any) {
    return transformJsonToLit(input);
  }
}
