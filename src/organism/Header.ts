import './Navigation';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-header')
export class Header extends LitElement {
  static styles = css`
    :host {
      position: static;
      width: 100%;
      height: var(--iff-alias__header--height);
      padding: 0px var(--iff-dynamic__navigation--indent);
      border-bottom: 2px solid white;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-header': Header;
  }
}
