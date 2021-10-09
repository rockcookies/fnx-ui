import React, { FC, Suspense, useCallback, useMemo, useState } from 'react';
import { useRouteMatch } from 'umi';
import pkg from '../../package.json';
import { Dictionary } from '../../src/utils/interface';
import { createBEM } from '../../src/utils/namespace';
import configResponsive from '../hooks/config-responsive';
import useTheme from '../hooks/use-theme';
import Index from '../pages/Index';
import SITE_DATA from '../site-data';
import { SiteCategory, SiteMenu } from '../site-protocol';
import { SiteContext } from './context';
import './index.less';
import SiteHeader from './SiteHeader';
import SideMenuTree from './SiteMenuTree';

const bem = createBEM('site');

const useResponsive = configResponsive({
	xs: 575,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1600,
});

const Layout: FC = () => {
	const [responsive] = useResponsive();

	const matches = useRouteMatch<Dictionary<string | undefined>>(
		'/:locale/:category?/:menu?',
	);

	const params = matches?.params || {};

	// 语言
	const locale = useMemo<'zh-CN' | 'en-US'>(
		() => (params.locale === 'zh-CN' ? 'zh-CN' : 'en-US'),
		[params.locale],
	);

	// 主题
	const [theme, _setTheme] = useState<'dark' | 'light'>(() => {
		const theme = localStorage.getItem('theme');

		if (theme) {
			return theme === 'dark' ? 'dark' : 'light';
		}

		const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return dark ? 'dark' : 'light';
	});

	const setTheme = useCallback((theme: 'dark' | 'light') => {
		localStorage.setItem('theme', theme);
		_setTheme(theme);
	}, []);

	// 分类
	const category = useMemo<SiteCategory | undefined>(() => {
		const categoryIdx =
			params.category != null
				? SITE_DATA.findIndex(({ key }) => key === params.category)
				: -1;

		return SITE_DATA[categoryIdx];
	}, [params.category]);

	// 菜单
	const menu = useMemo<SiteMenu | undefined>(() => {
		if (params.menu != null) {
			for (const { children } of category.children || []) {
				for (const menu of children || []) {
					if (menu.key === params.menu) {
						return menu;
					}
				}
			}
		}
	}, [category, params.menu]);

	// 设置主题
	useTheme(theme);

	const renderFooter = () => {
		return (
			<footer className={bem('footer')}>
				<div className={bem('copyright')}>
					FNX UI {pkg.version} · Made by
					<a
						href="https://github.com/Rockcookies"
						target="_blank"
						rel="noopener noreferrer"
					>
						RockCookies
					</a>
				</div>
			</footer>
		);
	};

	return (
		<SiteContext.Provider
			value={{
				locale,
				responsive,
				theme,
				setTheme,
				category,
				menu,
			}}
		>
			<section
				className={bem({
					mobile: !responsive.md,
					'layout-mode': category == null,
				})}
			>
				<SiteHeader />
				<SideMenuTree className={bem('aside')} />
				<div className={bem('main')}>
					<div className={bem('content')}>
						{category ? (
							<Suspense fallback={<></>}>
								<category.component />
							</Suspense>
						) : (
							<Index />
						)}
					</div>
					{renderFooter()}
				</div>
			</section>
		</SiteContext.Provider>
	);
};

Layout.displayName = 'Layout';

export default Layout;
