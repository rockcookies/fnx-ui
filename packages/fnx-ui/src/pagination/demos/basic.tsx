import React from 'react';
import Pagination from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基本用法',
		simpleMode: '简单模式',
		ellipses: '状态',
		customButton: '自定义按钮',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		simpleMode: 'simple Mode',
		ellipses: 'Show Ellipses',
		customButton: 'Custom Button',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<Pagination total={80} />
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.simpleMode}>
				<Pagination total={60} mode="simple" />
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.ellipses}>
				<Pagination
					total={125}
					forceEllipses
					defaultCurrent={8}
					pageItemCount={3}
				/>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.customButton}>
				<Pagination
					total={80}
					slots={{
						prev: <Icon name="arrow-left" />,
						next: <Icon name="arrow-right" />,
					}}
				/>
			</DemoBlock>
		</>
	);
}
