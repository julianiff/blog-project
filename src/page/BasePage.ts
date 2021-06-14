import {css, html, LitElement} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {BuildViewsController} from '../controller/build-views-controller';

import '../atom/Button';
import '../atom/Title';
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
        flex-wrap: wrap;
      }
      .button-list :not(:last-child) {
        padding-right: 5px;
      }
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
      <div class="base-layout">
        ${this.content.renderViews}
        <div class="button-list">
          <iff-button @click=${() => this.setThemeColor('light')}>
            <iff-text styling="label">Light</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('black')}>
            <iff-text styling="label">Black</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('blue-gradiant')}>
            <iff-text styling="label">Blue</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('redGreen')}>
            <iff-text styling="label">Red Green</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('triColor')}>
            <iff-text styling="label">TriColor</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('wood')}>
            <iff-text styling="label">Wood</iff-text>
          </iff-button>
          <iff-button @click=${() => this.setThemeColor('blueGreen')}>
            <iff-text styling="label">Blue Green</iff-text>
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
