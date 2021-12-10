import React, { useImperativeHandle, useMemo, useRef } from 'react';
import useCreation from '../hooks/use-creation';
import { isDate } from '../utils/detect';
import { padZero } from '../utils/format';
import { createDefaultsForwardRef } from '../utils/react';
import DatePicker from './DatePicker';
import { DatePickerRef, TimePickerProps, TimePickerRef } from './interface';

const TimePicker = createDefaultsForwardRef<
	TimePickerRef,
	TimePickerProps,
	Required<
		Pick<
			TimePickerProps,
			| 'minHour'
			| 'maxHour'
			| 'minMinute'
			| 'maxMinute'
			| 'filter'
			| 'formatter'
		>
	>
>(
	'TimePicker',
	{
		minHour: 0,
		maxHour: 23,
		minMinute: 0,
		maxMinute: 59,
		filter: (_, v) => v,
		formatter: (_, v) => v,
	},
	(
		{
			minHour,
			maxHour,
			minMinute,
			maxMinute,
			formatter,
			filter,
			// optionals
			defaultValue: _defaultValue,
			onChange,
			onConfirm,
			onCancel,
			...restProps
		},
		ref,
	) => {
		const pickerRef = useRef<DatePickerRef>(null);

		const rootRef = useMemo<TimePickerRef>(
			() => ({
				root: (pickerRef.current && pickerRef.current.root) || null,
				getValue: () => {
					const dateValue =
						pickerRef.current && pickerRef.current.getValue();

					if (isDate(dateValue)) {
						return `${padZero(dateValue.getHours())}:${padZero(
							dateValue.getMinutes(),
						)}`;
					}
				},
			}),
			[],
		);

		useImperativeHandle<TimePickerRef, TimePickerRef>(ref, () => rootRef, [
			rootRef,
		]);

		const defaultValue = useCreation<Date>(() => {
			let hour = 0;
			let minute = 0;

			if (typeof _defaultValue === 'string') {
				const [h, m] = _defaultValue.split(':');

				hour = +h;
				minute = +m;
			} else if (isDate(_defaultValue)) {
				hour = _defaultValue.getHours();
				minute = _defaultValue.getMinutes();
			}

			return new Date(0, 0, 0, hour, minute);
		}, []);

		const minDate = useMemo(
			() => new Date(0, 0, 0, minHour, minMinute),
			[minHour, minMinute],
		);

		const maxDate = useMemo(
			() => new Date(0, 0, 0, maxHour, maxMinute),
			[maxHour, maxMinute],
		);

		const emit = (listener?: (v?: string) => void) => {
			const value = rootRef.getValue();
			listener && listener(value);
		};

		return (
			<DatePicker
				ref={pickerRef}
				columnsLayout="hour,minute"
				defaultValue={defaultValue}
				minDate={minDate}
				maxDate={maxDate}
				onChange={() => emit(onChange)}
				onCancel={() => emit(onCancel)}
				onConfirm={() => emit(onConfirm)}
				formatter={formatter}
				filter={filter}
				{...restProps}
			></DatePicker>
		);
	},
);

export default TimePicker;
