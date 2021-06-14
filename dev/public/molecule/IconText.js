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
import { customElement } from 'lit/decorators.js';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
let IconText = class IconText extends LitElement {
    render() {
        return html `${arrowLeft}<iff-link event="Intro"
        ><slot name="text"></slot
      ></iff-link>`;
    }
};
IconText.styles = css `
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    svg {
      fill: var(--iff-alias__color--primary);
      height: 1rem;
      width: 1rem;
      transform: rotate(180deg);
      margin-right: 0.5rem;
    }
  `;
IconText = __decorate([
    customElement('iff-icon-text')
], IconText);
export { IconText };
const arrowLeft = svg `<svg
  slot="icon"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;
//# sourceMappingURL=IconText.js.map