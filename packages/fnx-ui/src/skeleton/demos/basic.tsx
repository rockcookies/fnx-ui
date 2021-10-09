/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Switch from '../../switch/index';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import Skeleton from '../index';
// @ts-ignore
import doge from '../../../site/assets/demo-doge.png';
import './basic.less';

const bem = createBEM('demo-skeleton');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		showAvatar: '显示头像',
		showChildren: '显示子组件',
		title: '为了部落',
		paragraph: '一去二三里烟村四五家亭台六七座八九十支花',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		showAvatar: 'Show Avatar',
		showChildren: 'Show Children',
		title: 'For the horde',
		paragraph: 'The quick brown fox jumps over the lazy dog',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Skeleton title />
			</DemoBlock>

			<DemoBlock title={i18n.showAvatar}>
				<Skeleton
					title
					avatar
					row={3}
					rowWidth={['100%', '40%', '80%']}
				/>
			</DemoBlock>

			<DemoBlock title={i18n.showChildren}>
				<Switch
					className={bem('switch')}
					checked={loading}
					onChange={() => setLoading(!loading)}
				/>

				<Skeleton title avatar loading={!loading} row={3}>
					<div className={bem('preview')}>
						<img src={doge} />
						<div className={bem('content')}>
							<h3>{i18n.title}</h3>
							<p>{i18n.paragraph}</p>
						</div>
					</div>
				</Skeleton>
			</DemoBlock>
		</>
	);
}
