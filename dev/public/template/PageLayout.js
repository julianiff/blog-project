var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
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
let PageLayout = class PageLayout extends LitElement {
    render() {
        return html `

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
};
PageLayout.styles = css `
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
PageLayout = __decorate([
    customElement('iff-page-layout')
], PageLayout);
export { PageLayout };
//# sourceMappingURL=PageLayout.js.map