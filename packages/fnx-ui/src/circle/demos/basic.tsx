import React, { useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button/index';
import { clamp } from '../../utils/format';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import Circle from '../index';
import './basic.less';

const bem = createBEM('demo-circle');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		gradient: '渐变色',
		gapPosition: '仪表盘',
		customSize: '大小定制',
		customStyle: '样式定制',
		customColor: '颜色定制',
		customWidth: '宽度定制',
		counterClockwise: '逆时针',
		incr: '增加',
		decr: '减少',
	},
	'en-US': {
		basicUsage: 'BasicUsage',
		gradient: 'Gradient',
		gapPosition: 'Dashboard',
		customSize: 'Custom Size',
		customStyle: 'Custom Style',
		customColor: 'Custom Color',
		customWidth: 'Custom Width',
		counterClockwise: 'Counter Clockwise',
		incr: 'Add',
		decr: 'Decrease',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const [progress, setProgress] = useState<number>(70);

	const addProgress = () => {
		setProgress(clamp(progress + 15, 0, 100));
	};

	const reduceProgress = () => {
		setProgress(clamp(progress - 15, 0, 100));
	};

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<div className={bem('block')}>
					<Circle progress={progress}>{progress}%</Circle>
				</div>
			</DemoBlock>
			<DemoBlock title={i18n.customStyle}>
				<div className={bem('block')}>
					<Circle progress={progress} strokeWidth={2}>
						{i18n.customWidth}
					</Circle>
					<Circle
						progress={progress}
						strokeColor="var(--fnx-danger-color)"
						trailColor="var(--fnx-gray-400)"
					>
						{i18n.customColor}
					</Circle>
					<Circle
						progress={progress}
						strokeColor={{
							'0%': 'var(--fnx-danger-color)',
							'100%': 'var(--fnx-warning-color)',
						}}
					>
						{i18n.gradient}
					</Circle>
					<Circle progress={progress} clockwise={false}>
						{i18n.counterClockwise}
					</Circle>
					<Circle progress={progress} size="120px">
						{i18n.customSize}
					</Circle>
				</div>
				<div className={bem('buttons')}>
					<Button
						className={bem('button')}
						type="primary"
						onClick={addProgress}
					>
						{i18n.incr}
					</Button>
					<Button
						className={bem('button')}
						type="danger"
						onClick={reduceProgress}
					>
						{i18n.decr}
					</Button>
				</div>
			</DemoBlock>
		</>
	);
}
