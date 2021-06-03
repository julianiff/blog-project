import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type StylingVariation = 'paragraph' | 'paragraph-slim' | 'paragraph-bold';
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
      color: blue;
    }
    :host([styling='paragraph-slim']) {
      color: blue;
    }
    :host([styling='paragraph-bold']) {
      color: blue;
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
    tag.innerHTML = '<slot></slot>';

    return html`${tag}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-text': Text;
  }
}
