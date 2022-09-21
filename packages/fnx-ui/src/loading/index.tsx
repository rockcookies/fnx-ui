import React, { CSSProperties, forwardRef } from 'react';
import Icon from '../icon';
import { addUnit } from '../utils/format';
import { classnames, createBEM } from '../utils/namespace';
import { LoadingProps } from './interface';

const NS = 'fnx-loading';
const bem = createBEM(NS);

const Loading = forwardRef<HTMLSpanElement, LoadingProps>((props, ref) => {
	const {
		vertical,
		size,
		color,
		text,
		textColor,
		textSize,
		className,
		style,
		children,
		...restProps
	} = props;

	const formatStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {};

		if (color != null) {
			formattedStyle.color = color;
		}

		return { ...formattedStyle, ...style };
	};

	return (
		<span
			className={classnames(bem({ vertical }), className)}
			style={formatStyle()}
			aria-live="polite"
			aria-busy={true}
			{...restProps}
			ref={ref}
		>
			<Icon.Spinner size={size} />

			{(text || children) && (
				<span
					className={bem('text')}
					style={{
						color: color || textColor,
						fontSize: addUnit(textSize),
					}}
				>
					{text || children}
				</span>
			)}
		</span>
	);
});

Loading.displayName = 'Loading';

export type { LoadingProps } from './interface';

export default Loading;
