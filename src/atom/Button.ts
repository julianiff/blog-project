import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-button')
export class Button extends LitElement {
  static styles = css`
    button {
      border: none;
      background-color: var(--iff-alias__background-color--primary);
      --iff__font--color: var(--iff-alias__background-color--secondary);
      box-shadow: inset 0 0 0 2px var(--iff-alias__background-color--secondary);
      border-radius: 3px;
      cursor: pointer;
      padding: 2rem 2rem;

      transition: all 150ms ease-in;
    }

    :slotted(*) {
      --iff__font--color: var(--iff-alias__background-color--secondary);
    }

    button:hover {
      box-shadow: inset 0 0 0 4px var(--iff-alias__background-color--secondary);
      transition: all 150ms ease-in;
    }
  `;

  /**
   * Type of styling
   */
  @property({reflect: true})
  public eventName: string = 'button-clicked';

  /**
   * Type of styling
   */
  @property({reflect: true})
  public eventPayload: string = 'payload';

  render() {
    return html`
      <button
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent(this.eventName, {
              bubbles: true,
              composed: true,
              detail: {
                message: this.eventPayload,
              },
            })
          )}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button': Button;
  }
}
