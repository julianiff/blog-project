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
let OneOneLayout = class OneOneLayout extends LitElement {
    constructor() {
        super(...arguments);
        this.type = '1-1-1';
    }
    render() {
        return html `<slot></slot> `;
    }
};
OneOneLayout.styles = css `
    :host {
      display: flex;
      --iff-layout__gutter--horizontal: var(
        --iff__query--gutter-horizontal,
        var(--iff__spacer--md)
      );
      --iff-layout__gutter--vertical: var(
        --iff__query--gutter-vertical,
        var(--iff__spacer--md)
      );
      margin-top: calc(var(--iff-layout__gutter--horizontal) * -1);
      margin-left: calc(var(--iff-layout__gutter--vertical) * -1);
      flex-wrap: wrap;
    }

    :host {
      --iff-layout__flex-basis: 100%;
    }

    ::slotted(*) {
      flex-basis: calc(
        var(--iff-layout__flex-basis) - var(--iff-layout__gutter-horizontal)
      );
      max-width: calc(
        var(--iff-layout__flex-basis) - var(--iff-layout__gutter-horizontal)
      );
      margin-left: var(--iff-layout__gutter-horizontal);
      margin-top: var(--iff-layout__gutter-vertical);
    }

    @media (min-width: 1024px) {
      :host([type='1-1']) {
        --iff-layout__flex-basis: 50%;
      }

      :host([type='1-1-1']) {
        --iff-layout__flex-basis: 33.333333%;
      }
    }

    @media (min-width: 768px) {
      :host {
        --iff-layout__flex-basis: 50%;
      }
    }
  `;
__decorate([
    property({ reflect: true, type: String })
], OneOneLayout.prototype, "type", void 0);
OneOneLayout = __decorate([
    customElement('iff-layout')
], OneOneLayout);
export { OneOneLayout };
//# sourceMappingURL=OneOneLayout.js.map