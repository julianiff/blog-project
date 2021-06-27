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
import { styleMap } from 'lit/directives/style-map.js';
import { LitCoilConnectedEvent } from '../controller/UpdateControllerConnectedEvent';
/**
 * Card to display articles
 *
 * @slot custom -  Slot to override all Card
 * @slot body -  Slot to override body part
 * @slot title -  Slot to set Card Title
 * @slot lead -  Slot to set Card lead text
 * @slot footer -  Slot to set footer
 * @csspart button - The button
 */
let Card = class Card extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The number of times the button has been clicked.
         */
        this.url = 'url.to.link.to';
        /**
         * The number of times the button has been clicked.
         */
        this.backgroundColor = '--iff-alias__color--complement';
        /**
         * Source of the header image
         * https://picsum.photos/200/200
         */
        this.imageSrc = 'dev/Download.jpeg';
        /**
         * Type of styling
         */
        this.eventPayload = 'payload';
    }
    render() {
        const backgroundMap = { 'background-color': `var(${this.backgroundColor})` };
        return html `
      <div
        class="card"
        style=${styleMap(backgroundMap)}
        @click=${() => {
            if (this.event) {
                const event = new LitCoilConnectedEvent(this.event);
                this.dispatchEvent(event);
            }
        }}
      >
        <slot name="custom">
          <img src="${this.imageSrc}" alt="Alt tag" />
          <div class="body">
            <slot name="body">
              <slot name="label"></slot>
              <slot name="title"></slot>
              <slot name="lead"></slot>
            </slot>
          </div>
          <slot name="footer"></slot>
        </slot>
      </div>
    `;
    }
};
Card.styles = css `
    :host {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: var(--iff-card__background-color);
      --iff-state__font--color: white;
    }

    .card {
      transition: all 500ms ease-in;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      border-radius: var(--iff-alias__border--radius);
      overflow: hidden;
    }

    .card:hover {
      box-shadow: 0px 0px 50px 1px var(--iff-alias__color--complement);
      transition: all 250ms ease-in;
    }

    img {
      border-radius: var(--iff-alias__border--radius);
      height: 10rem;
    }

    .body {
      padding: var(--iff__dimension--20);
      text-overflow: ellipsis;
    }

    @media screen and (min-width: 1024px) {
      .card {
        flex-direction: row;
        height: 25vh;
      }
      img {
        height: 100%;
        width: 200px;
      }
    }
  `;
__decorate([
    property(),
    __metadata("design:type", Object)
], Card.prototype, "url", void 0);
__decorate([
    property(),
    __metadata("design:type", Object)
], Card.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Card.prototype, "imageSrc", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Card.prototype, "event", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Card.prototype, "eventPayload", void 0);
Card = __decorate([
    customElement('iff-card')
], Card);
export { Card };
//# sourceMappingURL=Card.js.map