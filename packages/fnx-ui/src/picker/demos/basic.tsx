import React from 'react';
import Picker from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Field from '../../field';
import Popup from '../../popup';
import Toast from '../../toast';
import { Dictionary } from '../../utils/interface';

const I18N_DATA: Dictionary<Dictionary> = {
	'zh-CN': {
		picker: [
			'中国',
			'美国',
			'英国',
			'德国',
			'法国',
			'意大利',
			'日本',
			'西班牙',
		],
		multi: [
			['周一', '周二', '周三', '周四', '周五', '周六', '周天'],
			['上午', '下午', '晚上'],
		],
		cascade: [
			{
				label: '中国',
				children: [
					{
						label: '北京',
						children: [{ label: '海淀区' }, { label: '朝阳区' }],
					},
					{
						label: '上海',
						children: [{ label: '闸北区' }, { label: '静安区' }],
					},
				],
			},
			{
				label: '美国',
				children: [
					{
						label: '纽约',
						children: [{ label: '曼哈顿' }, { label: '布鲁克林' }],
					},
					{
						label: '加利福尼亚',
						children: [{ label: '洛杉矶' }, { label: '旧金山' }],
					},
				],
			},
		],
	},
	'en-US': {
		picker: [
			'China',
			'United States',
			'United Kingdom',
			'Germany',
			'France',
			'Italy',
			'Japan',
			'Spain',
		],
		multi: [
			[
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
				'Sunday',
			],
			['Morning', 'Afternoon', 'Evening'],
		],
		cascade: [
			{
				label: 'China',
				children: [
					{
						label: 'Beijing',
						children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
					},
					{
						label: 'Shanghai',
						children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
					},
				],
			},
			{
				label: 'United State',
				children: [
					{
						label: 'New York',
						children: [
							{ label: 'Manhattan' },
							{ label: 'Brooklyn' },
						],
					},
					{
						label: 'California',
						children: [
							{ label: 'Los Angeles' },
							{ label: 'San Francisco' },
						],
					},
				],
			},
		],
	},
};

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',
		title: '标题',
		toast: (value: string) => `当前值：${value}`,
		defaultValue: '默认选中项',
		multiple: '多列选择',
		cascade: '级联选择',
		loading: '加载状态',
		withPopup: '搭配弹出层使用',
		city: '城市',
		chooseCity: '选择城市',
		customChildrenKey: '自定义 Columns 结构',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		title: 'Title',
		toast: (value: string) => `Value：${value}`,
		defaultValue: 'Default Value',
		multiple: 'Multiple Columns',
		cascade: 'Cascade',
		loading: 'Loading',
		withPopup: 'With Popup',
		city: 'City',
		chooseCity: 'Choose City',
		customChildrenKey: 'Custom Columns Fields',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const [data] = useDemoTranslate(I18N_DATA, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Picker
					data={data.picker}
					title={i18n.title}
					onChange={(v) => {
						Toast.show(i18n.toast(v));
					}}
				/>
			</DemoBlock>

			<DemoBlock title={i18n.defaultValue} cardMode>
				<Picker
					data={[
						'中国',
						'美国',
						{ disabled: true, label: '英国', value: '英国' },
						'德国',
						'法国',
						'意大利',
						'日本',
						'西班牙',
					]}
					defaultValue={data.picker[2]}
					title={i18n.title}
					onChange={(v) => {
						Toast.show(i18n.toast(v));
					}}
				/>
			</DemoBlock>

			<DemoBlock title={i18n.defaultValue} cardMode>
				<Picker.Multi
					data={data.multi}
					defaultValue={[data.multi[0][2], data.multi[1][1]]}
					title={i18n.title}
				/>
			</DemoBlock>

			<DemoBlock title={i18n.cascade} cardMode>
				<Picker.Cascade
					data={data.cascade}
					title={i18n.title}
					dataNames={{ value: 'label' }}
				/>
			</DemoBlock>

			<DemoBlock title={i18n.loading} cardMode>
				<Picker.Multi loading data={data.multi} title={i18n.title} />
			</DemoBlock>

			<DemoBlock title={i18n.withPopup} cardMode>
				<Popup.Select<string>
					select={<Picker data={data.picker} title={i18n.title} />}
				>
					{(value) => (
						<Field clickable label={i18n.city}>
							<Field.Input
								readOnly={true}
								value={value || i18n.chooseCity}
							/>
						</Field>
					)}
				</Popup.Select>
			</DemoBlock>

			<DemoBlock title={i18n.customChildrenKey} cardMode>
				<Picker.Cascade
					data={data.cascade}
					title={i18n.title}
					dataNames={{
						label: 'label',
						value: 'label',
						children: 'children',
					}}
					onConfirm={(v, o) => {
						console.log(v, o);
					}}
				/>
			</DemoBlock>
		</>
	);
}
