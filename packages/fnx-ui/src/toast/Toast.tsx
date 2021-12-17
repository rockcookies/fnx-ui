import React, { ReactNode, useEffect, useState } from 'react';
import configComponentProps from '../hooks/config-component-props';
import Popup from '../popup';
import { canUseDom } from '../utils/detect';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { ToastProps } from './interface';

const NS = 'fnx-toast';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			ToastProps,
			| 'visible'
			| 'duration'
			| 'forbidClick'
			| 'overlay'
			| 'overlayCloseable'
			| 'onClick'
		>
	>
>({
	visible: false,
	duration: 2000,
	forbidClick: false,
	overlay: false,
	overlayCloseable: false,
	onClick: noop,
});

const BODY_LOCK_CLASS_NAME = `${NS}--unclickable`;

let BODY_CLICK_LOCK_COUNT = 0;

const Toast = createForwardRef<HTMLDivElement, ToastProps>(
	'Toast',
	(_props, ref) => {
		const [
			{
				visible,
				duration,
				forbidClick,
				overlay,
				overlayCloseable,
				onClick,
			},
			{
				mountTo,
				position,
				message,
				icon,
				clickCloseable,
				children,
				className,
				...restProps
			},
		] = useProps(_props);

		const [showing, setShowing] = useState(false);

		useEffect(() => {
			setShowing(visible);

			if (visible && duration > 0) {
				const timer = setTimeout(() => {
					setShowing(false);
				}, duration);

				return () => {
					clearTimeout(timer);
				};
			}
		}, [visible, duration]);

		// forbid click
		useEffect(() => {
			if (showing && forbidClick && canUseDom()) {
				if (!BODY_CLICK_LOCK_COUNT) {
					document.body.classList.add(BODY_LOCK_CLASS_NAME);
				}

				BODY_CLICK_LOCK_COUNT++;

				return () => {
					BODY_CLICK_LOCK_COUNT--;

					if (!BODY_CLICK_LOCK_COUNT) {
						document.body.classList.remove(BODY_LOCK_CLASS_NAME);
					}
				};
			}
		}, [showing, forbidClick]);

		const renderIcon = () => {
			const formattedIcon: ReactNode = icon;

			return (
				formattedIcon && (
					<div className={bem('icon')}>{formattedIcon}</div>
				)
			);
		};

		const renderMessage = () => {
			const formattedMessage: ReactNode = message || children;

			return (
				formattedMessage && (
					<div className={bem('message')}>{formattedMessage}</div>
				)
			);
		};

		return (
			<Popup
				visible={showing}
				mountTo={mountTo}
				className={classnames(
					bem([
						position,
						{
							text: !icon,
						},
					]),
					className,
				)}
				renderOnShow={true}
				destroyOnHide={true}
				lockScroll={false}
				overlay={overlay}
				overlayCloseable={overlayCloseable}
				{...restProps}
				ref={ref}
				onClick={(e) => {
					if (clickCloseable) {
						setShowing(false);
					}

					onClick(e);
				}}
			>
				{renderIcon()}
				{renderMessage()}
			</Popup>
		);
	},
);

export default Toast;
