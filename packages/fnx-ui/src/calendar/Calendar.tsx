import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import CalendarContainer from './CalendarContainer';
import { CalendarContainerRef, CalendarProps, CalendarRef } from './interface';

const Calendar = forwardRef<CalendarRef, CalendarProps>(
	({ defaultValue, onChange, onConfirm, onCancel, ...restProps }, ref) => {
		const containerRef = useRef<CalendarContainerRef>(null);

		const handleCallback = (value: Date[], cb?: (v: Date) => any): any => {
			if (cb && value[0]) {
				return cb(value[0]);
			}
		};

		useImperativeHandle<CalendarRef, CalendarRef>(ref, () => {
			return {
				element: containerRef.current?.element || null,
				reset: () => containerRef.current?.reset(),
				getValue: () => {
					const value = containerRef.current?.getValue();
					return value && value[0];
				},
			};
		});

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
				ref={containerRef}
			/>
		);
	},
);

Calendar.displayName = 'Calendar';

export default Calendar;
