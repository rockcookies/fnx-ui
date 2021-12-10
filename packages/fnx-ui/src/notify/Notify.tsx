import React, { useEffect, useState } from 'react';
import Popup from '../popup';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { NotifyProps } from './interface';

const NS = 'fnx-notify';
const bem = createBEM(NS);

const Notify = createDefaultsForwardRef<
	HTMLDivElement,
	NotifyProps,
	Required<Pick<NotifyProps, 'type' | 'visible' | 'duration' | 'lockScroll'>>
>(
	'Notify',
	{
		type: 'danger',
		visible: false,
		duration: 2000,
		lockScroll: false,
	},
	(
		{
			type,
			visible,
			duration,
			lockScroll,
			// optionals
			mountTo,
			message,
			color,
			background,
			children,
			className,
			style,
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

		return (
			<Popup
				visible={showing}
				mountTo={mountTo}
				className={classnames(bem([type]), className)}
				renderOnShow={true}
				destroyOnHide={true}
				overlay={false}
				position="top"
				lockScroll={lockScroll}
				style={{
					color,
					background,
					...style,
				}}
				{...restProps}
				ref={ref}
			>
				{message || children}
			</Popup>
		);
	},
);

export default Notify;
