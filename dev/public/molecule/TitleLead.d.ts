import '../atom/Title';
import { LitElement } from 'lit';
/**
 * Card to display articles
 *
 * @slot title - Slot to set title
 * @slot modal-text -  Slot to set text of modal

 */
export declare class TitleModal extends LitElement {
    static styles: import("lit").CSSResultGroup;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-title-lead': TitleModal;
    }
}
//# sourceMappingURL=TitleLead.d.ts.map