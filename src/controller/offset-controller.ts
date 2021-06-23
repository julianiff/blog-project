import {LitElement} from 'lit';

export class OffsetController {
  private host: LitElement;
  offsetTop?: number;

  _onScroll = () => {
    this.offsetTop = this.host.offsetTop;
    this.host.requestUpdate();
  };

  constructor(host: LitElement) {
    (this.host = host).addController(this);
  }

  hostConnected() {
    window.addEventListener('scroll', this._onScroll);
  }

  hostDisconnected() {
    window.removeEventListener('scroll', this._onScroll);
  }
}
