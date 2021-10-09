import React, { useRef } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Sticky from '..';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';

import './basic.less';

const bem = createBEM('demo-sticky');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		offsetTop: '吸顶距离',
		offsetBottom: '吸底距离',
		setContainer: '指定容器',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		offsetTop: 'Offset Top',
		offsetBottom: 'Offset Bottom',
		setContainer: 'Set Container',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Sticky>
					<Button type="primary" style={{ marginLeft: '6px' }}>
						{i18n.basicUsage}
					</Button>
				</Sticky>
			</DemoBlock>
			<DemoBlock title={i18n.offsetTop}>
				<Sticky offsetTop={50}>
					<Button type="primary" style={{ marginLeft: '60px' }}>
						{i18n.offsetTop}
					</Button>
				</Sticky>
			</DemoBlock>
			<DemoBlock title={i18n.setContainer}>
				<div ref={containerRef} className={bem('container')}>
					<Sticky container={() => containerRef.current}>
						<Button type="warning" style={{ marginLeft: '170px' }}>
							{i18n.setContainer}
						</Button>
					</Sticky>
				</div>
			</DemoBlock>
			<DemoBlock title={i18n.setContainer}>
				<div style={{ height: '200px' }}></div>

				<Sticky offsetBottom={50} position="bottom">
					<Button type="primary" style={{ marginLeft: '6px' }}>
						{i18n.offsetBottom}
					</Button>
				</Sticky>
			</DemoBlock>
		</>
	);
}
