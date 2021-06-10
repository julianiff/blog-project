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
      height: 100%;
      align-items: flex-end;
    }

    [name='start-text']::slotted(*) {
      display: block;
      padding: 25px;
    }

    [name='end-text']::slotted(*) {
      display: block;
      padding: 25px;
    }

    .start {
      width: 50%;
      transition: all 250ms ease-in;
    }

    .start:hover {
      background-color: var(--iff-alias__color--complement);
      --iff__font--color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
      border-radius: 5px;
    }

    .end {
      width: 50%;
      background-color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
      border-radius: 5px;
    }

    .end:hover {
      background-color: var(--iff-alias__color--complement);
      --iff__font--color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
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
