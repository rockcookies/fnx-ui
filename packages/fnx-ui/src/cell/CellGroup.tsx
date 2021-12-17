import React from 'react';
import configComponentProps from '../hooks/config-component-props';
import { BORDER_TOP_BOTTOM } from '../utils/constants';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { CellGroupProps } from './interface';

const NS = 'fnx-cell-group';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<Pick<CellGroupProps, 'title' | 'inset' | 'border' | 'bodyProps'>>
>({
	border: true,
	inset: false,
	title: null,
	bodyProps: {},
});

const CellGroup = createForwardRef<HTMLDivElement, CellGroupProps>(
	'CellGroup',
	(_props, ref) => {
		const [
			{ title, border, inset, bodyProps },
			{ className, children, ...restProps },
		] = useProps(_props);

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
