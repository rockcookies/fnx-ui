import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import useCreation from '../hooks/use-creation';
import useProps from '../hooks/use-props';
import { isDate } from '../utils/detect';
import { padZero } from '../utils/format';
import DatePicker from './DatePicker';
import { DatePickerRef, TimePickerProps, TimePickerRef } from './interface';

type TimePickerRequiredProps = Required<
	Pick<
		TimePickerProps,
		| 'minHour'
		| 'maxHour'
		| 'minMinute'
		| 'maxMinute'
		| 'filter'
		| 'formatter'
	>
>;

const DEFAULT_PROPS: TimePickerRequiredProps = {
	minHour: 0,
	maxHour: 23,
	minMinute: 0,
	maxMinute: 59,
	filter: (_, v) => v,
	formatter: (_, v) => v,
};

const TimePicker = forwardRef<TimePickerRef, TimePickerProps>((_props, ref) => {
	const [
		props,
		{
			defaultValue: _defaultValue,
			onChange,
			onConfirm,
			onCancel,
			...restProps
		},
	] = useProps<TimePickerRequiredProps, TimePickerProps>(
		DEFAULT_PROPS,
		_props,
	);

	const { minHour, maxHour, minMinute, maxMinute } = props;

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
			formatter={props.formatter}
			filter={props.filter}
			{...restProps}
		></DatePicker>
	);
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;
