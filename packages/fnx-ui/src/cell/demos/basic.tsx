import React from 'react';
import Cell from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		content: '内容',
		cell: '单元格',
		groupTitle: '分组标题',
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
		cell: 'Cell title',
		groupTitle: 'Group Title',
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
				<Cell title={i18n.cell} description={i18n.desc}>
					{i18n.content}
				</Cell>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.groupTitle}>
				<Cell.Group title={`${i18n.groupTitle} 1`}>
					<Cell title={i18n.cell}>{i18n.content}</Cell>
					<Cell title={i18n.cell} description={i18n.desc}>
						{i18n.content}
					</Cell>
				</Cell.Group>

				<Cell.Group title={`${i18n.groupTitle} 2`} insert>
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
				<Cell title={i18n.cell} leftIcon={<Icon name="fail" />}>
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
