import React, { forwardRef, useEffect, useState } from 'react';
import useProps from '../hooks/use-props';
import Popup from '../popup';
import { classnames, createBEM } from '../utils/namespace';
import { NotifyProps } from './interface';

const NS = 'fnx-notify';
const bem = createBEM(NS);

type NotifyRequiredProps = Required<
	Pick<NotifyProps, 'type' | 'visible' | 'duration' | 'lockScroll'>
>;

const DEFAULT_PROPS: NotifyRequiredProps = {
	type: 'danger',
	visible: false,
	duration: 2000,
	lockScroll: false,
};

const Notify = forwardRef<HTMLDivElement, NotifyProps>((_props, ref) => {
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
	] = useProps<NotifyRequiredProps, NotifyProps>(DEFAULT_PROPS, _props);

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
});

Notify.displayName = 'Notify';

export default Notify;
