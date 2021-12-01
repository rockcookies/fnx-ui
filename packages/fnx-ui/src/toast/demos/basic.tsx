import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import Toast from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';
import { replaceMessage } from '../../utils/misc';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		fail: '失败提示',
		text: '为了部落',
		loading: '加载中...',
		successText: '成功',
		failText: '失败',
		countdownText: '倒计时 ${second} 秒',
		textTitle: '文字提示',
		loadingTitle: '加载提示',
		stateTitle: '成功/失败提示',
		success: '成功提示',
		customIcon: '自定义图标',
		loadingType: '自定义加载图标',
		positionTop: '顶部展示',
		updateMessage: '动态更新提示',
		positionBottom: '底部展示',
		customPosition: '自定义位置',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		fail: 'Fail',
		text: 'For the horde',
		loading: 'Loading...',
		successText: 'Success',
		failText: 'Fail',
		countdownText: 'Close in ${second}s',
		textTitle: 'Text',
		loadingTitle: 'Loading',
		stateTitle: 'Success/Fail',
		success: 'Success',
		customIcon: 'Custom Icon',
		loadingType: 'Loading Type',
		positionTop: 'Top',
		updateMessage: 'Update Message',
		positionBottom: 'Bottom',
		customPosition: 'Custom Position',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const timerRef = useRef<NodeJS.Timeout>();
	const toast = Toast.useToast();

	const clearCountdown = useCallback(() => {
		if (timerRef.current != null) {
			clearInterval(timerRef.current);
			timerRef.current = undefined;
		}
	}, []);

	const handleCountdown = () => {
		let second = 3;

		const loading = toast.loading({
			duration: 0,
			forbidClick: true,
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

	const renderCell = (title: ReactNode, onClick: () => void) => {
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
			<DemoBlock cardMode title={i18n.basicUsage}>
				{renderCell(i18n.textTitle, () => toast.show(i18n.text))}
				{renderCell(i18n.loadingTitle, () =>
					toast.loading({ message: i18n.text, forbidClick: true }),
				)}
				{renderCell(i18n.success, () =>
					toast.success(i18n.successText),
				)}
				{renderCell(i18n.fail, () => toast.fail(i18n.failText))}
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customIcon}>
				{renderCell(i18n.customIcon, () =>
					toast.show({
						message: i18n.text,
						icon: <Icon name="star" />,
					}),
				)}
				{renderCell(i18n.loadingTitle, () =>
					toast.loading({
						message: i18n.text,
						forbidClick: true,
						icon: <Icon name="star" spin />,
					}),
				)}
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customPosition}>
				{renderCell(i18n.positionTop, () =>
					toast.show({
						message: i18n.positionTop,
						position: 'top',
					}),
				)}
				{renderCell(i18n.positionBottom, () =>
					toast.show({
						message: i18n.positionBottom,
						position: 'bottom',
					}),
				)}
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customPosition}>
				{renderCell(i18n.updateMessage, handleCountdown)}
			</DemoBlock>
		</>
	);
}
