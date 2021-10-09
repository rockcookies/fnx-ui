import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../index';

describe('<Loading/>', () => {
	it('should set size correctly', () => {
		const { container } = render(<Loading size={20}>Loading...</Loading>);

		expect(container).toMatchSnapshot();
	});

	it('should set textSize correctly', () => {
		const { container } = render(
			<Loading textSize={20}>Loading...</Loading>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should set color correctly', () => {
		const { container } = render(
			<Loading color="#1989fa">Loading...</Loading>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should set textColor correctly', () => {
		const { container } = render(
			<Loading textColor="#1989fa">Loading...</Loading>,
		);

		expect(container).toMatchSnapshot();
	});
});
