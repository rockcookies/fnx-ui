import React from 'react';
import Loading from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-loading');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		loadingText: '加载文案',
		loadingSize: '自定义大小',
		loadingColor: '自定义颜色',
		loadingVertical: '垂直排列',
		loadingTextColor: '自定义文本颜色',
	},
	'en-US': {
		loadingText: 'Text',
		loadingSize: 'Size',
		loadingColor: 'Color',
		loadingVertical: 'Vertical',
		loadingTextColor: 'Text color',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.loadingSize}>
				<p className={bem('item')}>
					<Loading size={12} color="var(--fnx-primary-color)" />
				</p>
				<p className={bem('item')}>
					<Loading size="3rem" />
				</p>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.loadingColor}>
				<p className={bem('item')}>
					<Loading color="var(--fnx-success-color)" />
				</p>
				<p className={bem('item')}>
					<Loading color="var(--fnx-danger-color)" />
				</p>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.loadingText}>
				<p className={bem('item')}>
					<Loading>Loading...</Loading>
				</p>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.loadingVertical}>
				<p className={bem('item')}>
					<Loading vertical={true} size={24}>
						Loading...
					</Loading>
				</p>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.loadingTextColor}>
				<p className={bem('item')}>
					<Loading
						size={24}
						vertical={true}
						color="var(--fnx-primary-color)"
					>
						Loading...
					</Loading>
				</p>
				<p className={bem('item')}>
					<Loading
						size={24}
						vertical={true}
						textColor="var(--fnx-primary-color)"
					>
						Loading...
					</Loading>
				</p>
			</DemoBlock>
		</>
	);
}
