import React, { FC, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pkg from '../../package.json';
import { createBEM } from '../../src/utils/namespace';
import logo from '../assets/logo.svg?inline=base64';
import SITE_DATA from '../site-data';
import { SiteContext } from './context';
import './SiteHeader.less';
import SideMenuTree from './SiteMenuTree';

const bem = createBEM('site-header');

console.log(logo);

const DARK_ICON = (
	<svg viewBox="0 0 36 36" fill="currentColor" width="1em" height="1em">
		<circle cx="18" cy="18" r="7.9"></circle>
		<rect height="6" rx="0.5" ry="0.5" width="3.6" x="16.2"></rect>
		<rect height="6" rx="0.5" ry="0.5" width="3.6" x="16.2" y="30"></rect>
		<rect height="3.6" rx="0.5" ry="0.5" width="6" y="16.2"></rect>
		<rect height="3.6" rx="0.5" ry="0.5" width="6" x="30" y="16.2"></rect>
		<rect
			height="3.6"
			rx="0.5"
			ry="0.5"
			transform="rotate(-45 29.02 7.02)"
			width="6"
			x="26.02"
			y="5.22"
		></rect>
		<rect
			height="3.6"
			rx="0.5"
			ry="0.5"
			transform="rotate(-45 7.02 29.02)"
			width="6"
			x="4.02"
			y="27.22"
		></rect>
		<rect
			height="6"
			rx="0.5"
			ry="0.5"
			transform="rotate(-45 7 7)"
			width="3.6"
			x="5.2"
			y="4"
		></rect>
		<rect
			height="6"
			rx="0.5"
			ry="0.5"
			transform="rotate(-45 28.98 28.98)"
			width="3.6"
			x="27.18"
			y="25.98"
		></rect>
	</svg>
);

const LIGHT_ICON = (
	<svg viewBox="0 0 36 36" fill="currentColor" width="1em" height="1em">
		<path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2zm1 29.964c-.33.023-.664.036-1 .036a14 14 0 0 1 0-28c.336 0 .67.013 1 .036a22 22 0 0 0 0 27.928z"></path>
	</svg>
);

const MENU_ICON = (
	<svg viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em">
		<path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
	</svg>
);

const SiteHeader: FC = () => {
	const { theme, setTheme, locale, category, menu, responsive } =
		useContext(SiteContext);

	const [asideExpanded, setAsideExpanded] = useState(false);

	const renderLogo = () => {
		return (
			<Link
				className={bem('logo')}
				to={`/${locale}`}
				replace={false}
				onClick={() => setAsideExpanded(false)}
			>
				<img src={logo} />
				<span>FNX UI</span>
			</Link>
		);
	};

	useEffect(() => {
		if (asideExpanded) {
			const body = document.body;

			body.style.overflow = 'hidden';

			return () => {
				body.style.removeProperty('overflow');
			};
		}
	}, [asideExpanded]);

	const renderNav = () => {
		return (
			<>
				{SITE_DATA.map((cate) => {
					const group = (cate.children || [])[0];
					const menu = group ? (group.children || [])[0] : undefined;

					return (
						<li
							className={bem('nav-item', {
								active: category?.key === cate.key,
							})}
							key={cate.key}
						>
							<Link
								to={
									menu
										? `/${locale}/${cate.key}/${menu.key}`
										: `/${locale}`
								}
								replace={false}
							>
								{locale === 'en-US' ? cate.title : cate.titleCN}
							</Link>
						</li>
					);
				})}
				<li className={bem('nav-item')}>
					<a
						href="https://github.com/Rockcookies/fnx-ui"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</li>
				<li className={bem('nav-button')}>
					<Link
						to={
							category && menu
								? `/${locale === 'en-US' ? 'zh-CN' : 'en-US'}/${
										category.key
								  }/${menu.key}`
								: `/${locale === 'en-US' ? 'zh-CN' : 'en-US'}`
						}
						replace={false}
					>
						{locale === 'en-US' ? '中文' : 'English'}
					</Link>
				</li>
				<li className={bem('nav-ico')}>
					<a
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						{theme === 'dark' ? DARK_ICON : LIGHT_ICON}
					</a>
				</li>
				<li>{pkg.version}</li>
			</>
		);
	};

	return (
		<header
			className={bem({
				mobile: !responsive.md,
			})}
		>
			{!responsive.md && (
				<>
					<i
						className={bem('aside-mask', {
							expanded: asideExpanded,
						})}
						onClick={() => setAsideExpanded(false)}
					/>
					<div
						className={bem('aside', { expanded: asideExpanded })}
						onClick={() => setAsideExpanded(false)}
					>
						<div className={bem('aside-container')}>
							<ul className={bem('aside-nav')}>{renderNav()}</ul>
							<SideMenuTree />
						</div>
					</div>
				</>
			)}
			<div className={bem('container')}>
				{!responsive.md && (
					<a
						className={bem('aside-handler')}
						onClick={() => setAsideExpanded(!asideExpanded)}
					>
						{MENU_ICON}
					</a>
				)}

				{renderLogo()}

				<ul className={bem('nav')}>{renderNav()}</ul>
			</div>
		</header>
	);
};

SiteHeader.displayName = 'SiteHeader';

export default SiteHeader;
