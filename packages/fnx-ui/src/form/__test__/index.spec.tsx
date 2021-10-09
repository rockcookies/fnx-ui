import { act, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import TestsDOM from '../../../test/dom';
import Button from '../../button';
import Field from '../../field';
import Form from '../index';

describe('<Form/>', () => {
	const error = console.error;
	const warn = console.warn;

	beforeEach(() => {
		jest.useFakeTimers();
		console.error = jest.fn();
		console.warn = jest.fn();
	});

	afterEach(() => {
		jest.useRealTimers();
		console.error = error;
		console.warn = warn;
	});

	it('requiredMark', () => {
		const { container, rerender } = render(
			<Form>
				<Form.Item name="username" requiredMark={true}>
					<Field.Input />
				</Form.Item>
			</Form>,
		);

		expect(container.querySelector('.fnx-field--required')).not.toBeNull();

		rerender(
			<Form requiredMark={true}>
				<Form.Item name="username" requiredMark={'auto'}>
					<Field.Input />
				</Form.Item>
			</Form>,
		);
		expect(container.querySelector('.fnx-field--required')).toBeNull();

		rerender(
			<Form>
				<Form.Item
					name="username"
					requiredMark={'auto'}
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Field.Input />
				</Form.Item>
			</Form>,
		);
		expect(container.querySelector('.fnx-field--required')).toBeTruthy();
	});

	it('plain', () => {
		const { container } = render(
			<Form>
				<Form.Item plain={true} name="name">
					<Field.Input />
				</Form.Item>
			</Form>,
		);
		expect(container.querySelector('.fnx-cell')).not.toBeTruthy();
	});

	it('children is Array', () => {
		const { container } = render(
			<Form initialValues={{ names: 'shiny' }}>
				<Form.Item name="names">
					<Field.Input />
					<Field.Input />
				</Form.Item>
			</Form>,
		);

		expect(console.error).toHaveBeenCalledWith(
			'Warning: [fnx Form.Item] `children` is array of render props cannot have `name`.',
		);

		const input0 = TestsDOM.mustQuerySelector<HTMLInputElement>(
			container,
			'.fnx-field-input__control',
		);

		expect(input0.value).toEqual('');
	});

	it('will not render child when child is function,  set name or did not set shouldUpdate or dependencies at the same time', () => {
		const { container, rerender } = render(
			<Form>
				<Form.Item>
					{() => {
						return <Field.Input />;
					}}
				</Form.Item>
			</Form>,
		);

		expect(console.error).toHaveBeenCalledWith(
			'Warning: [fnx Form.Item] `children` of render props only work with `shouldUpdate` or `dependencies`.',
		);

		rerender(
			<Form>
				<Form.Item name="names">
					{() => {
						return <Field.Input />;
					}}
				</Form.Item>
			</Form>,
		);

		expect(console.error).toHaveBeenCalledWith(
			'Warning: [fnx Form.Item] Do not use `name` with `children` of render props since it is not a field.',
		);

		const content = TestsDOM.mustQuerySelector(
			container,
			'.fnx-field__control-item',
		);
		expect(content.innerHTML).toEqual('');
	});

	it('will not render child when set dependencies and did not set name at the same time', () => {
		const { container } = render(
			<Form>
				<Form.Item name="password">
					<Field.Input />
				</Form.Item>
				<Form.Item dependencies={['password']}>
					<Field.Input />
				</Form.Item>
			</Form>,
		);

		expect(console.error).toHaveBeenCalledWith(
			'Warning: [fnx Form.Item] Must set `name` or use render props when `dependencies` is set.',
		);

		const item = container.querySelectorAll('.fnx-field__control-item')[1];
		expect(item.innerHTML).toEqual('');
	});

	it('validateTrigger', async () => {
		const { container } = render(
			<Form>
				<Form.Item
					name="names"
					validateTrigger={['onBlur']}
					rules={[{ required: true }]}
					initialValue="shiny"
				>
					<Field.Input />
				</Form.Item>
			</Form>,
		);

		const input = TestsDOM.mustQuerySelector(container, 'input');

		act(() => {
			fireEvent.focus(input);
			fireEvent.change(input, { target: { value: '' } });
			fireEvent.blur(input);
		});

		await waitFor(() => {
			expect(document.querySelector('.fnx-field__help')).not.toBeNull();
		});
	});

	it('shouldUpdate', () => {
		const { container } = render(
			<Form>
				<Form.Item name="username">
					<Field.Input />
				</Form.Item>
				<Form.Item shouldUpdate={true}>
					{(formValue) => {
						return (
							<span className="span-info">
								{formValue.getFieldValue('username')}
							</span>
						);
					}}
				</Form.Item>
			</Form>,
		);

		const input = TestsDOM.mustQuerySelector(
			container,
			'.fnx-field-input__control',
		);
		const span = TestsDOM.mustQuerySelector(container, '.span-info');

		fireEvent.change(input, { target: { value: 'xx' } });

		expect(span.innerHTML).toEqual('xx');
	});

	it('validateMessages', async () => {
		const { container } = render(
			<Form
				initialValues={{ email: '' }}
				validateMessages={{
					types: {
						email: '${name} is not a valid email!',
					},
				}}
			>
				<Form.Item name="email" rules={[{ type: 'email' }]}>
					<Field.Input />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					提交
				</Button>
			</Form>,
		);

		const input = TestsDOM.mustQuerySelector(
			container,
			'.fnx-field-input__control',
		);

		fireEvent.change(input, { target: { value: '13@' } });

		act(() => {
			fireEvent.submit(
				TestsDOM.mustQuerySelector(container, '.fnx-button'),
			);
		});

		await waitFor(() => {
			const help = TestsDOM.mustQuerySelector(
				container,
				'.fnx-field__help',
			);
			expect(help.innerHTML).toEqual(
				'<div>email is not a valid email!</div>',
			);
		});
	});

	it('FormList', async () => {
		const { container } = render(
			<Form
				initialValues={{
					userName: [
						{
							first: 'li',
							last: '',
						},
					],
				}}
			>
				<Form.List name="userName">
					{(fields) => {
						return (
							<>
								{fields.map(({ name, key, ...restField }) => (
									<div key={key}>
										<Form.Item
											{...restField}
											key={`${key}first`}
											name={[name, 'first']}
											rules={[
												{
													required: true,
													message:
														'Missing first name',
												},
											]}
										>
											<Field.Input placeholder="First Name" />
										</Form.Item>
										<Form.Item
											{...restField}
											key={`${key}last`}
											name={[name, 'last']}
											rules={[
												{
													required: true,
													message:
														'Missing last name',
												},
											]}
										>
											<Field.Input placeholder="Last Name" />
										</Form.Item>
									</div>
								))}
							</>
						);
					}}
				</Form.List>
				<Button type="primary" block shape="round" htmlType="submit">
					submit
				</Button>
			</Form>,
		);

		act(() => {
			fireEvent.submit(
				TestsDOM.mustQuerySelector(container, '.fnx-button'),
			);
		});

		await waitFor(() => {
			const help = TestsDOM.mustQuerySelector(
				container,
				'.fnx-field__help',
			);
			expect(help.innerHTML).toEqual('<div>Missing last name</div>');
		});
	});
});
