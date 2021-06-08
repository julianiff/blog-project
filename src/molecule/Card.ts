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
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: var(--iff-alias__color--complement);
    }

    .card {
      transition: all 500ms ease-in;
    }

    .card:hover {
      box-shadow: 0px 0px 55px -20px var(--iff-alias__color--complement);
      transition: all 250ms ease-in;
    }

    img {
      width: 100%;
    }

    .body {
      padding: var(--iff__dimension--20);
      border-right: 1px solid var(--iff-alias__color--complement);
      border-bottom: 1px solid var(--iff-alias__color--complement);
      border-left: 1px solid var(--iff-alias__color--complement);
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property()
  url = 'url.to.link.to';

  /**
   * Source of the header image
   * https://picsum.photos/200/200
   */
  @property({type: String})
  imageSrc = 'dev/Download.jpeg';

  render() {
    return html`
      <div class="card">
        <img src="${this.imageSrc}" alt="Alt tag" />
        <div class="body">
          <slot name="body">
            <slot name="title"></slot>
            <slot name="lead"></slot>
          </slot>
        </div>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-card': Card;
  }
}
