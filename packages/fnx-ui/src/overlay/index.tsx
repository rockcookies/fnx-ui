import React, {
	CSSProperties,
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import ConfigProvider from '../config-provider';
import { DEFAULT_CONFIG_CONTEXT } from '../config-provider/context';
import configComponentProps from '../hooks/config-component-props';
import useMergedProp from '../hooks/use-merged-prop';
import { bindEvent, preventDefault } from '../utils/dom/event';
import { classnames, createBEM } from '../utils/namespace';
import { OverlayProps } from './interface';

const NS = 'fnx-overlay';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<OverlayProps, 'visible' | 'lockScroll'>>
>({
	visible: false,
	lockScroll: true,
});

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((_props, ref) => {
	const overlayRef = useRef<HTMLDivElement | null>(null);

	const configContext = useContext(ConfigProvider.Context);

	const [
		{ visible, lockScroll },
		{
			zIndex,
			transitionDuration: _transitionDuration,
			className,
			style,
			children,
			...restProps
		},
	] = useProps(_props);

	const transitionDuration = useMergedProp<number>(
		configContext.transitionDuration,
		_transitionDuration,
	);

	useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
		ref,
		() => overlayRef.current,
	);

	const [closing, setClosing] = useState(false);
	const [rendering, setRendering] = useState(false);

	// lock scroll
	useEffect(() => {
		// passive events
		// https://github.com/facebook/react/issues/6436
		// https://github.com/ZhongAnTech/zarm/issues/505
		if (lockScroll && rendering && overlayRef.current != null) {
			const overlay = overlayRef.current;

			const touchmove = (e: TouchEvent) => {
				preventDefault(e, true);
			};

			bindEvent(overlay, 'touchmove', touchmove, { passive: false });

			return () => {
				overlay.removeEventListener('touchmove', touchmove);
			};
		}
	}, [rendering, lockScroll]);

	useEffect(() => {
		if (visible) {
			setRendering(true);
			setClosing(false);
		} else {
			setClosing(true);
		}
	}, [visible]);

	const formatStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {};

		if (zIndex != null) {
			formattedStyle.zIndex = zIndex;
		}

		if (!rendering) {
			formattedStyle.display = 'none';
		}

		if (transitionDuration !== DEFAULT_CONFIG_CONTEXT.transitionDuration) {
			formattedStyle.transitionDuration = `${transitionDuration}ms`;
		}

		return { ...formattedStyle, ...style };
	};

	return (
		<CSSTransition
			classNames="fnx-fade"
			in={rendering && !closing}
			timeout={transitionDuration || 0}
			nodeRef={overlayRef}
			onExited={() => {
				setClosing(false);
				setRendering(false);
			}}
		>
			<div
				className={classnames(bem(), className)}
				style={formatStyle()}
				{...restProps}
				ref={overlayRef}
			>
				{children}
			</div>
		</CSSTransition>
	);
});

Overlay.displayName = 'Overlay';

export type { OverlayComponentProps, OverlayProps } from './interface';
export default Overlay;
