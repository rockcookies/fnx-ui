import React from 'react';
import configComponentProps from '../hooks/config-component-props';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
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

const Divider = createForwardRef<HTMLDivElement, DividerProps>(
	'Divider',
	(_props, ref) => {
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
	},
);

export type {
	DividerComponentProps,
	DividerContentPosition,
	DividerProps,
} from './interface';

export default Divider;
