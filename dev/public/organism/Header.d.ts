import { LitElement } from 'lit';
declare type textStyles = 'paragraph' | 'heading1' | 'heading2';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
export declare class Header extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * type to help to style the text
     */
    styling: textStyles;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-header': Header;
    }
}
export {};
//# sourceMappingURL=Header.d.ts.map