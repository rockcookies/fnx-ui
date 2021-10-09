import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Icon from '../../icon';
import Button from '../index';

describe('<Button/>', () => {
	it('should emit click event', () => {
		const onClick = jest.fn();

		const { getByTestId } = render(
			<Button data-testid="button" onClick={onClick} />,
		);

		fireEvent.click(getByTestId('button'));
		expect(onClick).toHaveBeenCalled();
	});

	it('should not emit click event when disabled', () => {
		const onClick = jest.fn();

		const { getByTestId } = render(
			<Button data-testid="button" disabled={true} onClick={onClick} />,
		);

		fireEvent.click(getByTestId('button'));
		expect(onClick).not.toHaveBeenCalled();
	});

	it('should not emit click event when loading', () => {
		const onClick = jest.fn();

		const { getByTestId } = render(
			<Button data-testid="button" loading={true} onClick={onClick} />,
		);

		fireEvent.click(getByTestId('button'));
		expect(onClick).not.toHaveBeenCalled();
	});

	it('should hide border when color is gradient', () => {
		const { getByTestId } = render(
			<Button data-testid="button" color="linear-gradient(#000, #fff)" />,
		);

		const button = getByTestId('button');

		expect(button.style.border).toBe('');
	});

	it('should render loadingIcon correctly', () => {
		const { container, rerender } = render(<Button>Children</Button>);

		expect(container).toMatchSnapshot();

		rerender(
			<Button
				loading
				loadingIcon={<Icon name="plus" />}
				loadingChildren="loadingChildren"
			/>,
		);

		expect(container).toMatchSnapshot();
	});
});
