var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Header = class Header extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * type to help to style the text
         */
        this.styling = 'paragraph';
    }
    render() {
        return html `
      <div class="header">
        <slot>
          <slot name="start"></slot>
          <slot name="end"></slot>
        </slot>
      </div>
    `;
    }
};
Header.styles = css `
    .header {
      padding-left: 0;
      height: 100%;
    }
    @media screen and (min-width: 1024px) {
      .header {
        padding-left: 3.2rem;
      }
    }
  `;
__decorate([
    property()
], Header.prototype, "styling", void 0);
Header = __decorate([
    customElement('iff-header')
], Header);
export { Header };
//# sourceMappingURL=Header.js.map