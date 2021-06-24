var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import './Navigation';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OffsetController } from '../controller/offset-controller';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Header = class Header extends LitElement {
    constructor() {
        super(...arguments);
        this.offsetController = new OffsetController(this);
        this.position = 0;
    }
    render() {
        this.position = this.offsetController.offsetTop;
        return html `<slot></slot> `;
    }
};
Header.styles = css `
    :host {
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
      height: var(--iff-alias__header--height);
      padding: 0px var(--iff-dynamic__navigation--indent);
      border-bottom: 2px solid var(--iff-alias__color--positive);
      background-color: var(--iff-alias__body--background-color);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }

    :host([position='0']) {
      border-bottom: 0px solid var(--iff-alias__color--positive);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }
  `;
__decorate([
    property({ reflect: true, type: Number })
], Header.prototype, "position", void 0);
Header = __decorate([
    customElement('iff-header')
], Header);
export { Header };
//# sourceMappingURL=Header.js.map