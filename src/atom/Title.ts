import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export type HLevel = 1 | 2 | 3 | 4;
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-title')
export class Title extends LitElement {
  static styles = css`
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
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 100;
      font-size: var(--iff__dimension--50);
    }
    h2 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--40);
    }
    h3 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 700;
      font-size: var(--iff__dimension--30);
    }
    h4 {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--20);
    }
  `;

  /**
   * Level of styling
   */
  @property({type: Number})
  public level: HLevel = 3;

  render() {
    const tagName = `h${this.level}`;
    const tag = document.createElement(tagName);
    tag.innerHTML = '<slot></slot>';

    return html`${tag}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-title': Title;
  }
}
