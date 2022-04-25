import { render } from '@testing-library/react';
import React from 'react';
import Empty from '../index';

describe('<Empty/>', () => {
	it('should render image correctly', () => {
		const { container } = render(<Empty image="Custom Image" />);

		expect(container).toMatchSnapshot();
	});

	it('should render image === false correctly', () => {
		const { container } = render(<Empty image={false} />);

		expect(container).toMatchSnapshot();
	});

	test('should allow to set image props by imageProps prop', async () => {
		const { container } = render(
			<Empty
				image="Custom Image"
				imageProps={{
					style: { borderRadius: '50%' },
				}}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should render title correctly', () => {
		const { container } = render(<Empty title="Custom title" />);

		expect(container).toMatchSnapshot();
	});

	it('should render description correctly', () => {
		const { container, rerender } = render(
			<Empty description="Custom description" />,
		);

		expect(container).toMatchSnapshot();

		const container2 = rerender(
			<Empty title="Custom title" description="Custom description" />,
		);

		expect(container2).toMatchSnapshot();
	});

	it('should render title & description correctly', () => {
		const { container } = render(
			<Empty title="Custom title" description="Custom description" />,
		);

		expect(container).toMatchSnapshot();
	});

	test('should render children correctly', () => {
		const { container } = render(<Empty>Custom bottom</Empty>);

		expect(container).toMatchSnapshot();
	});
});
