import React, {
	forwardRef,
	ForwardRefExoticComponent,
	RefAttributes,
} from 'react';
import { classnames, createBEM } from '../utils/namespace';
import useProps from '../hooks/use-props';
import { CellGroupProps } from './interface';
import { BORDER_TOP_BOTTOM } from '../utils/constants';

const NS = 'fnx-cell-group';
const bem = createBEM(NS);

type RequiredCellProps = Required<
	Pick<CellGroupProps, 'title' | 'insert' | 'border' | 'bodyProps'>
>;

const DEFAULT_PROPS: RequiredCellProps = {
	border: true,
	insert: false,
	title: null,
	bodyProps: {},
};

const CellGroup: ForwardRefExoticComponent<
	CellGroupProps & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, CellGroupProps>((props, ref) => {
	const [
		{ title, border, insert, bodyProps },
		{ className, children, ...restProps },
	] = useProps<RequiredCellProps, CellGroupProps>(DEFAULT_PROPS, props);

	return (
		<div {...restProps} className={classnames(bem(), className)} ref={ref}>
			{title && <div className={bem('title', { insert })}>{title}</div>}
			<div
				{...bodyProps}
				className={classnames(
					bem('body'),
					border && !insert && BORDER_TOP_BOTTOM,
					bodyProps.className,
				)}
			>
				{children}
			</div>
		</div>
	);
});

CellGroup.displayName = 'CellGroup';

export default CellGroup;
