import '../atom/Link';
import '../atom/Text';
import '../atom/Title';
import {LitElement, html, css, svg} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
@customElement('iff-icon-text')
export class IconText extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    svg {
      fill: var(--iff-alias__color--primary);
      height: 1rem;
      width: 1rem;
      transform: rotate(180deg);
      margin-right: 0.5rem;
    }
  `;

  render() {
    return html`${arrowLeft}<iff-link event="Intro"
        ><slot name="text"></slot
      ></iff-link>`;
  }
}
const arrowLeft = svg`<svg
  slot="icon"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;

declare global {
  interface HTMLElementTagNameMap {
    'iff-icon-text': IconText;
  }
}
