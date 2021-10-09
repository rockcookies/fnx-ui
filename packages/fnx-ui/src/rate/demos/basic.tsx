import React from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Toast from '../../toast';
import { Dictionary } from '../../utils/interface';
import Rate from '../index';

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',
		halfStar: '半星',
		disabled: '禁用状态',
		customIcon: '自定义图标',
		customStyle: '自定义样式',
		customCount: '自定义数量',
		readonly: '只读状态',
		changeEvent: '监听 change 事件',
		toastContent: (value: number) => `当前值：${value}`,
	},
	'en-US': {
		basicUsage: 'Basic usage',
		disabled: 'Disabled',
		customIcon: 'Custom Icon',
		customStyle: 'Custom Style',
		customCount: 'Custom Count',
		readonly: 'Readonly',
		readonlyHalfStar: 'Readonly Half Star',
		changeEvent: 'Change Event',
		toastContent: (value: number) => `current value：${value}`,
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Rate defaultValue={3} />
			</DemoBlock>
			<DemoBlock title={i18n.customIcon} cardMode>
				<Rate character="好" defaultValue={3} />
			</DemoBlock>
			<DemoBlock title={i18n.customStyle} cardMode>
				<Rate color="var(--fnx-primary-color)" defaultValue={2} />
			</DemoBlock>
			<DemoBlock title={i18n.halfStar} cardMode>
				<Rate defaultValue={2.5} allowHalf />
			</DemoBlock>
			<DemoBlock title={i18n.customCount} cardMode>
				<Rate defaultValue={4} count={6} />
			</DemoBlock>
			<DemoBlock title={i18n.disabled} cardMode>
				<Rate defaultValue={3} disabled />
			</DemoBlock>
			<DemoBlock title={i18n.readonly} cardMode>
				<Rate defaultValue={3} readonly />
			</DemoBlock>
			<DemoBlock title={i18n.changeEvent} cardMode>
				<Rate
					defaultValue={2}
					onChange={(v) => {
						Toast.show(i18n.toastContent(v));
					}}
				/>
			</DemoBlock>
		</>
	);
}
