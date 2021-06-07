/**
 * Fired when an Apollo controller is connected to the document tree via its
 * host. Listeners should supply an Apollo client by setting the `client`
 * property on the event.
 */
export class UpdateControllerConnectedEvent extends Event {
  static readonly eventName = 'custom-event';

  client?: any;

  constructor() {
    super(UpdateControllerConnectedEvent.eventName, {
      bubbles: true,
      composed: true,
    });
  }
}

declare global {
  interface HTMLElementEventMap {
    'custom-event': UpdateControllerConnectedEvent;
  }
}
