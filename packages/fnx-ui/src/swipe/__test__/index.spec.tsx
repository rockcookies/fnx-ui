import { act, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';
import TestsReact from '../../../test/react';
import { ElementRect } from '../../utils/interface';
import Swipe from '../index';
import { SwipeProps, SwipeRef } from '../interface';

describe('<Swipe/>', () => {
	let eachClears: Array<() => void> = [];

	const mockGetBoundingClientRect = (
		rect: Partial<ElementRect>,
	): (() => void) => {
		const originMethod = Element.prototype.getBoundingClientRect;

		Element.prototype.getBoundingClientRect = jest.fn(
			() =>
				({
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: 0,
					height: 0,
					...rect,
				}) as any,
		);

		return function () {
			Element.prototype.getBoundingClientRect = originMethod;
		};
	};

	const mockPageHidden = (visibility: 'hidden' | 'visible') => {
		Object.defineProperty(document, 'visibilityState', {
			get: () => visibility,
		});

		document.dispatchEvent(new Event('visibilitychange'));
	};

	const renderDemo = (props: SwipeProps = {}) => {
		const swipeRef = React.createRef<SwipeRef>();

		const { container, getByTestId } = render(
			<Swipe
				ref={swipeRef}
				vertical={false}
				autoplay={0}
				touchable={true}
				loop={true}
				data-testid="swipe"
				{...props}
			>
				<Swipe.Item>1</Swipe.Item>
				<Swipe.Item>2</Swipe.Item>
				<Swipe.Item>3</Swipe.Item>
			</Swipe>,
		);

		return { container, getByTestId, swipeRef };
	};

	beforeEach(() => {
		jest.useFakeTimers();

		const clear = mockGetBoundingClientRect({
			width: 100,
			height: 100,
		});

		eachClears.push(clear);
	});

	afterEach(() => {
		eachClears.forEach((clear) => clear());
		eachClears = [];

		jest.useRealTimers();
	});

	it('should swipe to specific swipe after calling the swipeTo method', () => {
		const onActiveIndexChange = jest.fn();

		const { swipeRef } = renderDemo({
			onActiveIndexChange,
		});

		act(() => {
			TestsReact.mustGetRef(swipeRef).swipeTo(2, { animation: true });
		});

		expect(onActiveIndexChange).toHaveBeenCalledWith(2);

		act(() => {
			TestsReact.mustGetRef(swipeRef).swipeTo(1, { animation: false });
		});

		expect(onActiveIndexChange).toHaveBeenCalledWith(1);
	});

	it('should swipe to next swipe after calling next method', () => {
		const onActiveIndexChange = jest.fn();

		const { swipeRef } = renderDemo({
			onActiveIndexChange,
		});

		act(() => {
			TestsReact.mustGetRef(swipeRef).next();
		});

		expect(onActiveIndexChange).toHaveBeenCalledWith(1);
	});

	it('should swipe to prev swipe after calling prev method', () => {
		const onActiveIndexChange = jest.fn();

		const { swipeRef } = renderDemo({
			onActiveIndexChange,
		});

		act(() => {
			TestsReact.mustGetRef(swipeRef).prev();
		});

		expect(onActiveIndexChange).toHaveBeenCalledWith(2);
	});

	it('should render initial swipe correctly', async () => {
		let demo = renderDemo();
		expect(demo.container).toMatchSnapshot();

		demo = renderDemo({ defaultActiveIndex: 2 });
		expect(demo.container).toMatchSnapshot();
	});

	it('should render vertical swipe when using vertical prop', async () => {
		const onActiveIndexChange = jest.fn();

		const { container } = renderDemo({
			vertical: true,
			onActiveIndexChange,
		});

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-swipe__wrapper',
		);

		await TestsEvent.triggerDrag(track, [0, -100]);

		expect(onActiveIndexChange).toHaveBeenCalledWith(1);
	});

	it('should not allow to drag swipe when touchable is false', async () => {
		const onActiveIndexChange = jest.fn();

		const { container } = renderDemo({
			touchable: false,
			onActiveIndexChange,
		});

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-swipe__wrapper',
		);

		await TestsEvent.triggerDrag(track, [100, 0]);

		expect(container).toMatchSnapshot();
		expect(onActiveIndexChange).toHaveBeenCalledTimes(0);
	});

	it('should render swipe looped when using loop prop', async () => {
		const onActiveIndexChange = jest.fn();

		const { container } = renderDemo({
			onActiveIndexChange,
		});

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-swipe__wrapper',
		);

		await TestsEvent.triggerDrag(track, [-100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(1);

		await TestsEvent.triggerDrag(track, [-100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(2);

		await TestsEvent.triggerDrag(track, [-100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(0);

		await TestsEvent.triggerDrag(track, [-100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(1);

		await TestsEvent.triggerDrag(track, [100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(0);

		await TestsEvent.triggerDrag(track, [100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(2);

		await TestsEvent.triggerDrag(track, [100, 0]);
		expect(onActiveIndexChange).toHaveBeenLastCalledWith(1);
	});

	it('should pause auto play when page hidden', async () => {
		const onActiveIndexChange = jest.fn();

		renderDemo({
			autoplay: 1,
			onActiveIndexChange,
		});

		act(() => {
			mockPageHidden('hidden');
		});

		act(() => {
			jest.advanceTimersByTime(50);
		});

		expect(onActiveIndexChange).toHaveBeenCalledTimes(0);
	});
});
