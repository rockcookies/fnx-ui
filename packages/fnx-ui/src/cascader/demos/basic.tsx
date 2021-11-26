import React, { ReactNode, useCallback, useState } from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Field from '../../field';
import useDestroyedRef from '../../hooks/use-destroyed-ref';
import Icon from '../../icon';
import Popup from '../../popup';
import { Dictionary } from '../../utils/interface';
import { sleep } from '../../utils/misc';
import Cascader from '../index';
import { CascaderOption } from '../interface';

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',
		area: '地区',
		selectArea: '请选择地区',
		customColor: '自定义颜色',
		asyncOptions: '异步加载选项',
		customContent: '自定义选项上方内容',
		currentLevel: (level: number) => `当前为第 ${level} 级`,
		areaData: [
			{
				label: '湖北省',
				children: [
					{
						label: '武汉市',
						children: [{ label: '江岸区' }, { label: '硚口区' }],
					},
					{
						label: '宜昌市',
						disabled: true,
						children: [{ label: '西陵区' }, { label: '夷陵区' }],
					},
				],
			},
			{
				label: '江西省',
				children: [
					{
						label: '南昌市',
						children: [{ label: '东湖区' }, { label: '西湖区' }],
					},
					{
						label: '景德镇市',
						children: [{ label: '昌江区' }, { label: '珠山区' }],
					},
				],
			},
		],
	},
	'en-US': {
		basicUsage: 'Basic usage',
		area: 'Area',
		selectArea: 'Select Area',
		customColor: 'Custom Color',
		asyncOptions: 'Async Options',
		customContent: 'Custom Content',
		currentLevel: (level: number) => `Current level is ${level}`,
		areaData: [
			{
				label: 'Hubei',
				children: [
					{
						label: 'Wuhan',
						children: [{ label: 'JiangAn' }, { label: 'QiaoKou' }],
					},
					{
						label: 'Yichang',
						disabled: true,
						children: [{ label: 'XiLing' }, { label: 'YiLing' }],
					},
				],
			},
			{
				label: 'Jiangxi',
				children: [
					{
						label: 'Nanchang',
						children: [{ label: 'DongHu' }, { label: 'XiHu' }],
					},
					{
						label: 'Jingdezhen',
						children: [
							{ label: 'ChangJiang' },
							{ label: 'ZhuShan' },
						],
					},
				],
			},
		],
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const renderField = (value?: string[] | null) => (
		<Field
			label={i18n.area}
			clickable
			rightIcon={<Icon name="arrow-right" />}
		>
			<Field.Input
				readOnly
				placeholder={i18n.selectArea}
				value={
					value && value.length > 0 ? value.join(' / ') : undefined
				}
			/>
		</Field>
	);

	const [asyncData, setAsyncData] = useState<CascaderOption[]>(() =>
		i18n.areaData.map((item: any) => {
			return { label: item.label };
		}),
	);

	const findOption = (
		tree: CascaderOption[],
		label?: ReactNode,
	): CascaderOption | undefined => {
		for (const item of tree) {
			if (item.label === label) {
				return item;
			}

			if (item.children) {
				const option = findOption(item.children, label);

				if (option) {
					return option;
				}
			}
		}
	};

	const unMountedRef = useDestroyedRef();

	const delay = useCallback(
		(action: () => void, ms = 1000) => {
			sleep(ms).then(() => {
				if (!unMountedRef.current) {
					action();
				}
			});
		},
		[unMountedRef],
	);

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Popup.Select<string[]>
					round
					select={
						<Cascader
							data={i18n.areaData}
							title={i18n.selectArea}
							dataNames={{ value: 'label' }}
						/>
					}
				>
					{(value) => renderField(value)}
				</Popup.Select>
			</DemoBlock>
			<DemoBlock title={i18n.customColor} cardMode>
				<Popup.Select<string[]>
					round
					select={
						<Cascader
							data={i18n.areaData}
							title={i18n.selectArea}
							dataNames={{ value: 'label' }}
							activeColor="var(--fnx-success-color)"
						/>
					}
				>
					{(value) => renderField(value)}
				</Popup.Select>
			</DemoBlock>
			<DemoBlock title={i18n.asyncOptions} cardMode>
				<Popup.Select<string[]>
					round
					select={
						<Cascader
							data={asyncData}
							title={i18n.selectArea}
							dataNames={{ value: 'label' }}
							onLoadData={(options) => {
								const option = options[options.length - 1];

								option.loading = true;
								setAsyncData((prev) => [...prev]);

								delay(() => {
									const item = findOption(
										i18n.areaData,
										option.label,
									);

									if (!item) {
										return;
									}

									option.loading = false;
									option.children =
										item.children?.map<CascaderOption>(
											(o) => ({
												label: o.label,
												children:
													o.children == null
														? []
														: undefined,
											}),
										);

									setAsyncData((prev) => [...prev]);
								}, 1000);
							}}
						/>
					}
				>
					{(value) => renderField(value)}
				</Popup.Select>
			</DemoBlock>
			<DemoBlock title={i18n.customContent} cardMode>
				<Popup.Select<string[]>
					round
					select={
						<Cascader
							data={i18n.areaData}
							title={i18n.selectArea}
							dataNames={{ value: 'label' }}
							slots={{
								optionsTop: (idx) => (
									<div
										style={{
											padding: '10px 16px 0',
											color: 'var(--fnx-gray-500)',
										}}
									>
										{i18n.currentLevel(idx + 1)}
									</div>
								),
							}}
						/>
					}
				>
					{(value) => renderField(value)}
				</Popup.Select>
			</DemoBlock>
		</>
	);
}
