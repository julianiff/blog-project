var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ThemeColorController } from '../controller/set-theme-color';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Footer = class Footer extends LitElement {
    constructor() {
        super();
        this.setThemeColor = (theme) => {
            var _a;
            (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.setAttribute('theme', theme);
            window.sessionStorage.setItem('theme', theme);
        };
        new ThemeColorController(this);
    }
    render() {
        return html `
      <div class="button-list">
        <iff-button @click=${() => this.setThemeColor('light')}>
          <iff-text styling="label">Light</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('black')}>
          <iff-text styling="label">Black</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('blue-gradiant')}>
          <iff-text styling="label">Blue</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('redGreen')}>
          <iff-text styling="label">Red Green</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('triColor')}>
          <iff-text styling="label">TriColor</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('wood')}>
          <iff-text styling="label">Wood</iff-text>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('blueGreen')}>
          <iff-text styling="label">Blue Green</iff-text>
        </iff-button>
      </div>
    `;
    }
};
Footer.styles = css `
    .button-list {
      display: flex;
      flex-direction: row;
      padding-top: 5px;
      padding-left: 25px;
      flex-wrap: wrap;
    }
    .button-list :not(:last-child) {
      padding-right: 5px;
    }
  `;
__decorate([
    state()
], Footer.prototype, "setThemeColor", void 0);
Footer = __decorate([
    customElement('iff-footer')
], Footer);
export { Footer };
//# sourceMappingURL=Footer.js.map