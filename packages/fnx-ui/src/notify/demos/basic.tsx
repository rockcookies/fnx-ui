import React, { useCallback, useEffect, useRef } from 'react';
import Notify from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';
import { replaceMessage } from '../../utils/misc';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		primary: '主要通知',
		success: '成功通知',
		danger: '危险通知',
		warning: '警告通知',
		content: '通知内容',
		notifyType: '通知类型',
		customColor: '自定义颜色',
		customNotify: '自定义配置',
		customDuration: '自定义时长',
		countdownText: '倒计时 ${second} 秒',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		primary: 'Primary',
		success: 'Success',
		danger: 'Danger',
		warning: 'Warning',
		content: 'Notify Message',
		notifyType: 'Notify Type',
		customColor: 'Custom Color',
		customNotify: 'Custom Notify',
		customDuration: 'Custom Duration',
		countdownText: 'Close in ${second}s',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const notify = Notify.useNotify();

	const timerRef = useRef<NodeJS.Timeout>();

	const clearCountdown = useCallback(() => {
		if (timerRef.current != null) {
			clearInterval(timerRef.current);
			timerRef.current = undefined;
		}
	}, []);

	const handleCountdown = () => {
		let second = 3;

		const loading = notify.show({
			duration: 0,
			message: replaceMessage(i18n.countdownText, {
				second: `${second}`,
			}),
		});

		timerRef.current = setInterval(() => {
			second--;

			if (second) {
				loading.update({
					message: replaceMessage(i18n.countdownText, {
						second: `${second}`,
					}),
				});
			} else {
				clearCountdown();
				loading.clear();
			}
		}, 1000);
	};

	useEffect(() => {
		return clearCountdown;
	}, [clearCountdown]);

	const renderCell = (title: string, onClick: () => void) => {
		return (
			<Cell
				title={title}
				clickable
				rightIcon={<Icon name="arrow-right" />}
				onClick={onClick}
			/>
		);
	};

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				{renderCell(i18n.basicUsage, () => notify.show(i18n.content))}
			</DemoBlock>
			<DemoBlock title={i18n.notifyType}>
				{renderCell(i18n.primary, () =>
					notify.show({ message: i18n.content, type: 'primary' }),
				)}
				{renderCell(i18n.success, () =>
					notify.show({ message: i18n.content, type: 'success' }),
				)}
				{renderCell(i18n.danger, () =>
					notify.show({ message: i18n.content, type: 'danger' }),
				)}
				{renderCell(i18n.warning, () =>
					notify.show({ message: i18n.content, type: 'warning' }),
				)}
			</DemoBlock>
			<DemoBlock title={i18n.customNotify}>
				{renderCell(i18n.customColor, () =>
					notify.show({
						message: i18n.content,
						color: '#ad0000',
						background: '#ffe1e1',
					}),
				)}
				{renderCell(i18n.customDuration, handleCountdown)}
			</DemoBlock>
		</>
	);
}
