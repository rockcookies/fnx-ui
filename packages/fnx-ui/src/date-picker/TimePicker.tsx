import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import configComponentProps from '../hooks/config-component-props';
import useCreation from '../hooks/use-creation';
import { isDate } from '../utils/detect';
import { padZero } from '../utils/format';
import DatePicker from './DatePicker';
import { DatePickerRef, TimePickerProps, TimePickerRef } from './interface';

const useProps = configComponentProps<
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
>({
	minHour: 0,
	maxHour: 23,
	minMinute: 0,
	maxMinute: 59,
	filter: (_, v) => v,
	formatter: (_, v) => v,
});

const formatValue = (date: Date) =>
	`${padZero(date.getHours())}:${padZero(date.getMinutes())}`;

const TimePicker = forwardRef<TimePickerRef, TimePickerProps>((_props, ref) => {
	const [
		{ minHour, maxHour, minMinute, maxMinute, formatter, filter },
		{
			defaultValue: _defaultValue,
			onChange,
			onConfirm,
			onCancel,
			...restProps
		},
	] = useProps(_props);

	const pickerRef = useRef<DatePickerRef>(null);

	const rootRef = useMemo<TimePickerRef>(
		() => ({
			root: pickerRef.current?.root || null,
			getValue: () => {
				const dateValue = pickerRef.current?.getValue();
				return isDate(dateValue) ? formatValue(dateValue) : '';
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

	const emit = (date: Date, listener?: (v: string) => void) => {
		listener && listener(formatValue(date));
	};

	return (
		<DatePicker
			ref={pickerRef}
			columnsLayout="hour,minute"
			defaultValue={defaultValue}
			minDate={minDate}
			maxDate={maxDate}
			onChange={(value) => emit(value, onChange)}
			onConfirm={(value) => emit(value, onConfirm)}
			onCancel={onCancel}
			formatter={formatter}
			filter={filter}
			{...restProps}
		></DatePicker>
	);
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
