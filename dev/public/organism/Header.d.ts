import './Navigation';
import { LitElement } from 'lit';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
export declare class Header extends LitElement {
    static styles: import("lit").CSSResultGroup;
    private offsetController;
    position?: number | undefined;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-header': Header;
    }
}
//# sourceMappingURL=Header.d.ts.map