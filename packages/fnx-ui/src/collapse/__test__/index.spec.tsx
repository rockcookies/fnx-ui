import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Icon from '../../icon';
import Collapse from '../index';
import { CollapseProps } from '../interface';

describe('<Collapse/>', () => {
	const CollapseDemo = (props: CollapseProps) => {
		return (
			<Collapse {...props}>
				<Collapse.Item key="a" title={<p data-testid="a">a</p>}>
					content
				</Collapse.Item>
				<Collapse.Item key="b" title={<p data-testid="b">b</p>}>
					content
				</Collapse.Item>
				<Collapse.Item key="c" title={<p data-testid="c">c</p>}>
					content
				</Collapse.Item>
			</Collapse>
		);
	};

	it('should update active value when title is clicked', async () => {
		const onChange = jest.fn();

		const { getByTestId } = render(<CollapseDemo onChange={onChange} />);

		fireEvent.click(getByTestId('a'));
		expect(onChange).toBeCalledWith(['a']);

		fireEvent.click(getByTestId('b'));
		expect(onChange).toBeCalledWith(['a', 'b']);

		fireEvent.click(getByTestId('a'));
		expect(onChange).toBeCalledWith(['b']);
	});

	it('should update active value when title is clicked in accordion mode', async () => {
		const onChange = jest.fn();

		const { getByTestId } = render(
			<CollapseDemo onChange={onChange} accordion={true} />,
		);

		fireEvent.click(getByTestId('a'));
		expect(onChange).toBeCalledWith(['a']);

		fireEvent.click(getByTestId('b'));
		expect(onChange).toBeCalledWith(['b']);

		fireEvent.click(getByTestId('b'));
		expect(onChange).toBeCalledWith([]);
	});

	it('should render CollapseItem correctly', async () => {
		const { container } = render(
			<Collapse defaultActiveKey="0">
				<Collapse.Item
					title="title"
					headerProps={{
						content: 'content',
						leftIcon: <Icon name="success" />,
						rightIcon: <Icon name="fail" />,
					}}
				>
					content
				</Collapse.Item>
			</Collapse>,
		);

		expect(container).toMatchSnapshot();
	});
});
