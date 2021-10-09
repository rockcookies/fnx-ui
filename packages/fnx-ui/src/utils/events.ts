import { Dictionary } from './interface';

export default class Events {
	private _events: Dictionary = {};

	/**
	 * Register an event handler for the given type.
	 *
	 * @param type	Type of event to listen for, or `"*"` for all events
	 * @param handler Function to call in response to given event
	 */
	on(type: string, handler: (event?: any) => void) {
		(this._events[type] || (this._events[type] = [])).push(handler);
	}

	/**
	 * Remove an event handler for the given type.
	 *
	 * @param type	Type of event to unregister `handler` from, or `"*"`
	 * @param handler Handler function to remove
	 */
	off(type: string, handler: (event?: any) => void) {
		if (this._events[type]) {
			this._events[type].splice(
				this._events[type].indexOf(handler) >>> 0,
				1,
			);
		}
	}

	/**
	 * Invoke all handlers for the given type.
	 * If present, `"*"` handlers are invoked after type-matched handlers.
	 *
	 * Note: Manually firing "*" handlers is not supported.
	 *
	 * @param type  The event type to invoke
	 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
	 */
	emit(type: string, evt: any) {
		(this._events[type] || []).slice().forEach((handler: any) => {
			handler(evt);
		});
		(this._events['*'] || []).slice().forEach((handler: any) => {
			handler(type, evt);
		});
	}
}
