import React from 'react';
import { createForwardRef } from '../utils/react';
import CalendarContainer from './CalendarContainer';
import { CalendarProps } from './interface';

const Calendar = createForwardRef<HTMLDivElement, CalendarProps>(
	'Calendar',
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

export default Calendar;
