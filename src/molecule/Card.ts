import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot custom -  Slot to override all Card
 * @slot body -  Slot to override body part
 * @slot title -  Slot to set Card Title
 * @slot lead -  Slot to set Card lead text
 * @slot footer -  Slot to set footer
 * @csspart button - The button
 */
@customElement('iff-card')
export class Card extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      background-color: var(--iff-alias__color--complement);
    }

    img {
      height: 200px;
      width: 200px;
    }

    .body {
      padding: var(--iff__dimension--20);
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property()
  url = 'url.to.link.to';

  /**
   * Source of the header image
   */
  @property({type: String})
  imageSrc = 'https://picsum.photos/200/200';

  render() {
    return html`
      <slot name="custom">
        <img src="${this.imageSrc}" alt="Alt tag" />
        <div class="body">
          <slot name="body">
            <slot name="title"></slot>
            <slot name="lead"></slot>
          </slot>
        </div>
        <slot name="footer"></slot>
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-card': Card;
  }
}
