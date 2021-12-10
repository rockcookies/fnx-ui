import React, { createElement, ReactNode } from 'react';
import { Dictionary } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { CellProps } from './interface';

const NS = 'fnx-cell';
const bem = createBEM(NS);

const Cell = createDefaultsForwardRef<
	HTMLDivElement,
	CellProps,
	Required<
		Pick<
			CellProps,
			| 'border'
			| 'itemsAlign'
			| 'clickable'
			| 'titleProps'
			| 'descriptionProps'
			| 'contentProps'
			| 'leftIconProps'
			| 'rightIconProps'
		>
	>
>(
	'Cell',
	{
		border: true,
		itemsAlign: 'top',
		clickable: false,
		titleProps: {},
		descriptionProps: {},
		contentProps: {},
		leftIconProps: {},
		rightIconProps: {},
	},
	(
		{
			border,
			itemsAlign,
			clickable,
			titleProps,
			descriptionProps,
			contentProps,
			leftIconProps,
			rightIconProps,
			// optionals
			title,
			description,
			content,
			leftIcon,
			rightIcon,
			className,
			children,
			...restProps
		},
		ref,
	) => {
		const renderNode = (
			tag: string,
			className: string,
			props: Dictionary,
			node: ReactNode,
		): ReactNode => {
			if (node) {
				return createElement(
					tag,
					{
						...props,
						className: classnames(className, props.className),
					},
					node,
				);
			}
		};

		return (
			<div
				className={classnames(
					bem([
						`align-${itemsAlign}`,
						{ clickable, 'border-less': !border },
					]),
					className,
				)}
				role={clickable ? 'button' : undefined}
				tabIndex={clickable ? 0 : undefined}
				{...restProps}
				ref={ref}
			>
				{renderNode('span', bem('left-icon'), leftIconProps, leftIcon)}

				{(title || description) && (
					<div
						{...titleProps}
						className={classnames(
							bem('title'),
							titleProps.className,
						)}
					>
						{title}
						{renderNode(
							'div',
							bem('description'),
							descriptionProps,
							description,
						)}
					</div>
				)}

				{renderNode(
					'div',
					bem('content', { alone: !(title || description) }),
					contentProps,
					content || children,
				)}

				{renderNode(
					'span',
					bem('right-icon'),
					rightIconProps,
					rightIcon,
				)}
			</div>
		);
	},
);

export default Cell;
