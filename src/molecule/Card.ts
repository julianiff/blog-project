import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {viewVariants} from '../controller/ressources/views';
import {LitCoilConnectedEvent} from '../controller/UpdateControllerConnectedEvent';

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
      background-color: var(--iff-card__background-color);
      --iff-state__font--color: white;
    }

    .card {
      transition: all 500ms ease-in;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      border-radius: var(--iff-alias__border--radius);
      overflow: hidden;
    }

    .card:hover {
      box-shadow: 0px 0px 50px 1px var(--iff-alias__color--complement);
      transition: all 250ms ease-in;
    }

    img {
      border-radius: var(--iff-alias__border--radius);
      height: 10rem;
    }

    .body {
      padding: var(--iff__dimension--20);
      text-overflow: ellipsis;
    }

    @media screen and (min-width: 1024px) {
      .card {
        flex-direction: row;
        height: 25vh;
      }
      img {
        height: 100%;
        width: 200px;
      }
    }
  `;

  /**
   * The number of times the button has been clicked.
   */
  @property()
  url = 'url.to.link.to';

  /**
   * The number of times the button has been clicked.
   */
  @property()
  backgroundColor = '--iff-alias__color--complement';

  /**
   * Source of the header image
   * https://picsum.photos/200/200
   */
  @property({type: String})
  imageSrc = 'dev/Download.jpeg';

  /**
   * Type of styling
   */
  @property({reflect: true})
  public event?: viewVariants;

  /**
   * Type of styling
   */
  @property({reflect: true})
  public eventPayload: string = 'payload';

  render() {
    const backgroundMap = {'background-color': `var(${this.backgroundColor})`};

    return html`
      <div
        class="card"
        style=${styleMap(backgroundMap)}
        @click=${() => {
          if (this.event) {
            const event = new LitCoilConnectedEvent(this.event);
            this.dispatchEvent(event);
          }
        }}
      >
        <slot name="custom">
          <img src="${this.imageSrc}" alt="Alt tag" />
          <div class="body">
            <slot name="body">
              <slot name="label"></slot>
              <slot name="title"></slot>
              <slot name="lead"></slot>
            </slot>
          </div>
          <slot name="footer"></slot>
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-card': Card;
  }
}
