import React, { FC } from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import Toast from '../index';
import ConfigProvider from '../../config-provider';
import TestsDOM from '../../../test/dom';

describe('<Toast />', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	const ddc = () => document.body.classList;

	it('should close Toast when using closeOnClickOverlay prop and overlay is clicked', () => {
		const onHide = jest.fn();

		const { getByTestId } = render(
			<Toast
				visible={true}
				mountTo={false}
				clickCloseable={true}
				duration={0}
				data-testid="toast"
				onHide={onHide}
			/>,
		);

		jest.runAllTimers();

		fireEvent(
			getByTestId('toast'),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		);

		jest.runAllTimers();

		expect(onHide).toHaveBeenCalled();
	});

	it('toast disappeared after duration', async () => {
		const { container } = render(
			<Toast
				visible={true}
				mountTo={false}
				duration={10}
				data-testid="toast"
			/>,
		);

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();
	});

	it('create a forbidClick toast', async () => {
		const toast = await waitFor(() =>
			Toast.success({
				id: 'toast',
				forbidClick: true,
				duration: 0,
			}),
		);

		expect(document.getElementById('toast')).toMatchSnapshot();

		expect(ddc().contains('fnx-toast--unclickable')).toBeTruthy();

		await waitFor(() => toast.update({ forbidClick: false }));

		expect(ddc().contains('fnx-toast--unclickable')).not.toBeTruthy();

		await waitFor(() => Toast.clearAll());
		jest.runAllTimers();

		expect(document.getElementById('toast')).toMatchSnapshot();
	});

	it('show toast', async () => {
		await waitFor(() =>
			Toast.show({
				id: 'show-toast',
				message: 'show',
				duration: 0,
			}),
		);

		jest.runAllTimers();
		expect(document.getElementById('show-toast')).toMatchSnapshot();

		await waitFor(() =>
			Toast.success({
				id: 'success-toast',
				message: 'success',
				duration: 0,
			}),
		);

		jest.runAllTimers();
		expect(document.getElementById('success-toast')).toMatchSnapshot();

		await waitFor(() =>
			Toast.fail({
				id: 'fail-toast',
				message: 'fail',
				duration: 0,
			}),
		);

		jest.runAllTimers();
		expect(document.getElementById('fail-toast')).toMatchSnapshot();

		await waitFor(() =>
			Toast.loading({
				id: 'loading-toast',
				message: 'loading',
				duration: 0,
			}),
		);

		jest.runAllTimers();
		expect(document.getElementById('loading-toast')).toMatchSnapshot();
		expect(ddc().contains('fnx-toast--unclickable')).toBeTruthy();

		await waitFor(() => Toast.clearAll());
		jest.runAllTimers();

		expect(document.querySelectorAll('.fnx-toast').length).toBe(0);
		expect(ddc().contains('fnx-toast--unclickable')).not.toBeTruthy();
	});

	it('clear multiple toast', async () => {
		Toast.allowMultiple(true);

		await waitFor(() => {
			Toast.success({ message: '1', duration: 0 });
			Toast.success({ message: '2', duration: 0 });
		});

		jest.runAllTimers();
		expect(document.querySelectorAll('.fnx-toast').length).toBe(2);

		await waitFor(() => Toast.clearAll());
		jest.runAllTimers();

		expect(document.querySelectorAll('.fnx-toast').length).toBe(0);

		Toast.allowMultiple(false);
	});

	it('useToast', async () => {
		const Demo: FC = () => {
			const { success } = Toast.useToast();

			return (
				<div
					className="trigger"
					onClick={() => success('success')}
				></div>
			);
		};
		const element = document.createElement('div');

		const { container } = render(
			<ConfigProvider mountTo={() => element}>
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
