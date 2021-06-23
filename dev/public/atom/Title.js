var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Title = class Title extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Type of textAlignation
         */
        this.textAlign = 'left';
        /**
         * Level of styling
         */
        this.level = 3;
    }
    render() {
        const tagName = `h${this.level}`;
        const tag = document.createElement(tagName);
        tag.innerHTML = '<slot></slot>';
        return html `${tag}`;
    }
};
Title.styles = css `
    h1,
    h2,
    h3,
    h4 {
      margin-block-start: 0;
      margin-block-end: 0;
      font-family: var(--iff-alias__font--family);
      font-weight: var(--iff-text__font--weight);
      text-align: var(--iff-text__text--align);
      transition: var(--iff-alias__transition);
    }
    h1 {
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      --iff-text__font--weight: var(--iff-font-alias__weight--thin);
      font-size: var(--iff-title__font-size, var(--iff__dimension--50));
      line-height: 2em;
    }
    h2 {
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      --iff-text__font--weight: var(--iff-font-alias__weight--default);
      font-size: var(--iff-title__font-size, var(--iff__dimension--40));
      line-height: 2em;
    }
    h3 {
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      --iff-text__font--weight: var(--iff-font-alias__weight--bold);
      font-size: var(--iff-title__font-size, var(--iff__dimension--30));
    }
    h4 {
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      --iff-text__font--weight: var(--iff-font-alias__weight--default);
      font-size: var(--iff-title__font-size, var(--iff__dimension--20));
    }

    :host([textAlign='left']) {
      --iff-text__text--align: left;
    }

    :host([textAlign='right']) {
      --iff-text__text--align: left;
    }

    :host([surplus='giganto']) {
      --iff-title__font-size: 7rem;
    }

    @media screen and (min-width: 1024px) {
      :host([surplus='giganto']) {
        --iff-title__font-size: 10rem;
      }

      :host([textAlign='left']) {
        --iff-text__text--align: left;
      }

      :host([textAlign='center']) {
        --iff-text__text--align: center;
      }

      :host([textAlign='right']) {
        --iff-text__text--align: right;
      }
    }
  `;
__decorate([
    property({ reflect: true })
], Title.prototype, "textAlign", void 0);
__decorate([
    property({ type: Number })
], Title.prototype, "level", void 0);
__decorate([
    property()
], Title.prototype, "surplus", void 0);
Title = __decorate([
    customElement('iff-title')
], Title);
export { Title };
//# sourceMappingURL=Title.js.map