import React, {
	forwardRef,
	MutableRefObject,
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import useUnmountedRef from '../hooks/use-unmounted-ref';
import Icon from '../icon';
import { getElementRect } from '../utils/dom/style';
import { classnames, createBEM } from '../utils/namespace';
import { NoticeBarProps, NoticeBarRef } from './interface';
import { doubleRaf } from '../utils/raf';
import configComponentProps from '../hooks/config-component-props';
import useOnPopupOpen from '../popup/hooks/use-on-popup-open';

const NS = 'fnx-notice-bar';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			NoticeBarProps,
			| 'marquee'
			| 'marqueeDelay'
			| 'marqueeSpeed'
			| 'ellipsis'
			| 'closeable'
		>
	>
>({
	marquee: false,
	marqueeDelay: 1000,
	marqueeSpeed: 0.06,
	ellipsis: false,
	closeable: false,
});

type NoticeBarPlayType =
	| 'first-reset'
	| 'first'
	| 'first-reset-auto'
	| 'first-auto'
	| 'loop-reset'
	| 'loop';

const forceRepaint = (nodeRef: MutableRefObject<HTMLDivElement | null>) => {
	const content = nodeRef.current;

	if (content) {
		content.scrollTop;
	}
};

const NoticeBar = forwardRef<NoticeBarRef, NoticeBarProps>((_props, ref) => {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const noticeBarRef = useRef<HTMLDivElement | null>(null);

	const delayRef = useRef<NodeJS.Timeout>();

	const [
		props,
		{
			leftIcon,
			rightIcon,
			closeIcon,
			color,
			background,
			className,
			style,
			children,
			...restProps
		},
	] = useProps(_props);
	const { marquee, ellipsis, closeable } = props;
	const propsRef = useMergedPropRef(props);

	const [offset, setOffset] = useState<number>();
	const [transitionDuration, setTransitionDuration] = useState<number>();
	const [playing, setPlaying] = useState<NoticeBarPlayType>();
	const [visible, setVisible] = useState(true);

	const unmountedRef = useUnmountedRef();

	const reset = useCallback(() => {
		setOffset(undefined);
		setTransitionDuration(undefined);
		setPlaying(undefined);

		if (marquee === false || !visible) {
			return;
		}

		if (delayRef.current) {
			clearTimeout(delayRef.current);
		}

		delayRef.current = setTimeout(() => {
			if (!unmountedRef.current) {
				setPlaying(
					marquee === 'auto' ? 'first-reset-auto' : 'first-reset',
				);
				delayRef.current = undefined;
			}
		}, Math.max(propsRef.current.marqueeDelay, 0));
	}, [marquee, visible, propsRef, unmountedRef]);

	useOnPopupOpen(() => {
		doubleRaf(reset);
	});

	useEffect(() => {
		reset();
	}, [reset]);

	useImperativeHandle<NoticeBarRef, NoticeBarRef>(
		ref,
		() => {
			return {
				element: noticeBarRef.current,
				reset,
			};
		},
		[reset],
	);

	useEffect(() => {
		if (playing == null) {
			return;
		}

		const { marqueeSpeed } = propsRef.current;

		const wrapperWidth = wrapperRef.current
			? getElementRect(wrapperRef.current).width
			: 0;
		const contentWidth = contentRef.current
			? getElementRect(contentRef.current).width
			: 0;

		if (
			playing === 'first-reset' ||
			playing === 'first-reset-auto' ||
			playing === 'loop-reset'
		) {
			forceRepaint(contentRef);
			setPlaying(playing.replace('-reset', '') as any);
			setTransitionDuration(undefined);
			setOffset(playing === 'loop-reset' ? wrapperWidth : 0);
			return;
		}

		let timeout: NodeJS.Timeout | undefined;

		if (
			playing === 'first' ||
			(playing === 'first-auto' && contentWidth > wrapperWidth)
		) {
			const duration = contentWidth / marqueeSpeed;

			forceRepaint(contentRef);
			setOffset(-contentWidth);
			setTransitionDuration(duration);
			timeout = setTimeout(() => setPlaying('loop-reset'), duration);
			return;
		}

		if (playing === 'loop') {
			const duration = (contentWidth + wrapperWidth) / marqueeSpeed;

			forceRepaint(contentRef);
			setOffset(-contentWidth);
			setTransitionDuration(duration);
			timeout = setTimeout(() => setPlaying('loop-reset'), duration);
		}

		return () => {
			if (timeout) {
				clearTimeout(timeout);
			}
		};
	}, [playing, propsRef]);

	const renderMarquee = () => {
		return (
			<div
				ref={wrapperRef}
				className={bem(marquee ? 'marquee-wrapper' : 'content-wrapper')}
			>
				<div
					ref={contentRef}
					style={{
						transform:
							offset != null
								? `translateX(${offset}px)`
								: undefined,
						transitionDuration:
							transitionDuration != null
								? `${transitionDuration}ms`
								: undefined,
					}}
					className={
						marquee
							? bem('marquee')
							: classnames(
									bem('content', {
										'wrap-text': !ellipsis,
									}),
									ellipsis ? 'fnx-ellipsis' : undefined,
							  )
					}
				>
					{children}
				</div>
			</div>
		);
	};

	if (!visible) {
		return null;
	}

	return (
		<div
			ref={noticeBarRef}
			{...restProps}
			className={classnames(bem({ marquee }), className)}
			style={{
				color,
				backgroundColor: background,
				...style,
			}}
		>
			{leftIcon && <div className={bem('left-icon')}>{leftIcon}</div>}
			{renderMarquee()}
			{closeable && (
				<div
					className={bem('close-icon')}
					onClick={() => setVisible(false)}
				>
					{closeIcon || <Icon name="cross" />}
				</div>
			)}
			{rightIcon && <div className={bem('right-icon')}>{rightIcon}</div>}
		</div>
	);
});

NoticeBar.displayName = 'NoticeBar';

export type {
	NoticeBarComponentProps,
	NoticeBarProps,
	NoticeBarRef,
} from './interface';

export default NoticeBar;
