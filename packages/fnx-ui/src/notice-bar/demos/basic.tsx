import React from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Icon from '../../icon/index';
import Swipe from '../../swipe/index';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import NoticeBar from '../index';
import './basic.less';

const bem = createBEM('demo-notice-bar');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		text: '人生就像各种各样的巧克力，你永远不会知道那一块属于你',
		shortText: '生生不息，繁荣昌盛',
		basicUsage: '基础用法',
		marqueeMode: '滚动播放',
		ellipsis: '单行省略',
		wrap: '多行展示',
		rightIcon: '右侧图标',
		closeable: '可关闭',
		customStyle: '自定义样式',
		swipe: '垂直滚动',
	},
	'en-US': {
		text: 'Life was like a box of chocolates, you never know what you’re gonna get.',
		shortText: 'Live long and prosper',
		basicUsage: 'Basic usage',
		marqueeMode: 'Marquee Mode',
		ellipsis: 'Ellipsis',
		wrap: 'Wrap Mode',
		rightIcon: 'Right Icon',
		closeable: 'Closeable',
		customStyle: 'Custom Style',
		swipe: 'Vertical Scroll',
	},
};

const SWIPE_DATA = [
	'In My Life',
	'No Reply',
	'Rock And Roll Music',
	'Words of Love',
];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<NoticeBar marquee leftIcon={<Icon name="arrow-left" />}>
					{i18n.text}
				</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.marqueeMode}>
				<NoticeBar marquee>{i18n.text}</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.ellipsis}>
				<NoticeBar ellipsis>{i18n.text}</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.wrap}>
				<NoticeBar>{i18n.text}</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.rightIcon}>
				<NoticeBar ellipsis rightIcon={<Icon name="arrow-right" />}>
					{i18n.shortText}
				</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.closeable}>
				<NoticeBar marquee closeable>
					{i18n.text}
				</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.customStyle}>
				<NoticeBar marquee background="var(--fnx-primary-color)">
					{i18n.text}
				</NoticeBar>
			</DemoBlock>
			<DemoBlock title={i18n.swipe}>
				<NoticeBar
					className={bem('notice')}
					leftIcon={<Icon name="arrow-left" />}
				>
					<Swipe
						autoplay={3000}
						indicator={false}
						vertical
						className={bem('swipe')}
					>
						{SWIPE_DATA.map((t) => (
							<Swipe.Item key={t}>{t}</Swipe.Item>
						))}
					</Swipe>
				</NoticeBar>
			</DemoBlock>
		</>
	);
}
