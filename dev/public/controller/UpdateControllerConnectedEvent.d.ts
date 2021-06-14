import { viewVariants } from './ressources/views';
/**
 * Fired when an Apollo controller is connected to the document tree via its
 * host. Listeners should supply an Apollo client by setting the `client`
 * property on the event.
 */
export declare class LitCoilConnectedEvent extends Event {
    static readonly eventName = "connected-store-event";
    view: viewVariants;
    constructor(payload: viewVariants);
}
declare global {
    interface HTMLElementEventMap {
        'connected-store-event': LitCoilConnectedEvent;
    }
}
//# sourceMappingURL=UpdateControllerConnectedEvent.d.ts.map