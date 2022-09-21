import React, { forwardRef } from 'react';
import CalendarContainer from './CalendarContainer';
import { CalendarRangeProps, CalendarRangeRef } from './interface';

const CalendarRange = forwardRef<CalendarRangeRef, CalendarRangeProps>(
	(
		{
			defaultValue,
			onChange,
			onConfirm,
			onCancel,
			allowSameDay,
			maxSize,
			onMaxSize,
			...restProps
		},
		ref,
	) => {
		const handleCallback = (
			value: Date[],
			cb?: (v: Date[]) => any,
		): any => {
			if (cb) {
				return cb(value);
			}
		};

		return (
			<CalendarContainer
				{...restProps}
				mode="range"
				defaultValue={defaultValue}
				onChange={(value) => {
					handleCallback(value, onChange);
				}}
				onConfirm={(value) => {
					handleCallback(value, onConfirm);
				}}
				onClose={onCancel}
				rangeAllowSameDay={allowSameDay}
				rangeMaxSize={maxSize}
				onRangeMaxSize={onMaxSize}
				ref={ref}
			/>
		);
	},
);

CalendarRange.displayName = 'CalendarRange';

export default CalendarRange;
