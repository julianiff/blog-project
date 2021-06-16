import { LitElement } from 'lit';
export declare type ThemeVariation = 'light' | 'black' | 'blue-gradiant' | 'redGreen' | 'wood' | 'blueGreen' | 'triColor';
import { viewVariants } from '../controller/ressources/views';
import '../atom/Text';
import '../atom/Button';
import '../atom/Title';
/**
 * An example element.
 *
 */
export declare class BasePage extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    constructor();
    connectedCallback(): void;
    /**
     * Type of styling
     */
    view?: viewVariants;
    /**
     * Content
     */
    private content?;
    /**
     * Type of styling
     */
    theme: ThemeVariation;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-base-page': BasePage;
    }
}
//# sourceMappingURL=BasePage.d.ts.map