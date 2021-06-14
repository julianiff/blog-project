import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

export type targetVariations = '_blank' | '_parent' | '_self' | '_top';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-slim-layout')
export class SlimLayout extends LitElement {
  static styles = css`
    :host {
      width: 800px;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-slim-layout': SlimLayout;
  }
}
