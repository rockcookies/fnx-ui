import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Cascader from '../';
import { Icon } from '../../';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';

describe('<Cascader/>', () => {
	const areaData = [
		{
			label: 'China',
			children: [
				{
					label: 'Beijing',
					children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
				},
				{
					label: 'Shanghai',
					children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
				},
			],
		},
		{
			label: 'United State',
			children: [
				{
					label: 'New York',
					children: [{ label: 'Manhattan' }, { label: 'Brooklyn' }],
				},
				{
					label: 'California',
					children: [
						{ label: 'Los Angeles' },
						{ label: 'San Francisco' },
					],
				},
			],
		},
	];

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

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('defaultValue and dataNames props', () => {
		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				defaultValue={['China', 'Beijing', 'Haidian']}
			></Cascader>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');

		expect(
			tabs[2].classList.contains('fnx-tabs__tab--active'),
		).toBeTruthy();

		expect(container).toMatchSnapshot();
	});

	it('onConfirm、 onChange should trigger', () => {
		const onConfirm = jest.fn();
		const onChange = jest.fn();

		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				onConfirm={(v) => onConfirm(v)}
				onChange={(v) => onChange(v)}
			></Cascader>,
		);

		fireEvent.click(
			container
				.querySelectorAll('.fnx-swipe-item')[0]
				.querySelectorAll('.fnx-cascader__option')[0],
		);
		expect(onChange).toHaveBeenCalledWith(['China']);

		fireEvent.click(
			container
				.querySelectorAll('.fnx-swipe-item')[1]
				.querySelectorAll('.fnx-cascader__option')[0],
		);
		expect(onChange).toHaveBeenCalledWith(['China', 'Beijing']);

		fireEvent.click(
			container
				.querySelectorAll('.fnx-swipe-item')[2]
				.querySelectorAll('.fnx-cascader__option')[0],
		);
		expect(onChange).toHaveBeenCalledWith(['China', 'Beijing', 'Haidian']);
		expect(onConfirm).toHaveBeenCalledWith(['China', 'Beijing', 'Haidian']);
	});

	it('title、placeholder props', () => {
		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				title="please choose area"
				placeholder="placeholder"
			></Cascader>,
		);

		expect(
			TestsDOM.mustQuerySelector(container, '.fnx-cascader__title')
				.innerHTML,
		).toEqual('please choose area');

		expect(
			TestsDOM.mustQuerySelector(
				container,
				'.fnx-cascader__tab-title--unselected',
			).innerHTML,
		).toEqual('placeholder');
	});

	it('onCancel、closeIcon props', () => {
		const onCancel = jest.fn();
		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				closeIcon={<Icon name="close-o" />}
				onCancel={onCancel}
			></Cascader>,
		);

		fireEvent.click(
			TestsDOM.mustQuerySelector(container, '.fnx-cascader__close-icon'),
		);

		expect(onCancel).toHaveBeenCalled();
		expect(container).toMatchSnapshot();
	});

	it('activeColor props', () => {
		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				defaultValue={[areaData[0].label]}
				activeColor="red"
			></Cascader>,
		);

		const selected = TestsDOM.mustQuerySelector(
			container,
			'.fnx-cascader__option--selected',
		);

		expect(getComputedStyle(selected).color).toEqual('red');
	});

	it('swipeable props', async () => {
		const { container } = render(
			<Cascader
				data={areaData}
				dataNames={{ value: 'label' }}
				swipeable={true}
			></Cascader>,
		);

		const swiper = TestsDOM.mustQuerySelector(
			container,
			'.fnx-swipe__wrapper',
		);

		mockRect(TestsDOM.mustQuerySelector(container, '.fnx-swipe'), {
			width: 300,
			height: 150,
		});

		const swipeItem = container.querySelectorAll('.fnx-swipe-item');

		fireEvent.click(
			swipeItem[0].querySelectorAll('.fnx-cascader__option')[0],
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');

		expect(
			tabs[1].classList.contains('fnx-tabs__tab--active'),
		).toBeTruthy();

		await TestsEvent.triggerDrag(swiper, [100, 0]);

		await waitFor(() => {
			expect(
				tabs[0].classList.contains('fnx-tabs__tab--active'),
			).toBeTruthy();
		});
	});

	it('onLoadData props', async () => {
		const _data: any[] = [{ label: 'China' }, { label: 'American' }];

		const onLoadData = jest.fn(() => {
			_data[0] = { label: 'China', loading: true };
			rerender(
				<Cascader
					dataNames={{ value: 'label' }}
					onLoadData={onLoadData}
					data={[..._data]}
				></Cascader>,
			);
		});

		const { container, rerender } = render(
			<Cascader
				data={_data}
				dataNames={{ value: 'label' }}
				onLoadData={onLoadData}
			></Cascader>,
		);

		const swipeItem = container.querySelectorAll('.fnx-swipe-item');

		fireEvent.click(
			swipeItem[0].querySelectorAll('.fnx-cascader__option')[0],
		);

		expect(
			container.querySelector('.fnx-cascader__loading'),
		).not.toBeNull();
	});

	it('select set disabled ', async () => {
		const _data: any[] = [...areaData];
		_data[0].children[0].disabled = true;
		const onChange = jest.fn();

		const { container } = render(
			<Cascader
				data={_data}
				dataNames={{ value: 'label' }}
				defaultValue={['China', 'Beijing', 'Haidian']}
				onChange={onChange}
			></Cascader>,
		);

		const tabs = container.querySelectorAll('.fnx-tabs__tab');
		expect(
			tabs[0].classList.contains('fnx-tabs__tab--active'),
		).toBeTruthy();

		fireEvent.click(container.querySelectorAll('.fnx-tabs__tab')[1]);
		fireEvent.click(
			container
				.querySelectorAll('.fnx-swipe-item')[1]
				.querySelectorAll('.fnx-cascader__option')[0],
		);

		expect(onChange).not.toHaveBeenCalled();
	});
});
