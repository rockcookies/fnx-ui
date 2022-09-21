import React, { CSSProperties, forwardRef, useContext } from 'react';
import RowContext from '../row/context';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { ColProps } from './interface';

const NS = 'fnx-col';
const bem = createBEM(NS);

const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
	const { className, style, children, span, offset, ...restProps } = props;

	const { gutter } = useContext(RowContext);

	const colStyle: CSSProperties = {};

	if (gutter != null && gutter > 0) {
		colStyle.paddingRight = colStyle.paddingLeft = addUnit(gutter / 2);
	}

	return (
		<div
			className={classnames(
				bem({
					[`${span}`]: span,
					[`offset-${offset}`]: offset,
				}),
				className,
			)}
			style={{ ...colStyle, ...style }}
			{...restProps}
			ref={ref}
		>
			{children}
		</div>
	);
});

Col.displayName = 'Col';

export type { ColComponentProps, ColProps } from './interface';

export default Col;
