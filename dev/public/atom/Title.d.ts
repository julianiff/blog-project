import { LitElement } from 'lit';
import { textAlignVars } from './Text';
export declare type HLevel = 1 | 2 | 3 | 4;
export declare type surPlus = 'giganto';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
export declare class Title extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * Type of textAlignation
     */
    textAlign: textAlignVars;
    /**
     * Level of styling
     */
    level: HLevel;
    /**
     * Level of styling
     */
    surplus?: surPlus;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-title': Title;
    }
}
//# sourceMappingURL=Title.d.ts.map