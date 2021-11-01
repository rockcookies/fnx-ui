import React from 'react';
import Cell from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Icon from '../../icon';
import Tag from '../../tag';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-cell');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		content: '内容',
		tag: '标签',
		cell: '单元格',
		groupTitle: '分组标题',
		inset: '卡片风格',
		desc: '描述信息',
		basicUsage: '基础用法',
		childrenOnly: '只设置 children',
		clickable: '可点击的',
		leftIcon: '左侧图标',
		rightIcon: '展示箭头',
		itemsAlign: '垂直居中',
	},
	'en-US': {
		content: 'Content',
		tag: 'Tag',
		cell: 'Cell title',
		groupTitle: 'Group Title',
		inset: 'Inset Grouped',
		desc: 'Description',
		basicUsage: 'Basic Usage',
		clickable: 'Clickable',
		childrenOnly: 'Children only',
		leftIcon: 'Left Icon',
		rightIcon: 'Right Icon',
		itemsAlign: 'Vertical center',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Cell title={i18n.cell}>{i18n.content}</Cell>
				<Cell
					title={
						<div className={bem('title')}>
							{i18n.cell}
							<Tag className={bem('title-tag')} type="danger">
								{i18n.tag}
							</Tag>
						</div>
					}
					clickable
					rightIcon={<Icon name="arrow-right" />}
				>
					{i18n.content}
				</Cell>
				<Cell
					leftIcon={<Icon name="success" />}
					title={i18n.cell}
					rightIcon={<Icon name="star-full" />}
				></Cell>
				<Cell title={i18n.cell} description={i18n.desc}>
					{i18n.content}
				</Cell>

				<Cell.Group title={i18n.inset} inset>
					<Cell title={i18n.cell}>{i18n.content}</Cell>
					<Cell title={i18n.cell}>{i18n.content}</Cell>
				</Cell.Group>
			</DemoBlock>
			<DemoBlock title={i18n.clickable}>
				<Cell title={i18n.cell} clickable={true}>
					{i18n.content}
				</Cell>
			</DemoBlock>
			<DemoBlock title={i18n.leftIcon}>
				<Cell title={i18n.cell} leftIcon={<Icon name="success" />}>
					{i18n.content}
				</Cell>
				<Cell title={i18n.cell} leftIcon={<Icon name="star-full" />}>
					{i18n.content}
				</Cell>
			</DemoBlock>
			<DemoBlock title={i18n.rightIcon}>
				<Cell
					title={i18n.cell}
					clickable
					rightIcon={<Icon name="arrow-up" />}
				>
					{i18n.content}
				</Cell>
				<Cell
					title={i18n.cell}
					clickable
					rightIcon={<Icon name="arrow-right" />}
				>
					{i18n.content}
				</Cell>
				<Cell
					title={i18n.cell}
					clickable
					rightIcon={<Icon name="arrow-down" />}
				>
					{i18n.content}
				</Cell>
			</DemoBlock>
			<DemoBlock title={i18n.childrenOnly}>
				<Cell>{i18n.content}</Cell>
			</DemoBlock>
			<DemoBlock title={i18n.groupTitle}>
				<Cell.Group title={`${i18n.groupTitle} 1`}>
					<Cell title={i18n.cell}>{i18n.content}</Cell>
				</Cell.Group>
				<Cell.Group title={`${i18n.groupTitle} 2`}>
					<Cell title={i18n.cell}>{i18n.content}</Cell>
				</Cell.Group>
			</DemoBlock>
			<DemoBlock title={i18n.itemsAlign}>
				<Cell
					itemsAlign="middle"
					title={i18n.cell}
					description={i18n.desc}
				>
					{i18n.content}
				</Cell>
				<Cell
					itemsAlign="bottom"
					title={i18n.cell}
					description={i18n.desc}
				>
					{i18n.content}
				</Cell>
			</DemoBlock>
		</>
	);
}
