import { LitElement } from 'lit';
import { viewVariants } from '../controller/ressources/views';
export declare type targetVariations = '_blank' | '_parent' | '_self' | '_top';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class Link extends LitElement {
    static styles: import("lit").CSSResultGroup;
    event?: viewVariants;
    href?: string;
    hreflang?: string;
    label?: string;
    referrerpolicy?: string;
    rel?: string;
    target?: targetVariations;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-link': Link;
    }
}
//# sourceMappingURL=Link.d.ts.map