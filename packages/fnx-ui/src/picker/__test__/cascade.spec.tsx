import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';
import Picker from '../index';

describe('<Picker.Cascade/>', () => {
	const columns = [
		{
			name: '浙江',
			key: '1',
			children: [
				{
					name: '杭州',
					key: '1-1',
					children: [
						{ name: '西湖区', key: '1-1-1' },
						{ name: '余杭区', key: '1-1-2' },
					],
				},
				{
					name: '温州',
					key: '1-2',
					children: [
						{ name: '鹿城区', key: '1-2-1' },
						{ name: '瓯海区', key: '1-2-2' },
					],
				},
			],
		},
		{
			name: '福建',
			key: '2',
			children: [
				{
					name: '福州',
					key: '2-1',
					children: [
						{ name: '鼓楼区', key: '2-1-1' },
						{ name: '台江区', key: '2-1-2' },
					],
				},
				{
					name: '厦门',
					key: '2-2',
					children: [
						{ name: '思明区', key: '2-2-1' },
						{ name: '海沧区', key: '2-2-2' },
					],
				},
			],
		},
	];

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('cascade columns confirm & cancel event', () => {
		const onConfirm = jest.fn();
		const onCancel = jest.fn();

		const { container } = render(
			<Picker.Cascade
				data={columns}
				dataNames={{ value: 'key', label: 'name' }}
				onConfirm={onConfirm}
				onCancel={onCancel}
			></Picker.Cascade>,
		);

		const confirm = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__confirm',
		);
		const cancel = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker__cancel',
		);

		act(() => {
			fireEvent.click(confirm);
		});

		expect(onConfirm).toHaveBeenCalledWith(
			['1', '1-1', '1-1-1'],
			[
				columns[0],
				columns[0].children[0],
				columns[0].children[0].children[0],
			],
		);

		act(() => {
			fireEvent.click(cancel);
		});

		expect(onCancel).toHaveBeenCalled();
	});

	it('cascade columns click or drag to trigger onChange', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Picker.Cascade
				data={columns}
				defaultValue={['2', '2-1', '2-1-1']}
				dataNames={{ label: 'name', value: 'key' }}
				data-testid="picker"
				onChange={onChange}
				optionHeight={30}
			></Picker.Cascade>,
		);

		const track = container.querySelectorAll('.fnx-picker-column');

		const column_items = track[1].querySelectorAll(
			'.fnx-picker-column__option',
		);

		act(() => {
			fireEvent.click(column_items[1]);
			jest.advanceTimersByTime(300);
		});
		expect(onChange).toHaveBeenCalledWith(
			['2', '2-2', '2-2-1'],
			[
				columns[1],
				columns[1].children[1],
				columns[1].children[1].children[0],
			],
		);

		await TestsEvent.triggerDrag(track[1], [0, -100]);
		act(() => {
			jest.advanceTimersByTime(400);
		});
		expect(onChange).toHaveBeenCalledTimes(1);

		await TestsEvent.triggerDrag(track[0], [0, 30]);
		act(() => {
			jest.advanceTimersByTime(300);
		});

		expect(onChange).toHaveBeenCalledWith(
			['1', '1-1', '1-1-1'],
			[
				columns[0],
				columns[0].children[0],
				columns[0].children[0].children[0],
			],
		);
	});
});
