import React, { createElement, ReactNode } from 'react';
import configComponentProps from '../hooks/config-component-props';
import { Dictionary } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { CellProps } from './interface';

const NS = 'fnx-cell';
const bem = createBEM(NS);

const useProps = configComponentProps<
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
>({
	border: true,
	itemsAlign: 'top',
	clickable: false,
	titleProps: {},
	descriptionProps: {},
	contentProps: {},
	leftIconProps: {},
	rightIconProps: {},
});

const Cell = createForwardRef<HTMLDivElement, CellProps>(
	'Cell',
	(_props, ref) => {
		const [
			{
				border,
				itemsAlign,
				clickable,
				titleProps,
				descriptionProps,
				contentProps,
				leftIconProps,
				rightIconProps,
			},
			{
				title,
				description,
				content,
				leftIcon,
				rightIcon,
				className,
				children,
				...restProps
			},
		] = useProps(_props);

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
