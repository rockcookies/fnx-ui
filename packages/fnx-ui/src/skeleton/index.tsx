import React, { useCallback } from 'react';
import { addUnit, getSizeStyle } from '../utils/format';
import { createBEM } from '../utils/namespace';
import { createDefaultsFC } from '../utils/react';
import { SkeletonProps } from './interface';

const NS = 'fnx-skeleton';
const bem = createBEM(NS);

const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';

const Skeleton = createDefaultsFC<
	SkeletonProps,
	Required<
		Pick<
			SkeletonProps,
			'row' | 'rowWidth' | 'loading' | 'animate' | 'avatarShape'
		>
	>
>(
	'Skeleton',
	{
		row: 3,
		rowWidth: DEFAULT_ROW_WIDTH,
		loading: true,
		animate: true,
		avatarShape: 'round',
	},
	({
		row,
		rowWidth,
		loading,
		animate,
		avatarShape,
		// optionals
		title,
		round,
		avatar,
		avatarSize,
		titleWidth,
		children,
		...restProps
	}) => {
		const getRowWidth = useCallback(
			(index: number): number | string => {
				if (rowWidth === DEFAULT_ROW_WIDTH && index === row - 1) {
					return DEFAULT_LAST_ROW_WIDTH;
				}

				if (Array.isArray(rowWidth)) {
					return rowWidth[index];
				}

				return rowWidth;
			},
			[row, rowWidth],
		);

		if (!loading) {
			return <>{children}</>;
		}

		return (
			<div {...restProps} className={bem({ animate, round })}>
				{avatar && (
					<div
						className={bem('avatar', avatarShape)}
						style={getSizeStyle(avatarSize)}
					/>
				)}
				<div className={bem('content')}>
					{title && (
						<h3
							className={bem('title')}
							style={{ width: addUnit(titleWidth) }}
						/>
					)}

					{Array(row)
						.fill(0)
						.map((_, idx) => (
							<div
								className={bem('row')}
								key={idx}
								style={{ width: addUnit(getRowWidth(idx)) }}
							/>
						))}
				</div>
			</div>
		);
	},
);

export type { SkeletonComponentProps, SkeletonProps } from './interface';

export default Skeleton;
