import React, { FC } from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import Notify from '../index';
import ConfigProvider from '../../config-provider';
import TestsDOM from '../../../test/dom';

describe('<Notify />', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it('should render Notify correctly', () => {
		const { container, getByTestId } = render(
			<Notify data-testid="notify" visible />,
		);

		expect(getByTestId('notify')).toMatchSnapshot();

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();
	});

	it('different display styles for different type', () => {
		const { container, getByTestId } = render(
			<Notify data-testid="notify" visible type="danger" />,
		);

		expect(getByTestId('notify').className).toContain('fnx-notify--danger');

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();
	});

	it('color props', () => {
		const { container, getByTestId } = render(
			<Notify data-testid="notify" visible color="#ad0000" />,
		);

		expect(getByTestId('notify')).toMatchSnapshot();

		act(() => {
			jest.runAllTimers();
		});

		expect(container).toMatchSnapshot();
	});

	it('onBeforeHide event is triggered correctly', () => {
		const onBeforeHide = jest.fn();

		const { getByTestId } = render(
			<Notify
				visible
				data-testid="notify"
				duration={1000}
				onBeforeHide={onBeforeHide}
			>
				Content
			</Notify>,
		);
		expect(getByTestId('notify')).toMatchSnapshot();

		act(() => {
			jest.advanceTimersByTime(1000);
		});

		expect(onBeforeHide).toBeCalledTimes(1);
	});

	it('should change default duration after calling update method', async () => {
		const notify = await waitFor(() =>
			Notify.show({
				id: 'notify',
				duration: 5000,
				message: 'Message',
			}),
		);

		expect(document.getElementById('notify').innerHTML).toEqual('Message');

		await waitFor(() =>
			notify.update({ duration: 1000, message: 'updateMessage' }),
		);

		expect(document.getElementById('notify').innerHTML).toEqual(
			'updateMessage',
		);
	});

	it('useToast', () => {
		const Demo: FC = () => {
			const { show } = Notify.useNotify();

			return (
				<div className="trigger" onClick={() => show('success')}></div>
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

	it('clear multiple notify', async () => {
		Notify.allowMultiple(true);

		await waitFor(() => {
			Notify.show({ message: '1', duration: 0 });
			Notify.show({ message: '2', duration: 0 });
		});

		act(() => {
			jest.runAllTimers();
		});

		expect(document.querySelectorAll('.fnx-notify').length).toBe(2);

		await waitFor(() => Notify.clearAll());

		act(() => {
			jest.runAllTimers();
		});

		Notify.allowMultiple(false);
	});
});
