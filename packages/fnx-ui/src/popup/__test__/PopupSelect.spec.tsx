import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import Picker from '../../picker/index';
import Popup from '../index';

describe('<Popup.Select/>', () => {
	const columns = ['1990', '1991', '1992', '1993', '1994', '1995'];

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('render picker select', () => {
		const onChange = jest.fn();
		const onConfirm = jest.fn();

		const { container } = render(
			<Popup.Select
				visible={true}
				mountTo={false}
				onChange={onChange}
				defaultValue="1992"
				select={<Picker data={columns} onConfirm={onConfirm}></Picker>}
			></Popup.Select>,
		);

		const confirm = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__confirm',
		);

		act(() => {
			fireEvent.click(confirm);
		});

		expect(onChange).toHaveBeenCalledWith('1992', '1992');
		expect(onConfirm).toHaveBeenCalledWith('1992', '1992');
	});

	it('set trigger props and value change', () => {
		const { container, getByTestId } = render(
			<Popup.Select
				mountTo={false}
				trigger="onFocus"
				select={<Picker data={columns}></Picker>}
				defaultValue="1992"
				className="pop-select"
			>
				{(value) => (
					<button data-testid="button" data-value={value}>
						{value}
					</button>
				)}
			</Popup.Select>,
		);

		const button = getByTestId('button');
		expect(button.getAttribute('data-value')).toEqual('1992');

		act(() => {
			fireEvent.click(button);
		});

		let popups = container.querySelectorAll('.pop-select');
		expect(popups.length).toBe(0);

		act(() => {
			fireEvent.focus(button);
		});

		popups = container.querySelectorAll('.pop-select');
		expect(popups.length).toBe(1);
	});

	it('cancel event', () => {
		const onClose = jest.fn();
		const onCancel = jest.fn();

		const { container, getByTestId } = render(
			<Popup.Select
				mountTo={false}
				onClose={onClose}
				select={<Picker data={columns} onCancel={onCancel}></Picker>}
				defaultValue="1991"
				className="pop-select"
			>
				{(value) => (
					<button data-testid="button" data-value={value}>
						{value}
					</button>
				)}
			</Popup.Select>,
		);

		const button = getByTestId('button');

		act(() => {
			fireEvent.click(button);
		});

		const popups = container.querySelectorAll('.pop-select');
		expect(popups.length).toBe(1);

		const cancel = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__cancel',
		);

		act(() => {
			fireEvent.click(cancel);
		});

		expect(onClose).toHaveBeenCalled();
		expect(onCancel).toHaveBeenCalled();
	});

	it('close event', () => {
		const onClose = jest.fn();
		const onCancel = jest.fn();

		const { container, getByTestId } = render(
			<Popup.Select
				mountTo={false}
				onClose={onClose}
				select={<Picker data={columns} onCancel={onCancel}></Picker>}
				className="pop-select"
			>
				{(value) => (
					<button data-testid="button" data-value={value}>
						{value}
					</button>
				)}
			</Popup.Select>,
		);

		const button = getByTestId('button');

		act(() => {
			fireEvent.click(button);
		});

		const popups = container.querySelectorAll('.pop-select');
		expect(popups.length).toBe(1);

		const close = TestsDOM.mustQuerySelector(container, '.fnx-overlay');

		act(() => {
			fireEvent.click(close);
		});

		expect(onClose).toHaveBeenCalled();
		expect(onCancel).not.toHaveBeenCalled();
	});
});
