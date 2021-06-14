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
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let ColumnLayout = class ColumnLayout extends LitElement {
    render() {
        return html `<slot></slot> `;
    }
};
ColumnLayout.styles = css `
    :host {
      display: flex;
      align-content: space-between;
      justify-content: center;
      align-items: flex-start;
      flex-flow: row wrap;
      height: 100%;
    }

    ::slotted(*) {
      max-width: 100%;
      padding-bottom: 2.5rem;
    }

    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 100%;
        padding-bottom: 0;
      }
    }
  `;
ColumnLayout = __decorate([
    customElement('iff-column-layout')
], ColumnLayout);
export { ColumnLayout };
//# sourceMappingURL=ColumnLayout.js.map