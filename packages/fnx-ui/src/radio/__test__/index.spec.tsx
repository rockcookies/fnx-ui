import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TestsDOM from '../../../test/dom';
import Radio from '../';

describe('<Radio/>', () => {
	it('disabled prop', async () => {
		const { container } = render(<Radio disabled={true}>box1</Radio>);
		const icon = TestsDOM.mustQuerySelector(container, '.fnx-radio__icon');

		fireEvent.click(icon);
		expect(container.querySelector('.fnx-radio__icon--checked')).toBeNull();
	});

	it('labelDisabled prop', async () => {
		const { container, rerender } = render(
			<Radio labelDisabled={true}>box1</Radio>,
		);
		const icon = TestsDOM.mustQuerySelector(container, '.fnx-radio__icon');
		const label = TestsDOM.mustQuerySelector(
			container,
			'.fnx-radio__label',
		);

		fireEvent.click(label);
		expect(icon.classList.contains('fnx-radio__icon--checked')).toBeFalsy();

		rerender(<Radio labelDisabled={false}>box1</Radio>);

		fireEvent.click(label);
		expect(
			icon.classList.contains('fnx-radio__icon--checked'),
		).toBeTruthy();
	});

	it('iconSize、iconPosition、iconShape、iconCheckedColor', async () => {
		const { container } = render(
			<Radio
				defaultChecked={true}
				iconSize={20}
				iconPosition="right"
				iconShape="square"
				iconCheckedColor="red"
			>
				box1
			</Radio>,
		);
		const icon = TestsDOM.mustQuerySelector(container, '.fnx-radio__icon');

		const style = getComputedStyle(icon);

		expect(style.fontSize).toEqual('20px');
		expect(style.backgroundColor).toEqual('red');
		expect(style.borderColor).toEqual('red');
		expect(icon.classList.contains('fnx-radio__icon--square')).toBeTruthy();
	});

	it('icon & checkedIcon prop', () => {
		const { container } = render(
			<Radio
				iconShape="plain"
				checkedIcon={<span>checked</span>}
				icon={<span>no-check</span>}
			>
				box1
			</Radio>,
		);

		expect(container).toMatchSnapshot();
	});

	it('Radio onChange', () => {
		const onChange = jest.fn();
		const { container } = render(<Radio onChange={onChange}>box1</Radio>);

		const icon = TestsDOM.mustQuerySelector(container, '.fnx-radio__icon');

		fireEvent.click(icon);
		expect(onChange).toHaveBeenCalledWith(true);

		fireEvent.click(icon);
		expect(onChange).toHaveBeenCalledTimes(1);
	});

	it('skipGroup prop', () => {
		const { container } = render(
			<Radio.Group defaultValue="1">
				<Radio skipGroup={true} value="1">
					box1
				</Radio>
				<Radio value="2">box2</Radio>
				<Radio value="3">box3</Radio>
			</Radio.Group>,
		);

		const icons = container.querySelectorAll('.fnx-radio__icon');
		expect(
			icons[0].classList.contains('fnx-radio__icon--checked'),
		).not.toBeTruthy();

		fireEvent.click(icons[1]);
		expect(
			icons[1].classList.contains('fnx-radio__icon--checked'),
		).toBeTruthy();
	});

	it('RadioGroup onChange', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Radio.Group onChange={onChange}>
				<Radio skipGroup={true} value="1">
					box1
				</Radio>
				<Radio value="2">box2</Radio>
				<Radio value="3">box3</Radio>
			</Radio.Group>,
		);

		const icons = container.querySelectorAll('.fnx-radio__icon');
		fireEvent.click(icons[0]);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(icons[1]);
		expect(onChange).toHaveBeenCalledWith('2');

		fireEvent.click(icons[2]);
		expect(onChange).toHaveBeenCalledWith('3');
	});
});
