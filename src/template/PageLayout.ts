import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '../atom/Title';
import '../atom/Button';
import '../organism/Header';
/**
 * An example element.
 *
 * @slot header -  Slot to set header
 * @slot body -  Slot to set body
 * @slot footer -  Slot to set footer
 */
@customElement('iff-page-layout')
export class PageLayout extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      flex-direction: column;
      transition: all 250ms ease-in;
    }

    @media screen and (min-width: 1024px) {
      :host {
        display: initial;
      }
    }

    [name='body']::slotted(*) {
      min-height: 100%;
    }

    .footer-layout {
      display: flex;
      justify-content: center;
      padding-top: 1rem;
    }
    .body-layout {
      display: flex;
      justify-content: center;
    }
  `;

  render() {
    return html`

      <slot name="header"></slot>
      <div class="body-layout">
        <slot name="body"></slot>
      </div>
      <div class="footer-layout">
        <slot name="footer">
        </slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-page-layout': PageLayout;
  }
}
