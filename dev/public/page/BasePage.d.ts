import { LitElement } from 'lit';
import { BuildViewsController } from '../controller/build-views-controller';
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
    /**
     * Type of styling
     */
    view?: viewVariants;
    /**
     * Type of styling
     */
    content: BuildViewsController;
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