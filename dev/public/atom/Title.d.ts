import { LitElement } from 'lit';
export declare type HLevel = 1 | 2 | 3 | 4;
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
export declare class Title extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Level of styling
     */
    level: HLevel;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-title': Title;
    }
}
//# sourceMappingURL=Title.d.ts.map