import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {textAlignVars} from './Text';

export type HLevel = 1 | 2 | 3 | 4;
export type surPlus = 'giganto';
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
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      font-weight: 100;
      font-size: var(--iff-title__font-size, var(--iff__dimension--50));
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
      font-size: var(--iff-title__font-size, var(--iff__dimension--40));
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
      font-size: var(--iff-title__font-size, var(--iff__dimension--30));
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
      font-size: var(--iff-title__font-size, var(--iff__dimension--20));
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

    :host([surplus='giganto']) {
      --iff-title__font-size: 10rem;
    }
  `;

  /**
   * Type of textAlignation
   */
  @property({reflect: true})
  public textAlign: textAlignVars = 'left';

  /**
   * Level of styling
   */
  @property({type: Number})
  public level: HLevel = 3;

  /**
   * Level of styling
   */
  @property()
  public surplus?: surPlus;

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
