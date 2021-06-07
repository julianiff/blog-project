import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map';

/**
 * Card to display articles
 *
 * @slot title - Slot to set title
 * @slot modal-text -  Slot to set text of modal

 */
@customElement('iff-title-modal')
export class TitleModal extends LitElement {
  static styles = css`
    :host {
      --iff-text-modal__opacity: 0%;
      --iff-text-modal__display: 0%;
    }

    :host:hover {
      --iff-text-modal__opacity: 100%;
    }

    .modal {
      display: block;
      opacity: var(--iff-text-modal__opacity, 100%);
      position: absolute;
      transition: all 250ms ease-in;
    }

    .modal:hover {
      --iff-text-modal__opacity: 100%;
    }

    .title-modal:hover {
      --iff-text-modal__opacity: 100%;
    }

    [name='modal-text']::slotted(*) {
      position: absolute;
      left: 0;
      width: 300px;
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property()
  url = 'url.to.link.to';

  /**
   * The number of times the button has been clicked.
   */
  @property({type: String})
  modalTextOrientation = 'rotate(90deg)';

  @property({type: String})
  modalTextPosition = '13vw';

  render() {
    return html`
      <div class="title-modal">
        <slot name="title"></slot>
        <div
          class="modal"
          style=${styleMap({
            transform: this.modalTextOrientation,
            left: this.modalTextPosition,
          })}
        >
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
