import { LazyExoticComponent } from 'react';
import { Dictionary } from '../src/utils/interface';

export interface SiteCategory {
	key: string;
	title: string;
	titleCN: string;
	component: LazyExoticComponent<any>;
	children?: SiteMenuGroup[];
}

export interface SiteMenu {
	key: string;
	title: string;
	titleCN: string;
	markdown: () => Promise<any>;
	markdownCN: () => Promise<any>;
}

export interface SiteMenuGroup {
	title: string;
	titleCN: string;
	children?: SiteMenu[];
}

export interface SiteContextData {
	theme: 'dark' | 'light';
	setTheme: (theme: 'dark' | 'light') => void;
	locale: 'zh-CN' | 'en-US';
	menu?: SiteMenu;
	category?: SiteCategory;
	responsive: Dictionary<boolean | undefined>;
}
