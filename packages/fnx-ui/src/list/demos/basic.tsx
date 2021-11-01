import React from 'react';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import useSafeState from '../../hooks/use-safe-state';
import PullRefresh from '../../pull-refresh';
import Tabs from '../../tabs';
import { Dictionary } from '../../utils/interface';
import { sleep } from '../../utils/misc';
import List from '../index';
import { ListStatus } from '../interface';

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

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [basicStatus, setBasicStatus] = useSafeState<ListStatus>('default');
	const [basicData, setBasicData] = useSafeState<string[]>();

	const handleBasicDataLoad = async (data: string[] = []) => {
		setBasicStatus('loading');

		await sleep(1000);
		data = getRows(data.length + 8);

		setBasicData(data);
		setBasicStatus(data.length >= 24 ? 'finished' : 'default');
	};

	const [errorStatus, setErrorStatus] = useSafeState<ListStatus>('default');
	const [errorData, setErrorData] = useSafeState<string[]>();

	const handleErrorDataLoad = async (data: string[] = []) => {
		setErrorStatus('loading');

		await sleep(1000);
		data = getRows(data.length + 8);

		setErrorData(data);
		if (data.length <= 8) {
			setErrorStatus('error');
		} else {
			setErrorStatus(data.length >= 24 ? 'finished' : 'default');
		}
	};

	const [pullStatus, setPullStatus] = useSafeState<ListStatus>('default');
	const [pullRefreshing, setPullRefreshing] = useSafeState(false);
	const [pullData, setPullData] = useSafeState<string[]>();

	const handlePullDataLoad = async (
		data: string[] = [],
		refreshing: boolean,
	) => {
		if (refreshing) {
			setPullRefreshing(true);

			// refresh 时正在 loading，则跳过
			if (pullStatus === 'loading') {
				return;
			}
		}

		setPullStatus('loading');

		data = getRows(refreshing ? 8 : data.length + 8);

		await sleep(1000);

		setPullData(data);
		setPullRefreshing(false);
		setPullStatus(data.length >= 24 ? 'finished' : 'default');
	};

	return (
		<>
			<Tabs>
				<Tabs.Panel key="basicUsage" title={i18n['basicUsage']}>
					<List
						status={basicStatus}
						onLoad={() => {
							handleBasicDataLoad(basicData);
						}}
					>
						{(basicData || []).map((item) => (
							<Cell title={item} key={item} />
						))}
					</List>
				</Tabs.Panel>
				<Tabs.Panel key="errorTip" title={i18n['errorTip']}>
					<List
						status={errorStatus}
						slots={{
							error: (
								<span
									onClick={() => {
										handleErrorDataLoad(errorData);
									}}
								>
									{i18n.errorText}
								</span>
							),
						}}
						onLoad={() => {
							handleErrorDataLoad(errorData);
						}}
					>
						{(errorData || []).map((item) => (
							<Cell title={item} key={item} />
						))}
					</List>
				</Tabs.Panel>
				<Tabs.Panel key="pullRefresh" title={i18n['pullRefresh']}>
					<PullRefresh
						refreshing={pullRefreshing}
						onRefresh={() => handlePullDataLoad(pullData, true)}
					>
						<List
							status={pullStatus}
							onLoad={() => handlePullDataLoad(pullData, false)}
						>
							{(pullData || []).map((item) => (
								<Cell title={item} key={item} />
							))}
						</List>
					</PullRefresh>
				</Tabs.Panel>
			</Tabs>
		</>
	);
}
