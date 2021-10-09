/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import Dialog from '..';
import Cell from '../../cell';
import Icon from '../../icon';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';
import './basic.less';
import { sleep } from '../../utils/misc';
import Toast from '../../toast';
import { createBEM } from '../../utils/namespace';
// @ts-ignore
import doge from '../../../site/assets/demo-doge.png';

const bem = createBEM('demo-dialog');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		alert: '提示弹窗',
		alertWithNoTitle: '提示弹窗（无标题）',
		confirm: '确认弹窗',
		beforeClose: '异步关闭',
		perverted: '被阻止了...',
		customBody: '自定义内容',
		title: '对话框',
		content: '一去二三里烟村四五家亭台六七座八九十支花',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		alert: 'Alert',
		alertWithNoTitle: 'Alert without title',
		confirm: 'Confirm dialog',
		beforeClose: 'Before Close',
		perverted: 'Perverted...',
		customBody: 'Custom Body',
		title: 'Dialog',
		content: 'The quick brown fox jumps over the lazy dog',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const dialog = Dialog.useDialog();

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<Cell
					title={i18n.alert}
					clickable
					rightIcon={<Icon name="arrow-right" />}
					onClick={() =>
						dialog.show({
							title: i18n.title,
							message: i18n.content,
							messageAlign: 'left',
							cancelButton: false,
						})
					}
				/>
				<Cell
					title={i18n.alertWithNoTitle}
					clickable
					rightIcon={<Icon name="arrow-right" />}
					onClick={() =>
						dialog.show({
							message: i18n.content,
							messageAlign: 'left',
							cancelButton: false,
						})
					}
				/>
				<Cell
					title={i18n.confirm}
					clickable
					rightIcon={<Icon name="arrow-right" />}
					onClick={() =>
						dialog.show({
							title: i18n.title,
							message: i18n.content,
							messageAlign: 'left',
						})
					}
				/>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.beforeClose}>
				<Cell
					title={i18n.beforeClose}
					clickable
					rightIcon={<Icon name="arrow-right" />}
					onClick={() =>
						dialog.show({
							title: i18n.title,
							message: i18n.content,
							messageAlign: 'left',
							onConfirm: async () => {
								await sleep(1000);
							},
							onCancel: async () => {
								await sleep(1000);

								Toast.show(i18n.perverted);
								return false;
							},
						})
					}
				/>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.customBody}>
				<Cell
					title={i18n.customBody}
					clickable
					rightIcon={<Icon name="arrow-right" />}
					onClick={() =>
						dialog.show({
							title: i18n.title,
							children: <img src={doge} className={bem('img')} />,
						})
					}
				/>
			</DemoBlock>
		</>
	);
}
