var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './GridLayout';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let SubNavigation = class SubNavigation extends LitElement {
    render() {
        return html ` <iff-grid-layout></iff-grid-layout> `;
    }
};
SubNavigation.styles = css `
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
  `;
SubNavigation = __decorate([
    customElement('iff-sub-navigation')
], SubNavigation);
export { SubNavigation };
//# sourceMappingURL=StartEndLayout.js.map