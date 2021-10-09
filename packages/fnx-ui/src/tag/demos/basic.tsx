import React from 'react';
import Tag from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import { Dictionary } from '../../utils/interface';
import { TagSize, TagTheme, TagType } from '../interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		tag: '标签',
		type: '类型',
		mark: '标记样式',
		plain: '空心样式',
		round: '圆角样式',
		tagStyle: '样式风格',
		closeable: '可关闭标签',
		smSize: '小号标签',
		lgSize: '大号标签',
		mdSize: '中号标签',
		customSize: '标签大小',
		customColor: '自定义颜色',
		customBgColor: '背景颜色',
		customTextColor: '文字颜色',
		customPlainColor: '空心颜色',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		tag: 'Tag',
		type: '',
		mark: 'Mark style',
		plain: 'Plain style',
		round: 'Round style',
		tagStyle: 'Tag Style',
		closeable: 'Closeable',
		smSize: 'Small Size',
		lgSize: 'Large Size',
		mdSize: 'Medium Size',
		customColor: 'Custom Color',
		customSize: 'Custom Size',
		customBgColor: 'Background Color',
		customTextColor: 'Text Color',
		customPlainColor: 'Plain Color',
	},
};

const TYPES: TagType[] = ['default', 'primary', 'success', 'danger', 'warning'];

const THEMES: TagTheme[] = ['plain', 'round', 'mark'];

const SIZES: TagSize[] = ['sm', 'md', 'lg'];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				{TYPES.map((t) => (
					<Cell key={t} title={`${t} ${i18n.type}`}>
						<Tag type={t}>{i18n.tag}</Tag>
					</Cell>
				))}
			</DemoBlock>
			<DemoBlock cardMode title={i18n.tagStyle}>
				{THEMES.map((t) => (
					<Cell key={t} title={t}>
						<Tag type="primary" theme={t}>
							{i18n.tag}
						</Tag>
					</Cell>
				))}
				<Cell title={i18n.closeable}>
					<Tag type="primary" closeable>
						{i18n.tag}
					</Tag>
				</Cell>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customSize}>
				{SIZES.map((t) => (
					<Cell key={t} title={i18n[`${t}Size`]}>
						<Tag size={t} type="primary">
							{i18n.tag}
						</Tag>
					</Cell>
				))}
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customColor}>
				<Cell title={i18n.customBgColor}>
					<Tag color="#7232dd">{i18n.tag}</Tag>
				</Cell>
				<Cell title={i18n.customTextColor}>
					<Tag color="#ffe1e1" textColor="#ad0000">
						{i18n.tag}
					</Tag>
				</Cell>
				<Cell title={i18n.customTextColor}>
					<Tag color="#7232dd" theme="plain">
						{i18n.tag}
					</Tag>
				</Cell>
			</DemoBlock>
		</>
	);
}
