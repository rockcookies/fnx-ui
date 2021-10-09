import React, { forwardRef } from 'react';
import CalendarContainer from './CalendarContainer';
import { CalendarProps } from './interface';

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
	({ defaultValue, onChange, onConfirm, onCancel, ...restProps }, ref) => {
		const handleCallback = (value: Date[], cb?: (v: Date) => any): any => {
			if (cb && value[0]) {
				return cb(value[0]);
			}
		};

		return (
			<CalendarContainer
				{...restProps}
				mode="single"
				defaultValue={defaultValue}
				onChange={(value) => {
					handleCallback(value, onChange);
				}}
				onConfirm={(value) => {
					handleCallback(value, onConfirm);
				}}
				onClose={onCancel}
				ref={ref}
			/>
		);
	},
);

Calendar.displayName = 'Calendar';

export default Calendar;
