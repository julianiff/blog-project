import { LitElement } from 'lit';
export declare type targetVariations = '_blank' | '_parent' | '_self' | '_top';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class SlimLayout extends LitElement {
    static styles: import("lit").CSSResultGroup;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-slim-layout': SlimLayout;
    }
}
//# sourceMappingURL=SlimLayout.d.ts.map