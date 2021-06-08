import {viewVariants} from './ressources/views';

/**
 * Fired when an Apollo controller is connected to the document tree via its
 * host. Listeners should supply an Apollo client by setting the `client`
 * property on the event.
 */
export class LitCoilConnectedEvent extends Event {
  static readonly eventName = 'connected-store-event';

  view: viewVariants;

  constructor(payload: viewVariants) {
    super(LitCoilConnectedEvent.eventName, {
      bubbles: true,
      composed: true,
    });
    this.view = payload;
  }
}

declare global {
  interface HTMLElementEventMap {
    'connected-store-event': LitCoilConnectedEvent;
  }
}
