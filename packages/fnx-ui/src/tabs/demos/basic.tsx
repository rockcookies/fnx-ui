import React from 'react';
import Tabs from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Toast from '../../toast';
import { Dictionary } from '../../utils/interface';
import './basic.less';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		tab: '标签',
		content: '内容',
		swipeTabs: '标签栏滚动',
		disabledTabs: '禁用标签',
		clickEvent: '点击事件',
		sticky: '粘性布局',
		title7: '自定义标签',
		switchAnimation: '切换动画',
		swipe: '滑动切换',
	},
	'en-US': {
		basicUsage: 'basic Usage',
		tab: 'Tab',
		content: 'content of tab',
		swipeTabs: 'Swipe Tabs',
		disabledTabs: 'Disabled Tab',
		clickEvent: 'Click Event',
		sticky: 'Sticky',
		title7: 'Custom Tab',
		switchAnimation: 'Switch Animation',
		swipe: 'Swipeable',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Tabs defaultActiveKey="3">
					{[1, 2, 3, 4, 5].map((key) => {
						return (
							<Tabs.Panel
								key={key}
								title={`${i18n.tab}-- ${key}`}
							>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.swipeTabs}>
				<Tabs>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((key) => {
						return (
							<Tabs.Panel key={key} title={`${i18n.tab} ${key}`}>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.disabledTabs}>
				<Tabs>
					{[1, 2, 3].map((key) => {
						return (
							<Tabs.Panel
								key={key}
								disabled={key === 2}
								title={`${i18n.tab} ${key}`}
							>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.clickEvent}>
				<Tabs
					onTabClick={(_, item) => {
						Toast.show(`${i18n.tab} ${item.key}`);
					}}
				>
					{' '}
					{[1, 2].map((key) => {
						return (
							<Tabs.Panel key={key} title={`${i18n.tab} ${key}`}>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.sticky}>
				<Tabs sticky>
					{[1, 2, 3, 4].map((key) => {
						return (
							<Tabs.Panel key={key} title={`${i18n.tab} ${key}`}>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.switchAnimation}>
				<Tabs animated>
					{[1, 2, 3, 4].map((key) => {
						return (
							<Tabs.Panel key={key} title={`${i18n.tab} ${key}`}>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.swipe}>
				<Tabs swipeable defaultActiveKey="2">
					{[1, 2, 3, 4].map((key) => {
						return (
							<Tabs.Panel
								key={`${key}`}
								title={`${i18n.tab} ${key}`}
							>
								{`${i18n.content} ${key}`}
							</Tabs.Panel>
						);
					})}
				</Tabs>
			</DemoBlock>
		</>
	);
}
