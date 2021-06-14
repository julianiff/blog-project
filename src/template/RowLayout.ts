import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../atom/Title';
import '../atom/Button';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-row-layout')
export class RowLayout extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }

    ::slotted(*) {
      max-width: 90%;
      margin: 2.5%;
    }

    @media screen and (min-width: 724px) {
      ::slotted(*) {
        max-width: 80%;
        margin: 2.5%;
      }
    }
    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 1200px;
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
    'iff-row-layout': RowLayout;
  }
}
