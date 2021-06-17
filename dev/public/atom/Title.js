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
    }
    h1 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 100;
      font-size: var(--iff__dimension--50);
    }
    h2 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 400;
      font-size: var(--iff__dimension--40);
    }
    h3 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 700;
      font-size: var(--iff__dimension--30);
    }
    h4 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 400;
      font-size: var(--iff__dimension--20);
    }
  `;
__decorate([
    property({ type: Number })
], Title.prototype, "level", void 0);
Title = __decorate([
    customElement('iff-title')
], Title);
export { Title };
//# sourceMappingURL=Title.js.map