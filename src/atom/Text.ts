import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type StylingVariation =
  | 'paragraph'
  | 'paragraph-slim'
  | 'paragraph-bold'
  | 'label';
export type TagVariation = 'p';
export type textAlignVars = 'left' | 'center' | 'right';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-text')
export class Text extends LitElement {
  static styles = css`
    :host {
      font-family: var(--iff-alias__font--family);
      transition: var(--iff-alias__transition);
      color: var(
        --iff-hover__font--color,
        var(
          --iff-state__font--color,
          var(--iff__font--color, var(--iff-alias__font--color))
        )
      );
      line-height: 180%;
    }
    :host([styling='paragraph']) {
      font-weight: 400;
      font-size: 1.8rem;
    }
    :host([styling='paragraph-slim']) {
      font-weight: 100;
      font-size: var(--iff__dimension--15);
    }

    :host([styling='paragraph-bold']) {
      font-weight: 700;
      font-size: var(--iff__dimension--15);
    }

    :host([styling='label']) {
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

    @media screen and (min-width: 1024px) {
      :host([styling='paragraph']) {
        font-weight: 100;
        font-size: calc(1.125rem + 0.25 * ((100vw - 48rem) / 42));
      }
    }
  `;

  /**
   * Type of styling
   */
  @property({reflect: true})
  public styling: StylingVariation = 'paragraph';

  /**
   * Type of styling
   */
  @property({reflect: true})
  public textAlign: textAlignVars = 'left';

  @property()
  public tag: TagVariation = 'p';

  render() {
    const tag = document.createElement(this.tag);
    tag.classList.add(this.styling);
    tag.innerHTML = '<slot></slot>';

    return html`${tag}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-text': Text;
  }
}
