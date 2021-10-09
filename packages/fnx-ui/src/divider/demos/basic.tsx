import React from 'react';
import Divider from '../index';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		text: '文本',
		dashed: '虚线',
		withText: '展示文本',
		contentPosition: '内容位置',
		customStyle: '自定义样式',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		text: 'Text',
		dashed: 'Dashed',
		withText: 'With Text',
		contentPosition: 'Content Position',
		customStyle: 'Custom Style',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<Divider />
			</DemoBlock>
			<DemoBlock cardMode title={i18n.withText}>
				<Divider>{i18n.text}</Divider>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.contentPosition}>
				<Divider contentPosition="left">{i18n.text}</Divider>
				<Divider contentPosition="right">{i18n.text}</Divider>
				<Divider contentPosition="center">{i18n.text}</Divider>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.dashed}>
				<Divider dashed hairline={false}>
					{i18n.text}
				</Divider>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customStyle}>
				<Divider
					style={{
						borderColor: 'var(--fnx-primary-color)',
						color: 'var(--fnx-primary-color)',
						padding: '0 16px',
					}}
				>
					{i18n.text}
				</Divider>
			</DemoBlock>
		</>
	);
}
