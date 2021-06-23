import '../molecule/ButtonList';
import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ThemeColorController} from '../controller/set-theme-color';
import {ThemeVariation} from '../page/BasePage';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-footer')
export class Footer extends LitElement {
  static styles = css`
    :host {
      padding: 0px var(--iff-dynamic__navigation--indent);
    }
  `;

  constructor() {
    super();
    new ThemeColorController(this);
  }

  @state()
  private setThemeColor = (theme: ThemeVariation) => {
    document.querySelector('body')?.setAttribute('theme', theme);
    window.sessionStorage.setItem('theme', theme);
  };

  render() {
    return html`
      <iff-button-list>
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
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('spotify')}>
          <iff-text styling="label">spotify</iff-text>
        </iff-button>
        </iff-button>
        <iff-button @click=${() => this.setThemeColor('pantone')}>
          <iff-text styling="label">pantone</iff-text>
        </iff-button>
      </iff-button-list>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-footer': Footer;
  }
}
