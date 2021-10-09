import React from 'react';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import { Dictionary } from '../../utils/interface';
import Stepper from '../index';
import './basic.less';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		step: '步长设置',
		range: '限制输入范围',
		integer: '限制输入整数',
		disabled: '禁用状态',
		disableInput: '禁用输入框',
		decimalLength: '固定小数位数',
		customSize: '自定义大小',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		step: 'Step',
		range: 'Range',
		integer: 'Integer',
		disabled: 'Disabled',
		disableInput: 'Disable Input',
		decimalLength: 'Decimal Length',
		customSize: 'Custom Size',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<Cell title={i18n.basicUsage} content={<Stepper />} />
			<Cell title={i18n.step} content={<Stepper step={2} />} />
			<Cell title={i18n.range} content={<Stepper min={5} max={8} />} />
			<Cell title={i18n.integer} content={<Stepper precision={0} />} />
			<Cell title={i18n.disabled} content={<Stepper disabled />} />
			<Cell
				title={i18n.disableInput}
				content={<Stepper disableInput />}
			/>
			<Cell
				title={i18n.decimalLength}
				content={<Stepper precision={1} defaultValue={1} />}
			/>

			<Cell
				title={i18n.customSize}
				content={<Stepper buttonSize={32} inputWidth={40} />}
			/>
		</>
	);
}
