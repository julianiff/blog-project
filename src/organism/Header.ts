import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type textStyles = 'paragraph' | 'heading1' | 'heading2';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-header')
export class Header extends LitElement {
  static styles = css`
    .header {
      padding-left: 25px;
      height: 100%;
    }
  `;

  /**
   * type to help to style the text
   */
  @property()
  styling: textStyles = 'paragraph';

  render() {
    return html`
      <div class="header">
        <slot>
          <slot name="start"></slot>
          <slot name="end"></slot>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-header': Header;
  }
}
