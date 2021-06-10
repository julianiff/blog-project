import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {BuildViewsController} from '../controller/build-views-controller';
import {classMap} from 'lit/directives/class-map.js';

import '../atom/Button';
import '../atom/Title';

import {design} from '../styling/design';

type ThemeVariation =
  | 'light'
  | 'black'
  | 'blue-gradiant'
  | 'colorful'
  | 'wood'
  | 'colorbild'
  | 'darkish';
import '../atom/Text';

/**
 * An example element.
 *
 */
@customElement('iff-base-page')
export class BasePage extends LitElement {
  static styles = [
    css`
      .button-list {
        display: flex;
        flex-direction: row;
        padding-top: 5px;
        padding-left: 25px;
      }
      .button-list :not(:last-child) {
        padding-right: 5px;
      }
    `,
    design,
  ];

  @state()
  private content = new BuildViewsController(this);

  /**
   * Type of styling
   */
  @property({reflect: true})
  public theme: ThemeVariation = 'blue-gradiant';

  render() {
    return html`
      <div class="${classMap({[this.theme]: true})}">
        ${this.content.renderViews}
        <div class="button-list">
          <iff-button @button-clicked=${() => (this.theme = 'light')}>
            <iff-text>light</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'black')}>
            <iff-text>black</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'colorbild')}>
            <iff-text>colorbild</iff-text>
          </iff-button>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'blue-gradiant')}>
            <iff-text>blue</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'colorful')}>
            <iff-text>colorful</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'darkish')}>
            <iff-text>darkish</iff-text>
          </iff-button>
          </iff-button>
          <iff-button @button-clicked=${() => (this.theme = 'wood')}>
            <iff-text>wood</iff-text>
          </iff-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-base-page': BasePage;
  }
}
