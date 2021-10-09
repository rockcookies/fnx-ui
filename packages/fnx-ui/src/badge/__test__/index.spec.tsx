import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../index';

describe('<Badge/>', () => {
	it('should render children correctly', () => {
		const { container } = render(<Badge>children</Badge>);

		expect(container).toMatchSnapshot();
	});

	it('should render default count when children is not exist', () => {
		const { container } = render(<Badge></Badge>);

		expect(container).toMatchSnapshot();
	});

	it('should change count position when using offset prop', () => {
		const { container, rerender } = render(
			<Badge offset={[10, -20]} count={8}>
				children
			</Badge>,
		);

		expect(container).toMatchSnapshot();

		rerender(
			<Badge offset={['-10', '20']} count={8}>
				children
			</Badge>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should change dot position when using offset prop with custom unit', () => {
		const { container } = render(
			<Badge offset={['1rem', '2rem']} dot>
				children
			</Badge>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should change dot position when using offset prop without children', () => {
		const { container } = render(<Badge offset={[10, 20]} dot></Badge>);

		expect(container).toMatchSnapshot();
	});

	it('should render nothing when count is zero', () => {
		const { container } = render(<Badge count={0}>children</Badge>);

		expect(container).toMatchSnapshot();
	});

	it('should not render zero when show-zero is false', () => {
		const { container } = render(
			<Badge showZero={false} count={0}>
				children
			</Badge>,
		);

		expect(container).toMatchSnapshot();
	});
});
