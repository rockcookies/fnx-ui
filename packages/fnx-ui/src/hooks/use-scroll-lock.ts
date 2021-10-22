import { RefObject, useEffect } from 'react';
import { canUseDom } from '../utils/detect';
import { bindEvent, preventDefault } from '../utils/dom/event';
import { getScrollParent } from '../utils/dom/scroll';
import TouchHelper from '../utils/dom/touch-helper';

let totalLockCount = 0;

const BODY_LOCK_CLASS = 'fnx-overflow-hidden';

export default function useScrollLock(
	rootRef: RefObject<HTMLElement | undefined>,
	options: { locked?: boolean } = {},
) {
	const locked = options.locked || false;

	useEffect(() => {
		if (!locked || !canUseDom()) {
			return;
		}

		const touch = new TouchHelper();

		const onTouchMove = (event: TouchEvent) => {
			touch.move(event);

			const direction = touch.touchData.deltaY > 0 ? '10' : '01';
			const el: HTMLElement = getScrollParent(
				event.target as any,
				rootRef.current,
			) as any;

			const { scrollHeight, offsetHeight, scrollTop } = el;
			let status = '11';

			if (scrollTop === 0) {
				status = offsetHeight >= scrollHeight ? '00' : '01';
			} else if (scrollTop + offsetHeight >= scrollHeight) {
				status = '10';
			}

			if (
				status !== '11' &&
				touch.isVertical() &&
				!(parseInt(status, 2) & parseInt(direction, 2))
			) {
				preventDefault(event, true);
			}
		};

		document.addEventListener('touchstart', touch.start);
		bindEvent(document, 'touchmove', onTouchMove, { passive: false });

		if (!totalLockCount) {
			document.body.classList.add(BODY_LOCK_CLASS);
		}

		totalLockCount++;

		return () => {
			document.removeEventListener('touchstart', touch.start);
			document.removeEventListener('touchmove', onTouchMove);

			totalLockCount--;

			if (!totalLockCount) {
				document.body.classList.remove(BODY_LOCK_CLASS);
			}
		};
	}, [locked, rootRef]);
}
