import React, { forwardRef } from 'react';
import CalendarContainer from './CalendarContainer';
import { CalendarMultiProps, CalendarRef } from './interface';

const CalendarMulti = forwardRef<CalendarRef, CalendarMultiProps>(
	(
		{
			defaultValue,
			onChange,
			onConfirm,
			onCancel,
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
				mode="multiple"
				defaultValue={defaultValue}
				onChange={(value) => {
					handleCallback(value, onChange);
				}}
				onConfirm={(value) => {
					handleCallback(value, onConfirm);
				}}
				onClose={onCancel}
				multiMaxSize={maxSize}
				onMultiMaxSize={onMaxSize}
				ref={ref}
			/>
		);
	},
);

CalendarMulti.displayName = 'CalendarMulti';

export default CalendarMulti;
