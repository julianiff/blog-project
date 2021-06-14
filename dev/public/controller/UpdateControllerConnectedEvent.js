/**
 * Fired when an Apollo controller is connected to the document tree via its
 * host. Listeners should supply an Apollo client by setting the `client`
 * property on the event.
 */
export class LitCoilConnectedEvent extends Event {
    constructor(payload) {
        super(LitCoilConnectedEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        this.view = payload;
    }
}
LitCoilConnectedEvent.eventName = 'connected-store-event';
//# sourceMappingURL=UpdateControllerConnectedEvent.js.map