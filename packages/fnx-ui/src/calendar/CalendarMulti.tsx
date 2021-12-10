import React from 'react';
import { createForwardRef } from '../utils/react';
import CalendarContainer from './CalendarContainer';
import { CalendarMultiProps } from './interface';

const CalendarMulti = createForwardRef<HTMLDivElement, CalendarMultiProps>(
	'CalendarMulti',
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

export default CalendarMulti;
