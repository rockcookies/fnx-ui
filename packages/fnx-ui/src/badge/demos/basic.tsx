import React from 'react';
import Badge from '../index';
import Icon from '../../icon';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import './basic.less';
import { createBEM } from '../../utils/namespace';

const bem = createBEM('demo-badge');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		max: '最大值',
		standalone: '独立展示',
		customColor: '自定义颜色',
		customContent: '自定义徽标内容',
	},
	'en-US': {
		basicUsage: 'Basic usage',
		max: 'Max',
		standalone: 'Standalone',
		customColor: 'Custom Color',
		customContent: 'Custom Content',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Badge count={5}>
					<p className={bem('children')}></p>
				</Badge>
				<Badge count={10}>
					<p className={bem('children')}></p>
				</Badge>
				<Badge count="hot">
					<p className={bem('children')}></p>
				</Badge>
				<Badge dot color="red">
					<p className={bem('children')}></p>
				</Badge>
			</DemoBlock>
			<DemoBlock title={i18n.max}>
				<Badge max={9} count={10}>
					<p className={bem('children')}></p>
				</Badge>
				<Badge max={20} count={99}>
					<p className={bem('children')}></p>
				</Badge>
				<Badge max={99} showZero={false} count={100}>
					<p className={bem('children')}></p>
				</Badge>
			</DemoBlock>
			<DemoBlock title={i18n.customColor}>
				<Badge count="5" color="var(--fnx-primary-color)">
					<p className={bem('children')}></p>
				</Badge>
				<Badge count="10" color="var(--fnx-warning-color)">
					<p className={bem('children')}></p>
				</Badge>
				<Badge dot color="var(--fnx-success-color)">
					<p className={bem('children')}></p>
				</Badge>
			</DemoBlock>

			<DemoBlock title={i18n.customContent}>
				<Badge
					count={<Icon className={bem('icon')} name="arrow-down" />}
				>
					<p className={bem('children')}></p>
				</Badge>
				<Badge
					count={<Icon className={bem('icon')} name="arrow-left" />}
				>
					<p className={bem('children')}></p>
				</Badge>
				<Badge
					count={<Icon className={bem('icon')} name="arrow-right" />}
				>
					<p className={bem('children')}></p>
				</Badge>
			</DemoBlock>

			<DemoBlock title={i18n.standalone}>
				<Badge count={20} style={{ marginLeft: '16px' }} />
				<Badge max="99" count={100} style={{ marginLeft: '16px' }} />
			</DemoBlock>
		</>
	);
}
