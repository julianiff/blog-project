import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
@customElement('iff-button-list')
export class ButtonList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    ::slotted(*) {
      --iff-card__padding--top-bottom: 0.15rem;
      --iff-card__padding--left-right: 0.15rem;
      margin: 0.5rem;
    }
  `;

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button-list': ButtonList;
  }
}
