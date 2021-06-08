import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type ThemeVariation = 'light' | 'dark';

import '../atom/Title';
import '../atom/Button';
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
    [name='body']::slotted(*) {
      width: 100vw;
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

  /**
   * Type of styling
   */
  @property({reflect: true})
  public theme: ThemeVariation = 'light';

  render() {
    return html`

      <slot name="header"></slot>
      <div class="body-layout">
        <slot name="body"></slot>
      </div>
      <div class="footer-layout">
        <slot name="footer">
          <iff-button
            @button-clicked=${() => {
              this.theme !== 'light'
                ? (this.theme = 'light')
                : (this.theme = 'dark');
            }}
          >
            <iff-title level="4">${
              this.theme !== 'light' ? 'contrast' : 'dark'
            }-mode</iff-title>
          </iff-button>
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
