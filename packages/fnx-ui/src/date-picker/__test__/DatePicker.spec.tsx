import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvents from '../../../test/events';
import DatePicker from '../index';
import { DatePickerProps, DatePickerRef } from '../interface';

describe('<DatePicker/>', () => {
	const renderDatePicker = (props: DatePickerProps = {}) => {
		const ref = React.createRef<DatePickerRef>();

		const { container, getByTestId, rerender } = render(
			<DatePicker
				ref={ref}
				data-testid="dateTimePicker"
				{...props}
			></DatePicker>,
		);

		const confirm = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__confirm',
		);

		const cancel = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__cancel',
		);

		return {
			container,
			getByTestId,
			rerender,
			ref,
			confirm,
			cancel,
		};
	};

	const filter = (type: string, options: number[]) => {
		const mod = type === 'minute' ? 10 : 5;
		return options.filter((option) => option % mod === 0);
	};

	function formatter(type: string, value: string) {
		if (type === 'month') {
			return `${value}月`;
		}

		return `${value} ${type}`;
	}

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('year-month type and change、cancel、confirm event', async () => {
		const date = new Date(2020, 10, 1, 0, 0);

		const onConfirm = jest.fn();
		const onCancel = jest.fn();
		const onChange = jest.fn();

		const { container, confirm, cancel } = renderDatePicker({
			columnsLayout: 'year,month',
			defaultValue: date,
			minDate: new Date(2020, 0, 1),
			maxDate: new Date(2025, 10, 1),
			onConfirm,
			onCancel,
			onChange,
		});

		act(() => {
			fireEvent.click(confirm);
		});

		expect(onConfirm).toHaveBeenCalledWith(new Date(2020, 10, 1, 0, 0));

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker-column',
		);

		await TestsEvents.triggerDrag(track, [0, -300]);

		act(() => {
			jest.advanceTimersByTime(300);
			fireEvent.click(cancel);
		});

		expect(onChange).toHaveBeenCalledWith(new Date(2025, 10, 1, 0, 0));
		expect(onCancel).toHaveBeenCalledWith(new Date(2025, 10, 1, 0, 0));
	});

	it('month-day type and set maxDate', () => {
		const date = new Date('2026/10/1');

		const onConfirm = jest.fn();

		const { confirm } = renderDatePicker({
			columnsLayout: 'month,day',
			defaultValue: date,
			minDate: new Date('2020/1/1'),
			maxDate: new Date('2025/10/1'),
			onConfirm,
		});

		act(() => {
			fireEvent.click(confirm);
		});

		expect(onConfirm).toHaveBeenCalledWith(new Date('2025/10/1'));
	});

	it('day,hour type and set minDate、maxDate', () => {
		const date = new Date('2019/10/1 14:00');

		const onConfirm = jest.fn();
		const onChange = jest.fn();

		const { confirm } = renderDatePicker({
			columnsLayout: 'day,hour',
			defaultValue: date,
			minDate: new Date('2019/10/1 15:00'),
			onConfirm,
			onChange,
		});

		act(() => {
			fireEvent.click(confirm);
		});

		expect(onConfirm).toHaveBeenCalledWith(new Date('2019/10/1 15:00'));
	});

	it('formatter、filter prop', () => {
		const { container } = renderDatePicker({
			columnsLayout: 'month,day,year',
			defaultValue: new Date('2021/6/8'),
			formatter,
			filter,
		});

		expect(container).toMatchSnapshot();
	});

	it('get value by datePickerRef', () => {
		const { ref } = renderDatePicker({
			defaultValue: new Date('2021/6/8'),
		});

		ref.current &&
			expect(ref.current.getValue()).toEqual(new Date('2021/6/8'));
	});
});
