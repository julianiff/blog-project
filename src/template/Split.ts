import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {MouseController} from '../controller/mouse-controller';

/**
 * Text Styling Component
 *
 * @slot start-text -  Slot to set the first text
 * @slot end-text -  Slot to set the end text
 */
@customElement('iff-split')
export class Split extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      align-items: center;
    }
    [name='start-text']::slotted(*) {
      position: absolute;
      left: 0;
      transform: rotate(-90deg);
      --iff__font--color: var(--iff-alias__background-color--primary);
    }
    [name='end-text']::slotted(*) {
      position: absolute;
      right: 0;
      transform: rotate(90deg);
      --iff__font--color: var(--iff-alias__background-color--secondary);
    }

    .start {
      width: 100%;
      height: 100%;
      background-color: var(--iff-alias__background-color--secondary);
      position: relative;
      display: flex;
      align-items: center;
    }

    .end {
      width: 100%;
      height: 100%;
      background-color: var(--iff-alias__color--primary);
      position: relative;
      display: flex;
      align-items: center;
    }
  `;

  @state()
  private mousePosition = new MouseController(this);

  @state()
  private screenWidth: number = window.innerWidth;

  constructor() {
    super();
  }

  render() {
    const mouseMap = {
      width: `${100 - (100 / this.screenWidth) * this.mousePosition.pos.x}%`,
    };
    const mouseMapEnd = {
      width: `${(100 / this.screenWidth) * this.mousePosition.pos.x}%`,
    };

    return html`
      <div class="start" style=${styleMap(mouseMap)}>
        <slot name="start-text"></slot>
      </div>
      <div class="end" style=${styleMap(mouseMapEnd)}>
        <slot name="end-text"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-split': Split;
  }
}
