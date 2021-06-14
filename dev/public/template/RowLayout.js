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
let RowLayout = class RowLayout extends LitElement {
    render() {
        return html `<slot></slot> `;
    }
};
RowLayout.styles = css `
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }

    ::slotted(*) {
      max-width: 90%;
      margin: 2.5%;
    }

    @media screen and (min-width: 724px) {
      ::slotted(*) {
        max-width: 80%;
        margin: 2.5%;
      }
    }
    @media screen and (min-width: 1024px) {
      ::slotted(*) {
        max-width: 1200px;
        margin: 1%;
      }
    }
  `;
RowLayout = __decorate([
    customElement('iff-row-layout')
], RowLayout);
export { RowLayout };
//# sourceMappingURL=RowLayout.js.map