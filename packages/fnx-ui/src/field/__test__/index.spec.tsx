import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import Field from '../index';

describe('<Form.Item/>', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	/**----------------------FieldInput---------------------- */

	it('number type', () => {
		const onChange = jest.fn();

		const { container } = render(
			<Field label={'number'}>
				<Field.Input
					type="number"
					defaultValue="0"
					onChange={onChange}
				/>
			</Field>,
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'input',
		);

		expect(input.value).toEqual('0');

		fireEvent.change(input, { target: { value: '1.4.' } });
		expect(input.value).toEqual('1.4');

		fireEvent.change(input, { target: { value: '123abc' } });
		expect(input.value).toEqual('123');
	});

	it('digit type', () => {
		const { container } = render(
			<Field label={'digit'}>
				<Field.Input type="digit" defaultValue="0" />
			</Field>,
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'input',
		);

		expect(input.value).toEqual('0');

		fireEvent.change(input, { target: { value: '1.' } });
		expect(input.value).toEqual('1');

		fireEvent.change(input, { target: { value: '123abc' } });

		expect(input.value).toEqual('123');
	});

	it('trigger onChange、onFocus、onBlur', () => {
		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const onChange = jest.fn();

		const { container } = render(
			<Field label={'digit'}>
				<Field.Input
					type="digit"
					defaultValue="1"
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onChange}
				/>
			</Field>,
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'input',
		);

		act(() => {
			fireEvent.focus(input);
		});
		expect(onFocus).toHaveBeenCalledWith('1');

		act(() => {
			fireEvent.blur(input);
			jest.advanceTimersByTime(500);
		});
		expect(onBlur).toHaveBeenCalledWith('1');

		fireEvent.change(input, { target: { value: '14' } });
		expect(onChange).toHaveBeenCalledWith('14');
	});

	it('clearable prop and clear-trigger', () => {
		const { container, rerender } = render(
			<Field>
				<Field.Input clearable={true} defaultValue="3" />
			</Field>,
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'input',
		);

		expect(container.querySelector('.fnx-field-input__clear')).toBeNull();

		fireEvent.focus(input);
		expect(
			container.querySelector('.fnx-field-input__clear'),
		).not.toBeNull();

		rerender(
			<Field>
				<Field.Input
					clearable={true}
					defaultValue="3"
					clearTrigger="always"
				/>
			</Field>,
		);

		expect(
			container.querySelector('.fnx-field-input__clear'),
		).not.toBeNull();
	});

	it('inputAlign、readonly、disabled props', () => {
		const { container, rerender } = render(
			<Field>
				<Field.Input inputAlign="center" disabled={true} />
			</Field>,
		);

		expect(
			TestsDOM.mustQuerySelector(container, '.fnx-field-input--disabled'),
		).not.toBeNull();

		rerender(
			<Field>
				<Field.Input inputAlign="right" readOnly={true} />
			</Field>,
		);

		expect(
			TestsDOM.mustQuerySelector(
				container,
				'.fnx-field-input--text-right',
			),
		).not.toBeNull();
		expect(
			TestsDOM.mustQuerySelector(
				container,
				'.fnx-field-input__control',
			).getAttribute('readonly'),
		).toBeDefined();
	});

	it('maxlength', () => {
		const { container } = render(
			<Field>
				<Field.Input maxLength={3} defaultValue="12345" />
			</Field>,
		);

		const input = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'input',
		);

		expect(input.value).toEqual('123');

		fireEvent.change(input, { target: { value: '1234' } });
		expect(input.value).toEqual('123');

		// reset
		fireEvent.change(input, { target: { value: '123' } });
		expect(input.value).toEqual('123');

		fireEvent.compositionStart(input);

		fireEvent.change(input, { target: { value: '1234' } });
		expect(input.value).toEqual('1234');

		fireEvent.compositionEnd(input);
		expect(input.value).toEqual('123');

		fireEvent.change(input, { target: { value: '😂😂😂😂' } });
		expect(input.value).toEqual('😂😂😂');
	});

	/**----------------------FieldTextArea---------------------- */
	it('textArea trigger onChange、onFocus、onBlur', () => {
		const onFocus = jest.fn();
		const onBlur = jest.fn();
		const onChange = jest.fn();

		const { container } = render(
			<Field label={'textarea'}>
				<Field.TextArea
					defaultValue="1"
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onChange}
				/>
			</Field>,
		);

		const textarea = TestsDOM.mustQuerySelector<HTMLTextAreaElement>(
			container,
			'textarea',
		);

		act(() => {
			fireEvent.focus(textarea);
		});

		expect(onFocus).toHaveBeenCalledWith('1');

		act(() => {
			fireEvent.blur(textarea);
			jest.advanceTimersByTime(500);
		});

		expect(onBlur).toHaveBeenCalledWith('1');

		fireEvent.change(textarea, { target: { value: '14' } });
		expect(onChange).toHaveBeenCalledWith('14');
	});

	it('textArea maxlength and show count', () => {
		const { container } = render(
			<Field>
				<Field.TextArea
					maxLength={3}
					defaultValue="12345"
					showCount={true}
				/>
			</Field>,
		);

		const textarea = TestsDOM.mustQuerySelector<HTMLTextAreaElement>(
			container,
			'textarea',
		);

		const count = TestsDOM.mustQuerySelector(
			container,
			'.fnx-field-textarea__count',
		);

		expect(textarea.value).toEqual('123');

		fireEvent.change(textarea, { target: { value: '1234' } });
		expect(textarea.value).toEqual('123');
		expect(count.textContent).toEqual('3 / 3');

		fireEvent.change(textarea, { target: { value: '1234' } });
		expect(textarea.value).toEqual('123');

		// reset
		fireEvent.change(textarea, { target: { value: '123' } });
		expect(textarea.value).toEqual('123');

		fireEvent.compositionStart(textarea);

		fireEvent.change(textarea, { target: { value: '1234' } });
		expect(textarea.value).toEqual('1234');

		fireEvent.compositionEnd(textarea);
		expect(textarea.value).toEqual('123');

		fireEvent.change(textarea, { target: { value: '😂😂😂😂' } });
		expect(textarea.value).toEqual('😂😂😂');
	});

	/**----------------------Field---------------------- */
	it('label、labelAlign、labelWidth props', () => {
		const { container } = render(
			<Field label="field" labelAlign="right" labelWidth="44">
				<Field.Input />
			</Field>,
		);
		expect(container).toMatchSnapshot();
	});

	it('required prop', () => {
		const { container } = render(
			<Field label="field" required>
				<Field.Input />
			</Field>,
		);

		expect(container.querySelector('.fnx-field--required')).not.toBeNull();
	});

	it('help prop', () => {
		const { container } = render(
			<Field label="field" help="validate Error" helpAlign="right">
				<Field.Input />
			</Field>,
		);

		const help = TestsDOM.mustQuerySelector(
			container,
			'.fnx-field__help--text-right',
		);

		expect(help.textContent).toEqual('validate Error');
	});

	it('should autoSize textarea field', async () => {
		const { container } = render(
			<Field label="field">
				<Field.TextArea autoSize={{}} />
			</Field>,
		);

		expect(container).toMatchSnapshot();
	});

	it('should allow autoSize prop be be an object', async () => {
		const { container } = render(
			<Field label="field">
				<Field.TextArea autoSize={{ minHeight: 50 }} />
			</Field>,
		);

		expect(container).toMatchSnapshot();
	});
});
