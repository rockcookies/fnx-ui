/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Empty from '..';
// @ts-ignore
import busyImg from '../../../site/assets/empty-busy.svg';
// @ts-ignore
import disconnectedImg from '../../../site/assets/empty-disconnected.svg';
// @ts-ignore
import notFoundImg from '../../../site/assets/empty-not-found.svg';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Tabs from '../../tabs';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-empty');

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',
		title: '前方拥堵',
		description: '刷新试试',
		customImage: '自定义图片',
		customChildren: '底部内容',
		button: '按钮',
		tabs: {
			default: {
				tab: '默认',
				description: '页面遇到一些小问题',
				// description: '待会来试试',
			},
			disconnected: {
				tab: '网络异常',
				description: '网络有点忙',
				// description: '动动手指帮忙修复',
				image: disconnectedImg,
			},
			empty: {
				tab: '未找到',
				description: '没有找到你需要的东西',
				// description: '找找其他的吧',
				image: notFoundImg,
			},
			busy: {
				tab: '繁忙',
				description: '前方拥堵',
				// description: '刷新试试',
				image: busyImg,
			},
		},
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		title: 'Oops, not loading',
		description: 'Try to refresh the page',
		customImage: 'Custom Image',
		customChildren: 'Bottom Content',
		button: 'Button',
		tabs: {
			default: {
				tab: 'Default',
				description: 'Oops, something went wrong',
				// description: 'Please wait a minute and try again',
			},
			disconnected: {
				tab: 'Disconnected',
				description: 'Network is busy',
				// description: 'Try to refresh the page',
				image: disconnectedImg,
			},
			empty: {
				tab: 'Empty',
				description: "Hmm, couldn't find that...",
				// description: 'Want to try a new search?',
				image: notFoundImg,
			},
			busy: {
				tab: 'Busy',
				description: 'Oops, not loading',
				// description: 'Try to refresh the page',
				image: busyImg,
			},
		},
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Empty description={i18n.description} />
			</DemoBlock>
			<DemoBlock title={i18n.customImage}>
				<Tabs>
					{['default', 'disconnected', 'empty', 'busy'].map(
						(type) => {
							const { tab: title, ...props } = i18n.tabs[type];

							return (
								<Tabs.Panel
									className={bem('tab-panel')}
									key={type}
									title={title}
								>
									<Empty {...props} />
								</Tabs.Panel>
							);
						},
					)}
				</Tabs>
			</DemoBlock>
			<DemoBlock title={i18n.customChildren}>
				<Empty title={i18n.title} description={i18n.description}>
					<Button
						type="primary"
						className={bem('button')}
						shape="radius"
					>
						{i18n.button}
					</Button>
				</Empty>
			</DemoBlock>
		</>
	);
}
