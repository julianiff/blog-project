import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../layout/GridLayout';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-sub-navigation')
export class SubNavigation extends LitElement {
  static styles = css`
    :host {

    }
  `;

  render() {
    return html`

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-sub-navigation': SubNavigation;
  }
}
