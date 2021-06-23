import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-head-navigation')
export class Navigation extends LitElement {
  static styles = css`
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      height: 100%;
    }

    ::slotted([slot='start']) {
      justify-self: start;
    }

    ::slotted([slot='end']) {
      justify-self: end;
      padding-right: var(--iff__spacer--xl);
    }

    .end {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
    }
  `;

  render() {
    return html`
      <nav role="navigation">
        <slot name="start"></slot>
        <div class="end">
          <slot name="end"></slot>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-head-navigation': Navigation;
  }
}
