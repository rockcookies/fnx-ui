import { render } from '@testing-library/react';
import React from 'react';
import Cell from '..';

describe('<Cell.Group />', () => {
	it('should render correctly', () => {
		const { container } = render(
			<Cell.Group title="title">content</Cell.Group>,
		);

		expect(container).toMatchSnapshot();
	});
});
