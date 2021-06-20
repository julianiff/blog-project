var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '../atom/Link';
import '../atom/Text';
import '../atom/Title';
import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitCoilConnectedEvent } from '../controller/UpdateControllerConnectedEvent';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
let IconText = class IconText extends LitElement {
    render() {
        return html `<div
      class="icon-text"
      @click=${() => {
            if (this.event) {
                const event = new LitCoilConnectedEvent(this.event);
                this.dispatchEvent(event);
            }
        }}
    >
      ${arrowLeft}<slot name="text"></slot>
    </div>`;
    }
};
IconText.styles = css `
    .icon-text {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
    }

    svg {
      fill: var(
        --iff-icon-text__font--color,
        var(--iff-hover__font--color, var(--iff-alias__font--color))
      );
      height: var(--iff__spacer--md);
      width: var(--iff__spacer--md);
      transform: rotate(180deg) translateX(var(--iff-icon-text__offset));
      margin-right: var(--iff__spacer--xs);
      transition: var(--iff-alias__transition);
    }

    :host {
      --iff-icon-text__offset: 0px;
    }

    :host :hover {
      --iff-hover__font--color: var(--iff-alias__color--complement);
      --iff-icon-text__offset: 5px;
    }
  `;
__decorate([
    property({ reflect: true })
], IconText.prototype, "event", void 0);
IconText = __decorate([
    customElement('iff-icon-text')
], IconText);
export { IconText };
const arrowLeft = svg `<svg
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;
//# sourceMappingURL=IconText.js.map