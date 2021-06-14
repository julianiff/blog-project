import { LitElement } from 'lit';
import '../atom/Title';
import '../atom/Button';
import '../organism/Header';
/**
 * An example element.
 *
 * @slot header -  Slot to set header
 * @slot body -  Slot to set body
 * @slot footer -  Slot to set footer
 */
export declare class PageLayout extends LitElement {
    static styles: import("lit").CSSResultGroup;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-page-layout': PageLayout;
    }
}
//# sourceMappingURL=PageLayout.d.ts.map