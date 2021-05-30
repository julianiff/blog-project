import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type textStyles = 'paragraph' | 'heading1' | 'heading2';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-text')
export class PageLayout extends LitElement {
  static styles = css`
    .paragraph {
      color: blue;
    }
  `;

  /**
   * type to help to style the text
   */
  @property()
  styling: textStyles = 'paragraph';

  render() {
    return html`<p class="${this.styling}"><slot></slot></p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-text': PageLayout;
  }
}
