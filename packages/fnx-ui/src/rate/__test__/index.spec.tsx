import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Rate from '../index';
import TestsEvent from '../../../test/events';
import TestsDOM from '../../../test/dom';

describe('<Rate/>', () => {
	const mockGetBoundingClientRect = (items: NodeListOf<Element>) => {
		[...items].forEach((icon, index) => {
			icon.getBoundingClientRect = () =>
				({
					left: index * 25,
					width: 25,
				} as DOMRect);

			return true;
		});
	};

	it('test click', () => {
		const onChange = jest.fn();

		const { container } = render(<Rate onChange={onChange} value={2} />);

		const items = container.querySelectorAll('.fnx-rate__item-wrapper');

		// ==
		fireEvent.click(items[1]);
		expect(onChange).toBeCalledWith(1);

		// <
		fireEvent.click(items[0]);
		expect(onChange).toBeCalledWith(1);

		// >
		fireEvent.click(items[2]);
		expect(onChange).toBeCalledWith(3);
	});

	it('test allowHalf click', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate onChange={onChange} value={2} allowHalf />,
		);

		const items = container.querySelectorAll('.fnx-rate__item-wrapper');

		// ==
		fireEvent.click(items[1]);
		expect(onChange).toBeCalledWith(1);

		// <
		fireEvent.click(items[0]);
		expect(onChange).toBeCalledWith(1);

		// >
		fireEvent.click(items[2]);
		expect(onChange).toBeCalledWith(2.5);
	});

	it('should render gutter when using gutter prop', () => {
		const { container } = render(<Rate gutter="10px" defaultValue={3} />);

		expect(container).toMatchSnapshot();
	});

	it('should not emit onChange event when rate is disabled', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate onChange={onChange} disabled defaultValue={3} />,
		);

		const items = container.querySelectorAll('.fnx-rate__item-wrapper');

		fireEvent.click(items[1]);

		expect(onChange).toHaveBeenCalledTimes(0);
	});

	it('should emit onChange event when rate icon is touch moved', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate onChange={onChange} defaultValue={1} />,
		);

		const track = TestsDOM.mustQuerySelector(container, '.fnx-rate');

		const items = container.querySelectorAll('.fnx-rate__item');

		mockGetBoundingClientRect(items);

		await TestsEvent.triggerTouch(track, 'touchstart', [[0, 0]]);
		await TestsEvent.triggerTouch(track, 'touchmove', [[30, 0]]);
		expect(onChange).toHaveBeenCalledWith(2);

		await TestsEvent.triggerTouch(track, 'touchmove', [[60, 0]]);
		expect(onChange).toHaveBeenCalledWith(3);

		await TestsEvent.triggerTouch(track, 'touchmove', [[90, 0]]);
		expect(onChange).toHaveBeenCalledWith(4);

		await TestsEvent.triggerTouch(track, 'touchmove', [[120, 0]]);
		expect(onChange).toHaveBeenCalledWith(5);

		expect(container).toMatchSnapshot();
	});

	it('should emit onChange event when rate icon is touch moved and using allow-half prop', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate onChange={onChange} allowHalf defaultValue={1} />,
		);

		const track = TestsDOM.mustQuerySelector(container, '.fnx-rate');

		const items = container.querySelectorAll('.fnx-rate__item');

		mockGetBoundingClientRect(items);

		await TestsEvent.triggerTouch(track, 'touchstart', [[0, 0]]);
		await TestsEvent.triggerTouch(track, 'touchmove', [[30, 0]]);
		expect(onChange).toHaveBeenCalledWith(1.5);

		await TestsEvent.triggerTouch(track, 'touchmove', [[55, 0]]);
		expect(onChange).toHaveBeenCalledWith(2.5);

		await TestsEvent.triggerTouch(track, 'touchmove', [[85, 0]]);
		expect(onChange).toHaveBeenCalledWith(3.5);

		await TestsEvent.triggerTouch(track, 'touchmove', [[105, 0]]);
		expect(onChange).toHaveBeenCalledWith(4.5);

		expect(container).toMatchSnapshot();
	});

	it('should change icon size when using size prop', () => {
		const { container } = render(<Rate defaultValue={1} size="40px" />);

		expect(container).toMatchSnapshot();
	});

	it('should not emit onChange event when readonly rate is touch moved', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate onChange={onChange} readonly defaultValue={1} />,
		);

		const track = TestsDOM.mustQuerySelector(container, '.fnx-rate');

		await TestsEvent.triggerDrag(track, [300, 0]);

		expect(onChange).toHaveBeenCalledTimes(0);
	});

	it('should  emit change event when untouchable is true', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Rate
				onChange={onChange}
				data-testid="rate"
				defaultValue={1}
				size={'40px'}
			/>,
		);
		const track = TestsDOM.mustQuerySelector(container, '.fnx-rate');

		await TestsEvent.triggerDrag(track, [300, 0]);

		expect(onChange).toBeCalled();
	});
});
