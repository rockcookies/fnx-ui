import React, { forwardRef } from 'react';
import { classnames, createBEM } from '../utils/namespace';
import { SwipeItemProps } from './interface';

const NS = 'fnx-swipe-item';
const bem = createBEM(NS);

const SwipeItem = forwardRef<HTMLDivElement, SwipeItemProps>(
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

SwipeItem.displayName = 'SwipeItem';

export default SwipeItem;
