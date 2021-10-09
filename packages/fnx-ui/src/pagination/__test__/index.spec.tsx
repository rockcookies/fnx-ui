import { fireEvent, render } from '@testing-library/react';
import React, { useRef } from 'react';
import Icon from '../../icon';
import Pagination from '../index';
import TestsDOM from '../../../test/dom';

describe('<Pagination/>', () => {
	it('should render slots correctly', () => {
		const { container } = render(
			<Pagination
				total={80}
				slots={{
					prev: <Icon name="arrow-left" />,
					next: <Icon name="arrow-right" />,
				}}
			/>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should render simple Mode correctly', () => {
		const { container } = render(<Pagination total={80} mode={'simple'} />);

		expect(container).toMatchSnapshot();
	});

	it('should render end forceEllipses correctly', () => {
		const { container } = render(
			<Pagination total={80} defaultCurrent={5} forceEllipses />,
		);

		expect(container).toMatchSnapshot();
	});

	it('should onChange called when pageSize change', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Pagination total={80} onChange={onChange} />,
		);
		const nextBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pagination__next',
		);
		fireEvent.click(nextBtn);

		expect(onChange).toHaveBeenCalled();
	});

	it('should render defaultCurrent and ref correctly ', () => {
		const Demo = () => {
			const containerRef = useRef<HTMLUListElement>(null);
			return (
				<Pagination total={80} defaultCurrent={20} ref={containerRef} />
			);
		};
		const { container } = render(<Demo />);
		expect(container).toMatchSnapshot();
	});

	it('should render hideOnSinglePage hidden', () => {
		const { container } = render(
			<Pagination total={10} hideOnSinglePage />,
		);
		const hideOnSinglePage = container.classList.contains(
			'fnx-pagination--hidden',
		);
		expect(hideOnSinglePage).toBe(false);
	});

	it('should pre and next Btn is callback', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Pagination total={80} onChange={onChange} />,
		);
		const nextBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pagination__next',
		);
		const prevBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pagination__prev',
		);

		fireEvent.click(prevBtn);
		expect(onChange).not.toHaveBeenCalled();

		fireEvent.click(nextBtn);
		expect(onChange).toHaveBeenCalled();

		fireEvent.click(prevBtn);
		expect(onChange).toHaveBeenCalled();
	});

	it('should PageItem Btn is callback', () => {
		const onChange = jest.fn();
		const { container } = render(
			<Pagination total={80} onChange={onChange} defaultCurrent={2} />,
		);
		const PageItemBtn = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pagination__page',
		);
		fireEvent.click(PageItemBtn);
		expect(onChange).toHaveBeenCalled();
	});
});
