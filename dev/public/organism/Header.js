var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './Navigation';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Header = class Header extends LitElement {
    render() {
        return html ` <slot></slot> `;
    }
};
Header.styles = css `
    :host {
      position: static;
      width: 100%;
      height: var(--iff-alias__header--height);
      padding: 0px var(--iff-dynamic__navigation--indent);
      border-bottom: 2px solid white;
    }
  `;
Header = __decorate([
    customElement('iff-header')
], Header);
export { Header };
//# sourceMappingURL=Header.js.map