import { Dictionary } from '../src/utils/interface';
import { fireEvent, waitFor } from '@testing-library/react';

class TestsEventStatic {
	private getTouch(el: Element | Window, x: number, y: number): Dictionary {
		return {
			identifier: Date.now(),
			target: el,
			pageX: x,
			pageY: y,
			clientX: x,
			clientY: y,
			radiusX: 2.5,
			radiusY: 2.5,
			rotationAngle: 10,
			force: 0.5,
		};
	}

	async triggerTouch(
		target: Element | Window,
		eventName: 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel',
		cords: Array<[number, number]>,
	) {
		const [touch, ...touches] = cords;

		const [x, y] = touch;

		const touchList = [this.getTouch(target, x, y)];

		for (const [pX, pY] of touches) {
			touchList.push(this.getTouch(target, pX, pY));
		}

		const eventData = {
			cancelable: true,
			bubbles: true,
			clientX: x,
			clientY: y,
			touches: touchList,
			targetTouches: touchList,
			changedTouches: touchList,
		};

		await waitFor(() => {
			if (eventName === 'touchstart') {
				fireEvent.touchStart(target, eventData);
			} else if (eventName === 'touchmove') {
				fireEvent.touchMove(target, eventData);
			} else if (eventName === 'touchend') {
				fireEvent.touchEnd(target, eventData);
			} else if (eventName === 'touchcancel') {
				fireEvent.touchCancel(target, eventData);
			}
		});
	}

	async triggerDrag(target: Element | Window, pos: [number, number]) {
		const [x, y] = pos;

		await this.triggerTouch(target, 'touchstart', [[0, 0]]);
		await this.triggerTouch(target, 'touchmove', [[x / 4, y / 4]]);
		await this.triggerTouch(target, 'touchmove', [[x / 3, y / 3]]);
		await this.triggerTouch(target, 'touchmove', [[x / 2, y / 2]]);
		await this.triggerTouch(target, 'touchmove', [[x, y]]);
		await this.triggerTouch(target, 'touchend', [[x, y]]);
	}
}

const TestsEvent = new TestsEventStatic();

export default TestsEvent;
