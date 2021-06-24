import './Navigation';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {OffsetController} from '../controller/offset-controller';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-header')
export class Header extends LitElement {
  static styles = css`
    :host {
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 100;
      height: var(--iff-alias__header--height);
      padding: 0px var(--iff-dynamic__navigation--indent);
      border-bottom: 2px solid var(--iff-alias__color--positive);
      background-color: var(--iff-alias__body--background-color);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }

    :host([position='0']) {
      border-bottom: 0px solid var(--iff-alias__color--positive);
      transition: border-bottom var(--iff-alias__transition--intervall);
    }
  `;

  private offsetController = new OffsetController(this);

  @property({reflect: true, type: Number})
  position? = 0;

  render() {
    this.position = this.offsetController.offsetTop;
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-header': Header;
  }
}
