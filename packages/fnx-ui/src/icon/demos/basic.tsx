import React, { ReactNode } from 'react';
import Icon from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Grid from '../../grid';
import Tabs from '../../tabs';
import { GridProps } from '../../grid/interface';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-icon');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		iconColor: '图标颜色',
		iconSize: '图标尺寸',
		iconSpin: '旋转动画',
		iconSpinner: 'Icon.Spinner',
		iconList: '图标列表',
		tabDemo: '用法示例',
		tabBasic: '基础图标',
		tabOutline: '线框风格',
		tabFilled: '实底风格',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		iconColor: 'Icon color',
		iconSize: 'Icon size',
		iconSpin: 'Spin animation',
		iconSpinner: 'Icon.Spinner',
		iconList: 'Icon list',
		tabDemo: 'Demo',
		tabBasic: 'Basic',
		tabOutline: 'Outline',
		tabFilled: 'Filled',
	},
};

const GRID_PROPS: GridProps = {
	border: false,
	columnSize: 4,
	gutter: 4,
	square: true,
};

const BASIC_ICON_LIST = [
	'arrow-up',
	'arrow-down',
	'arrow-left',
	'arrow-right',
	'success',
	'cross',
	'plus',
	'minus',
	'fail',
	'circle',
];

const OUTLINE_ICON_LIST = ['close-o', 'star-o', 'file-o'];

const FILLED_ICON_LIST = ['close', 'star', 'photo', 'photo-fail'];

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<Tabs>
				<Tabs.Panel title={i18n.tabDemo}>
					<DemoBlock cardMode title={i18n.basicUsage}>
						<Grid {...GRID_PROPS}>
							<Grid.Item className={bem('item')}>
								<Icon name="success" />
							</Grid.Item>
						</Grid>
					</DemoBlock>
					<DemoBlock cardMode title={i18n.iconColor}>
						<Grid {...GRID_PROPS}>
							<Grid.Item className={bem('item')}>
								<Icon
									name="success"
									color="var(--fnx-success-color)"
								/>
							</Grid.Item>
							<Grid.Item className={bem('item')}>
								<Icon
									name="fail"
									color="var(--fnx-danger-color)"
								/>
							</Grid.Item>
						</Grid>
					</DemoBlock>
					<DemoBlock cardMode title={i18n.iconSize}>
						<Grid {...GRID_PROPS}>
							<Grid.Item className={bem('item')}>
								<Icon name="arrow-right" size={20} />
							</Grid.Item>
							<Grid.Item className={bem('item')}>
								<Icon name="arrow-left" size="3rem" />
							</Grid.Item>
						</Grid>
					</DemoBlock>
					<DemoBlock cardMode title={i18n.iconSpin}>
						<Grid {...GRID_PROPS}>
							<Grid.Item className={bem('item')}>
								<Icon name="star" spin />
							</Grid.Item>
						</Grid>
					</DemoBlock>
					<DemoBlock cardMode title={i18n.iconSpinner}>
						<Grid {...GRID_PROPS}>
							<Grid.Item className={bem('item')}>
								<Icon.Spinner />
							</Grid.Item>
						</Grid>
					</DemoBlock>
				</Tabs.Panel>
				<Tabs.Panel title={i18n.tabBasic}>
					<DemoBlock cardMode>
						<Grid {...GRID_PROPS}>
							{BASIC_ICON_LIST.map((name): ReactNode => {
								return (
									<Grid.Item
										className={bem('item')}
										key={name}
									>
										<Icon name={name} />
										<p className={bem('icon-desc')}>
											{name}
										</p>
									</Grid.Item>
								);
							})}
						</Grid>
					</DemoBlock>
				</Tabs.Panel>
				<Tabs.Panel title={i18n.tabOutline}>
					<DemoBlock cardMode>
						<Grid {...GRID_PROPS}>
							{OUTLINE_ICON_LIST.map((name): ReactNode => {
								return (
									<Grid.Item
										className={bem('item')}
										key={name}
									>
										<Icon name={name} />
										<p className={bem('icon-desc')}>
											{name}
										</p>
									</Grid.Item>
								);
							})}
						</Grid>
					</DemoBlock>
				</Tabs.Panel>
				<Tabs.Panel title={i18n.tabFilled}>
					<DemoBlock cardMode>
						<Grid {...GRID_PROPS}>
							{FILLED_ICON_LIST.map((name): ReactNode => {
								return (
									<Grid.Item
										className={bem('item')}
										key={name}
									>
										<Icon name={name} />
										<p className={bem('icon-desc')}>
											{name}
										</p>
									</Grid.Item>
								);
							})}
						</Grid>
					</DemoBlock>
				</Tabs.Panel>
			</Tabs>
		</>
	);
}
