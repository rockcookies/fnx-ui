import React, { FC } from 'react';
import { canUseDom } from '../../utils/detect';
import Events from '../../utils/events';
import { noop } from '../../utils/misc';
import { renderReactDOMNode } from '../../utils/react';

export interface PopupInstance<T> {
	update: (props: T) => void;
	clear: () => void;
}

export default class PopupHelper {
	private instances: PopupInstance<any>[] = [];

	create<T extends { visible?: boolean }>(
		creator: (o: {
			container: HTMLElement;
			onUpdate: (listener: (next: T) => void) => () => void;
			remove: () => void;
		}) => FC,
		_container?: HTMLElement,
	): PopupInstance<T> {
		if (!canUseDom()) {
			return {
				update: noop,
				clear: noop,
			};
		}

		const events = new Events();
		let cleared = false;

		const container = document.createElement('div');
		const parent = _container || document.body;
		parent.appendChild(container);

		const instance: PopupInstance<T> = {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			update: ({ visible: _visible, ...props }) => {
				// omit visible
				events.emit('update', props);
			},
			clear: () => {
				if (!cleared) {
					events.emit('update', { visible: false });

					this.instances = this.instances.filter(
						(i) => i !== instance,
					);

					cleared = true;
				}
			},
		};

		const Fc = creator({
			container,
			onUpdate: (listener) => {
				events.on('update', listener);

				return () => {
					events.off('update', listener);
				};
			},
			remove: () => {
				instance.clear();

				setTimeout(() => {
					removeContainer();
					parent.removeChild(container);
				}, 0);
			},
		});

		const removeContainer = renderReactDOMNode(container, <Fc />);

		this.instances.push(instance);

		return instance;
	}

	clear() {
		this.instances.forEach((inst) => {
			inst.clear();
		});
	}
}
