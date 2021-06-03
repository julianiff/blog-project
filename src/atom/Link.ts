import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

export type targetVariations = '_blank' | '_parent' | '_self' | '_top';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-link')
export class Link extends LitElement {
  static styles = css`
    a {
      text-decoration: none;
      position: relative;
      display: block;
    }

    a:hover {
      background-color: var(--iff-alias__color--complement);
    }
  `;

  @property({reflect: true})
  public href?: string;
  @property({reflect: true})
  public hreflang?: string;
  @property({reflect: true})
  public label?: string;
  @property({reflect: true})
  public referrerpolicy?: string;
  @property({reflect: true})
  public rel?: string;
  @property({reflect: true})
  public target?: targetVariations;

  render() {
    return html`
      <a
        href=${ifDefined(this.href)}
        hreflang=${ifDefined(this.hreflang)}
        target=${ifDefined(this.target)}
        aria-label=${ifDefined(this.label)}
        rel=${ifDefined(this.rel)}
        referrerpolicy=${ifDefined(this.referrerpolicy)}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-link': Link;
  }
}
