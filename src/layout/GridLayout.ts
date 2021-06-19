import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export type layoutVariant = '1' | '1-1' | '1-1-1';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-grid-layout')
export class GridLayout extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-rows: auto;
    }

    :host([layout='1']) {
      grid-template-columns: 1fr;
    }

    :host([layout='1-1']) {
      grid-template-columns: 1fr;
    }

    :host([layout='1-1-1']) {
      grid-template-columns: 1fr;
    }

    @media screen and (min-width: 1024px) {
      :host([layout='1']) {
        grid-template-columns: 1fr;
      }

      :host([layout='1-1']) {
        grid-template-columns: 1fr 1fr;
      }

      :host([layout='1-1-1']) {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  `;

  /**
   * Height
   */
  @property({reflect: true})
  public layout?: layoutVariant = '1-1';

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-grid-layout': GridLayout;
  }
}
