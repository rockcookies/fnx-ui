import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import TestsEvent from '../../../test/events';
import TestsReact from '../../../test/react';
import Picker from '../index';
import { PickerRef } from '../interface';

describe('<Picker/>', () => {
	const columns = ['1990', '1991', '1992', '1993', '1994', '1995'];
	const options = [
		{
			value: '值1',
			label: 'column1',
		},
		{
			value: '值2',
			label: 'column2',
		},
	];

	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('render picker base props', () => {
		const { container } = render(
			<Picker
				data={columns}
				toolbarPosition="bottom"
				title="单选标题"
				confirmButton="确定"
				cancelButton="取消"
			></Picker>,
		);
		expect(container).toMatchSnapshot();
	});

	it('render picker do not show title、conform、cancel', () => {
		const { container } = render(
			<Picker
				data={columns}
				title={false}
				confirmButton={false}
				cancelButton={false}
			></Picker>,
		);

		expect(container).toMatchSnapshot();
	});

	it('render picker defined title、cancel、confirm', () => {
		const { container } = render(
			<Picker
				data={columns}
				title={<span>defined title</span>}
				confirmButton={<span>defined confirm button</span>}
				cancelButton={<span>defined cancel button</span>}
			></Picker>,
		);

		expect(container).toMatchSnapshot();
	});

	it('set picker optionHeight、visibleOptionsCount', async () => {
		const { container } = render(
			<Picker
				data={columns}
				optionHeight={30}
				visibleOptionsCount={4}
			></Picker>,
		);

		expect(container).toMatchSnapshot();
	});

	it('simple columns confirm & cancel event', () => {
		const onConfirm = jest.fn();
		const onCancel = jest.fn();

		const { container } = render(
			<Picker
				data={columns}
				data-testid="picker"
				onConfirm={onConfirm}
				onCancel={onCancel}
			></Picker>,
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

		expect(onConfirm).toHaveBeenCalledWith('1990', '1990');

		act(() => {
			fireEvent.click(cancel);
		});
		expect(onCancel).toHaveBeenCalled();
	});

	it('drag columns', async () => {
		const onValueChange = jest.fn();
		const { container } = render(
			<Picker
				data={columns}
				optionHeight={30}
				visibleOptionsCount={4}
				onChange={onValueChange}
			></Picker>,
		);

		const track = TestsDOM.mustQuerySelector(
			container,
			'.fnx-picker-column',
		);

		await TestsEvent.triggerDrag(track, [0, -200]);

		act(() => {
			jest.advanceTimersByTime(400);
		});

		expect(onValueChange).toHaveBeenCalledWith('1995', '1995');
	});

	it('get activeValue by pickerRef', async () => {
		const pickerRef = React.createRef<PickerRef>();

		render(<Picker data={options} ref={pickerRef}></Picker>);

		expect(TestsReact.mustGetRef(pickerRef).getValue()).toEqual(
			options[0].value,
		);
	});

	/* it('get activeIndex by pickerColumnRef', async () => {
		const pickerColumnRef = React.createRef<PickerColumnRef>();

		render(
			<PickerColumn
				data={options}
				ref={pickerColumnRef}
				optionHeight={30}
				visibleOptionsCount={4}
				transitionDuration={300}
			></PickerColumn>,
		);

		expect(
			pickerColumnRef.current && pickerColumnRef.current.getActiveIndex(),
		).toEqual(0);
	}); */
});
