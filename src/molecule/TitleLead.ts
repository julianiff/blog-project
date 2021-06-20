import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot title - Slot to set title
 * @slot modal-text -  Slot to set text of modal

 */
@customElement('iff-title-lead')
export class TitleModal extends LitElement {
  static styles = css`
    .title-lead {
      height: 100%;
    }
  `;

  render() {
    return html`
      <div class="title-modal">
        <slot name="title"></slot>
        <div class="lead">
          <slot name="lead-text"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-title-lead': TitleModal;
  }
}
