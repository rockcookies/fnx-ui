import React from 'react';
import { render } from '@testing-library/react';
import Col from '../index';
import Row from '../../row/index';

describe('<Col>', () => {
	it('should render Col correctly', () => {
		const { container } = render(<Col span={8} />);

		expect(container).toMatchSnapshot();
	});

	it('should render gutter correctly', () => {
		const { container } = render(
			<Row gutter={24}>
				<Col span={24}>24</Col>

				<Col span={12}>12</Col>
				<Col span={12}>12</Col>

				<Col span={8}>8</Col>
				<Col span={8}>8</Col>
				<Col span={8}>8</Col>

				<Col span={6}>6</Col>
				<Col span={6}>6</Col>
				<Col span={6}>6</Col>
				<Col span={6}>6</Col>

				<Col span={7}>7</Col>
				<Col span={6}>6</Col>
				<Col span={5}>5</Col>
				<Col span={4}>4</Col>
				<Col span={3}>3</Col>
				<Col span={2}>2</Col>
			</Row>,
		);

		expect(container).toMatchSnapshot();
	});
});
