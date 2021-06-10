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
      padding-left: 0;
      height: 100%;
    }
    @media screen and (min-width: 1024px) {
      .header {
        padding-left: 3.2rem;
      }
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
