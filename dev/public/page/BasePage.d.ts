import { LitElement } from 'lit';
import '../atom/Button';
import '../atom/Title';
declare type ThemeVariation = 'light' | 'black' | 'blue-gradiant' | 'redGreen' | 'wood' | 'blueGreen' | 'triColor';
import '../atom/Text';
/**
 * An example element.
 *
 */
export declare class BasePage extends LitElement {
    static styles: import("lit").CSSResultGroup[];
    private content;
    /**
     * Type of styling
     */
    theme: ThemeVariation;
    private setThemeColor;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-base-page': BasePage;
    }
}
export {};
//# sourceMappingURL=BasePage.d.ts.map