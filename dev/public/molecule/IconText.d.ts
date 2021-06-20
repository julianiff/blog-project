import '../atom/Link';
import '../atom/Text';
import '../atom/Title';
import { LitElement } from 'lit';
import { viewVariants } from '../controller/ressources/views';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
export declare class IconText extends LitElement {
    static styles: import("lit").CSSResultGroup;
    event?: viewVariants;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-icon-text': IconText;
    }
}
//# sourceMappingURL=IconText.d.ts.map