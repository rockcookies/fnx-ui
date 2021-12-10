import React, {
	CSSProperties,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import ConfigProvider from '../config-provider';
import useDefaults from '../hooks/use-defaults';
import useDefaultsRef from '../hooks/use-defaults-ref';
import Loading from '../loading';
import { useLocale } from '../locale';
import { bindEvent, preventDefault } from '../utils/dom/event';
import { getScrollParent, getScrollTop } from '../utils/dom/scroll';
import TouchHelper from '../utils/dom/touch-helper';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { PullRefreshComponentProps, PullRefreshProps } from './interface';

const NS = 'fnx-pull-refresh';
const bem = createBEM(NS);

const DEFAULT_INDICATOR_HEIGHT = 50;

type PullRefreshStatus =
	| 'normal'
	| 'loading'
	| 'loosing'
	| 'pulling'
	| 'success';

const PullRefresh = createDefaultsForwardRef<
	HTMLDivElement,
	PullRefreshProps,
	Required<
		Pick<
			PullRefreshComponentProps,
			| 'disabled'
			| 'successDuration'
			| 'slots'
			| 'indicatorHeight'
			| 'refreshing'
			| 'onRefresh'
		>
	>
>(
	'PullRefresh',
	{
		disabled: false,
		successDuration: 500,
		slots: {},
		indicatorHeight: DEFAULT_INDICATOR_HEIGHT,
		refreshing: false,
		onRefresh: noop,
	},
	(
		{
			disabled,
			successDuration,
			slots,
			indicatorHeight,
			refreshing,
			onRefresh,
			// optional
			transitionDuration: _transitionDuration,
			className,
			style,
			children,
			...restProps
		},
		ref,
	) => {
		const locale = useLocale('pull-refresh');
		const configContext = useContext(ConfigProvider.Context);

		const transitionDuration = useDefaults<number>(
			configContext.transitionDuration,
			_transitionDuration,
		);

		const propsRef = useDefaultsRef<Required<PullRefreshComponentProps>>({
			disabled,
			successDuration,
			transitionDuration,
			slots,
			indicatorHeight,
			refreshing,
			onRefresh,
		});

		const rootRef = useRef<HTMLDivElement>(null);
		const trackRef = useRef<HTMLDivElement>(null);

		useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
			ref,
			() => rootRef.current,
		);

		const successTimer = useRef<NodeJS.Timer>();

		const [status, setStatus] = useState<PullRefreshStatus>('normal');

		const [duration, setDuration] = useState(0);
		const [prevRefreshing, setPrevRefreshing] = useState<boolean>();
		const [distance, setDistance] = useState(0);

		const touchable = useMemo(() => {
			return !disabled && status !== 'loading' && status !== 'success';
		}, [disabled, status]);

		// touch events
		useEffect(() => {
			const node = trackRef.current;

			if (!node || !touchable) {
				return;
			}

			const touch = new TouchHelper();
			let reachTop = false;
			let loosing = false;

			const checkPosition = (e: TouchEvent) => {
				const scrollTop = rootRef.current
					? getScrollTop(getScrollParent(rootRef.current))
					: 0;

				reachTop = scrollTop === 0;

				if (reachTop) {
					setDuration(0);
					touch.start(e);
				}
			};

			const ease = (distance: number, height: number) => {
				if (distance > height) {
					if (distance < height * 2) {
						distance = height + (distance - height) / 2;
					} else {
						distance = height * 1.5 + (distance - height * 2) / 4;
					}
				}

				return Math.round(distance);
			};

			const onTouchStart = (e: TouchEvent) => {
				checkPosition(e);
			};

			const onTouchMove = (e: TouchEvent) => {
				if (!reachTop) {
					checkPosition(e);
				}

				touch.move(e);
				const { deltaY } = touch.touchData;

				if (reachTop && deltaY >= 0 && touch.isVertical()) {
					preventDefault(e);

					const height = propsRef.current.indicatorHeight;
					const distance = ease(deltaY, height);

					loosing = distance !== 0 && distance > height;
					setDistance(distance);

					if (distance === 0) {
						setStatus('normal');
					} else if (distance < height) {
						setStatus('pulling');
					} else {
						setStatus('loosing');
					}
				}
			};

			const onTouchEnd = () => {
				if (reachTop && touch.touchData.deltaY) {
					const { transitionDuration, indicatorHeight } =
						propsRef.current;

					setDuration(transitionDuration);

					if (loosing) {
						setDistance(indicatorHeight);
						setStatus('loading');
					} else {
						setDistance(0);
						setStatus('normal');
					}
				}
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
		}, [propsRef, touchable]);

		// refreshing
		useEffect(() => {
			if (status !== 'loading') {
				return;
			}

			const currentRefreshing = !!refreshing;

			if (prevRefreshing == null) {
				setPrevRefreshing(currentRefreshing);
				propsRef.current.onRefresh();
				return;
			}

			// refresh success
			if (!refreshing && prevRefreshing !== refreshing) {
				setPrevRefreshing(undefined);

				const { slots, successDuration } = propsRef.current;

				if (slots.success) {
					setStatus('success');

					if (successTimer.current) {
						clearTimeout(successTimer.current);
					}

					successTimer.current = setTimeout(() => {
						setDistance(0);
						setStatus('normal');
					}, successDuration);

					return;
				}

				setDistance(0);
				setStatus('normal');
				return;
			}

			setPrevRefreshing(refreshing);
		}, [status, refreshing, prevRefreshing, propsRef]);

		// clean
		useEffect(() => {
			return () => {
				if (successTimer.current) {
					clearTimeout(successTimer.current);
				}
			};
		}, []);

		const getIndicatorStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {};

			if (indicatorHeight !== DEFAULT_INDICATOR_HEIGHT) {
				formattedStyle.height = `${indicatorHeight}px`;
			}

			return formattedStyle;
		};

		const getTrackStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {
				transitionDuration: `${duration}ms`,
			};

			if (distance > 0) {
				formattedStyle.transform = `translate3d(0, ${distance}px, 0)`;
			}

			return formattedStyle;
		};

		const renderIndicator = () => {
			const propsSlots = slots && (slots as any)[status];

			if (typeof propsSlots === 'function') {
				return propsSlots(distance);
			} else if (propsSlots) {
				return propsSlots;
			}

			if (status === 'loading') {
				return <Loading size={16} text={locale[status]} />;
			}

			const text = locale[status];

			if (text) {
				return <div className={bem('text')}>{text}</div>;
			}
		};

		return (
			<div
				className={classnames(bem(), className)}
				style={style}
				{...restProps}
				ref={rootRef}
			>
				<div
					className={bem('track')}
					style={getTrackStyle()}
					ref={trackRef}
				>
					<div
						className={bem('indicator')}
						style={getIndicatorStyle()}
					>
						{renderIndicator()}
					</div>
					{children}
				</div>
			</div>
		);
	},
);

export type {
	PullRefreshComponentProps,
	PullRefreshIndicatorNode,
	PullRefreshProps,
	PullRefreshSlots,
} from './interface';

export default PullRefresh;
