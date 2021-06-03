import {LitElement, html, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-intro')
export class Intro extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      height: calc(
        100vh - var(--iff-alias__header--height) -
          var(--iff-alias__header--height) - 1.6rem
      );
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
  private mousePosition: any = 0;

  @state()
  private screenWidth: any = window.innerWidth;

  constructor() {
    super();
    this.addEventListener(
      'mousemove',
      throttled(5, (e: MouseEvent) => (this.mousePosition = e.clientX))
    );
  }

  render() {
    const mouseMap = {
      width: `${100 - (100 / this.screenWidth) * this.mousePosition + 15}%`,
    };
    const mouseMapEnd = {
      width: `${(100 / this.screenWidth) * this.mousePosition + 15}%`,
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
    'iff-intro': Intro;
  }
}

function throttled(delay: number, fn: (e: MouseEvent) => void) {
  let lastCall = 0;
  return function (e: MouseEvent) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(e);
  };
}
