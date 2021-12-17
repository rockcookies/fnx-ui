import { act, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Tabs from '../index';

describe('<Tabs/>', () => {
	const mockRect = (el: Element, rect: Partial<DOMRect>) => {
		Object.defineProperty(el, 'getBoundingClientRect', {
			configurable: true,
			get: () => {
				return () => ({
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: 0,
					height: 0,
					...rect,
				});
			},
		});
	};

	const mockSticky = (sticky: Element, rect?: Partial<DOMRect>) => {
		Object.defineProperty(sticky, 'offsetParent', {
			configurable: true,
			get: () => document.body,
		});

		if (rect) {
			mockRect(sticky, rect);
		}
	};

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('border props', () => {
		const { container } = render(
			<Tabs border={true}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2">content2</Tabs.Panel>
			</Tabs>,
		);

		expect(
			container.querySelector('.fnx-hairline--top-bottom'),
		).not.toBeNull();
	});

	/* it('trackWidth、trackHeight、trackColor props', async () => {
		const { container } = render(
			<Tabs trackWidth={10} trackHeight={4} trackColor={'green'}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2">content2</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);

		await waitFor(() => {
			const track = TestsDOM.mustQuerySelector(
				container,
				'.fnx-tabs__track',
			);
			const style = getComputedStyle(track);

			expect(style.width).toEqual('10px');
			expect(style.height).toEqual('4px');
			expect(style.background).toEqual('green');
		});
	}); */

	it('activeKey、defaultActiveKey', () => {
		const { container, rerender } = render(
			<Tabs defaultActiveKey={'2'}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2">content2</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');
		expect(
			tabs[2].classList.contains('fnx-tabs__tab--active'),
		).toBeTruthy();

		rerender(
			<Tabs defaultActiveKey={'2'} activeKey={'1'}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2">content2</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);
		expect(
			tabs[1].classList.contains('fnx-tabs__tab--active'),
		).toBeTruthy();
	});

	it('click to switch tab and set key', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Tabs onChange={onChange}>
				<Tabs.Panel title="1" key={1}>
					content1
				</Tabs.Panel>
				<Tabs.Panel title="2" key={2}>
					content2
				</Tabs.Panel>
				<Tabs.Panel title="3" key={3}>
					content3
				</Tabs.Panel>
			</Tabs>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');
		act(() => {
			fireEvent.click(tabs[0]);
		});
		expect(onChange).not.toHaveBeenCalled();

		act(() => {
			fireEvent.click(tabs[1]);
		});
		expect(onChange).toHaveBeenCalledWith('2');
	});

	it('animated、transitionDuration', async () => {
		const { container } = render(
			<Tabs animated={true} transitionDuration={200}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2">content2</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');
		const swipeItems = container.querySelectorAll('.fnx-swipe-item');

		act(() => {
			fireEvent.click(tabs[1]);
		});

		expect(
			swipeItems[1].classList.contains('fnx-tabs__swipe-item--inactive'),
		).not.toBeTruthy();
	});

	it('onTabClick event', () => {
		const onTabClick = jest.fn();

		const { container } = render(
			<Tabs onTabClick={onTabClick}>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2" disabled={true}>
					content2
				</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');

		act(() => {
			fireEvent.click(tabs[2]);
		});
		expect(onTabClick).toHaveBeenCalled();
	});

	it('sticky, onStickyChange', async () => {
		const onStickyChange = jest.fn();

		const { container } = render(
			<Tabs
				sticky={true}
				stickyProps={{
					onChange: onStickyChange,
				}}
			>
				<Tabs.Panel title="1">content1</Tabs.Panel>
				<Tabs.Panel title="2" disabled={true}>
					content2
				</Tabs.Panel>
				<Tabs.Panel title="3">content3</Tabs.Panel>
			</Tabs>,
		);

		const sticky = container.querySelector('.fnx-sticky');
		const c = container.querySelector('.fnx-tabs');

		c && mockRect(c, { width: 300, height: 200, top: 0, bottom: 600 });
		sticky &&
			mockSticky(sticky, {
				width: 300,
				height: 50,
				top: -10,
			});

		await waitFor(() => {
			fireEvent.scroll(window);
		});
		expect(onStickyChange).toHaveBeenCalledWith({ fixed: true });

		c && mockRect(c, { width: 300, height: 200, top: 0, bottom: -10 });
		await waitFor(() => {
			fireEvent.scroll(window);
		});
		expect(onStickyChange).toHaveBeenCalledWith({ fixed: false });
	});

	it('slots', () => {
		const { container } = render(
			<Tabs
				slots={{
					navLeft: <div>left</div>,
					navRight: <div>right</div>,
					navBottom: 'bottom',
				}}
			>
				<Tabs.Panel title="1">content1</Tabs.Panel>
			</Tabs>,
		);

		expect(container).toMatchSnapshot();
	});
});
