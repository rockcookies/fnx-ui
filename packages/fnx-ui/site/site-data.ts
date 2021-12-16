import { lazy } from 'react';
import { SiteCategory, SiteMenuGroup } from './site-protocol';

const SITE_COMPONENTS: SiteMenuGroup[] = [
	{
		title: 'Basic Components',
		titleCN: '基本组件',
		children: [
			{
				key: 'button',
				title: 'Button',
				titleCN: '按钮',
				markdown: () => import('../src/button/index.en-US.md'),
				markdownCN: () => import('../src/button/index.zh-CN.md'),
			},
			{
				key: 'cell',
				title: 'Cell',
				titleCN: '单元格',
				markdown: () => import('../src/cell/index.en-US.md'),
				markdownCN: () => import('../src/cell/index.zh-CN.md'),
			},
			{
				key: 'icon',
				title: 'Icon',
				titleCN: '图标',
				markdown: () => import('../src/icon/index.en-US.md'),
				markdownCN: () => import('../src/icon/index.zh-CN.md'),
			},
			{
				key: 'image',
				title: 'Image',
				titleCN: '图片',
				markdown: () => import('../src/image/index.en-US.md'),
				markdownCN: () => import('../src/image/index.zh-CN.md'),
			},
			{
				key: 'layout',
				title: 'Layout',
				titleCN: '布局',
				markdown: () => import('../src/col/index.en-US.md'),
				markdownCN: () => import('../src/col/index.zh-CN.md'),
			},
			{
				key: 'popup',
				title: 'Popup',
				titleCN: '弹出层',
				markdown: () => import('../src/popup/index.en-US.md'),
				markdownCN: () => import('../src/popup/index.zh-CN.md'),
			},
			{
				key: 'toast',
				title: 'Toast',
				titleCN: '轻提示',
				markdown: () => import('../src/toast/index.en-US.md'),
				markdownCN: () => import('../src/toast/index.zh-CN.md'),
			},
			{
				key: 'config-provider',
				title: 'ConfigProvider',
				titleCN: '全集配置',
				markdown: () => import('../src/config-provider/index.en-US.md'),
				markdownCN: () =>
					import('../src/config-provider/index.zh-CN.md'),
			},
		],
	},
	{
		title: 'Form Components',
		titleCN: '表单组件',
		children: [
			{
				key: 'calendar',
				title: 'Calendar',
				titleCN: '日历',
				markdown: () => import('../src/calendar/index.en-US.md'),
				markdownCN: () => import('../src/calendar/index.zh-CN.md'),
			},
			{
				key: 'cascader',
				title: 'Cascader',
				titleCN: '级联选择',
				markdown: () => import('../src/cascader/index.en-US.md'),
				markdownCN: () => import('../src/cascader/index.zh-CN.md'),
			},
			{
				key: 'checkbox',
				title: 'Checkbox',
				titleCN: '复选框',
				markdown: () => import('../src/checkbox/index.en-US.md'),
				markdownCN: () => import('../src/checkbox/index.zh-CN.md'),
			},
			{
				key: 'date-picker',
				title: 'DatePicker',
				titleCN: '时间选择',
				markdown: () => import('../src/date-picker/index.en-US.md'),
				markdownCN: () => import('../src/date-picker/index.zh-CN.md'),
			},
			{
				key: 'field',
				title: 'Field',
				titleCN: '输入框',
				markdown: () => import('../src/field/index.en-US.md'),
				markdownCN: () => import('../src/field/index.zh-CN.md'),
			},
			{
				key: 'form',
				title: 'Form',
				titleCN: '表单',
				markdown: () => import('../src/form/index.en-US.md'),
				markdownCN: () => import('../src/form/index.zh-CN.md'),
			},
			{
				key: 'switch',
				title: 'Switch',
				titleCN: '开关',
				markdown: () => import('../src/switch/index.en-US.md'),
				markdownCN: () => import('../src/switch/index.zh-CN.md'),
			},
			{
				key: 'uploader',
				title: 'Uploader',
				titleCN: '文件上传',
				markdown: () => import('../src/uploader/index.en-US.md'),
				markdownCN: () => import('../src/uploader/index.zh-CN.md'),
			},
			{
				key: 'stepper',
				title: 'Stepper',
				titleCN: '步进器',
				markdown: () => import('../src/stepper/index.en-US.md'),
				markdownCN: () => import('../src/stepper/index.zh-CN.md'),
			},
			{
				key: 'picker',
				title: 'Picker',
				titleCN: '选择器',
				markdown: () => import('../src/picker/index.en-US.md'),
				markdownCN: () => import('../src/picker/index.zh-CN.md'),
			},
			{
				key: 'radio',
				title: 'Radio',
				titleCN: '单选框',
				markdown: () => import('../src/radio/index.en-US.md'),
				markdownCN: () => import('../src/radio/index.zh-CN.md'),
			},
			{
				key: 'rate',
				title: 'Rate',
				titleCN: '评分',
				markdown: () => import('../src/rate/index.en-US.md'),
				markdownCN: () => import('../src/rate/index.zh-CN.md'),
			},
		],
	},
	{
		title: 'Action Components',
		titleCN: '反馈组件',
		children: [
			{
				key: 'dialog',
				title: 'Dialog',
				titleCN: '对话框',
				markdown: () => import('../src/dialog/index.en-US.md'),
				markdownCN: () => import('../src/dialog/index.zh-CN.md'),
			},
			{
				key: 'error-boundary',
				title: 'ErrorBoundary',
				titleCN: '错误边界',
				markdown: () => import('../src/error-boundary/index.en-US.md'),
				markdownCN: () =>
					import('../src/error-boundary/index.zh-CN.md'),
			},
			{
				key: 'loading',
				title: 'Loading',
				titleCN: '加载',
				markdown: () => import('../src/loading/index.en-US.md'),
				markdownCN: () => import('../src/loading/index.zh-CN.md'),
			},
			{
				key: 'notify',
				title: 'Notify',
				titleCN: '消息通知',
				markdown: () => import('../src/notify/index.en-US.md'),
				markdownCN: () => import('../src/notify/index.zh-CN.md'),
			},
			{
				key: 'overlay',
				title: 'Overlay',
				titleCN: '遮罩层',
				markdown: () => import('../src/overlay/index.en-US.md'),
				markdownCN: () => import('../src/overlay/index.zh-CN.md'),
			},
			{
				key: 'pull-refresh',
				title: 'PullRefresh',
				titleCN: '下拉刷新',
				markdown: () => import('../src/pull-refresh/index.en-US.md'),
				markdownCN: () => import('../src/pull-refresh/index.zh-CN.md'),
			},
		],
	},
	{
		title: 'Display Components',
		titleCN: '展示组件',
		children: [
			{
				key: 'badge',
				title: 'Badge',
				titleCN: '徽标',
				markdown: () => import('../src/badge/index.en-US.md'),
				markdownCN: () => import('../src/badge/index.zh-CN.md'),
			},
			{
				key: 'circle',
				title: 'Circle',
				titleCN: '环形进度条',
				markdown: () => import('../src/circle/index.en-US.md'),
				markdownCN: () => import('../src/circle/index.zh-CN.md'),
			},
			{
				key: 'collapse',
				title: 'Collapse',
				titleCN: '折叠面板',
				markdown: () => import('../src/collapse/index.en-US.md'),
				markdownCN: () => import('../src/collapse/index.zh-CN.md'),
			},
			{
				key: 'divider',
				title: 'Divider',
				titleCN: '分隔线',
				markdown: () => import('../src/divider/index.en-US.md'),
				markdownCN: () => import('../src/divider/index.zh-CN.md'),
			},
			{
				key: 'list',
				title: 'List',
				titleCN: '列表',
				markdown: () => import('../src/list/index.en-US.md'),
				markdownCN: () => import('../src/list/index.zh-CN.md'),
			},
			{
				key: 'skeleton',
				title: 'Skeleton',
				titleCN: '骨架屏',
				markdown: () => import('../src/skeleton/index.en-US.md'),
				markdownCN: () => import('../src/skeleton/index.zh-CN.md'),
			},
			{
				key: 'sticky',
				title: 'Sticky',
				titleCN: '粘性布局',
				markdown: () => import('../src/sticky/index.en-US.md'),
				markdownCN: () => import('../src/sticky/index.zh-CN.md'),
			},
			{
				key: 'swipe',
				title: 'Swipe',
				titleCN: '轮播',
				markdown: () => import('../src/swipe/index.en-US.md'),
				markdownCN: () => import('../src/swipe/index.zh-CN.md'),
			},
			{
				key: 'notice-bar',
				title: 'NoticeBar',
				titleCN: '通知栏',
				markdown: () => import('../src/notice-bar/index.en-US.md'),
				markdownCN: () => import('../src/notice-bar/index.zh-CN.md'),
			},
			{
				key: 'tag',
				title: 'Tag',
				titleCN: '标签',
				markdown: () => import('../src/tag/index.en-US.md'),
				markdownCN: () => import('../src/tag/index.zh-CN.md'),
			},
		],
	},
	{
		title: 'Navigation Components',
		titleCN: '导航组件',
		children: [
			{
				key: 'grid',
				title: 'Grid',
				titleCN: '宫格',
				markdown: () => import('../src/grid/index.en-US.md'),
				markdownCN: () => import('../src/grid/index.zh-CN.md'),
			},
			{
				key: 'pagination',
				title: 'Pagination',
				titleCN: '分页',
				markdown: () => import('../src/pagination/index.en-US.md'),
				markdownCN: () => import('../src/pagination/index.zh-CN.md'),
			},
			{
				key: 'tabs',
				title: 'Tabs',
				titleCN: '标签页',
				markdown: () => import('../src/tabs/index.en-US.md'),
				markdownCN: () => import('../src/tabs/index.zh-CN.md'),
			},
		],
	},
];

