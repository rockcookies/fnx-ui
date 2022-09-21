import React, { forwardRef } from 'react';
import { addUnit } from '../utils/format';
import { classnames } from '../utils/namespace';
import { bem, DEFAULT_SVG_PROPS } from './Icon';
import { IconSpinnerProps } from './interface';

const IconSpinner = forwardRef<HTMLSpanElement, IconSpinnerProps>(
	(props, ref) => {
		const { className, size, color, style, ...rest } = props;

		return (
			<span
				className={classnames(bem(), className)}
				{...rest}
				style={{ color, fontSize: addUnit(size), ...style }}
				ref={ref}
			>
				<svg
					{...DEFAULT_SVG_PROPS}
					viewBox="25 25 50 50"
					className={bem('spinner')}
				>
					<circle cx="50" cy="50" r="20" fill="none"></circle>
				</svg>
			</span>
		);
	},
);

IconSpinner.displayName = 'IconSpinner';

export default IconSpinner;
