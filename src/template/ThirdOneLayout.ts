import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Text Styling Component
 *
 * @slot start -  Slot to set the first text
 * @slot end -  Slot to set the end text
 */
@customElement('iff-third-one-layout')
export class ThirdOneLayout extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;
    }

    @media screen and (min-width: 1024px) {
      .start {
        width: 60vw;
        height: 100%;
      }
      .end {
        width: 30vw;
        height: 100%;
      }
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="start">
        <slot name="start"></slot>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-third-one-layout': ThirdOneLayout;
  }
}
