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
      font-family: var(--iff-alias__font--family);
      font-weight: var(--iff-text__font--weight);
      text-align: var(--iff-text__text--align);
      transition: var(--iff-alias__transition);
      line-height: 2em;
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
    }
    h1 {
      --iff-text__font--weight: var(--iff-font-alias__weight--thin);
      font-size: var(--iff-title__font-size, var(--iff__dimension--50));
    }
    h2 {
      --iff-text__font--weight: var(--iff-font-alias__weight--default);
      font-size: var(--iff-title__font-size, var(--iff__dimension--40));
    }
    h3 {
      --iff-text__font--weight: var(--iff-font-alias__weight--bold);
      font-size: var(--iff-title__font-size, var(--iff__dimension--30));
    }
    h4 {
      --iff-text__font--weight: var(--iff-font-alias__weight--bold);
      font-size: var(--iff-title__font-size, var(--iff__dimension--20));
      line-height: 1.75em;
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
