import React, { ReactNode, useEffect, useState } from 'react';
import Popup from '../popup';
import { canUseDom } from '../utils/detect';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { ToastProps } from './interface';

const NS = 'fnx-toast';
const bem = createBEM(NS);

const BODY_LOCK_CLASS_NAME = `${NS}--unclickable`;

let BODY_CLICK_LOCK_COUNT = 0;

const Toast = createDefaultsForwardRef<
	HTMLDivElement,
	ToastProps,
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
>(
	'Toast',
	{
		visible: false,
		duration: 2000,
		forbidClick: false,
		overlay: false,
		overlayCloseable: false,
		onClick: noop,
	},
	(
		{
			visible,
			duration,
			forbidClick,
			overlay,
			overlayCloseable,
			onClick,
			// optionals
			mountTo,
			position,
			message,
			icon,
			clickCloseable,
			children,
			className,
			...restProps
		},
		ref,
	) => {
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
