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
let GridItem = class GridItem extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Orientation 'positive' | 'negative' | 'complement';
         */
        this.orientation = 'start';
        /**
         * Orientation 'positive' | 'negative' | 'complement';
         */
        this.spacer = 'sm';
        /**
         * Width
         */
        this.width = 'full';
    }
    render() {
        return html `<slot></slot> `;
    }
};
GridItem.styles = css `
    :host([orientation='start']) {
      justify-self: start;
    }

    :host([orientation='center']) {
      justify-self: center;
    }

    :host([orientation='end']) {
      justify-self: end;
    }

    :host([width='slim']) {
      width: 100%;
    }

    :host([width='default']) {
      width: 100%;
    }

    :host([width='full']) {
      width: 100%;
    }

    :host([spacer='sm']) {
      padding: var(--iff__spacer--sm);
    }

    :host([spacer='md']) {
      padding: var(--iff__spacer--md);
    }

    :host([spacer='lg']) {
      padding: var(--iff__spacer--lg);
    }

    :host([spacer='component']) {
      padding: var(--iff__spacer--xxl);
    }

    :host([height='full']) {
    }

    :host([background='positive']) {
      background: var(--iff-alias__color--positive);
    }

    :host([background='negative']) {
      background: var(--iff-alias__color--negative);
    }

    :host([background='complement']) {
      background: var(--iff-alias__color--complement);
    }

    @media screen and (min-width: 1024px) {
      :host([height='full']) {
        min-height: 80vh;
      }

      :host([width='slim']) {
        width: 600px;
      }

      :host([width='default']) {
        width: 1024px;
      }

      :host([width='full']) {
        width: 100%;
      }
    }
  `;
__decorate([
    property({ reflect: true })
], GridItem.prototype, "orientation", void 0);
__decorate([
    property({ reflect: true })
], GridItem.prototype, "spacer", void 0);
__decorate([
    property({ reflect: true })
], GridItem.prototype, "width", void 0);
__decorate([
    property({ reflect: true })
], GridItem.prototype, "height", void 0);
__decorate([
    property({ reflect: true })
], GridItem.prototype, "background", void 0);
GridItem = __decorate([
    customElement('iff-grid-item')
], GridItem);
export { GridItem };
//# sourceMappingURL=GridItem.js.map