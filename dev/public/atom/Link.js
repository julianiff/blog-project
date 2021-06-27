var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitCoilConnectedEvent } from '../controller/UpdateControllerConnectedEvent';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let Link = class Link extends LitElement {
    render() {
        return html `
      <a
        href=${ifDefined(this.href)}
        hreflang=${ifDefined(this.hreflang)}
        target=${ifDefined(this.target)}
        aria-label=${ifDefined(this.label)}
        rel=${ifDefined(this.rel)}
        referrerpolicy=${ifDefined(this.referrerpolicy)}
        @click=${() => {
            if (this.event) {
                const event = new LitCoilConnectedEvent(this.event);
                this.dispatchEvent(event);
            }
        }}
      >
        <slot></slot>
      </a>
    `;
    }
};
Link.styles = css `
    a {
      cursor: pointer;
      text-decoration: none;
      position: relative;
      display: block;
    }

    :host :hover {
      --iff-hover__font--color: var(--iff-alias__color--complement);
    }

    :host([active='true']) {
      --iff-hover__font-color: var(--iff-alias__color--accent-one);
    }
  `;
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "event", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "href", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "hreflang", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "label", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "referrerpolicy", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "rel", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Link.prototype, "target", void 0);
Link = __decorate([
    customElement('iff-link')
], Link);
export { Link };
//# sourceMappingURL=Link.js.map