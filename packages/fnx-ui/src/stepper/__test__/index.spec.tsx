import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import Stepper from '../index';
import { StepperProps } from '../interface';

describe('<Stepper/>', () => {
	const renderFn = (props: StepperProps) => {
		const { container, rerender } = render(<Stepper {...props} />);

		const minusBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-stepper__minus',
		);
		const plusBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-stepper__plus',
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'.fnx-stepper__input',
		);

		return {
			container,
			rerender,
			minusBtn,
			plusBtn,
			input,
			changeValue: (value: string) => {
				act(() => {
					fireEvent.focus(input);
					jest.advanceTimersByTime(1000);
				});

				fireEvent.change(input, { target: { value } });

				act(() => {
					fireEvent.blur(input);
					jest.advanceTimersByTime(1000);
				});
			},
		};
	};

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('should disable buttons and input when using disabled prop', () => {
		const { container } = renderFn({
			disabled: true,
		});

		expect(container).toMatchSnapshot();
	});

	it('should make input readonly when using disable-input prop', () => {
		const { input } = renderFn({ disableInput: true });

		expect(input.getAttribute('readonly')).not.toBeNull();
	});

	it('should emit onStep event when clicking the minus/plus button', () => {
		const onStep = jest.fn();

		const { minusBtn, plusBtn, rerender } = renderFn({
			defaultValue: 3,
			onStep,
			disableMinus: true,
			disablePlus: true,
		});

		fireEvent.click(minusBtn);
		expect(onStep).not.toHaveBeenCalled();

		fireEvent.click(plusBtn);
		expect(onStep).not.toHaveBeenCalled();

		rerender(<Stepper defaultValue={3} onStep={onStep}></Stepper>);

		fireEvent.click(minusBtn);
		expect(onStep).toHaveBeenCalledWith('2', { offset: -1, type: 'minus' });

		fireEvent.click(plusBtn);
		expect(onStep).toHaveBeenCalledWith('3', { offset: 1, type: 'plus' });
	});

	test('should disable plus button when disable-plus prop is true', async () => {
		const { plusBtn, rerender } = renderFn({
			disablePlus: false,
		});

		expect(plusBtn.classList).not.toContain('fnx-stepper__plus--disabled');

		rerender(<Stepper disablePlus />);

		expect(plusBtn.classList).toContain('fnx-stepper__plus--disabled');
	});

	test('should disable minus button when disable-minus prop is true', async () => {
		const { minusBtn, rerender } = renderFn({
			disableMinus: false,
		});

		expect(minusBtn.classList).not.toContain(
			'fnx-stepper__minus--disabled',
		);

		rerender(<Stepper disableMinus />);

		expect(minusBtn.classList).toContain('fnx-stepper__minus--disabled');
	});

	test('should limit max value when using max prop', async () => {
		const onChange = jest.fn();

		const { plusBtn, minusBtn } = renderFn({
			max: 2,
			defaultValue: 1,
			onChange,
			mode: 'number',
		});

		fireEvent.click(plusBtn);
		fireEvent.click(plusBtn);
		fireEvent.click(minusBtn);
		fireEvent.click(minusBtn);

		expect(onChange).toHaveBeenNthCalledWith(1, 2);
		expect(onChange).toHaveBeenNthCalledWith(2, 1);
		expect(onChange).toHaveBeenNthCalledWith(3, 0);
	});

	test('should update value after long pressing', async () => {
		const onChange = jest.fn();

		const { minusBtn, plusBtn } = renderFn({
			defaultValue: 3,
			onChange,
		});

		fireEvent.touchStart(plusBtn);

		act(() => {
			jest.advanceTimersByTime(1600);
		});

		fireEvent.touchEnd(plusBtn);

		expect(onChange).toHaveBeenLastCalledWith('4');

		fireEvent.touchStart(minusBtn);
		act(() => {
			jest.advanceTimersByTime(1200);
		});
		fireEvent.touchEnd(minusBtn);

		expect(onChange).toHaveBeenLastCalledWith('3');
	});

	test('should allow to disable long press', async () => {
		const onChange = jest.fn();

		const { minusBtn, plusBtn } = renderFn({
			onChange,
			longPress: false,
		});

		fireEvent.touchStart(plusBtn);
		act(() => {
			jest.advanceTimersByTime(1000);
			fireEvent.touchEnd(plusBtn);
		});

		fireEvent.touchStart(minusBtn);
		act(() => {
			jest.advanceTimersByTime(1200);
			fireEvent.touchEnd(minusBtn);
		});

		expect(onChange).toHaveBeenCalledTimes(0);
	});

	it('should format it after on blur', async () => {
		const onChange = jest.fn();

		const { changeValue } = renderFn({
			onChange,
			max: 5,
		});

		changeValue('44');

		expect(onChange).toHaveBeenLastCalledWith('5');
	});

	test('should format value to default value when input is invalid', async () => {
		const onChange = jest.fn();

		const { changeValue } = renderFn({
			onChange,
		});

		changeValue('');

		expect(onChange).toHaveBeenLastCalledWith('0');
	});

	it('only allow integer and set mode number', () => {
		const onChange = jest.fn();

		const { changeValue } = renderFn({
			onChange: onChange,
			precision: 0,
			mode: 'number',
		});

		changeValue('4');
		expect(onChange).toHaveBeenLastCalledWith(4);

		changeValue('1.2');
		expect(onChange).toHaveBeenLastCalledWith(1);
	});

	it('precision prop', () => {
		const onChange = jest.fn();
		const { plusBtn } = renderFn({
			step: 0.2,
			precision: 2,
			onChange: onChange,
		});

		fireEvent.click(plusBtn);
		expect(onChange).toHaveBeenLastCalledWith('0.20');
	});

	it('input-width prop', () => {
		const { container } = renderFn({
			inputWidth: '80px',
		});
		expect(container).toMatchSnapshot();
	});

	it('button-size prop', () => {
		const { container } = renderFn({
			buttonSize: '15px',
		});
		expect(container).toMatchSnapshot();
	});

	it('min value is 3', () => {
		const onChange = jest.fn();
		const { changeValue } = renderFn({
			min: 3,
			onChange: onChange,
		});

		changeValue('1');

		expect(onChange).toHaveBeenLastCalledWith('3');
	});

	it('show-plus & show-minus props', () => {
		const { container } = render(
			<Stepper showPlus={false} showMinus={false}></Stepper>,
		);

		expect(container).toMatchSnapshot();
	});

	it('allow-empty prop', () => {
		const onChange = jest.fn();
		const { changeValue } = renderFn({
			allowEmpty: true,
			onChange: onChange,
		});

		changeValue('');

		expect(onChange).toHaveBeenLastCalledWith(null);
	});
});
