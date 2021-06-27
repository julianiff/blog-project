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
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let Text = class Text extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Type of styling
         */
        this.styling = 'paragraph';
        /**
         * Type of styling
         */
        this.textAlign = 'left';
        this.tag = 'p';
    }
    render() {
        const tag = document.createElement(this.tag);
        tag.classList.add(this.styling);
        tag.innerHTML = '<slot></slot>';
        return html `${tag}`;
    }
};
Text.styles = css `
    :host {
      transition: var(--iff-alias__transition);
    }
    :host([styling='paragraph']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 400;
      font-size: calc(1.125rem + 0.25 * ((100vw - 48rem) / 42));
      line-height: 180%;
    }
    :host([styling='paragraph-slim']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 100;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }

    :host([styling='paragraph-bold']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 700;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }

    :host([styling='label']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 400;
      font-size: var(--iff__dimension--12);
      line-height: 0.5rem;
    }

    :host([textAlign='left']) {
      text-align: left;
    }

    :host([textAlign='center']) {
      text-align: center;
    }

    :host([textAlign='right']) {
      text-align: right;
    }
  `;
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Text.prototype, "styling", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Text.prototype, "textAlign", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Text.prototype, "tag", void 0);
Text = __decorate([
    customElement('iff-text')
], Text);
export { Text };
//# sourceMappingURL=Text.js.map