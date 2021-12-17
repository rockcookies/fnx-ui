import React, { useEffect, useState } from 'react';
import configComponentProps from '../hooks/config-component-props';
import Popup from '../popup';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { NotifyProps } from './interface';

const NS = 'fnx-notify';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<NotifyProps, 'type' | 'visible' | 'duration' | 'lockScroll'>>
>({
	type: 'danger',
	visible: false,
	duration: 2000,
	lockScroll: false,
});

const Notify = createForwardRef<HTMLDivElement, NotifyProps>(
	'Notify',
	(_props, ref) => {
		const [
			{ type, visible, duration, lockScroll },
			{
				mountTo,
				message,
				color,
				background,
				children,
				className,
				style,
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
