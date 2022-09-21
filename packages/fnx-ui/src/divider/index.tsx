import React, { forwardRef } from 'react';
import configComponentProps from '../hooks/config-component-props';
import { classnames, createBEM } from '../utils/namespace';
import { DividerComponentProps, DividerProps } from './interface';

const NS = 'fnx-divider';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<DividerComponentProps, 'dashed' | 'hairline' | 'contentPosition'>
	>
>({
	dashed: false,
	hairline: true,
	contentPosition: 'center',
});

const Divider = forwardRef<HTMLDivElement, DividerProps>((_props, ref) => {
	const [
		{ dashed, hairline, contentPosition },
		{ className, children, ...restProps },
	] = useProps(_props);

	return (
		<div
			className={classnames(
				bem({
					dashed,
					hairline,
					[`content-${contentPosition}`]: children != null,
				}),
				className,
			)}
			{...restProps}
			ref={ref}
		>
			{children}
		</div>
	);
});

Divider.displayName = 'Divider';

export type {
	DividerComponentProps,
	DividerContentPosition,
	DividerProps,
} from './interface';

export default Divider;
