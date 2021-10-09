import React from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import Collapse from '..';
import Icon from '../../icon';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		paragraph: '一去二三里烟村四五家亭台六七座八九十支花',
		title: '标题',
		basicUsage: '基础用法',
		accordion: '手风琴',
		disable: '禁用状态',
		ghost: '幽灵模式',
		custom: '自定义内容',
		content: '内容',
	},
	'en-US': {
		paragraph: 'The quick brown fox jumps over the lazy dog',
		title: 'Title',
		basicUsage: 'Basic Usage',
		accordion: 'Accordion',
		disable: 'Disabled',
		ghost: 'Ghost Mode',
		custom: 'Custom Content',
		content: 'content',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const children = new Array(3).fill(0).map((_, idx) => (
		<Collapse.Item key={idx} title={`${i18n.title} 1`}>
			{i18n.paragraph}
		</Collapse.Item>
	));

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Collapse defaultActiveKey="0">{children}</Collapse>
			</DemoBlock>
			<DemoBlock title={i18n.accordion}>
				<Collapse accordion={true} defaultActiveKey="0">
					{children}
				</Collapse>
			</DemoBlock>
			<DemoBlock title={i18n.ghost}>
				<Collapse ghost={true} defaultActiveKey="0">
					{children}
				</Collapse>
			</DemoBlock>
			<DemoBlock title={i18n.disable}>
				<Collapse>
					<Collapse.Item title={`${i18n.title} 1`}>
						{i18n.paragraph}
					</Collapse.Item>
					<Collapse.Item disabled={true} title={`${i18n.title} 2`}>
						{i18n.paragraph}
					</Collapse.Item>
					<Collapse.Item disabled={true} title={`${i18n.title} 3`}>
						{i18n.paragraph}
					</Collapse.Item>
				</Collapse>
			</DemoBlock>
			<DemoBlock title={i18n.custom}>
				<Collapse>
					<Collapse.Item
						title={`${i18n.title} 1`}
						headerProps={{ leftIcon: <Icon name="success" /> }}
					>
						{i18n.paragraph}
					</Collapse.Item>
					<Collapse.Item
						title={`${i18n.title} 2`}
						headerProps={{
							leftIcon: <Icon name="success" />,
							content: i18n.content,
						}}
					>
						{i18n.paragraph}
					</Collapse.Item>
				</Collapse>
			</DemoBlock>
		</>
	);
}
