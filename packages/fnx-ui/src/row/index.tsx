import React, { CSSProperties, forwardRef } from 'react';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import RowContext from './context';
import { RowProps } from './interface';

const NS = 'fnx-row';
const bem = createBEM(NS);

const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
	const {
		justify,
		align,
		className,
		style,
		children,
		gutter = 0,
		...restProps
	} = props;

	const rowStyle: CSSProperties = {};

	if (gutter > 0) {
		rowStyle.marginRight = rowStyle.marginLeft = addUnit(gutter / -2);
	}

	return (
		<RowContext.Provider value={{ gutter }}>
			<div
				className={classnames(
					bem({
						[`align-${align}`]: align,
						[`justify-${justify}`]: justify,
					}),
					className,
				)}
				style={{ ...rowStyle, ...style }}
				{...restProps}
				ref={ref}
			>
				{children}
			</div>
		</RowContext.Provider>
	);
});

Row.displayName = 'Row';

export type {
	RowAlign,
	RowComponentProps,
	RowJustify,
	RowProps,
} from './interface';

export default Row;
