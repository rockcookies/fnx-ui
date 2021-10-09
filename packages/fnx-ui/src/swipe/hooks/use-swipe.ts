import React, { useCallback, useRef, useState } from 'react';
import useSafeState from '../../hooks/use-safe-state';
import { clamp } from '../../utils/format';
import { ElementRect } from '../../utils/interface';
import { SwipeComponentRequiredProps } from '../interface';

interface SwipeStatus {
	activeIndex?: number;
	swipeLength: number;
	swipeSize: number;
	wrapperOffset: number;
	autoplayTimer?: NodeJS.Timeout;
	swipingTimer?: NodeJS.Timeout;
}

interface UseSwipeOptions {
	propsRef: React.MutableRefObject<SwipeComponentRequiredProps>;
	rootRef: React.RefObject<HTMLDivElement>;
	swipeLength: number;
}

const useSwipe = ({ propsRef, swipeLength, rootRef }: UseSwipeOptions) => {
	const stateRef = useRef<SwipeStatus>({
		swipeLength: 0,
		swipeSize: 0,
		wrapperOffset: 0,
	});
	stateRef.current.swipeLength = swipeLength;

	const [wrapperOffset, _setWrapperOffset] = useSafeState(0);
	const setWrapperOffset = useCallback(
		(v: number) => {
			_setWrapperOffset(v);
			stateRef.current.wrapperOffset = v;
		},
		[_setWrapperOffset],
	);

	const [swipeSize, _setSwipeSize] = useSafeState(0);
	const setSwipeSize = useCallback(
		(v: number) => {
			_setSwipeSize(v);
			stateRef.current.swipeSize = v;
		},
		[_setSwipeSize],
	);

	const [swipeOffset, setSwipeOffset] = useState<'first' | 'last' | 'none'>(
		'none',
	);

	const [activeIndex, _setActiveIndex] = useSafeState<number>();
	const setActiveIndex = useCallback(
		(v: number) => {
			_setActiveIndex(v);
			stateRef.current.activeIndex = v;
		},
		[_setActiveIndex],
	);

	const [swiping, setSwiping] = useSafeState(false);

	const move = useCallback(
		(
			offsetSize: number,
			options: { critical?: boolean; swiping?: boolean } = {},
		) => {
			const { swipeLength, swipeSize, swipingTimer } = stateRef.current;

			if (
				options.critical &&
				-offsetSize >= (swipeLength - 1) * swipeSize
			) {
				setSwipeOffset('first');
			} else if (options.critical && offsetSize >= 0) {
				setSwipeOffset('last');
			} else {
				setSwipeOffset('none');
			}

			setWrapperOffset(offsetSize);

			if (options.swiping) {
				const { duration } = propsRef.current;

				setSwiping(true);

				if (swipingTimer) {
					clearTimeout(swipingTimer);
				}

				stateRef.current.swipingTimer = setTimeout(() => {
					const { activeIndex = 0, swipeSize } = stateRef.current;

					stateRef.current.swipingTimer = undefined;
					setSwipeOffset('none');
					setSwiping(false);
					setWrapperOffset(-activeIndex * swipeSize);
				}, duration);
			}
		},
		[propsRef, setSwiping, setWrapperOffset],
	);

	const next = useCallback(() => {
		const { activeIndex = 0, swipeLength, swipeSize } = stateRef.current;

		if (swipeLength <= 1) {
			return;
		}

		const { loop } = propsRef.current;

		const nextActiveIndex =
			activeIndex >= swipeLength - 1 ? 0 : activeIndex + 1;

		setActiveIndex(nextActiveIndex);

		// 临界态
		if (loop && activeIndex === swipeLength - 1) {
			move(-swipeLength * swipeSize, { swiping: true, critical: true });
		} else {
			move(-nextActiveIndex * swipeSize, { swiping: true });
		}
	}, [move, propsRef, setActiveIndex]);

	const prev = useCallback(() => {
		const { activeIndex = 0, swipeLength, swipeSize } = stateRef.current;

		if (swipeLength <= 1) {
			return;
		}

		const { loop } = propsRef.current;

		const nextActiveIndex =
			activeIndex <= 0 ? swipeLength - 1 : activeIndex - 1;

		setActiveIndex(nextActiveIndex);

		// 临界态
		if (loop && activeIndex === 0) {
			move(swipeSize, { swiping: true, critical: true });
		} else {
			move(-nextActiveIndex * swipeSize, { swiping: true });
		}
	}, [move, propsRef, setActiveIndex]);

	const stopTransition = useCallback(() => {
		setSwiping(false);

		const { swipingTimer } = stateRef.current;

		if (swipingTimer) {
			clearTimeout(swipingTimer);
		}
	}, [setSwiping]);

	const stopAutoplay = useCallback(() => {
		const { autoplayTimer } = stateRef.current;

		if (autoplayTimer) {
			clearTimeout(autoplayTimer);
		}
	}, []);

	const startAutoplay = useCallback(() => {
		const { autoplay } = propsRef.current;
		const { swipeLength } = stateRef.current;

		stopAutoplay();

		if (autoplay <= 0 || swipeLength <= 1) {
			return;
		}

		stateRef.current.autoplayTimer = setTimeout(() => {
			next();
			startAutoplay();
		}, autoplay);
	}, [next, propsRef, stopAutoplay]);

	const reload = useCallback(
		(rect?: ElementRect | null) => {
			const { swipeLength, activeIndex: _activeIndex } = stateRef.current;
			const { defaultActiveIndex } = propsRef.current;

			const { vertical, height, width } = propsRef.current;

			let swipeSize = vertical ? height : width;

			if (swipeSize <= 0) {
				if (!rect) {
					const root = rootRef.current;
					rect = root && root.getBoundingClientRect();
				}

				if (rect) {
					swipeSize = vertical ? rect.height : rect.width;
				}
			}

			const activeIndex = clamp(
				_activeIndex != null ? _activeIndex : defaultActiveIndex,
				0,
				Math.max(swipeLength - 1, 0),
			);

			const wrapperOffset = -activeIndex * swipeSize;

			setSwiping(false);
			setSwipeOffset('none');
			setSwipeSize(swipeSize);
			setActiveIndex(activeIndex);
			setWrapperOffset(wrapperOffset);
		},
		[
			propsRef,
			rootRef,
			setActiveIndex,
			setSwipeSize,
			setSwiping,
			setWrapperOffset,
		],
	);

	return {
		stateRef,
		wrapperOffset,
		setWrapperOffset,
		swipeSize,
		swipeOffset,
		activeIndex,
		setActiveIndex,
		swiping,
		move,
		next,
		prev,
		stopTransition,
		stopAutoplay,
		startAutoplay,
		reload,
	};
};

export default useSwipe;
