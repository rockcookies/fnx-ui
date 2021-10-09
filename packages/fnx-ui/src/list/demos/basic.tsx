import React, { useState } from 'react';
import PullRefresh from '../../pull-refresh';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Cell from '../../cell';
import { Dictionary } from '../../utils/interface';
import { sleep } from '../../utils/misc';
import { createBEM } from '../../utils/namespace';
import List from '../index';
import { ListStatus } from '../interface';
import './basic.less';
import useSafeState from '../../hooks/use-safe-state';
import { useCallback } from 'react';

const bem = createBEM('demo-list');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		errorTip: '错误提示',
		errorText: '请求失败，点击重新加载',
		pullRefresh: '下拉刷新',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		errorTip: 'Error Info',
		errorText: 'Request failed. Click to reload',
		pullRefresh: 'Pull Refresh',
	},
};

const getRows = (count: number): string[] => {
	return new Array(count).fill(0).map((_, i) => {
		const n = i + 1;
		return n < 10 ? `0${n}` : `${n}`;
	});
};

type Tab = 'basicUsage' | 'errorTip' | 'pullRefresh';

const TAB_LIST: Tab[] = ['basicUsage', 'errorTip', 'pullRefresh'];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [tab, setTab] = useState<Tab>('basicUsage');

	const [basicStatus, setBasicStatus] = useSafeState<ListStatus>('default');
	const [basicData, setBasicData] = useSafeState<string[]>();

	const handleBasicDataLoad = useCallback(
		async (data: string[]) => {
			await sleep(1000);
			data = getRows(data.length + 10);

			setBasicData(data);
			setBasicStatus(data.length > 30 ? 'finished' : 'default');
		},
		[setBasicData, setBasicStatus],
	);

	const [errorStatus, setErrorStatus] = useSafeState<ListStatus>('default');
	const [errorData, setErrorData] = useSafeState<string[]>();

	const handleErrorDataLoad = useCallback(
		async (data: string[]) => {
			await sleep(1000);
			data = getRows(data.length + 10);

			setErrorData(data);
			if (data.length <= 10) {
				setErrorStatus('error');
			} else {
				setErrorStatus(data.length > 30 ? 'finished' : 'default');
			}
		},
		[setErrorData, setErrorStatus],
	);

	const [pullStatus, setPullStatus] = useSafeState<ListStatus>('default');
	const [pullData, setPullData] = useSafeState<string[]>();

	const handlePullDataLoad = useCallback(
		async (data: string[]) => {
			await sleep(1000);
			data = getRows(data.length + 10);

			setPullData(data);
			setPullStatus(data.length > 30 ? 'finished' : 'default');
		},
		[setPullData, setPullStatus],
	);

	const handleListLoad = (tab: Tab, data: string[]) => {
		if (tab === 'basicUsage') {
			setBasicStatus('loading');
			handleBasicDataLoad(data);
		} else if (tab === 'errorTip') {
			setErrorStatus('loading');
			handleErrorDataLoad(data);
		} else if (tab === 'pullRefresh') {
			setPullStatus('loading');
			handlePullDataLoad(data);
		}
	};

	const handleTabChange = (active: Tab) => {
		if (tab === active) {
			return;
		}

		setTab(active);
		handleListLoad(active, []);
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

			<div
				className={bem('list-container', {
					active: tab === 'basicUsage',
				})}
			>
				<List
					status={basicStatus}
					onLoad={() => handleListLoad('basicUsage', basicData || [])}
				>
					{(basicData || []).map((item) => (
						<Cell title={item} key={item} />
					))}
				</List>
			</div>

			<div
				className={bem('list-container', {
					active: tab === 'errorTip',
				})}
			>
				<List
					status={errorStatus}
					onLoad={() => handleListLoad('errorTip', errorData || [])}
					slots={{
						error: (
							<span
								onClick={() =>
									handleListLoad('errorTip', errorData || [])
								}
							>
								{i18n.errorText}
							</span>
						),
					}}
				>
					{(errorData || []).map((item) => (
						<Cell title={item} key={item} />
					))}
				</List>
			</div>

			<div
				className={bem('list-container', {
					active: tab === 'pullRefresh',
				})}
			>
				<PullRefresh
					refreshing={pullStatus === 'loading'}
					onRefresh={() => handleListLoad('pullRefresh', [])}
				>
					<List
						status={pullStatus}
						onLoad={() =>
							handleListLoad('pullRefresh', pullData || [])
						}
					>
						{(pullData || []).map((item) => (
							<Cell title={item} key={item} />
						))}
					</List>
				</PullRefresh>
			</div>
		</>
	);
}
