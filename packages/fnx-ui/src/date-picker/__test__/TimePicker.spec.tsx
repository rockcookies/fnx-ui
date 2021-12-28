import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsReact from '../../../test/react';
import DatePicker from '../index';
import { TimePickerProps, TimePickerRef } from '../interface';

describe('<TimePicker/>', () => {
	const renderPicker = (props: TimePickerProps = {}) => {
		const ref = React.createRef<TimePickerRef>();

		const { container, getByTestId, rerender } = render(
			<DatePicker.TimePicker ref={ref} data-testid="picker" {...props} />,
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

	it('format initial value and trigger confirm and cancel event', () => {
		const onConfirm = jest.fn();
		const onCancel = jest.fn();

		const { confirm, cancel } = renderPicker({
			defaultValue: '11:59',
			minHour: 14,
			maxMinute: 50,
			onConfirm,
			onCancel,
		});

		act(() => {
			fireEvent.click(confirm);
			fireEvent.click(cancel);
		});

		expect(onConfirm).toHaveBeenCalledWith('14:00');
		expect(onCancel).toHaveBeenCalled();
	});

	it('filter and formatter prop', () => {
		const { container } = renderPicker({
			filter,
			formatter,
		});

		expect(container).toMatchSnapshot();
	});

	it('change event', async () => {
		const onChange = jest.fn();

		const { container } = renderPicker({
			defaultValue: '12:00',
			onChange,
		});

		const track = container.querySelectorAll('.fnx-picker-column');
		const columns = track[0].querySelectorAll('.fnx-picker-column__option');

		act(() => {
			fireEvent.click(columns[14]);
			jest.advanceTimersByTime(300);
		});

		expect(onChange).toHaveBeenCalledWith('14:00');
	});

	it('get value by timePickerRef', async () => {
		const defaultValue = new Date();
		defaultValue.setHours(10);
		defaultValue.setMinutes(6);

		const { ref, rerender } = renderPicker({
			defaultValue,
		});

		expect(TestsReact.mustGetRef(ref).getValue()).toEqual('10:06');

		rerender(<DatePicker.TimePicker ref={ref} maxHour={9} />);

		expect(TestsReact.mustGetRef(ref).getValue()).toEqual('09:06');
	});
});
