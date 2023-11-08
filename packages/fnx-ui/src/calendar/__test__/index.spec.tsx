/* eslint-disable @typescript-eslint/no-empty-function */
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import Calendar from '../index';
import { CalendarDayComponentProps } from '../interface';
import { ElementRect } from '../../utils/interface';

describe('<Calendar/>', () => {
	const mockGetBoundingClientRect = (
		rect: Partial<ElementRect>,
	): (() => void) => {
		const originMethod = Element.prototype.getBoundingClientRect;

		Element.prototype.getBoundingClientRect = jest.fn(
			() =>
				({
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: 0,
					height: 0,
					...rect,
				}) as any,
		);

		return function () {
			Element.prototype.getBoundingClientRect = originMethod;
		};
	};

	const dayFormatter = (day: CalendarDayComponentProps) => {
		day = { ...day };

		const month = day.date.getMonth() + 1;
		const date = day.date.getDate();

		if (month === 5) {
			if (date === 1) {
				day.topInfo = 'Labour Day';
			} else if (date === 4) {
				day.topInfo = 'Youth Day';
			} else if (date === 11) {
				day.content = 'today';
			}
		}

		return day;
	};

	let eachClears: Array<() => void> = [];

	beforeEach(() => {
		const clear = mockGetBoundingClientRect({
			width: 100,
			height: 100,
		});
		eachClears.push(clear);
	});

	afterEach(() => {
		eachClears.forEach((clear) => clear());
		eachClears = [];
	});

	it('set defaultValue and trigger select event when type is single', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Calendar onChange={onChange} defaultValue={new Date()} />,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');

		const today = new Date().getDate();

		const selectedDay = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--selected',
		);

		expect(selectedDay.innerHTML).toEqual(`${today}`);

		fireEvent.click(days[today + 2]);
		expect(onChange).toHaveBeenCalled();
	});

	it('title、color props', () => {
		const { container } = render(
			<Calendar
				title={<p>123</p>}
				color="red"
				defaultValue={new Date()}
			/>,
		);
		const title = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__header-title',
		);
		const selectedDay = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--selected',
		);

		expect(title.innerHTML).toEqual('<p>123</p>');
		expect(selectedDay.getAttribute('style')).toEqual('background: red;');
	});

	it('minDate、maxDate props', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Calendar
				minDate={new Date('2021/9/18')}
				defaultValue={new Date('2021/9/15')}
				maxDate={new Date('2021/9/20')}
				onChange={onChange}
			/>,
		);
		const selectedDay = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--selected',
		);

		expect(selectedDay.innerHTML).toEqual('18');

		const days = container.querySelectorAll('.fnx-calendar__days-cell');

		fireEvent.click(days[16]);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(days[21]);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(days[19]);
		expect(onChange).toHaveBeenCalledWith(new Date('2021/09/20'));
	});

	it('readonly、confirmText、confirmDisabledText、closeIcon props and trigger close event', () => {
		const onChange = jest.fn();
		const onConfirm = jest.fn();
		const onCancel = jest.fn();

		const { container, rerender } = render(
			<Calendar
				readonly={true}
				confirmText={'defineConfirm'}
				confirmDisabledText="disableDefineConfirm"
				closeIcon="defineClose"
				onChange={onChange}
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');
		const confirmBtn = TestsDOM.mustQuerySelector(container, '.fnx-button');
		const closeIcon = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__close-icon',
		);

		fireEvent.click(days[16]);
		expect(onChange).not.toHaveBeenCalled();
		expect(confirmBtn.querySelector('.fnx-button__text').innerHTML).toEqual(
			'disableDefineConfirm',
		);
		expect(closeIcon.innerHTML).toEqual('defineClose');
		fireEvent.click(confirmBtn);
		expect(onConfirm).not.toHaveBeenCalled();

		rerender(
			<Calendar
				readonly={false}
				onChange={onChange}
				onConfirm={onConfirm}
				onCancel={onCancel}
			/>,
		);
		fireEvent.click(confirmBtn);
		expect(onConfirm).not.toHaveBeenCalled();
		const today = new Date();
		fireEvent.click(days[today.getDate() + 2]);
		expect(onChange).toHaveBeenCalled();
		fireEvent.click(confirmBtn);
		const dateString = `${today.getFullYear()}/${today.getMonth() + 1}/${
			today.getDate() + 3
		}`;
		expect(onConfirm).toHaveBeenCalledWith(new Date(dateString));

		fireEvent.click(closeIcon);
		expect(onCancel).toHaveBeenCalled();
	});

	it('slots、firstDayOfWeek props', () => {
		const { container } = render(
			<Calendar.Range
				minDate="2010-5-1"
				maxDate="2010-5-31"
				slots={{
					day: (day) => <Calendar.Day {...dayFormatter(day)} />,
				}}
				firstDayOfWeek={7}
			/>,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');
		const weekdays = container.querySelectorAll('.fnx-calendar__weekday');

		expect(
			days[0].querySelector('.fnx-calendar__top-info').innerHTML,
		).toEqual('Labour Day');
		expect(weekdays[0].innerHTML).toEqual('Sat');
	});

	//----------Range---------
	it('set defaultValue、minDate、maxDate and trigger select event when type is range', () => {
		const onChange = jest.fn();
		const onConfirm = jest.fn();

		const { container } = render(
			<Calendar.Range
				minDate={new Date('2020/09/11')}
				maxDate={new Date('2020/09/30')}
				defaultValue={['2020/09/02']}
				color="red"
				onConfirm={onConfirm}
				onChange={onChange}
			/>,
		);

		const startDay = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--start',
		);
		const endDay = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--end',
		);

		expect(startDay.innerHTML).toContain('11');
		expect(endDay.innerHTML).toContain('30');

		const { container: container2 } = render(
			<Calendar.Range
				minDate={new Date('2021/09/11')}
				maxDate={new Date('2021/09/30')}
				defaultValue={['2021/09/21', '2021/09/02']}
				color="red"
				onConfirm={onConfirm}
				onChange={onChange}
			/>,
		);

		const _startDay = TestsDOM.mustQuerySelector(
			container2,
			'.fnx-calendar__day--start',
		);
		const _endDay = TestsDOM.mustQuerySelector(
			container2,
			'.fnx-calendar__day--end',
		);

		expect(_startDay.innerHTML).toContain('11');
		expect(_endDay.innerHTML).toContain('21');

		const days = container2.querySelectorAll('.fnx-calendar__days-cell');
		const confirmBtn = TestsDOM.mustQuerySelector(
			container2,
			'.fnx-button',
		);

		fireEvent.click(confirmBtn);
		expect(onConfirm).toHaveBeenCalledWith([
			new Date('2021/09/11'),
			new Date('2021/09/21'),
		]);

		fireEvent.click(days[14]);
		expect(onChange).not.toHaveBeenCalled();
		fireEvent.click(days[12]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/13'),
			new Date('2021/09/15'),
		]);
	});

	it('allowSameDay prop', () => {
		const onChange = jest.fn();
		const onConfirm = jest.fn();

		const { container } = render(
			<Calendar.Range
				minDate={new Date('2021/09/01')}
				maxDate={new Date('2021/09/30')}
				allowSameDay={true}
				onConfirm={onConfirm}
				onChange={onChange}
			/>,
		);
		const days = container.querySelectorAll('.fnx-calendar__days-cell');
		const confirmBtn = TestsDOM.mustQuerySelector(container, '.fnx-button');

		fireEvent.click(days[2]);
		fireEvent.click(days[2]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/03'),
			new Date('2021/09/03'),
		]);
		fireEvent.click(confirmBtn);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/03'),
			new Date('2021/09/03'),
		]);
	});

	it('maxSize、onMaxSize prop', () => {
		const onChange = jest.fn();
		const onMaxSize = jest.fn();

		const { container } = render(
			<Calendar.Range
				minDate={new Date('2021/09/01')}
				maxDate={new Date('2021/09/30')}
				defaultValue={['2021/09/10', '2021/09/15']}
				maxSize={3}
				onMaxSize={onMaxSize}
				onChange={onChange}
			/>,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');
		const maxDate = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__day--end',
		);

		expect(maxDate.innerHTML).toContain('12');

		fireEvent.click(days[2]);
		fireEvent.click(days[6]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/03'),
			new Date('2021/09/05'),
		]);
		expect(onMaxSize).toHaveBeenCalled();
	});

	// ---multi----
	it('set defaultValue、minDate、maxDate and trigger select event when type is multi', () => {
		const onChange = jest.fn();
		const onConfirm = jest.fn();

		const { container } = render(
			<Calendar.Multi
				minDate={new Date('2021/09/05')}
				maxDate={new Date('2021/09/30')}
				defaultValue={[
					'2021/09/21',
					'2021/09/19',
					'2021/08/18',
					'2021/08/17',
					'2021/10/02',
				]}
				onConfirm={onConfirm}
				onChange={onChange}
			/>,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');
		const confirmBtn = TestsDOM.mustQuerySelector(container, '.fnx-button');

		const selectedDays = container.querySelectorAll(
			'.fnx-calendar__day--multiple-selected',
		);
		expect(selectedDays.length).toBe(4);

		fireEvent.click(days[1]);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(days[19]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/21'),
			new Date('2021/09/19'),
			new Date('2021/09/05'),
			new Date('2021/09/30'),
			new Date('2021/09/20'),
		]);

		fireEvent.click(days[18]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/21'),
			new Date('2021/09/05'),
			new Date('2021/09/30'),
			new Date('2021/09/20'),
		]);

		fireEvent.click(confirmBtn);
		expect(onConfirm).toHaveBeenCalledWith([
			new Date('2021/09/21'),
			new Date('2021/09/05'),
			new Date('2021/09/30'),
			new Date('2021/09/20'),
		]);
	});

	it('maxSize、onMaxSize', () => {
		const onChange = jest.fn();
		const onMaxSize = jest.fn();

		const { container } = render(
			<Calendar.Multi
				minDate={new Date('2021/09/05')}
				maxDate={new Date('2021/09/30')}
				defaultValue={['2021/09/21', '2021/09/19', '2021/09/18']}
				maxSize={2}
				onMaxSize={onMaxSize}
				onChange={onChange}
			/>,
		);

		const days = container.querySelectorAll('.fnx-calendar__days-cell');

		const selectedDays = container.querySelectorAll(
			'.fnx-calendar__day--multiple-selected',
		);
		expect(selectedDays.length).toBe(2);

		fireEvent.click(days[23]);
		expect(onChange).not.toHaveBeenCalled();
		expect(onMaxSize).toHaveBeenCalled();

		fireEvent.click(days[20]);
		expect(onChange).toHaveBeenCalledWith([new Date('2021/09/19')]);

		fireEvent.click(days[20]);
		expect(onChange).toHaveBeenCalledWith([
			new Date('2021/09/19'),
			new Date('2021/09/21'),
		]);
	});

	it('should exchange title when scroll', async () => {
		const { container } = render(
			<Calendar.Multi
				minDate={new Date('2021/09/05')}
				maxDate={new Date('2021/12/30')}
				defaultValue={['2021/09/30']}
			/>,
		);
		const calendarBody = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__body',
		);

		const subTitle = TestsDOM.mustQuerySelector(
			container,
			'.fnx-calendar__header-subtitle',
		);
		expect(subTitle.innerHTML).toEqual('2021/9');

		await waitFor(() => {
			fireEvent.scroll(calendarBody, { target: { scrollTop: 102 } });
		});

		expect(subTitle.innerHTML).toEqual('2021/10');
	});
});
