/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
import React, { useState } from 'react';
// @ts-ignore
import demoDogeReverse from '../../../site/assets/demo-doge-reverse.png';
// @ts-ignore
import demoDoge from '../../../site/assets/demo-doge.png';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import { Dictionary } from '../../utils/interface';
import { sleep } from '../../utils/misc';
import { createBEM } from '../../utils/namespace';
import usUnmountedRef from '../../hooks/use-unmounted-ref';
import PullRefresh from '../index';
import './basic.less';

const bem = createBEM('demo-pull-refresh');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		try: '下拉试试',
		text: '刷新次数',
		success: '刷新成功',
		successTip: '成功提示',
		customTips: '自定义提示',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		try: 'Try it down',
		text: 'Refresh Count',
		success: 'Refresh success',
		successTip: 'Success Tip',
		customTips: 'Custom Tips',
	},
};

type Tab = 'basicUsage' | 'successTip' | 'customTips';

const TAB_LIST: Tab[] = ['basicUsage', 'successTip', 'customTips'];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [tab, setTab] = useState<Tab>('basicUsage');

	const handleTabChange = (active: Tab) => {
		if (tab === active) {
			return;
		}

		setTab(active);
	};

	const [count, setCount] = useState(0);
	const [refreshing, _setRefreshing] = useState<
		Dictionary<boolean | undefined>
	>({});

	const content = count > 0 ? `${i18n.text}: ${count}` : i18n.try;

	const unmountedRef = usUnmountedRef();

	const setRefreshing = (t: Tab, ms = 1000) => {
		_setRefreshing((prev) => ({ ...prev, [t]: true }));

		sleep(ms).then(() => {
			if (!unmountedRef.current) {
				setCount((prev) => prev + 1);
				_setRefreshing((prev) => ({ ...prev, [t]: false }));
			}
		});
	};

	return (
		<>
			<div className={bem('tab')}>
				{TAB_LIST.map((item) => (
					<Button
						size="sm"
						key={item}
						type={tab === item ? 'primary' : 'default'}
						onClick={() => handleTabChange(item)}
					>
						{i18n[item]}
					</Button>
				))}
			</div>

			<PullRefresh
				className={bem('pull-refresh', {
					active: tab === 'basicUsage',
				})}
				refreshing={refreshing.basicUsage}
				onRefresh={() => setRefreshing('basicUsage')}
			>
				<p className={bem('content')}>{content}</p>
			</PullRefresh>

			<PullRefresh
				className={bem('pull-refresh', {
					active: tab === 'successTip',
				})}
				refreshing={refreshing.successTip}
				onRefresh={() => setRefreshing('successTip')}
				slots={{ success: i18n.successTip }}
			>
				<p className={bem('content')}>{content}</p>
			</PullRefresh>

			<PullRefresh
				className={bem('pull-refresh', {
					active: tab === 'customTips',
				})}
				refreshing={refreshing.customTips}
				onRefresh={() => setRefreshing('customTips')}
				indicatorHeight={80}
				slots={{
					pulling: (distance) => (
						<img
							className={bem('doge')}
							src={demoDoge}
							style={{ transform: `scale(${distance / 80})` }}
						/>
					),
					loosing: <img className={bem('doge')} src={demoDoge} />,
					loading: (
						<img className={bem('doge')} src={demoDogeReverse} />
					),
				}}
			>
				<p className={bem('content')}>{content}</p>
			</PullRefresh>
		</>
	);
}
