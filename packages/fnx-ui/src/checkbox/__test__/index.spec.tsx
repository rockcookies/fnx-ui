import React from 'react';
import { fireEvent, render, act } from '@testing-library/react';
import TestsDOM from '../../../test/dom';
import TestsReact from '../../../test/react';
import Checkbox, { CheckboxRef, CheckboxGroupRef } from '../';

describe('<Checkbox/>', () => {
	it('disabled prop', async () => {
		const { container } = render(<Checkbox disabled={true}>box1</Checkbox>);
		const icon = TestsDOM.mustQuerySelector(
			container,
			'.fnx-checkbox__icon',
		);

		fireEvent.click(icon);
		expect(
			container.querySelector('.fnx-checkbox__icon--checked'),
		).toBeNull();
	});

	it('labelDisabled prop', async () => {
		const { container, rerender } = render(
			<Checkbox labelDisabled={true}>box1</Checkbox>,
		);
		const icon = TestsDOM.mustQuerySelector(
			container,
			'.fnx-checkbox__icon',
		);
		const label = TestsDOM.mustQuerySelector(
			container,
			'.fnx-checkbox__label',
		);

		fireEvent.click(label);
		expect(
			icon.classList.contains('fnx-checkbox__icon--checked'),
		).toBeFalsy();

		rerender(<Checkbox labelDisabled={false}>box1</Checkbox>);

		fireEvent.click(label);
		expect(
			icon.classList.contains('fnx-checkbox__icon--checked'),
		).toBeTruthy();
	});

	it('iconSize、iconPosition、iconShape、iconCheckedColor', async () => {
		const { container } = render(
			<Checkbox
				defaultChecked={true}
				iconSize={20}
				iconPosition="right"
				iconShape="square"
				iconCheckedColor="red"
			>
				box1
			</Checkbox>,
		);
		const icon = TestsDOM.mustQuerySelector(
			container,
			'.fnx-checkbox__icon',
		);

		expect(icon.getAttribute('style')).toEqual(
			'font-size: 20px; border-color: red; background-color: red;',
		);
		expect(
			icon.classList.contains('fnx-checkbox__icon--square'),
		).toBeTruthy();
	});

	it('icons', () => {
		const { container } = render(
			<Checkbox
				iconShape="plain"
				checkedIcon={<span>checked</span>}
				icon={<span>no-check</span>}
			>
				box1
			</Checkbox>,
		);

		expect(container).toMatchSnapshot();
	});

	it('checkbox onChange', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Checkbox checked={true} defaultChecked={false} onChange={onChange}>
				box1
			</Checkbox>,
		);

		const icon = TestsDOM.mustQuerySelector(
			container,
			'.fnx-checkbox__icon',
		);

		fireEvent.click(icon);
		expect(onChange).toHaveBeenCalledWith(false);
	});

	it('CheckboxRef toggle', () => {
		const onChange = jest.fn();
		const checkboxRef = React.createRef<CheckboxRef>();

		render(
			<Checkbox onChange={onChange} ref={checkboxRef}>
				box1
			</Checkbox>,
		);

		act(() => TestsReact.mustGetRef(checkboxRef).toggle());

		expect(onChange).toHaveBeenCalledWith(true);
	});

	it('skipGroup prop', () => {
		const { container } = render(
			<Checkbox.Group defaultValue={['1']}>
				<Checkbox skipGroup={true} value="1">
					box1
				</Checkbox>
				<Checkbox value="2">box2</Checkbox>
				<Checkbox value="3">box3</Checkbox>
			</Checkbox.Group>,
		);

		const icons = container.querySelectorAll('.fnx-checkbox__icon');
		expect(
			icons[0].classList.contains('fnx-checkbox__icon--checked'),
		).not.toBeTruthy();

		fireEvent.click(icons[1]);
		expect(
			icons[1].classList.contains('fnx-checkbox__icon--checked'),
		).toBeTruthy();
	});

	it('checkboxGroup onChange', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Checkbox.Group onChange={onChange}>
				<Checkbox skipGroup={true} value="1">
					box1
				</Checkbox>
				<Checkbox value="2">box2</Checkbox>
				<Checkbox value="3">box3</Checkbox>
			</Checkbox.Group>,
		);

		const icons = container.querySelectorAll('.fnx-checkbox__icon');
		fireEvent.click(icons[0]);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(icons[1]);
		expect(onChange).toHaveBeenCalledWith(['2']);

		fireEvent.click(icons[2]);
		expect(onChange).toHaveBeenCalledWith(['2', '3']);
	});

	it('maxCheckedCount prop', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Checkbox.Group onChange={onChange} maxCheckedCount={2}>
				<Checkbox value="1">box1</Checkbox>
				<Checkbox value="2">box2</Checkbox>
				<Checkbox value="3">box3</Checkbox>
			</Checkbox.Group>,
		);

		const icons = container.querySelectorAll('.fnx-checkbox__icon');
		fireEvent.click(icons[0]);
		expect(onChange).toHaveBeenCalledWith(['1']);

		fireEvent.click(icons[1]);
		expect(onChange).toHaveBeenCalledWith(['1', '2']);

		fireEvent.click(icons[2]);
		expect(onChange).toHaveBeenCalledTimes(2);
	});

	it('CheckboxGroupRef toggleAll', () => {
		const onChange = jest.fn();
		const groupRef = React.createRef<CheckboxGroupRef>();

		const { container } = render(
			<Checkbox.Group onChange={onChange} ref={groupRef}>
				<Checkbox skipGroup={true} value="1">
					box1
				</Checkbox>
				<Checkbox value="2">box2</Checkbox>
				<Checkbox value="3">box3</Checkbox>
			</Checkbox.Group>,
		);

		act(() => {
			TestsReact.mustGetRef(groupRef).toggleAll({
				checkAll: true,
			});
		});
		expect(onChange).toHaveBeenCalledWith(['2', '3']);

		const icons = container.querySelectorAll('.fnx-checkbox__icon');
		fireEvent.click(icons[1]);

		act(() => TestsReact.mustGetRef(groupRef).toggleAll());
		expect(onChange).toHaveBeenLastCalledWith(['2']);
	});
});
