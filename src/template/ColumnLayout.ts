import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../atom/Title';
import '../atom/Button';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-column-layout')
export class ColumnLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: row wrap;
      max-width: 1200px;
    }

    ::slotted(*) {
      max-width: 75%;
      margin: 2.5%;
    }

    @media screen and (min-width: 724px) {
      ::slotted(*) {
        max-width: 50%;
        margin: 2.5%;
      }
    }
    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 100%;
        margin: 1%;
      }
    }
  `;

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-column-layout': ColumnLayout;
  }
}
