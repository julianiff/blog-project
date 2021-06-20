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
 * @slot title - Slot to set title
 * @slot modal-text -  Slot to set text of modal

 */
let TitleModal = class TitleModal extends LitElement {
    render() {
        return html `
      <div class="title-modal">
        <slot name="title"></slot>
        <div class="lead">
          <slot name="lead-text"></slot>
        </div>
      </div>
    `;
    }
};
TitleModal.styles = css `
    .title-lead {
      height: 100%;
    }
  `;
TitleModal = __decorate([
    customElement('iff-title-lead')
], TitleModal);
export { TitleModal };
//# sourceMappingURL=TitleLead.js.map