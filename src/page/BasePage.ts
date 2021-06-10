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
  | 'redGreen'
  | 'wood'
  | 'blueGreen'
  | 'triColor';
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

  @state()
  private setThemeColor = (theme: ThemeVariation) => {
    document.querySelector('body')?.setAttribute('theme', theme);
  };

  render() {
    return html`
      <div class="${classMap({[this.theme]: true})}">
        ${this.content.renderViews}
        <div class="button-list">
          <iff-button @button-clicked=${() => this.setThemeColor('light')}>
            <iff-text>Light</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => this.setThemeColor('black')}>
            <iff-text>Black</iff-text>
          </iff-button>
          <iff-button
            @button-clicked=${() => this.setThemeColor('blue-gradiant')}
          >
            <iff-text>Blue</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => this.setThemeColor('redGreen')}>
            <iff-text>Red Green</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => this.setThemeColor('triColor')}>
            <iff-text>TriColor</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => this.setThemeColor('wood')}>
            <iff-text>Wood</iff-text>
          </iff-button>
          <iff-button @button-clicked=${() => this.setThemeColor('blueGreen')}>
            <iff-text>Blue Green</iff-text>
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
