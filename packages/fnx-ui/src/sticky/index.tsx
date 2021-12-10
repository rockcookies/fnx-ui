import React, {
	CSSProperties,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import useDefaultsRef from '../hooks/use-defaults-ref';
import { listenDocumentVisibilityChange } from '../utils/dom/event';
import { getScrollParent, getScrollTop } from '../utils/dom/scroll';
import { getElementRect, isHidden } from '../utils/dom/style';
import { unitToPx } from '../utils/format';
import { ElementRect } from '../utils/interface';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { StickyProps, StickyRef } from './interface';

const NS = 'fnx-sticky';
const bem = createBEM(NS);

const Sticky = createDefaultsForwardRef<
	StickyRef,
	StickyProps,
	Required<
		Pick<
			StickyProps,
			| 'zIndex'
			| 'offsetTop'
			| 'offsetBottom'
			| 'position'
			| 'onChange'
			| 'onScroll'
		>
	>
>(
	'Sticky',
	{
		zIndex: 99,
		offsetTop: 0,
		offsetBottom: 0,
		position: 'top',
		onChange: noop,
		onScroll: noop,
	},
	(
		{
			zIndex,
			offsetTop: __offsetTop,
			offsetBottom: __offsetBottom,
			position,
			onChange,
			onScroll: _onScroll,
			// optionals
			container,
			children,
			className,
			style,
			...restProps
		},
		ref,
	) => {
		const [fixed, setFixed] = useState<boolean>();
		const [transform, setTransform] = useState<number>();
		const [height, setHeight] = useState<number>();
		const [width, setWidth] = useState<number>();

		const _offsetTop = useMemo(() => unitToPx(__offsetTop), [__offsetTop]);
		const _offsetBottom = useMemo(
			() => unitToPx(__offsetBottom),
			[__offsetBottom],
		);

		const rootRef = useRef<HTMLDivElement>(null);

		const stateRef = useDefaultsRef({
			position,
			onChange,
			onScroll: _onScroll,
			fixed,
			offsetTop: _offsetTop,
			offsetBottom: _offsetBottom,
			container,
		});

		const stickyRef = useMemo<StickyRef>(
			() => ({
				root: rootRef.current,
				isFixed: () => !!stateRef.current.fixed,
			}),
			[stateRef],
		);

		useImperativeHandle<StickyRef, StickyRef>(ref, () => stickyRef, [
			stickyRef,
		]);

		const onScroll = useCallback(() => {
			const node = rootRef.current;

			if (!node || isHidden(node)) {
				return;
			}

			const rootRect = getElementRect(node);
			let nextFixed = false;

			const { container, position, offsetTop, offsetBottom } =
				stateRef.current;

			let containerRect: ElementRect | undefined;

			if (typeof container === 'function') {
				const c = container();

				if (c != null) {
					containerRect = getElementRect(c);
				}
			} else if (container != null) {
				containerRect = getElementRect(container);
			}

			let nextTransform = 0;

			if (position === 'top') {
				// The sticky component should be kept inside the container element
				if (containerRect) {
					const difference =
						containerRect.bottom - offsetTop - rootRect.height;
					nextFixed =
						offsetTop > rootRect.top && containerRect.bottom > 0;
					nextTransform = difference < 0 ? difference : 0;
				} else {
					nextFixed = offsetTop > rootRect.top;
				}
			} else if (position === 'bottom') {
				const { clientHeight } = document.documentElement;
				if (containerRect) {
					const difference =
						clientHeight -
						containerRect.top -
						offsetBottom -
						rootRect.height;
					nextFixed =
						clientHeight - offsetBottom < rootRect.bottom &&
						clientHeight > containerRect.top;
					nextTransform = difference < 0 ? -difference : 0;
				} else {
					nextFixed = clientHeight - offsetBottom < rootRect.bottom;
				}
			}

			setFixed(nextFixed);
			setWidth(rootRect.width);
			setHeight(rootRect.height);
			setTransform(nextTransform);

			const scrollTop = getScrollTop(window);

			stateRef.current.onScroll({
				scrollTop,
				fixed: nextFixed,
			});
		}, [stateRef]);

		useEffect(() => {
			const node = rootRef.current;

			if (node == null) {
				return;
			}

			const scrollParent = getScrollParent(node);

			const cb = () => onScroll();

			scrollParent.addEventListener('scroll', cb);

			const clears = Array.from<() => void>([
				() => scrollParent.removeEventListener('scroll', cb),
				listenDocumentVisibilityChange(cb),
			]);

			return () => {
				for (const off of clears) {
					off();
				}
			};
		}, [onScroll]);

		useEffect(() => {
			if (fixed != null) {
				stateRef.current.onChange({ fixed });
			}
		}, [fixed, stateRef]);

		const getRootStyle = (): CSSProperties | undefined => {
			if (fixed) {
				const formattedStyle: CSSProperties = {
					width: width != null ? unitToPx(width) : undefined,
					height: height != null ? unitToPx(height) : undefined,
				};

				return { ...formattedStyle, ...style };
			}

			return style;
		};

		const getContainerStyle = (): CSSProperties | undefined => {
			if (!fixed) {
				return;
			}

			const formattedStyle: CSSProperties = {
				width: width != null ? unitToPx(width) : undefined,
				height: height != null ? unitToPx(height) : undefined,
				transform:
					transform != null
						? `translate3d(0, ${transform}px, 0)`
						: undefined,
				zIndex: zIndex != null ? zIndex : undefined,
			};

			if (position === 'top') {
				formattedStyle.top = `${_offsetTop}px`;
			} else {
				formattedStyle.bottom = `${_offsetBottom}px`;
			}

			return formattedStyle;
		};

		return (
			<div
				className={classnames(bem({ fixed }), className)}
				style={getRootStyle()}
				{...restProps}
				ref={rootRef}
			>
				<div className={bem('container')} style={getContainerStyle()}>
					{children}
				</div>
			</div>
		);
	},
);

export type {
	StickyComponentProps,
	StickyPosition,
	StickyProps,
	StickyRef,
} from './interface';

export default Sticky;
