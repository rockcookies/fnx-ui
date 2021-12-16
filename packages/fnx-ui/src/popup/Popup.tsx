import React, {
	CSSProperties,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import ConfigProvider from '../config-provider';
import { DEFAULT_CONFIG_CONTEXT } from '../config-provider/context';
import useDefaults from '../hooks/use-defaults';
import { PopupVisibleContext } from '../hooks/use-popup-reopen';
import useScrollLock from '../hooks/use-scroll-lock';
import Overlay from '../overlay';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { PopupProps } from './interface';
import Portal from './Portal';

const NS = 'fnx-popup';
const bem = createBEM(NS);

let globalZIndex = 2000;

const Popup = createDefaultsForwardRef<
	HTMLDivElement,
	PopupProps,
	Required<
		Pick<
			PopupProps,
			| 'visible'
			| 'renderOnShow'
			| 'destroyOnHide'
			| 'lockScroll'
			| 'position'
			| 'overlay'
			| 'overlayCloseable'
			| 'onOverlayClick'
			| 'onClose'
			| 'onBeforeHide'
			| 'onHide'
			| 'onAfterHide'
			| 'onBeforeShow'
			| 'onShow'
			| 'onAfterShow'
		>
	>
>(
	'Popup',
	{
		visible: false,
		renderOnShow: true,
		destroyOnHide: false,
		lockScroll: true,
		position: 'center',
		overlay: true,
		overlayCloseable: true,
		onOverlayClick: noop,
		onClose: noop,
		onBeforeHide: noop,
		onHide: noop,
		onAfterHide: noop,
		onBeforeShow: noop,
		onShow: noop,
		onAfterShow: noop,
	},
	(
		{
			visible,
			renderOnShow,
			destroyOnHide,
			lockScroll,
			position,
			overlay,
			overlayCloseable,
			onOverlayClick,
			onClose,
			onBeforeHide,
			onHide,
			onAfterHide,
			onBeforeShow,
			onShow,
			onAfterShow,
			// optionals
			mountTo,
			transitionDuration: _transitionDuration,
			transitionName,
			round,
			safeAreaInsetBottom: _safeAreaInsetBottom,
			overlayClassName,
			overlayStyle,
			children,
			className,
			style,
			...restProps
		},
		ref,
	) => {
		const popupRef = useRef<HTMLDivElement | null>(null);

		const configContext = useContext(ConfigProvider.Context);

		useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
			ref,
			() => popupRef.current,
		);

		const [closing, setClosing] = useState(false);
		const [rendering, setRendering] = useState(false);
		const [zIndex, setZIndex] = useState<number>();

		const transitionDuration = useDefaults(
			configContext.transitionDuration,
			_transitionDuration,
		);

		const safeAreaInsetBottom = useDefaults(
			configContext.safeAreaInsetBottom,
			_safeAreaInsetBottom,
		);

		const formattedTransitionName = useMemo(() => {
			if (transitionName) {
				return transitionName;
			}

			return position === 'center'
				? 'fnx-fade'
				: bem([`slide-${position}`]);
		}, [transitionName, position]);

		// lock popup scroll
		useScrollLock(popupRef, { locked: zIndex != null && lockScroll });

		useEffect(() => {
			if (visible) {
				setZIndex(++globalZIndex);
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

			if (
				transitionDuration != null &&
				transitionDuration !== DEFAULT_CONFIG_CONTEXT.transitionDuration
			) {
				formattedStyle.transitionDuration = `${transitionDuration}ms`;
			}

			return { ...formattedStyle, ...style };
		};

		return (
			<Portal
				renderOnShow={renderOnShow}
				destroyOnHide={destroyOnHide}
				mountTo={mountTo}
				visible={visible || rendering}
			>
				<PopupVisibleContext.Provider
					value={{ visible: visible || rendering }}
				>
					<>
						{overlay && (
							<Overlay
								visible={visible}
								className={overlayClassName}
								style={overlayStyle}
								zIndex={zIndex}
								lockScroll={lockScroll}
								transitionDuration={transitionDuration}
								onClick={(e) => {
									onOverlayClick(e);

									if (overlayCloseable) {
										onClose();
									}
								}}
							/>
						)}

						<CSSTransition
							in={rendering && !closing}
							classNames={formattedTransitionName}
							nodeRef={popupRef}
							timeout={transitionDuration || 0}
							onEnter={onBeforeShow}
							onEntering={onShow}
							onEntered={onAfterShow}
							onExit={onBeforeHide}
							onExiting={onHide}
							onExited={() => {
								setZIndex(undefined);
								setClosing(false);
								setRendering(false);
								onAfterHide();
							}}
						>
							<div
								className={classnames(
									bem({
										round,
										[position]: position,
									}),
									safeAreaInsetBottom &&
										'fnx-safe-area-bottom',
									className,
								)}
								style={formatStyle()}
								{...restProps}
								ref={popupRef}
							>
								{children}
							</div>
						</CSSTransition>
					</>
				</PopupVisibleContext.Provider>
			</Portal>
		);
	},
);

export default Popup;
