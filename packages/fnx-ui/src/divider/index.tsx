import React from 'react';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { DividerComponentProps, DividerProps } from './interface';

const NS = 'fnx-divider';
const bem = createBEM(NS);

const Divider = createDefaultsForwardRef<
	HTMLDivElement,
	DividerProps,
	Required<
		Pick<DividerComponentProps, 'dashed' | 'hairline' | 'contentPosition'>
	>
>(
	'Divider',
	{
		dashed: false,
		hairline: true,
		contentPosition: 'center',
	},
	(
		{
			dashed,
			hairline,
			contentPosition,
			// optionals
			className,
			children,
			...restProps
		},
		ref,
	) => {
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
