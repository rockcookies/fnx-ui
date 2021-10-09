import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../index';

describe('<Grid/>', () => {
	const children = new Array(5)
		.fill(0)
		.map((_, idx) => <Grid.Item key={idx}>children</Grid.Item>);

	it('should render children correctly', () => {
		const { container } = render(<Grid>{children}</Grid>);

		expect(container).toMatchSnapshot();
	});

	it('should change grid gutter when using gutter prop', () => {
		const { container } = render(<Grid gutter={10}>{children}</Grid>);

		expect(container).toMatchSnapshot();
	});

	it('should change grid border when using border prop', () => {
		const { container } = render(<Grid border={false}>{children}</Grid>);

		expect(container).toMatchSnapshot();
	});

	it('should change grid square when using square prop', () => {
		const { container } = render(<Grid square={false}>{children}</Grid>);

		expect(container).toMatchSnapshot();
	});
});
