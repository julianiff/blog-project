import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type textStyles = 'paragraph' | 'heading1' | 'heading2';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-footer')
export class Footer extends LitElement {
  static styles = css`
    :host {
      height: var(--iff-alias__header--height);
    }
  `;

  /**
   * type to help to style the text
   */
  @property()
  styling: textStyles = 'paragraph';

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-footer': Footer;
  }
}
