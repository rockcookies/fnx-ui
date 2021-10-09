import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import List from '../index';
import Cell from '../../cell';
import { ListSlots } from '../interface';

describe('<List/>', () => {
	const slots: ListSlots = {
		loading: 'loading',
		finished: 'finished',
		error: 'error',
	};

	beforeEach(() => {
		// mocking the offsetParent
		Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
			get: function () {
				return {};
			},
		});
	});

	it('should emit load event when reaching bottom', () => {
		const onLoad = jest.fn();

		render(<List onLoad={onLoad} />);

		expect(onLoad).toHaveBeenCalled();
	});

	it('should render loading tip correctly and do not trigger onLoad', () => {
		const onLoad = jest.fn();

		const { container } = render(<List status="loading" onLoad={onLoad} />);

		expect(container).toMatchSnapshot();
		expect(onLoad).not.toBeCalled();
	});

	it('should render finish tip correctly and do not trigger onLoad', () => {
		const onLoad = jest.fn();

		const { container } = render(
			<List status="finished" onLoad={onLoad} />,
		);

		expect(container).toMatchSnapshot();
		expect(onLoad).not.toBeCalled();
	});

	it('should render error slots correctly and do not trigger onLoad', async () => {
		const onLoad = jest.fn();

		const { container } = render(<List slots={slots} status="error" />);

		expect(container).toMatchSnapshot();
		expect(onLoad).not.toBeCalled();
	});

	it('should render correctly when set direction', async () => {
		const onLoad = jest.fn();

		const { container, rerender } = render(
			<List slots={slots} direction="up" onLoad={onLoad} />,
		);

		rerender(
			<List
				slots={slots}
				direction="up"
				status="loading"
				onLoad={onLoad}
			/>,
		);

		rerender(
			<List
				slots={slots}
				direction="up"
				status="default"
				onLoad={onLoad}
			/>,
		);

		expect(container).toMatchSnapshot();
		expect(onLoad).toHaveBeenCalledTimes(2);
	});

	it('should trigger load when scroll', async () => {
		const onLoad = jest.fn();

		render(
			<List onLoad={onLoad} immediateCheck={false}>
				{new Array(50).fill(0).map((_, i) => (
					<Cell key={i} title={i} />
				))}
			</List>,
		);

		await waitFor(() => {
			fireEvent.scroll(window, { target: { pageYOffset: 10 } });
		});

		expect(onLoad).toHaveBeenCalledTimes(1);
	});
});
