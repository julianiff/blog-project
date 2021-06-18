import { LitElement } from 'lit';
export declare type layoutVariant = '1' | '1-1' | '1-1-1';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
export declare class GridLayout extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Height
     */
    layout?: layoutVariant;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-grid-layout': GridLayout;
    }
}
//# sourceMappingURL=GridLayout.d.ts.map