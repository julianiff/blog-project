import {LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

import '../template/PageLayout';
import '../template/SplitAnim';
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
    return this.content.renderViews;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-base-page': BasePage;
  }
}
