import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type gridOrientation = 'start' | 'end' | 'center';

type gridWidth = 'slim' | 'default' | 'full';
type gridHeight = 'default' | 'full';
type gridBackground = 'positive' | 'negative' | 'complement';
type spacerVariant = 'sm' | 'md' | 'lg' | 'component';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-grid-item')
export class GridItem extends LitElement {
  static styles = css`
    :host([orientation='start']) {
      justify-self: start;
    }

    :host([orientation='center']) {
      justify-self: center;
    }

    :host([orientation='end']) {
      justify-self: end;
    }

    :host([width='slim']) {
      width: 100%;
    }

    :host([width='default']) {
      width: 100%;
    }

    :host([width='full']) {
      width: 100%;
    }

    :host([spacer='sm']) {
      padding: var(--iff__spacer--sm);
    }

    :host([spacer='md']) {
      padding: var(--iff__spacer--md);
    }

    :host([spacer='lg']) {
      padding: var(--iff__spacer--lg);
    }

    :host([spacer='component']) {
      padding: var(--iff__spacer--xxl);
    }

    :host([background='positive']) {
      background: var(--iff-alias__color--positive);
    }

    :host([background='negative']) {
      background: var(--iff-alias__color--negative);
    }

    :host([background='complement']) {
      background: var(--iff-alias__color--complement);
    }

    @media screen and (min-width: 1024px) {
      :host([height='full']) {
        min-height: 80vh;
      }

      :host([width='slim']) {
        width: 600px;
      }

      :host([width='default']) {
        width: 1024px;
      }

      :host([width='full']) {
        width: 100%;
      }
    }
  `;

  /**
   * Orientation 'positive' | 'negative' | 'complement';
   */
  @property({reflect: true})
  public orientation: gridOrientation = 'start';

  /**
   * Orientation 'positive' | 'negative' | 'complement';
   */
  @property({reflect: true})
  public spacer: spacerVariant = 'sm';

  /**
   * Width
   */
  @property({reflect: true})
  public width: gridWidth = 'full';

  /**
   * Height
   */
  @property({reflect: true})
  public height?: gridHeight;

  /**
   * Background Color
   */
  @property({reflect: true})
  public background?: gridBackground;

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-grid-item': GridItem;
  }
}
