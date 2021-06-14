var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '../atom/Title';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
let ButtonList = class ButtonList extends LitElement {
    render() {
        return html `<slot></slot> `;
    }
};
ButtonList.styles = css `
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    :host(:empty)::before {
      content: 'SMTH';
      color: black;
    }
    ::slotted(*) {
      --iff-card__padding--top-bottom: 0.15rem;
      --iff-card__padding--left-right: 0.15rem;
      margin: 0.3rem;
    }
  `;
ButtonList = __decorate([
    customElement('iff-button-list')
], ButtonList);
export { ButtonList };
//# sourceMappingURL=ButtonList.js.map