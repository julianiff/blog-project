import './Link';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {viewVariants} from '../controller/ressources/views';
import {LitCoilConnectedEvent} from '../controller/UpdateControllerConnectedEvent';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-button')
export class Button extends LitElement {
  static styles = css`
    :host([disabled]) {
      --iff-button__background-color: var(--iff-alias__body--background-color);
    }

    button {
      border: none;
      background-color: var(
        --iff-button__background-color,
        var(--iff-alias__background-color--primary)
      );
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
      box-shadow: inset 0 0 0 1px var(--iff-alias__background-color--secondary);
      cursor: pointer;
      padding: var(--iff-card__padding--top-bottom, 0.5rem)
        var(--var-card__padding--left-right, 2rem);
      border-radius: var(--iff-alias__border--radius);
      transition: all 150ms ease-in;
    }

    :slotted(*) {
      --iff-state__font--color: var(--iff-alias__background-color--secondary);
    }

    button:hover {
      box-shadow: inset 0 0 0 3px var(--iff-alias__background-color--secondary);
      transition: all 150ms ease-in;
    }
  `;

  /**
   * Type of styling
   */
  @property({reflect: true})
  public event?: viewVariants;

  /**
   * Event Payload
   */
  @property({reflect: true})
  public eventPayload: string = 'payload';
  @property({reflect: true})
  public href?: string;
  /**
   * Type of styling
   */
  @property({reflect: true, type: Boolean})
  public disabled: boolean = false;

  render() {
    return this.href
      ? html`
          <iff-link href=${this.href}>
            <button
              @click=${() => {
                if (this.event) {
                  const event = new LitCoilConnectedEvent(this.event);
                  this.dispatchEvent(event);
                }
              }}
            >
              <slot></slot>
            </button>
          </iff-link>
        `
      : html`<button
          @click=${() => {
            if (this.event) {
              const event = new LitCoilConnectedEvent(this.event);
              this.dispatchEvent(event);
            }
          }}
        >
          <slot></slot>
        </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button': Button;
  }
}
