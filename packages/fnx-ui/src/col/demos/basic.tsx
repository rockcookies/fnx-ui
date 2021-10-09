import React from 'react';
import Col from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Row from '../../row';
import { Dictionary } from '../../utils/interface';
import './basic.less';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		columnSpacing: '在列元素之间增加间距',
		justifyContent: '对齐方式',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		columnSpacing: 'Column Spacing',
		justifyContent: 'Justify Content',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<Row>
					<Col span={8}>span: 8</Col>
					<Col span={8}>span: 8</Col>
					<Col span={8}>span: 8</Col>
				</Row>
				<Row>
					<Col span={4}>span: 4</Col>
					<Col span={10} offset={4}>
						offset: 4, span: 10
					</Col>
				</Row>
				<Row>
					<Col offset={12} span={12}>
						offset: 12, span: 12
					</Col>
				</Row>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.columnSpacing}>
				<Row gutter={20}>
					<Col span={8}>span: 8</Col>
					<Col span={8}>span: 8</Col>
					<Col span={8}>span: 8</Col>
				</Row>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.justifyContent}>
				<Row justify="center">
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
				</Row>

				<Row justify="end">
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
				</Row>

				<Row justify="space-between">
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
				</Row>

				<Row justify="space-around">
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
					<Col span={6}>span: 6</Col>
				</Row>
			</DemoBlock>
		</>
	);
}
