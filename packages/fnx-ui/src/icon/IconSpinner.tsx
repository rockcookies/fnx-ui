import React from 'react';
import { addUnit } from '../utils/format';
import { classnames } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { bem, DEFAULT_SVG_PROPS } from './Icon';
import { IconSpinnerProps } from './interface';

const IconSpinner = createForwardRef<HTMLSpanElement, IconSpinnerProps>(
	'IconSpinner',
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

export default IconSpinner;
