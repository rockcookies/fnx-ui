import React, {
	CSSProperties,
	forwardRef,
	isValidElement,
	ReactNode,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import useWindowSize from '../hooks/use-window-size';
import useOnPopupOpen from '../popup/hooks/use-on-popup-open';
import {
	bindEvent,
	listenDocumentVisibilityChange,
	preventDefault,
} from '../utils/dom/event';
import TouchHelper from '../utils/dom/touch-helper';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { doubleRaf } from '../utils/raf';
import { toElementArray } from '../utils/react';
import useSwipe from './hooks/use-swipe';
import { SwipeComponentProps, SwipeProps, SwipeRef } from './interface';

const NS = 'fnx-swipe';
const bem = createBEM(NS);

const useProps = configComponentProps<Required<SwipeComponentProps>>({
	height: 0,
	width: 0,
	autoplay: 3000,
	duration: 500,
	defaultActiveIndex: 0,
	loop: true,
	vertical: false,
	touchable: true,
	indicator: null,
	stopPropagation: true,
	onActiveIndexChange: noop,
});

const Swipe = forwardRef<SwipeRef, SwipeProps>((_props, ref) => {
	const [props, { className, children: _children, ...restProps }] =
		useProps(_props);

	const { autoplay, duration, vertical, touchable, indicator } = props;

	const propsRef = useMergedPropRef<Required<SwipeComponentProps>>(props);

	const rootRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const windowSize = useWindowSize();

	const children = toElementArray(_children);
	const swipeLength = children.filter((v) => React.isValidElement(v)).length;

	const activeIndexInitializedRef = useRef(false);

	const {
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
	} = useSwipe({
		propsRef,
		swipeLength,
		rootRef,
	});

	const reset = useCallback(
		(action?: () => void) => {
			stopTransition();
			stopAutoplay();
			action && action();
			startAutoplay();
		},
		[startAutoplay, stopAutoplay, stopTransition],
	);

	const swipeRef = useMemo<SwipeRef>(() => {
		return {
			root: rootRef.current || null,
			wrapper: wrapperRef.current || null,
			reset: () => {
				reset(reload);
			},
			next: () => {
				reset(next);
			},
			prev: () => {
				reset(prev);
			},
			swipeTo: (idx, options) => {
				reset(() => {
					const { swipeSize } = stateRef.current;
					setActiveIndex(idx);
					move(-idx * swipeSize, {
						swiping: options && options.animation,
					});
				});
			},
		};
	}, [move, next, prev, reload, reset, setActiveIndex, stateRef]);

	useImperativeHandle<SwipeRef, SwipeRef>(ref, () => swipeRef, [swipeRef]);

	const itemStyles = useMemo<CSSProperties[]>(() => {
		const output: CSSProperties[] = [];

		for (let i = 0; i < swipeLength; i++) {
			const formattedStyle: CSSProperties = {};

			if (swipeSize > 0 && swipeOffset) {
				if (i === 0 && swipeOffset === 'first') {
					formattedStyle.transform = `translate${
						vertical ? 'Y' : 'X'
					}(${swipeLength * swipeSize}px)`;
				}

				if (i === swipeLength - 1 && swipeOffset === 'last') {
					formattedStyle.transform = `translate${
						vertical ? 'Y' : 'X'
					}(-${swipeLength * swipeSize}px)`;
				}
			}

			if (swipeSize > 0) {
				formattedStyle[
					vertical ? 'height' : 'width'
				] = `${swipeSize}px`;
			}

			output.push(formattedStyle);
		}

		return output;
	}, [swipeOffset, vertical, swipeSize, swipeLength]);

	useEffect(() => {
		if (autoplay > 0) {
			startAutoplay();

			return () => {
				stopAutoplay();
			};
		}
	}, [autoplay, startAutoplay, stopAutoplay]);

	useEffect(() => {
		if (activeIndex == null) {
			return;
		}

		if (activeIndexInitializedRef.current) {
			propsRef.current.onActiveIndexChange(activeIndex);
		} else {
			activeIndexInitializedRef.current = true;
		}
	}, [activeIndex, propsRef]);

	useEffect(() => {
		return listenDocumentVisibilityChange((visibility) => {
			if (visibility === 'hidden') {
				stopAutoplay();
			} else {
				startAutoplay();
			}
		});
	}, [startAutoplay, stopAutoplay]);

	useEffect(() => {
		reset(reload);
	}, [swipeLength, windowSize, startAutoplay, reload, stopAutoplay, reset]);

	useOnPopupOpen(() => doubleRaf(() => reset(reload)));

	useEffect(() => {
		const node = wrapperRef.current;

		if (!node || touchable === false) {
			return;
		}

		const touch = new TouchHelper();
		let touchStartTime = 0;
		let delta = 0;
		let touchWrapperOffset = 0;
		let touching = false;

		const onTouchStart = (event: TouchEvent) => {
			touch.start(event);
			touchStartTime = Date.now();
			touching = false;
		};

		const onTouchMove = (event: TouchEvent) => {
			touch.move(event);

			const { vertical, stopPropagation, loop } = propsRef.current;

			const touchData = touch.touchData;

			if (!touching) {
				const direction = vertical ? 'vertical' : 'horizontal';

				if (touchData.direction === direction) {
					stopTransition();
					stopAutoplay();
					reload();

					touching = true;
					touchWrapperOffset = stateRef.current.wrapperOffset || 0;
				}
			} else {
				delta = touch.isVertical()
					? touch.touchData.deltaY
					: touch.touchData.deltaX;

				move(touchWrapperOffset + delta, { critical: loop });
			}

			const shouldPrevent =
				touching && touchData.offsetY > touchData.offsetX === vertical;

			if (shouldPrevent) {
				preventDefault(event, stopPropagation);
			}
		};

		const restore = () => {
			const duration = Date.now() - touchStartTime;
			const speed = delta / duration;

			const {
				activeIndex = 0,
				swipeSize,
				swipeLength,
			} = stateRef.current;
			const { loop } = propsRef.current;

			const quickSwipe = Math.abs(speed) > 0.25;

			const shouldSwipe =
				(quickSwipe || Math.abs(delta) > swipeSize / 2) &&
				swipeSize > 0 &&
				swipeLength > 1;

			if (!shouldSwipe) {
				move(-activeIndex * swipeSize, {
					swiping: true,
				});

				return;
			}

			if (quickSwipe) {
				if (loop) {
					delta < 0 ? next() : prev();
				} else if (delta < 0 && activeIndex < swipeLength - 1) {
					next();
				} else if (delta > 0 && activeIndex > 0) {
					prev();
				} else {
					move(-activeIndex * swipeSize, {
						swiping: true,
					});
				}

				return;
			}

			touchWrapperOffset = touchWrapperOffset + delta;

			if (touchWrapperOffset > 0) {
				setActiveIndex(loop ? swipeLength - 1 : 0);
				move(loop ? swipeSize : 0, {
					swiping: true,
					critical: loop,
				});
			} else if (-touchWrapperOffset > swipeSize * (swipeLength - 1)) {
				setActiveIndex(loop ? 0 : swipeLength - 1);
				move(-swipeSize * (loop ? swipeLength : swipeLength - 1), {
					swiping: true,
					critical: loop,
				});
			} else {
				const nextActiveIndex = Math.ceil(
					-touchWrapperOffset / swipeSize,
				);
				setActiveIndex(nextActiveIndex);
				move(-nextActiveIndex - swipeSize, {
					swiping: true,
					critical: loop,
				});
			}
		};

		const onTouchEnd = () => {
			if (!touching) {
				return;
			}

			restore();

			touching = false;
			startAutoplay();
		};

		node.addEventListener('touchstart', onTouchStart, false);
		bindEvent(node, 'touchmove', onTouchMove, { passive: false });
		node.addEventListener('touchend', onTouchEnd, false);
		node.addEventListener('touchcancel', onTouchEnd, false);

		return () => {
			node.removeEventListener('touchstart', onTouchStart);
			node.removeEventListener('touchmove', onTouchMove);
			node.removeEventListener('touchend', onTouchEnd);
			node.removeEventListener('touchcancel', onTouchEnd);
		};
	}, [
		move,
		next,
		prev,
		propsRef,
		reload,
		setActiveIndex,
		setWrapperOffset,
		startAutoplay,
		stateRef,
		stopAutoplay,
		stopTransition,
		touchable,
	]);

	const getWrapperStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {};

		formattedStyle.transform = `translate${
			vertical ? 'Y' : 'X'
		}(${wrapperOffset}px)`;

		if (swipeSize > 0) {
			formattedStyle[vertical ? 'height' : 'width'] = `${
				swipeSize * swipeLength
			}px`;
		}

		if (swiping) {
			formattedStyle.transitionDuration = `${duration}ms`;
		}

		return formattedStyle;
	};

	const renderIndicators = (): ReactNode => {
		if (indicator === false || swipeLength <= 0) {
			return;
		}

		if (indicator == null || indicator === true) {
			return (
				<div className={bem('indicators')}>
					{new Array(swipeLength).fill(0).map((_, index) => (
						<i
							className={bem('indicator', {
								active: index === (activeIndex || 0),
							})}
							key={index}
						/>
					))}
				</div>
			);
		}

		return indicator;
	};

	return (
		<div
			ref={rootRef}
			className={classnames(bem({ vertical }), className)}
			{...restProps}
		>
			<div
				className={bem('wrapper')}
				style={getWrapperStyle()}
				ref={wrapperRef}
			>
				{children.map((item, idx) => {
					if (isValidElement<any>(item)) {
						const itemStyle = item.props.style;
						const itemKey = item.key;

						let mergedStyle: CSSProperties = {
							...itemStyles[idx],
						};

						if (typeof itemStyle === 'object') {
							mergedStyle = { ...mergedStyle, ...itemStyle };
						}

						return React.cloneElement(item, {
							...item.props,
							style: mergedStyle,
							key: itemKey != null ? itemKey : idx,
						});
					}

					return item;
				})}
			</div>

			{renderIndicators()}
		</div>
	);
});

Swipe.displayName = 'Swipe';

export default Swipe;
