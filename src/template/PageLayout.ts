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
      background-color: var(--iff-alias__background-color--primary);
      transition: all 250ms ease-in;
    }

    @media screen and (min-width: 1024px) {
      :host {
        display: initial;
      }
    }

    [name='body']::slotted(*) {
      min-height: calc(
        100vh - var(--iff-alias__header--height) -
          var(--iff-alias__header--height) - 1.6rem
      );
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
    button {
      height: var(--iff-alias__header--height);
    }
  `;

  render() {
    return html`

      <iff-header><slot name="header"></slot></iff-header>
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
