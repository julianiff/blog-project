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
    :host {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: var(--iff-alias__header--height);
      background-color: black;
    }
    [name='start']::slotted(*) {
      color: white;
    }
    [name='end']::slotted(*) {
      color: white;
    }
  `;

  /**
   * type to help to style the text
   */
  @property()
  styling: textStyles = 'paragraph';

  render() {
    return html`
      <slot name="start"></slot>
      <slot name="end"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-header': Header;
  }
}
