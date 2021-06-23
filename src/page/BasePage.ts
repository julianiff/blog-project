import {css, html, LitElement, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {
  BuildViewsController,
} from '../controller/build-views-controller';

export type ThemeVariation =
  | 'light'
  | 'black'
  | 'blue-gradiant'
  | 'redGreen'
  | 'wood'
  | 'blueGreen'
  | 'spotify'
  | 'pantone'
  | 'triColor';
import {ThemeColorController} from '../controller/set-theme-color';
import {viewVariants} from '../controller/ressources/views';

import '../atom/Text';
import '../atom/Button';
import '../atom/Title';

/**
 * An example element.
 *
 */
@customElement('iff-base-page')
export class BasePage extends LitElement {
  static styles = [
    css`
      .base-layout {
        padding: 5px;
      }

      @media screen and (min-width: 724px) {
        .button-list {
          flex-direction: row;
        }
        .base-layout {
          padding: 0px;
        }
      }
    `,
  ];

  constructor() {
    super();
    new ThemeColorController(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.content = new BuildViewsController(this, this.view);
  }

  /**
   * Type of styling
   */
  @property({reflect: true})
  public view?: viewVariants;

  /**
   * Content
   */
  @state()
  private content?: BuildViewsController;
  /**
   * Type of styling
   */
  @property({reflect: true})
  public theme: ThemeVariation = 'blue-gradiant';

  render() {
    return html`
      <div class="base-layout">
        ${this.content?.renderViews ? this.content.renderViews : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-base-page': BasePage;
  }
}
