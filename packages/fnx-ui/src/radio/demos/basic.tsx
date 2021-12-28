/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import Radio from '..';
// @ts-ignore
import demoDogeReverse from '../../../site/assets/demo-doge-reverse.png';
// @ts-ignore
import demoDoge from '../../../site/assets/demo-doge.png';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-radio');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		disabled: '禁用状态',
		radio: '单选框',
		customShapeColor: '自定义形状与颜色',
		customIcon: '自定义图标',
		customIconSize: '自定义大小',
		horizontal: '水平排列',
		disableLabel: '禁用文本点击',
		insideACell: '搭配单元格组件使用',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		disabled: 'Disable',
		radio: 'Radio',
		customShapeColor: 'Custom Shape & Color',
		customIcon: 'Custom Icon',
		customIconSize: 'Custom Icon Size',
		horizontal: 'Horizontal',
		disableLabel: 'Disable label click',
		insideACell: 'Inside a Cell',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [radio, setRadio] = useState<number>(1);

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<Radio.Group defaultValue={1}>
					<Radio value={1}>{i18n.radio} 1</Radio>
					<Radio value={2}>{i18n.radio} 2</Radio>
				</Radio.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.disabled}>
				<Radio.Group defaultValue={2} disabled>
					<Radio value={1}>{i18n.radio} 1</Radio>
					<Radio value={2}>{i18n.radio} 2</Radio>
				</Radio.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customShapeColor}>
				<Radio.Group defaultValue={1}>
					<Radio
						value={1}
						iconShape="square"
						iconCheckedColor="var(--fnx-danger-color)"
					>
						{i18n.radio} 1
					</Radio>
					<Radio value={2}>{i18n.radio} 2</Radio>
				</Radio.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customIconSize}>
				<Radio iconSize={20} defaultChecked>
					{i18n.customIconSize}
				</Radio>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customIcon}>
				<Radio.Group
					defaultValue={2}
					iconShape="plain"
					icon={<img className={bem('icon')} src={demoDoge} />}
					checkedIcon={
						<img className={bem('icon')} src={demoDogeReverse} />
					}
				>
					<Radio value={1}>{i18n.radio} 1</Radio>
					<Radio value={2}>{i18n.radio} 2</Radio>
				</Radio.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.disableLabel}>
				<Radio labelDisabled defaultChecked>
					{i18n.radio}
				</Radio>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.horizontal}>
				<Radio.Group defaultValue={2} direction="horizontal">
					<Radio value={1}>{i18n.radio} 1</Radio>
					<Radio value={2}>{i18n.radio} 2</Radio>
				</Radio.Group>
			</DemoBlock>
			<DemoBlock title={i18n.insideACell}>
				<Cell.Group inset>
					{[1, 2, 3].map((key) => {
						return (
							<Cell
								key={key}
								clickable
								title={`${i18n.radio} ${key}`}
								rightIcon={<Radio checked={radio === key} />}
								onClick={() => {
									setRadio(key);
								}}
							/>
						);
					})}
				</Cell.Group>
			</DemoBlock>
		</>
	);
}
