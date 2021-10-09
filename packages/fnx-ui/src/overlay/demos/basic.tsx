import React, { useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import './basic.less';
import Button from '../../button';
import Overlay from '../index';
import { createBEM } from '../../utils/namespace';

const bem = createBEM('demo-overlay');

const I18N = {
	'zh-CN': {
		basicUsage: '基础用法',
		showOverlay: '显示遮罩层',
		embeddedContent: '嵌入内容',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		showOverlay: 'Show Overlay',
		embeddedContent: 'Embedded Content',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [o1, setO1] = useState(false);
	const [o2, setO2] = useState(false);

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<Button type="primary" onClick={() => setO1(true)}>
					{i18n.showOverlay}
				</Button>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.embeddedContent}>
				<Button type="primary" onClick={() => setO2(true)}>
					{i18n.embeddedContent}
				</Button>
			</DemoBlock>
			<Overlay visible={o1} onClick={() => setO1(false)} />
			<Overlay visible={o2} onClick={() => setO2(false)}>
				<div className={bem('wrapper')}>
					<div className={bem('block')}></div>
				</div>
			</Overlay>
		</>
	);
}
