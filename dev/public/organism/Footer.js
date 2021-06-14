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
let Footer = class Footer extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * type to help to style the text
         */
        this.styling = 'paragraph';
    }
    render() {
        return html `<slot></slot> `;
    }
};
Footer.styles = css `
    :host {
      height: var(--iff-alias__header--height);
    }
  `;
__decorate([
    property()
], Footer.prototype, "styling", void 0);
Footer = __decorate([
    customElement('iff-footer')
], Footer);
export { Footer };
//# sourceMappingURL=Footer.js.map