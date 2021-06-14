var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitCoilConnectedEvent } from '../controller/UpdateControllerConnectedEvent';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let Button = class Button extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Event Payload
         */
        this.eventPayload = 'payload';
        /**
         * Type of styling
         */
        this.disabled = false;
    }
    render() {
        return html `
      <button
        @click=${() => {
            if (this.event) {
                const event = new LitCoilConnectedEvent(this.event);
                this.dispatchEvent(event);
            }
        }}
      >
        <slot></slot>
      </button>
    `;
    }
};
Button.styles = css `
    :host([disabled]) {
      --iff-button__background-color: var(--iff-alias__body--background-color);
    }

    button {
      border: none;
      background-color: var(
        --iff-button__background-color,
        var(--iff-alias__background-color--primary)
      );
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
      box-shadow: inset 0 0 0 2px var(--iff-alias__background-color--secondary);
      border-radius: 3px;
      cursor: pointer;
      padding: var(--iff-card__padding--top-bottom, 0.5rem)
        var(--var-card__padding--left-right, 2rem);
      border-radius: 5px;

      transition: all 150ms ease-in;
    }

    :slotted(*) {
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
    }

    button:hover {
      box-shadow: inset 0 0 0 4px var(--iff-alias__background-color--secondary);
      transition: all 150ms ease-in;
    }
  `;
__decorate([
    property({ reflect: true })
], Button.prototype, "event", void 0);
__decorate([
    property({ reflect: true })
], Button.prototype, "eventPayload", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], Button.prototype, "disabled", void 0);
Button = __decorate([
    customElement('iff-button')
], Button);
export { Button };
//# sourceMappingURL=Button.js.map