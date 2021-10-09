import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';
import Picker from '../index';

describe('<Picker.Multi/>', () => {
	const columns = [
		['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		['上午', '下午'],
	];

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('multi columns confirm & cancel event', () => {
		const onConfirm = jest.fn();
		const onCancel = jest.fn();

		const { container } = render(
			<Picker.Multi
				data={columns}
				data-testid="picker"
				onConfirm={onConfirm}
				onCancel={onCancel}
			></Picker.Multi>,
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
			['周一', '上午'],
			['周一', '上午'],
		);

		act(() => {
			fireEvent.click(cancel);
		});

		expect(onCancel).toHaveBeenCalled();
	});

	it('multi picker drag and get Value', async () => {
		const onChange = jest.fn();

		const { container } = render(
			<Picker.Multi
				defaultValue={['周二', '下午']}
				data={columns}
				data-testid="picker"
				onChange={onChange}
			></Picker.Multi>,
		);

		const track = container.querySelectorAll('.fnx-picker-column');

		await TestsEvent.triggerDrag(track[0], [0, 100]);

		act(() => {
			jest.advanceTimersByTime(400);
		});

		expect(onChange).toHaveBeenCalledWith(
			['周一', '下午'],
			['周一', '下午'],
		);
	});
});
