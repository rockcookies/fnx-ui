import React from 'react';
import { render } from '@testing-library/react';
import Divider from '../index';

describe('<Divider>', () => {
	it('should render Divider have Children correctly', () => {
		const { container } = render(
			<Divider contentPosition="right">right</Divider>,
		);

		expect(container).toMatchSnapshot();
	});

	it('hairline', () => {
		const { container } = render(<Divider hairline></Divider>);

		expect(container).toMatchSnapshot();
	});

	it('contentposition defines the position of the text', () => {
		const { container } = render(
			<Divider contentPosition="right">right</Divider>,
		);
		expect(container).toMatchSnapshot();
	});

	it('using dash props, divide the line into dashed lines', () => {
		const { container } = render(<Divider dashed />);

		expect(container).toMatchSnapshot();
	});
});
