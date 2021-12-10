import React from 'react';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { SwipeItemProps } from './interface';

const NS = 'fnx-swipe-item';
const bem = createBEM(NS);

const SwipeItem = createForwardRef<HTMLDivElement, SwipeItemProps>(
	'SwipeItem',
	({ className, children, ...restProps }, ref) => {
		return (
			<div
				className={classnames(bem(), className)}
				{...restProps}
				ref={ref}
			>
				{children}
			</div>
		);
	},
);

export default SwipeItem;
