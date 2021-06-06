import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import '../template/PageLayout';
import '../template/Split';
import '../atom/Link';

import {design} from '../styling/design';
import {BuildViewsController} from '../controller/build-views-controller';

/**
 * An example element.
 *
 */
@customElement('iff-base-page')
export class BasePage extends LitElement {
  static styles = design;

  @state()
  private content = new BuildViewsController(this);

  render() {
    console.log(this.content.renderViews);
    return html` ${this.content.renderViews} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-base-page': BasePage;
  }
}
