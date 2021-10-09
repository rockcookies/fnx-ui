import { act, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';
import PullRefresh from '../index';

describe('<PullRefresh/>', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('should render different head content in different pulling status', async () => {
		const onRefresh = jest.fn();

		const { container, rerender } = render(
			<PullRefresh onRefresh={onRefresh} />,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pull-refresh__track',
		);

		// pulling
		await TestsEvent.triggerTouch(track, 'touchstart', [[0, 0]]);
		await TestsEvent.triggerTouch(track, 'touchmove', [[0, 20]]);

		expect(container).toMatchSnapshot();

		// loosing
		await TestsEvent.triggerTouch(track, 'touchmove', [[0, 100]]);

		expect(container).toMatchSnapshot();

		// loading
		await TestsEvent.triggerTouch(track, 'touchend', [[0, 100]]);

		expect(container).toMatchSnapshot();

		// still loading
		await TestsEvent.triggerDrag(track, [0, 100]);

		expect(container).toMatchSnapshot();

		expect(onRefresh).toHaveBeenCalled();

		// end loading
		act(() => {
			rerender(<PullRefresh refreshing={true} />);
		});

		act(() => {
			rerender(<PullRefresh refreshing={false} />);
		});

		expect(container).toMatchSnapshot();
	});

	it('should render status slots correctly', async () => {
		const { container } = render(
			<PullRefresh
				slots={{
					pulling: (distance) => `pulling ${distance}`,
					loosing: (distance) => `loosing ${distance}`,
					loading: (distance) => `loading ${distance}`,
				}}
			/>,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pull-refresh__track',
		);

		// pulling
		await TestsEvent.triggerTouch(track, 'touchstart', [[0, 0]]);
		await TestsEvent.triggerTouch(track, 'touchmove', [[0, 20]]);

		expect(container).toMatchSnapshot();

		// loosing
		await TestsEvent.triggerTouch(track, 'touchmove', [[0, 100]]);

		expect(container).toMatchSnapshot();

		// loading
		await TestsEvent.triggerTouch(track, 'touchend', [[0, 100]]);

		expect(container).toMatchSnapshot();
	});

	it('should not emit onRefresh event after pulling a short distance', async () => {
		const onRefresh = jest.fn();

		const { container } = render(<PullRefresh onRefresh={onRefresh} />);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pull-refresh__track',
		);

		await TestsEvent.triggerDrag(track, [0, 10]);

		expect(onRefresh).not.toBeCalled();
	});

	it('should not trigger pull refresh when not in page top', async () => {
		const onRefresh = jest.fn();

		const { container } = render(<PullRefresh onRefresh={onRefresh} />);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pull-refresh__track',
		);

		// ignore touch event when not at page top
		await waitFor(() => {
			fireEvent.scroll(window, { target: { pageYOffset: 1 } });
		});

		await TestsEvent.triggerDrag(track, [0, 100]);
		expect(onRefresh).not.toBeCalled();

		await waitFor(() => {
			fireEvent.scroll(window, { target: { pageYOffset: 0 } });
		});

		await TestsEvent.triggerDrag(track, [0, 100]);
		expect(onRefresh).toBeCalled();
	});

	it('should render success text correctly', async () => {
		const onRefresh = jest.fn();

		const { container, rerender } = render(
			<PullRefresh
				slots={{ success: 'success' }}
				refreshing={true}
				onRefresh={onRefresh}
			/>,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-pull-refresh__track',
		);

		await TestsEvent.triggerDrag(track, [0, 100]);

		// loading
		expect(onRefresh).toBeCalled();

		await waitFor(() =>
			rerender(
				<PullRefresh
					slots={{ success: 'success' }}
					refreshing={false}
					onRefresh={onRefresh}
				/>,
			),
		);

		// success
		expect(container).toMatchSnapshot();

		act(() => {
			jest.runAllTimers();
		});

		// normal
		expect(container).toMatchSnapshot();
	});

	it('should set height when using indicatorHeight', async () => {
		const { container } = render(<PullRefresh indicatorHeight={100} />);

		const head = TestsDOM.mustQuerySelector<HTMLElement>(
			container,
			'.fnx-pull-refresh__indicator',
		);

		expect(head.style.height).toEqual('100px');
	});
});
