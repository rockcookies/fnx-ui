import { act, fireEvent, render, waitFor } from '@testing-library/react';
import React, { FC } from 'react';
import TestsDOM from '../../../test/dom';
import ConfigProvider from '../../config-provider';
import Notify from '../index';
import { NotifyContext, NotifyInstance } from '../interface';

describe('<Notify />', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	function renderNotifyList(
		triggers: Array<{
			id: string;
			onClick: (ctx: NotifyContext) => void;
		}>,
	) {
		const Demo: FC = () => {
			const ctx = Notify.useNotify();

			return (
				<>
					{triggers.map(({ onClick, id }, idx) => (
						<div
							key={idx}
							id={id}
							onClick={() => {
								onClick(ctx);
							}}
						></div>
					))}
				</>
			);
		};

		const element = document.createElement('div');

		const { container } = render(
			<ConfigProvider mountTo={() => element}>
				<Demo />
			</ConfigProvider>,
		);

		return {
			element,
			fire: (id: string) => {
				const trigger = TestsDOM.mustQuerySelector(container, `#${id}`);

				act(() => {
					fireEvent.click(trigger);
				});
			},
		};
	}

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
		let _notify: NotifyInstance | undefined;

		const { element, fire } = renderNotifyList([
			{
				id: 'demo-notify',
				onClick: (ctx) => {
					_notify = ctx.show({
						id: 'notify',
						duration: 5000,
						message: 'Message',
					});
				},
			},
		]);

		fire('demo-notify');

		if (!_notify) {
			throw new Error('notify instance undefined');
		}

		const notify = _notify;

		expect(
			TestsDOM.mustQuerySelector(element, '#notify').innerHTML,
		).toEqual('Message');

		await waitFor(() =>
			notify.update({
				message: 'updateMessage',
			}),
		);

		expect(
			TestsDOM.mustQuerySelector(element, '#notify').innerHTML,
		).toEqual('updateMessage');
	});

	it('useToast', () => {
		const { element, fire } = renderNotifyList([
			{
				id: 'demo-notify',
				onClick: (ctx) => {
					ctx.show('success');
				},
			},
		]);

		fire('demo-notify');

		expect(element).toMatchSnapshot();
	});

	it('clear multiple notify', async () => {
		Notify.allowMultiple(true);

		const { element, fire } = renderNotifyList([
			{
				id: 'demo-notify',
				onClick: (ctx) => {
					ctx.show({ message: '1', duration: 0 });
					ctx.show({ message: '2', duration: 0 });
				},
			},
		]);

		fire('demo-notify');

		expect(element.querySelectorAll('.fnx-notify').length).toBe(2);

		await waitFor(() => Notify.clearAll());

		Notify.allowMultiple(false);
	});
});
