var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let GridLayout = class GridLayout extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Height
         */
        this.layout = '1-1';
    }
    render() {
        return html ` <slot></slot> `;
    }
};
GridLayout.styles = css `
    :host {
      display: grid;
      grid-template-rows: auto;
    }

    :host([layout='1']) {
      grid-template-columns: 1fr;
    }

    :host([layout='1-1']) {
      grid-template-columns: 1fr 1fr;
    }

    :host([layout='1-1-1']) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `;
__decorate([
    property({ reflect: true })
], GridLayout.prototype, "layout", void 0);
GridLayout = __decorate([
    customElement('iff-grid-layout')
], GridLayout);
export { GridLayout };
//# sourceMappingURL=GridLayout.js.map