import { LitElement } from 'lit';
import { viewVariants } from '../controller/ressources/views';
/**
 * Card to display articles
 *
 * @slot custom -  Slot to override all Card
 * @slot body -  Slot to override body part
 * @slot title -  Slot to set Card Title
 * @slot lead -  Slot to set Card lead text
 * @slot footer -  Slot to set footer
 * @csspart button - The button
 */
export declare class Card extends LitElement {
    static styles: import("lit").CSSResultGroup;
    /**
     * The number of times the button has been clicked.
     */
    url: string;
    /**
     * The number of times the button has been clicked.
     */
    backgroundColor: string;
    /**
     * Source of the header image
     * https://picsum.photos/200/200
     */
    imageSrc: string;
    /**
     * Type of styling
     */
    event?: viewVariants;
    /**
     * Type of styling
     */
    eventPayload: string;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-card': Card;
    }
}
//# sourceMappingURL=Card.d.ts.map