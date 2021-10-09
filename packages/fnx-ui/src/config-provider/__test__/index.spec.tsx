import { render } from '@testing-library/react';
import React, { useContext } from 'react';
import ConfigProvider from '../';
import { getConfirmLocale } from '../../dialog/locale';
import useCreation from '../../hooks/use-creation';
import enUS from '../../locale/en-US';
import zhCN from '../../locale/zh-CN';

describe('<ConfigProvider />', () => {
	it('test provider', async () => {
		function Test() {
			const context = useContext(ConfigProvider.Context);

			return (
				<pre>
					{JSON.stringify({
						...context,
						locale: context.locale.locale,
					})}
				</pre>
			);
		}

		expect(getConfirmLocale()).toEqual(enUS.dialog);

		const { container } = render(
			<ConfigProvider
				locale={zhCN}
				transitionDuration={600}
				safeAreaInsetBottom={false}
			>
				<Test />
			</ConfigProvider>,
		);

		expect(getConfirmLocale()).toEqual(zhCN.dialog);
		expect(container).toMatchSnapshot();
	});

	it('test-inheritance', async () => {
		function Test() {
			const context = useContext(ConfigProvider.Context);

			const count = useCreation<number>(
				(prev) => {
					return (prev || 0) + 1;
				},
				[...Object.values(context)],
			);

			return (
				<pre>
					{JSON.stringify({
						count,
						...context,
						locale: context.locale.locale,
					})}
				</pre>
			);
		}

		const { container, rerender } = render(
			<ConfigProvider
				locale={zhCN}
				transitionDuration={600}
				safeAreaInsetBottom={true}
			>
				<ConfigProvider locale={zhCN} transitionDuration={500}>
					<Test />
				</ConfigProvider>
			</ConfigProvider>,
		);

		expect(container).toMatchSnapshot();

		rerender(
			<ConfigProvider locale={zhCN} safeAreaInsetBottom={true}>
				<ConfigProvider locale={zhCN} transitionDuration={500}>
					<Test />
				</ConfigProvider>
			</ConfigProvider>,
		);

		expect(container).toMatchSnapshot();
	});
});
