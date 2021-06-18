import { LitElement } from 'lit';
export declare type LayoutType = '1-1' | '1-1-1';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
export declare class OneOneLayout extends LitElement {
    static styles: import("lit").CSSResultGroup;
    type: LayoutType;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-layout': OneOneLayout;
    }
}
//# sourceMappingURL=Layout.d.ts.map