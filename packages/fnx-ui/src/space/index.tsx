import React, { FC } from 'react';
import configComponentProps from '../hooks/config-component-props';
import { classnames, createBEM } from '../utils/namespace';
import { toElementArray } from '../utils/react';
import { SpaceProps, SpaceSize } from './interface';

const NS = 'fnx-space';
const bem = createBEM(NS);

const DEFAULT_SIZE = '8px';

const useProps = configComponentProps<Required<Pick<SpaceProps, 'direction'>>>({
	direction: 'horizontal',
});

const parseSize = (size: string | number | undefined | null): string => {
	if (size == null) {
		return DEFAULT_SIZE;
	}

	return typeof size === 'number' ? `${size}px` : size;
};

const Space: FC<SpaceProps> = (_props) => {
	const [
		{ direction },
		{
			align,
			size: _size,
			wrap,
			fill,
			children: _children,
			className,
			...restProps
		},
	] = useProps(_props);

	const [horizontalSize, verticalSize] = React.useMemo(
		() =>
			(
				(Array.isArray(_size) ? _size : [_size, _size]) as [
					SpaceSize,
					SpaceSize,
				]
			).map((item) => parseSize(item)),
		[_size],
	);

	const children = toElementArray(_children);

	if (children.length <= 0) {
		return null;
	}

	return (
		<div
			className={classnames(
				bem({
					[direction]: true,
					[`align-${align}`]: direction === 'horizontal',
					wrap,
					fill,
				}),
				className,
			)}
			{...restProps}
		>
			{children.map((child, idx) => {
				const key = (child && child.key) || `${NS}-${idx}`;

				return (
					<div
						key={key}
						className={`${NS}-item`}
						style={
							idx === children.length - 1
								? {
										marginBottom: wrap
											? verticalSize
											: undefined,
								  }
								: {
										marginRight:
											direction === 'horizontal'
												? horizontalSize
												: undefined,
										marginBottom:
											direction === 'vertical' || wrap
												? verticalSize
												: undefined,
								  }
						}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
};

Space.displayName = 'Space';

export type {
	SpaceAlign,
	SpaceComponentProps,
	SpaceDirection,
	SpaceProps,
	SpaceSize,
} from './interface';

export default Space;
