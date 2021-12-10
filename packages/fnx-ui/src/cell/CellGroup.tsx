import React from 'react';
import { BORDER_TOP_BOTTOM } from '../utils/constants';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { CellGroupProps } from './interface';

const NS = 'fnx-cell-group';
const bem = createBEM(NS);

const CellGroup = createDefaultsForwardRef<
	HTMLDivElement,
	CellGroupProps,
	Required<Pick<CellGroupProps, 'title' | 'inset' | 'border' | 'bodyProps'>>
>(
	'CellGroup',
	{
		border: true,
		inset: false,
		title: null,
		bodyProps: {},
	},
	(
		{
			title,
			border,
			inset,
			bodyProps,
			// optionals
			className,
			children,
			...restProps
		},
		ref,
	) => {
		return (
			<div
				{...restProps}
				className={classnames(bem(), className)}
				ref={ref}
			>
				{title && (
					<div className={bem('title', { inset })}>{title}</div>
				)}
				<div
					{...bodyProps}
					className={classnames(
						bem('body', { inset }),
						border && !inset && BORDER_TOP_BOTTOM,
						bodyProps.className,
					)}
				>
					{children}
				</div>
			</div>
		);
	},
);

export default CellGroup;
