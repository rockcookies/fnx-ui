import React, { FC, useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell, { CellProps } from '../../cell';
import Icon from '../../icon';
import Popup from '../index';
import { PopupProps } from '../interface';

const I18N = {
	'zh-CN': {
		basicUsage: '基础用法',
		position: '弹出位置',
		popupBasic: '展示弹出层',
		popupTop: '顶部弹出',
		popupBottom: '底部弹出',
		popupLeft: '左侧弹出',
		popupRight: '右侧弹出',
		teleport: '指定挂载节点',
		roundCorner: '圆角弹窗',
		content: '为了联盟',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		position: 'Position',
		popupBasic: 'Show Popup',
		popupTop: 'From Top',
		popupBottom: 'From Bottom',
		popupLeft: 'From Left',
		popupRight: 'From Right',
		teleport: 'Get Container',
		roundCorner: 'Round Corner',
		content: 'For the alliance',
	},
};

const PopupCell: FC<{ popup?: PopupProps; cell?: CellProps }> = (props) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Cell
				onClick={() => setVisible(true)}
				clickable
				{...props.cell}
				rightIcon={<Icon name="arrow-right" />}
			/>
			<Popup
				mountTo={() => document.body}
				visible={visible}
				onClose={() => setVisible(false)}
				{...props.popup}
			/>
		</>
	);
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode title={i18n.basicUsage}>
				<PopupCell
					cell={{
						title: i18n.popupBasic,
					}}
					popup={{
						children: i18n.content,
						style: { padding: '30px 50px' },
					}}
				/>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.position}>
				<PopupCell
					cell={{ title: i18n.popupTop }}
					popup={{
						position: 'top',
						style: { height: '30%' },
					}}
				/>
				<PopupCell
					cell={{ title: i18n.popupBottom }}
					popup={{
						position: 'bottom',
						style: { height: '30%' },
					}}
				/>
				<PopupCell
					cell={{ title: i18n.popupLeft }}
					popup={{
						position: 'left',
						style: { width: '30%', height: '100%' },
					}}
				/>
				<PopupCell
					cell={{ title: i18n.popupRight }}
					popup={{
						position: 'right',
						style: { width: '30%', height: '100%' },
					}}
				/>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.roundCorner}>
				<PopupCell
					cell={{ title: i18n.roundCorner }}
					popup={{
						round: true,
						position: 'bottom',
						style: { height: '30%' },
					}}
				/>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.teleport}>
				<PopupCell
					cell={{
						title: i18n.teleport,
					}}
					popup={{
						children: i18n.content,
						style: { padding: '30px 50px' },
						mountTo: () => document.body,
					}}
				/>
			</DemoBlock>
		</>
	);
}
