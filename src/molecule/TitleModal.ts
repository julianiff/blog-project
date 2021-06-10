import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot title - Slot to set title
 * @slot modal-text -  Slot to set text of modal

 */
@customElement('iff-title-modal')
export class TitleModal extends LitElement {
  static styles = css`
    .title-modal {
      height: 100%;
    }

    .modal {
      --iff-state__font--color: var(--iff-alias__background-color--primary);
    }

    [name='modal-text']::slotted(*) {
      --iff-state__font--color: var(--iff-alias__background-color--primary);
    }
  `;

  render() {
    return html`
      <div class="title-modal">
        <slot name="title"></slot>
        <div class="modal">
          <slot name="modal-text"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-title-modal': TitleModal;
  }
}
