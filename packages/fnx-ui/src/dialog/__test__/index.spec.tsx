import { act, fireEvent, render } from '@testing-library/react';
import React, { FC } from 'react';
import Dialog from '../';
import TestsDOM from '../../../test/dom';
import ConfigProvider from '../../config-provider';
import zhCN from '../../locale/zh-CN';
import { sleep } from '../../utils/misc';

describe('<Dialog/>', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('title、width、message、messageAlign props', () => {
		const { container } = render(
			<Dialog
				title="Dialog Title"
				width="80"
				message="content"
				messageAlign="right"
				visible={true}
			></Dialog>,
		);

		expect(container).toMatchSnapshot();
	});

	it('confirmButton、confirmText、confirmButtonProps props', () => {
		const { rerender } = render(
			<Dialog
				visible={true}
				confirmText="Dialog Confirm"
				confirmButtonProps={{ disabled: true }}
			></Dialog>,
		);

		const confirm = TestsDOM.mustQuerySelector(
			document.body,
			'.fnx-button--disabled',
		);

		expect(confirm).not.toBeNull();
		expect(
			TestsDOM.mustQuerySelector(confirm, '.fnx-button__text').innerHTML,
		).toEqual('Dialog Confirm');

		rerender(
			<Dialog
				visible={true}
				confirmButton={<span className="define-btn">confirm</span>}
			></Dialog>,
		);

		expect(
			TestsDOM.mustQuerySelector(document.body, '.define-btn'),
		).not.toBeNull();
	});

	it('cancelButton、cancelText、cancelButtonProps props', () => {
		const { rerender } = render(
			<Dialog
				visible
				cancelText="Dialog Cancel"
				cancelButtonProps={{ className: 'cancel-button' }}
			></Dialog>,
		);

		const cancel = TestsDOM.mustQuerySelector(
			document.body,
			'.cancel-button',
		);

		expect(cancel).not.toBeNull();
		expect(
			TestsDOM.mustQuerySelector(cancel, '.fnx-button__text').innerHTML,
		).toEqual('Dialog Cancel');

		rerender(
			<Dialog
				visible={true}
				confirmButton={<span className="define-btn">confirm</span>}
			></Dialog>,
		);

		expect(
			TestsDOM.mustQuerySelector(document.body, '.define-btn'),
		).not.toBeNull();
	});

	it('footer props', () => {
		render(
			<Dialog
				visible
				footer={<div className="dialog-footer"></div>}
			></Dialog>,
		);

		const footer = TestsDOM.mustQuerySelector(
			document.body,
			'.dialog-footer',
		);

		expect(footer).not.toBeNull();
	});

	it('onConfirm、onCancel', async () => {
		const onConfirm = jest.fn(() => {
			return sleep(2000);
		});
		const onCancel = jest.fn(() => {
			return false;
		});

		act(() => {
			Dialog.show({
				title: 'title',
				message: 'content',
				onConfirm,
				onCancel,
				mountTo: document.body,
			});
		});

		const confirm = TestsDOM.mustQuerySelector(
			document.body,
			'.fnx-dialog__confirm',
		);
		const cancel = TestsDOM.mustQuerySelector(
			document.body,
			'.fnx-dialog__cancel',
		);

		act(() => {
			fireEvent.click(cancel);
		});
		expect(onCancel).toHaveBeenCalled();

		act(() => {
			fireEvent.click(confirm);
		});
		expect(onConfirm).toHaveBeenCalled();
		expect(confirm.classList.contains('fnx-button--loading')).toBeTruthy();
	});

	it('close、destroy function', async () => {
		act(() => {
			Dialog.show({
				title: 'title',
				message: 'content',
			});
		});

		act(() => {
			Dialog.show({
				title: 'title2',
				message: 'content2',
			});
		});

		act(() => {
			jest.runAllTimers();
		});

		const dialogDiv = TestsDOM.mustQuerySelector(
			document.body,
			'.fnx-dialog',
		);
		expect(dialogDiv).not.toBeNull();

		act(() => {
			Dialog.clearAll();
		});
		act(() => {
			jest.runAllTimers();
		});

		expect(document.body).toMatchSnapshot();
	});

	it('useDialog', async () => {
		const Demo: FC = () => {
			const { show } = Dialog.useDialog();

			return (
				<div
					className="trigger"
					onClick={() =>
						show({
							title: 'title',
							message: 'message',
						})
					}
				></div>
			);
		};

		const element = document.createElement('div');

		const { container } = render(
			<ConfigProvider mountTo={() => element} locale={zhCN}>
				<Demo />
			</ConfigProvider>,
		);

		const trigger = TestsDOM.mustQuerySelector(container, '.trigger');

		act(() => {
			fireEvent.click(trigger);
		});

		expect(element).toMatchSnapshot();
	});
});
