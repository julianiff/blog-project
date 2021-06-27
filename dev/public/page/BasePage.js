var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BuildViewsController, } from '../controller/build-views-controller';
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
        this.theme = 'blue-gradiant';
        new ThemeColorController(this);
    }
    connectedCallback() {
        super.connectedCallback();
        this.content = new BuildViewsController(this, this.view);
    }
    render() {
        var _a;
        return html `
      <div class="base-layout">
        ${((_a = this.content) === null || _a === void 0 ? void 0 : _a.renderViews) ? this.content.renderViews : nothing}
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
    property({ reflect: true }),
    __metadata("design:type", String)
], BasePage.prototype, "view", void 0);
__decorate([
    state(),
    __metadata("design:type", BuildViewsController)
], BasePage.prototype, "content", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], BasePage.prototype, "theme", void 0);
BasePage = __decorate([
    customElement('iff-base-page'),
    __metadata("design:paramtypes", [])
], BasePage);
export { BasePage };
//# sourceMappingURL=BasePage.js.map