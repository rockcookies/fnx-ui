import React, { forwardRef, CSSProperties } from 'react';
import { noop } from '../utils/misc';
import { classnames } from '../utils/namespace';
import { CalendarDayProps } from './interface';
import { _bem as bem } from './utils';

const CalendarDay = forwardRef<HTMLDivElement, CalendarDayProps>(
	(props, ref) => {
		const {
			color,
			dayHeight,
			date,
			content,
			type,
			topInfo,
			bottomInfo,
			style,
			className,
			onClick,
			...restProps
		} = props;

		const formatStyle = (): CSSProperties | undefined => {
			const formattedStyle: CSSProperties = {
				height: dayHeight,
			};

			if (color) {
				switch (type) {
					case 'selected':
					case 'end':
					case 'start':
					case 'start-end':
					case 'multiple-middle':
					case 'multiple-selected':
						formattedStyle.background = color;
						break;
					case 'middle':
						formattedStyle.color = color;
						break;
				}
			}

			return {
				...formattedStyle,
				...style,
			};
		};

		return (
			<div
				className={classnames(bem('day', type), className)}
				{...restProps}
				onClick={type === 'disabled' ? noop : onClick}
				style={formatStyle()}
				ref={ref}
			>
				{topInfo && <div className={bem('top-info')}>{topInfo}</div>}
				{content || date.getDate()}
				{bottomInfo && (
					<div className={bem('bottom-info')}>{bottomInfo}</div>
				)}
			</div>
		);
	},
);

CalendarDay.displayName = 'CalendarDay';

export default CalendarDay;
