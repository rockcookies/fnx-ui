import React from 'react';
import Switch from '../index';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';
import Icon from '../../icon';

const bem = createBEM('demo-switch');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		title: '标题',
		basicUsage: '基本用法',
		disabled: '禁用状态',
		loadingStatus: '加载状态',
		withCell: '搭配单元格使用',
		customChildren: '文字与图标',
		customSize: '自定义大小',
		customColor: '自定义颜色',
	},
	'en-US': {
		title: 'Title',
		basicUsage: 'Basic Usage',
		disabled: 'Disabled',
		loadingStatus: 'Loading',
		withCell: 'Inside a Cell',
		customChildren: 'Text & icon',
		customSize: 'Custom Size',
		customColor: 'Custom Color',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<Switch className={bem('switch')} defaultChecked />
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.disabled}>
				<Switch
					className={bem('switch')}
					disabled
					defaultChecked={false}
				/>
				<Switch className={bem('switch')} disabled defaultChecked />
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.loadingStatus}>
				<Switch
					className={bem('switch')}
					loading
					defaultChecked={false}
				/>
				<Switch className={bem('switch')} loading defaultChecked />
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.customSize}>
				<Switch className={bem('switch')} defaultChecked size={20} />
				<Switch className={bem('switch')} defaultChecked size={30} />
				<Switch className={bem('switch')} defaultChecked size={40} />
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.customColor}>
				<Switch
					className={bem('switch')}
					defaultChecked
					checkedColor="var(--fnx-danger-color)"
				/>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.customChildren}>
				<Switch
					className={bem('switch')}
					defaultChecked={false}
					checkedChildren="ON"
					unCheckedChildren="OFF"
				/>

				<Switch
					className={bem('switch')}
					defaultChecked
					checkedChildren={<Icon name="success" />}
					unCheckedChildren={<Icon name="cross" />}
				/>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.withCell}>
				<Cell
					title={i18n.title}
					rightIcon={<Switch size={20} defaultChecked />}
				/>
			</DemoBlock>
		</>
	);
}
