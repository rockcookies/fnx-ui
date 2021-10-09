import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Switch from '../index';

describe('<Switch/>', () => {
	it('should emit onChange event when click the switch button', () => {
		const onClick = jest.fn();
		const onChange = jest.fn();

		const { getByTestId } = render(
			<Switch
				data-testid="switch"
				onClick={onClick}
				onChange={onChange}
			/>,
		);

		fireEvent.click(getByTestId('switch'));

		expect(onChange).toBeCalledWith(true);

		fireEvent.click(getByTestId('switch'));

		expect(onChange).toBeCalledWith(false);
		expect(onClick).toBeCalledTimes(2);
	});

	it('should not emit event when disabled', () => {
		const onClick = jest.fn();
		const onChange = jest.fn();

		const { getByTestId } = render(
			<Switch
				data-testid="switch"
				disabled
				defaultChecked
				onClick={onClick}
				onChange={onChange}
			/>,
		);

		fireEvent.click(getByTestId('switch'));

		expect(onClick).not.toHaveBeenCalled();
		expect(onChange).not.toHaveBeenCalled();
	});

	it('should change active color when using checkedColor prop', () => {
		const { getByTestId } = render(
			<Switch data-testid="switch" defaultChecked checkedColor="black" />,
		);

		expect(getByTestId('switch').style.backgroundColor).toBe('black');
	});

	it('should change inactive active color when using unCheckedColor prop', () => {
		const { getByTestId } = render(
			<Switch data-testid="switch" unCheckedColor="white" />,
		);

		expect(getByTestId('switch').style.backgroundColor).toBe('white');
	});

	it('should apply active color to loading icon', () => {
		const { container } = render(
			<Switch
				data-testid="switch"
				loading
				defaultChecked
				checkedColor="red"
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should apply inactive color to loading icon', () => {
		const { container } = render(
			<Switch data-testid="switch" loading={false} checkedColor="red" />,
		);

		expect(container).toMatchSnapshot();
	});

	it('should change size when using size prop', () => {
		const { getByTestId } = render(
			<Switch data-testid="switch" size={20} />,
		);

		expect(getByTestId('switch').style.fontSize).toEqual('20px');
	});
});
