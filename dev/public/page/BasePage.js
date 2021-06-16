var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BuildViewsController } from '../controller/build-views-controller';
import { ThemeColorController } from '../controller/set-theme-color';
import '../atom/Text';
import '../atom/Button';
import '../atom/Title';
/**
 * An example element.
 *
 */
let BasePage = class BasePage extends LitElement {
    constructor() {
        super();
        /**
         * Type of styling
         */
        this.content = new BuildViewsController(this, this.view);
        /**
         * Type of styling
         */
        this.theme = 'blue-gradiant';
        new ThemeColorController(this);
    }
    render() {
        return html `
      <div class="base-layout">
        ${this.content.renderViews ? this.content.renderViews : nothing}
      </div>
    `;
    }
};
BasePage.styles = [
    css `
      .base-layout {
        padding: 5px;
      }

      @media screen and (min-width: 724px) {
        .button-list {
          flex-direction: row;
        }
        .base-layout {
          padding: 0px;
        }
      }
    `,
];
__decorate([
    property({ reflect: true })
], BasePage.prototype, "view", void 0);
__decorate([
    state()
], BasePage.prototype, "content", void 0);
__decorate([
    property({ reflect: true })
], BasePage.prototype, "theme", void 0);
BasePage = __decorate([
    customElement('iff-base-page')
], BasePage);
export { BasePage };
//# sourceMappingURL=BasePage.js.map