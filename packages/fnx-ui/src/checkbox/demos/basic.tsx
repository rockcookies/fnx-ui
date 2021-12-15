/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react';
import Checkbox from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import './basic.less';
// @ts-ignore
import demoDogeReverse from '../../../site/assets/demo-doge-reverse.png';
// @ts-ignore
import demoDoge from '../../../site/assets/demo-doge.png';
import { createBEM } from '../../utils/namespace';
import Button from '../../button';
import { CheckboxGroupRef, CheckboxRef } from '../interface';
import Cell from '../../cell';

const bem = createBEM('demo-checkbox');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		disabled: '禁用状态',
		checkbox: '复选框',
		customShapeColor: '自定义形状与颜色',
		customIcon: '自定义图标',
		customIconSize: '自定义大小',
		checkboxGroup: '复选框组',
		maxCount: '限制最大可选数',
		toggleAll: '全选与反选',
		checkAll: '全选',
		inverse: '反选',
		horizontal: '水平排列',
		disableLabel: '禁用文本点击',
		insideACell: '搭配单元格组件使用',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		disabled: 'Disable',
		checkbox: 'Checkbox',
		customShapeColor: 'Custom Shape & Color',
		customIcon: 'Custom Icon',
		customIconSize: 'Custom Icon Size',
		checkboxGroup: 'Checkbox Group',
		maxCount: 'Maximum amount of checked options',
		toggleAll: 'Toggle All',
		checkAll: 'Check All',
		inverse: 'Inverse',
		horizontal: 'Horizontal',
		disableLabel: 'Disable label click',
		insideACell: 'Inside a Cell',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const checkboxGroupRef = useRef<CheckboxGroupRef>(null);
	const checkboxRefs = useRef<Dictionary<CheckboxRef | null>>({});

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<Checkbox defaultChecked>{i18n.checkbox}</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.disabled}>
				<Checkbox disabled>{i18n.checkbox} 1</Checkbox>
				<Checkbox defaultChecked disabled>
					{i18n.checkbox} 2
				</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customShapeColor}>
				<Checkbox
					iconShape="round"
					defaultChecked
					iconCheckedColor="var(--fnx-danger-color)"
				>
					{i18n.checkbox} 1
				</Checkbox>
				<Checkbox defaultChecked>{i18n.checkbox} 2</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customIconSize}>
				<Checkbox iconSize={20} defaultChecked>
					{i18n.checkbox}
				</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customIcon}>
				<Checkbox
					iconShape="plain"
					icon={<img className={bem('icon')} src={demoDoge} />}
					checkedIcon={
						<img className={bem('icon')} src={demoDogeReverse} />
					}
				>
					{i18n.checkbox}
				</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.disableLabel}>
				<Checkbox labelDisabled defaultChecked>
					{i18n.checkbox}
				</Checkbox>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.checkboxGroup}>
				<Checkbox.Group defaultValue={[1]}>
					<Checkbox value={1}>{i18n.checkbox} 1</Checkbox>
					<Checkbox value={2}>{i18n.checkbox} 2</Checkbox>
				</Checkbox.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.horizontal}>
				<Checkbox.Group defaultValue={[2]} direction="horizontal">
					<Checkbox value={1}>{i18n.checkbox} 1</Checkbox>
					<Checkbox value={2}>{i18n.checkbox} 2</Checkbox>
				</Checkbox.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.maxCount}>
				<Checkbox.Group maxCheckedCount={2}>
					<Checkbox value={1}>{i18n.checkbox} 1</Checkbox>
					<Checkbox value={2}>{i18n.checkbox} 2</Checkbox>
					<Checkbox value={3}>{i18n.checkbox} 3</Checkbox>
				</Checkbox.Group>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.toggleAll}>
				<Checkbox.Group ref={checkboxGroupRef}>
					<Checkbox value={1}>{i18n.checkbox} 1</Checkbox>
					<Checkbox value={2}>{i18n.checkbox} 2</Checkbox>
					<Checkbox value={3}>{i18n.checkbox} 3</Checkbox>
				</Checkbox.Group>

				<div className={bem('buttons')}>
					<Button
						type="primary"
						onClick={() =>
							checkboxGroupRef.current?.toggleAll({
								checkAll: true,
							})
						}
					>
						{i18n.checkAll}
					</Button>
					<Button
						type="primary"
						onClick={() => checkboxGroupRef.current?.toggleAll()}
					>
						{i18n.inverse}
					</Button>
				</div>
			</DemoBlock>
			<DemoBlock title={i18n.insideACell}>
				<Cell.Group inset>
					{[1, 2, 3].map((key) => {
						return (
							<Cell
								key={key}
								clickable
								title={`${i18n.checkbox} ${key}`}
								rightIcon={
									<Checkbox
										ref={(ref) => {
											checkboxRefs.current[key] = ref;
										}}
										onClick={(e) => {
											e.stopPropagation();
										}}
									/>
								}
								onClick={() => {
									const ref = checkboxRefs.current[key];

									if (ref) {
										ref.toggle();
									}
								}}
							/>
						);
					})}
				</Cell.Group>
			</DemoBlock>
		</>
	);
}
