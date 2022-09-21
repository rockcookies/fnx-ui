import React, { CSSProperties, forwardRef, useContext, useMemo } from 'react';
import useMergedProp from '../hooks/use-merged-prop';
import { BORDER } from '../utils/constants';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { GridContext } from './context';
import { GridItemProps } from './interface';

const NS = 'fnx-grid-item';
const bem = createBEM(NS);

const GridItem = forwardRef<HTMLDivElement, GridItemProps>((_props, ref) => {
	const {
		className,
		children,
		clickable: _clickable,
		square: _square,
		style,
		...restProps
	} = _props;

	const { gutter, columnSize, border, ...ctx } = useContext(GridContext);

	const clickable = useMergedProp<boolean>(false, _clickable, ctx.clickable);
	const square = useMergedProp<boolean>(false, _square, ctx.square);

	const index: number | undefined = (restProps as any)[
		'data-fnx-grid-item-index'
	];

	const gutterValue = useMemo(() => addUnit(gutter), [gutter]);

	const rootStyle = useMemo<CSSProperties>(() => {
		const formattedStyle: CSSProperties = {
			flexBasis: columnSize != null ? `${100 / columnSize}%` : undefined,
			paddingRight: gutterValue,
			marginTop:
				index != null && columnSize != null && index >= columnSize
					? gutterValue
					: undefined,
		};

		return formattedStyle;
	}, [columnSize, gutterValue, index]);

	const contentStyle = useMemo<CSSProperties>(() => {
		if (square && gutterValue != null) {
			return { width: `calc(100% - ${gutterValue})` };
		}

		return { right: 0 };
	}, [gutterValue, square]);

	return (
		<div className={bem({ square })} style={rootStyle} ref={ref}>
			<div
				role={clickable ? 'button' : undefined}
				className={classnames(
					bem('content', {
						clickable,
						square,
						surround: border && gutter,
					}),
					border ? BORDER : undefined,
					className,
				)}
				style={{
					...contentStyle,
					...style,
				}}
				{...restProps}
			>
				{children}
			</div>
		</div>
	);
});

GridItem.displayName = 'GridItem';

export default GridItem;
