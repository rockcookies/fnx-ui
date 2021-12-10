import React, { cloneElement, isValidElement } from 'react';
import { BORDER_TOP } from '../utils/constants';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef, toElementArray } from '../utils/react';
import { GridContext } from './context';
import { GridProps } from './interface';

const NS = 'fnx-grid';
const bem = createBEM(NS);

const Grid = createDefaultsForwardRef<
	HTMLDivElement,
	GridProps,
	Required<
		Pick<
			GridProps,
			'columnSize' | 'clickable' | 'gutter' | 'border' | 'square'
		>
	>
>(
	'Grid',
	{
		columnSize: 4,
		clickable: false,
		gutter: 0,
		border: true,
		square: false,
	},
	(
		{
			columnSize,
			clickable,
			gutter,
			border,
			square,
			// optionals
			className,
			children: _children,
			style,
			...restProps
		},
		ref,
	) => {
		const children = toElementArray(_children);

		return (
			<div
				className={classnames(
					bem(),
					border && gutter <= 0 ? BORDER_TOP : undefined,
					className,
				)}
				{...restProps}
				ref={ref}
				style={{ paddingLeft: addUnit(gutter), ...style }}
			>
				<GridContext.Provider
					value={{
						columnSize,
						clickable,
						gutter,
						border,
						square,
					}}
				>
					{children.map((child, idx) => {
						if (isValidElement<any>(child)) {
							return cloneElement(child, {
								key: child.key != null ? child.key : idx,
								...child.props,
								'data-fnx-grid-item-index': idx,
							});
						} else {
							return child;
						}
					})}
				</GridContext.Provider>
			</div>
		);
	},
);

export default Grid;
