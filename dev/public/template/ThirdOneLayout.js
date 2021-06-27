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
import { customElement } from 'lit/decorators.js';
/**
 * Text Styling Component
 *
 * @slot start -  Slot to set the first text
 * @slot end -  Slot to set the end text
 */
let ThirdOneLayout = class ThirdOneLayout extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html `
      <div class="start">
        <slot name="start"></slot>
      </div>
      <div class="end">
        <slot name="end"></slot>
      </div>
    `;
    }
};
ThirdOneLayout.styles = css `
    :host {
      position: relative;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;
    }

    @media screen and (min-width: 1024px) {
      .start {
        width: 60vw;
        height: 100%;
      }
      .end {
        width: 30vw;
        height: 100%;
      }
    }
  `;
ThirdOneLayout = __decorate([
    customElement('iff-third-one-layout'),
    __metadata("design:paramtypes", [])
], ThirdOneLayout);
export { ThirdOneLayout };
//# sourceMappingURL=ThirdOneLayout.js.map