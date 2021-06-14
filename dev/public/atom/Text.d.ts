import { LitElement } from 'lit';
declare type StylingVariation = 'paragraph' | 'paragraph-slim' | 'paragraph-bold' | 'label';
export declare type TagVariation = 'p';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class Text extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Type of styling
     */
    styling: StylingVariation;
    tag: TagVariation;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-text': Text;
    }
}
export {};
//# sourceMappingURL=Text.d.ts.map