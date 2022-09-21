import '@vant/touch-emulator';
import React, { FC, LazyExoticComponent, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ConfigProvider } from '../../../src';
import '../../../src/index.less';
import enUS from '../../../src/locale/en-US';
import zhCN from '../../../src/locale/zh-CN';
import { classnames, createBEM } from '../../../src/utils/namespace';
import { DEMO_DATA } from '../../demo-data';
import useTheme from '../../hooks/use-theme';
import DemoContext from './context';
import './index.less';

const bem = createBEM('demo');

const Demo: FC = () => {
	const params = useParams();

	const {
		demo: Cmp,
		locale,
		key,
		theme,
	} = useMemo(() => {
		const key = params.component;
		const locale = params.locale === 'zh-CN' ? 'zh-CN' : 'en-US';
		const demo: LazyExoticComponent<any> | undefined = key
			? DEMO_DATA[key]
			: undefined;
		const theme = params.theme === 'dark' ? 'dark' : 'light';

		return {
			demo,
			locale,
			key,
			theme,
		};
	}, [params]);

	useTheme(theme);

	return (
		<React.StrictMode>
			<DemoContext.Provider value={{ locale, theme }}>
				<ConfigProvider locale={locale === 'zh-CN' ? zhCN : enUS}>
					<section
						className={classnames(
							bem({ [`${theme}`]: theme !== 'light' }),
							`demo-${key}`,
						)}
					>
						{Cmp != null && (
							<Suspense fallback={<></>}>
								<Cmp />
							</Suspense>
						)}
					</section>
				</ConfigProvider>
			</DemoContext.Provider>
		</React.StrictMode>
	);
};

Demo.displayName = 'Demo';

export default Demo;