const SITE_DOCS: SiteMenuGroup[] = [
	{
		title: 'Introduction',
		titleCN: '介绍',
		children: [
			{
				key: 'introduction',
				title: 'FNX UI',
				titleCN: 'FNX UI',
				markdown: () => import('./docs/introduction.en-US.md'),
				markdownCN: () => import('./docs/introduction.zh-CN.md'),
			},
		],
	},
	{
		title: 'Guides',
		titleCN: '指南',
		children: [
			{
				key: 'getting-started',
				title: 'Getting Started',
				titleCN: '快速上手',
				markdown: () => import('./docs/getting-started.en-US.md'),
				markdownCN: () => import('./docs/getting-started.zh-CN.md'),
			},
			{
				key: 'import-on-demand',
				title: 'Import on Demand',
				titleCN: '按需引入',
				markdown: () => import('./docs/import-on-demand.en-US.md'),
				markdownCN: () => import('./docs/import-on-demand.zh-CN.md'),
			},
			{
				key: 'supported-platforms',
				title: 'Supported Platforms',
				titleCN: '支持的平台',
				markdown: () => import('./docs/supported-platforms.en-US.md'),
				markdownCN: () => import('./docs/supported-platforms.zh-CN.md'),
			},
			{
				key: 'i18n',
				title: 'Internationalization',
				titleCN: '国际化',
				markdown: () => import('./docs/i18n.en-US.md'),
				markdownCN: () => import('./docs/i18n.zh-CN.md'),
			},
		],
	},
];

const SITE_DATA: SiteCategory[] = [
	{
		key: 'docs',
		title: 'Docs',
		titleCN: '文档',
		children: SITE_DOCS,
		component: lazy(() => import('./pages/Docs/index')),
	},
	{
		key: 'components',
		title: 'Components',
		titleCN: '组件',
		children: SITE_COMPONENTS,
		component: lazy(() => import('./pages/Components/index')),
	},
];

export default SITE_DATA;
