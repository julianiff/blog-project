import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

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
      width: 100%;
    }
    [name='start-text']::slotted(*) {
      position: absolute;
      --iff__font--color: var(--iff-alias__background-color--primary);
    }
    [name='end-text']::slotted(*) {
      position: absolute;
      --iff__font--color: var(--iff-alias__background-color--secondary);
    }

    .start {
      width: 50%;
      height: 100%;
      background-color: var(--iff-alias__background-color--secondary);
      position: relative;
    }

    .end {
      width: 50%;
      height: 100%;
      background-color: var(--iff-alias__color--primary);
      position: relative;
    }
  `;

  constructor() {
    super();
  }

  render() {
    const mouseMap = {
      width: '40%%',
    };
    const mouseMapEnd = {
      width: '40%',
    };

    return html`
      <div class="start" style=${styleMap(mouseMap)}>
        <slot name="start-text"></slot>
      </div>
      <div class="end" style=${styleMap(mouseMapEnd)}>
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
