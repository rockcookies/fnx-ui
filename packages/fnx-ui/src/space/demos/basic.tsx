import React, { useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import Space, { SpaceAlign } from '../index';
import Button from '../../button';
import Radio from '../../radio';
import './basic.less';

const bem = createBEM('demo-space');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		vertical: '垂直排列',
		customSize: '自定义间距',
		align: '对齐方式',
		wrap: '自动换行',
		button: '按钮',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		vertical: 'Vertical',
		customSize: 'Custom Size',
		align: 'Alignment',
		wrap: 'Auto Wrap',
		button: 'Button',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [align, setAlign] = useState<SpaceAlign>('center');

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Space>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
				</Space>
			</DemoBlock>
			<DemoBlock title={i18n.vertical} cardMode>
				<Space direction="vertical" fill>
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
				</Space>
			</DemoBlock>
			<DemoBlock title={i18n.customSize} cardMode>
				<Space size={4} style={{ marginBottom: 16 }}>
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
				</Space>
				<Space size="2rem">
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
					<Button type="primary" block>
						{i18n.button}
					</Button>
				</Space>
			</DemoBlock>
			<DemoBlock title={i18n.align} cardMode>
				<Radio.Group<SpaceAlign>
					value={align}
					direction="horizontal"
					onChange={(e) => {
						setAlign(e);
					}}
					style={{ marginBottom: 16 }}
				>
					<Radio value="start">start</Radio>
					<Radio value="center">center</Radio>
					<Radio value="end">end</Radio>
					<Radio value="baseline" style={{ marginRight: 0 }}>
						baseline
					</Radio>
				</Radio.Group>
				<Space align={align} className={bem('align-section')}>
					<Button type="primary">{align}</Button>
					<div className={bem('align-block')}>Block</div>
				</Space>
			</DemoBlock>
			<DemoBlock title={i18n.wrap} cardMode>
				<Space wrap>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
					<Button type="primary">{i18n.button}</Button>
				</Space>
			</DemoBlock>
		</>
	);
}
