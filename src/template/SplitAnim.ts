import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Text Styling Component
 *
 * @slot start-text -  Slot to set the first text
 * @slot end-text -  Slot to set the end text
 */
@customElement('iff-split')
export class Split extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }

    [name='start-text']::slotted(*) {
      padding: 25px;
    }

    [name='end-text']::slotted(*) {
      padding: 25px;
    }

    .start {
      transition: all 250ms ease-in;
    }

    .end {
      background-color: var(--iff-alias__background-color--complement);
      transition: all 250ms ease-in;
      border-radius: var(--iff-alias__border--radius);
    }

    .end:hover {
      background-color: var(--iff-alias__color--primary);
      --iff__font--color: var(--iff-alias__color--negative);
      --iff-hover__font--color: var(--iff-alias__color--negative);
      transition: all 250ms ease-in;
    }

    @media screen and (min-width: 724px) {
      :host {
        position: relative;
        display: flex;
        height: 70vh;
        align-items: stretch;
        flex-direction: row;
      }

      .start {
        width: 50%;
        height: auto;
      }

      .end {
        background-color: var(--iff-alias__background-color--primary);
        width: 50%;
        height: auto;
      }

      [name='start-text']::slotted(*) {
        display: block;
        padding: 25px;
      }

      [name='end-text']::slotted(*) {
        display: block;
        padding: 25px;
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="start">
        <slot name="start-text"></slot>
      </div>

      <div class="end">
        <slot name="end-text"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-split': Split;
  }
}
