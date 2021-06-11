import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type StylingVariation =
  | 'paragraph'
  | 'paragraph-slim'
  | 'paragraph-bold'
  | 'label';
export type TagVariation = 'p';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-text')
export class Text extends LitElement {
  static styles = css`
    :host([styling='paragraph']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='paragraph-slim']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 100;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='paragraph-bold']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 700;
      font-size: var(--iff__dimension--15);
      margin-block-start: 1em;
      margin-block-end: 1em;
    }
    :host([styling='label']) {
      font-family: var(--iff-alias__font--family);
      color: var(
        --iff-state__font--color,
        var(--iff__font--color, var(--iff-alias__font--color))
      );
      font-weight: 400;
      font-size: var(--iff__dimension--12);
      line-height: 0.5rem;
    }
  `;

  /**
   * Type of styling
   */
  @property({reflect: true})
  public styling: StylingVariation = 'paragraph';

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
