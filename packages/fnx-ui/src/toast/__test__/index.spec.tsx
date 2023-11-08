import { act, fireEvent, render } from '@testing-library/react';
import React, { FC } from 'react';
import TestsDOM from '../../../test/dom';
import ConfigProvider from '../../config-provider';
import Toast from '../index';
import { ToastContext, ToastInstance } from '../interface';

describe('<Toast />', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	function renderToastList(
		triggers: Array<{
			id: string;
			onClick: (ctx: ToastContext) => void;
		}>,
	) {
		const Demo: FC = () => {
			const ctx = Toast.useToast();

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

		act(() => {
			jest.runAllTimers();
		});

		fireEvent(
			getByTestId('toast'),
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		);

		act(() => {
			jest.runAllTimers();
		});

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
		let _toast: ToastInstance | undefined;

		const { fire } = renderToastList([
			{
				id: 'demo-toast',
				onClick: (ctx) => {
					_toast = ctx.success({
						id: 'toast',
						forbidClick: true,
						duration: 0,
					});
				},
			},
		]);

		fire('demo-toast');

		if (!_toast) {
			throw new Error('toast instance undefined');
		}

		const toast = _toast;

		expect(ddc().contains('fnx-toast--unclickable')).toBeTruthy();

		act(() => {
			toast.update({ forbidClick: false });
		});

		expect(ddc().contains('fnx-toast--unclickable')).not.toBeTruthy();
	});

	it('show toast', async () => {
		const { element, fire } = renderToastList([
			{
				id: 'demo-show-toast',
				onClick: (ctx) => {
					ctx.show({
						id: 'show-toast',
						message: 'show',
						duration: 0,
					});
				},
			},
			{
				id: 'demo-success-toast',
				onClick: (ctx) => {
					ctx.success({
						id: 'success-toast',
						message: 'success',
						duration: 0,
					});
				},
			},
			{
				id: 'demo-fail-toast',
				onClick: (ctx) => {
					ctx.fail({
						id: 'fail-toast',
						message: 'fail',
						duration: 0,
					});
				},
			},
			{
				id: 'demo-loading-toast',
				onClick: (ctx) => {
					ctx.loading({
						id: 'loading-toast',
						message: 'loading',
						duration: 0,
					});
				},
			},
		]);

		fire('demo-show-toast');

		act(() => {
			jest.runAllTimers();
		});

		expect(element.querySelector('#show-toast')).toMatchSnapshot();

		fire('demo-success-toast');

		act(() => {
			jest.runAllTimers();
		});

		expect(element.querySelector('#success-toast')).toMatchSnapshot();

		fire('demo-fail-toast');

		act(() => {
			jest.runAllTimers();
		});

		expect(element.querySelector('#fail-toast')).toMatchSnapshot();

		fire('demo-loading-toast');

		act(() => {
			jest.runAllTimers();
		});

		expect(element.querySelector('#loading-toast')).toMatchSnapshot();

		expect(ddc().contains('fnx-toast--unclickable')).toBeTruthy();

		act(() => {
			Toast.clearAll();
		});

		act(() => {
			jest.runAllTimers();
		});

		expect(element.querySelectorAll('.fnx-toast').length).toBe(0);
		expect(ddc().contains('fnx-toast--unclickable')).not.toBeTruthy();
	});

	it('clear multiple toast', async () => {
		Toast.allowMultiple(true);

		act(() => {
			Toast.success({ message: '1', duration: 0 });
			Toast.success({ message: '2', duration: 0 });
		});

		expect(document.querySelectorAll('.fnx-toast').length).toBe(2);

		act(() => {
			Toast.clearAll();
		});
		act(() => {
			jest.runAllTimers();
		});

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
