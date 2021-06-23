var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let Navigation = class Navigation extends LitElement {
    render() {
        return html `
      <nav role="navigation">
        <slot name="start"></slot>
        <div class="end">
          <slot name="end"></slot>
        </div>
      </nav>
    `;
    }
};
Navigation.styles = css `
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      height: 100%;
    }

    ::slotted([slot='start']) {
      justify-self: start;
    }

    ::slotted([slot='end']) {
      justify-self: end;
      padding-right: var(--iff__spacer--xl);
    }

    .end {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  `;
Navigation = __decorate([
    customElement('iff-head-navigation')
], Navigation);
export { Navigation };
//# sourceMappingURL=Navigation.js.map