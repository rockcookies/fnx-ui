import React, {
	forwardRef,
	ForwardRefRenderFunction,
	ReactElement,
	ReactNode,
	useState,
} from 'react';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useProps from '../hooks/use-props';
import useUpdateEffect from '../hooks/use-update-effect';
import Icon from '../icon';
import Loading from '../loading';
import { useLocale } from '../locale';
import Tabs from '../tabs';
import { clamp } from '../utils/format';
import { ForwardRefProps } from '../utils/interface';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import useCascaderDataNames, {
	CascaderDataGetters,
} from './hooks/use-cascader-data-names';
import { CascaderOption, CascaderProps } from './interface';

const NS = 'fnx-cascader';
const bem = createBEM(NS);

type RequiredCascaderProps = Required<
	Pick<
		CascaderProps,
		| 'defaultValue'
		| 'dataNames'
		| 'onConfirm'
		| 'onCancel'
		| 'onChange'
		| 'swipeable'
		| 'closeIcon'
		| 'slots'
	>
>;

const DEFAULT_PROPS: RequiredCascaderProps = {
	defaultValue: [],
	dataNames: {},
	onConfirm: noop,
	onCancel: noop,
	onChange: noop,
	swipeable: false,
	closeIcon: <Icon name="cross" />,
	slots: {},
};

interface Tab {
	options: CascaderOption[];
	active?: CascaderOption;
}

function getTabs(
	getter: CascaderDataGetters,
	value: Array<string | number>,
	data?: CascaderOption[],
): Tab[] {
	if (!Array.isArray(data) || data.length <= 0) {
		return [];
	}

	const output: Tab[] = [{ options: data }];

	for (let i = 0; i < value.length; i++) {
		const tab = output[i];
		const v = value[i];

		const idx = tab.options.findIndex(
			(item) => getter.value(item) === v && !getter.disabled(item),
		);
		const active = tab.options[idx];

		if (!active) {
			return output;
		}

		tab.active = active;

		if (getter.loading(active)) {
			output.push({ options: [] });
			return output;
		}

		const children = getter.children(active);
		if (!Array.isArray(children)) {
			return output;
		}

		output.push({ options: children });
	}

	return output;
}

function getActiveOptions(tabs: Tab[]): CascaderOption[] {
	const output: CascaderOption[] = [];

	for (const tab of tabs) {
		if (!tab.active) {
			return output;
		}

		output.push(tab.active);
	}

	return output;
}

const InternalCascader: ForwardRefRenderFunction<
	HTMLDivElement,
	CascaderProps
> = (_props, ref) => {
	const i18n = useLocale('cascader');

	const [
		{
			defaultValue,
			dataNames: _dataNames,
			onConfirm,
			onCancel,
			onChange,
			swipeable,
			closeIcon,
			slots,
		},
		{
			data,
			title,
			placeholder,
			onLoadData,
			activeColor,
			className,
			...restProps
		},
	] = useProps<RequiredCascaderProps, CascaderProps>(DEFAULT_PROPS, _props);

	const dataNames = useCascaderDataNames(_dataNames);

	const [tabs, setTabs] = useState<Tab[]>(() =>
		getTabs(dataNames, defaultValue, data),
	);
	const tabsRef = useDefaultsRef(tabs);

	const [tabActive, setTabActive] = useState(
		// 因为有 defaultValue 所以这里不能为 0
		() => Math.max(getActiveOptions(tabs).length - 1, 0),
	);

	const handleSelect = (tabIndex: number, option: CascaderOption) => {
		if (dataNames.disabled(option)) {
			return;
		}

		const nextTabs = tabs
			.slice(0, tabIndex + 1)
			.map<Tab>((tab, idx) =>
				tabIndex === idx ? { ...tab, active: option } : tab,
			);

		const _children = dataNames.children(option);
		const children = Array.isArray(_children) ? _children : undefined;

		const activeOptions = getActiveOptions(nextTabs);
		const activeValues = activeOptions.map((option) =>
			dataNames.value(option),
		);

		onChange(activeValues, activeOptions);

		// 切换到下一 tab
		if (children && children.length > 0) {
			setTabs(nextTabs.concat({ options: children }));
			setTabActive(tabIndex + 1);
			return;
		}

		// 已经到子节点
		if ((children && children.length <= 0) || !onLoadData) {
			setTabs(nextTabs);
			onConfirm(activeValues, activeOptions);
			return;
		}

		// 触发加载
		if (!dataNames.loading(option) && onLoadData) {
			onLoadData(getActiveOptions(nextTabs));
		}

		setTabs(nextTabs.concat([{ options: [] }]));
		setTabActive(tabIndex + 1);
	};

	useUpdateEffect(() => {
		const nextTabs = getTabs(
			dataNames,
			getActiveOptions(tabsRef.current).map((option) =>
				dataNames.value(option),
			),
			data,
		);

		setTabs(nextTabs);

		setTabActive((prev) => {
			return clamp(prev, 0, Math.max(nextTabs.length - 1, 0));
		});
	}, [dataNames, data, tabsRef]);

	const renderHeader = () => {
		return (
			<div className={bem('header')}>
				<div className={bem('title')}>{title}</div>
				{closeIcon !== false && (
					<span
						className={bem('close-icon')}
						onClick={() => {
							onCancel();
						}}
					>
						{closeIcon || <Icon name="cross" />}
					</span>
				)}
			</div>
		);
	};

	const renderOption = (
		tabIndex: number,
		option: CascaderOption,
		idx: number,
		active?: CascaderOption,
	) => {
		const isLoading = !!dataNames.loading(option);
		const isSelected = option === active;
		const isDisabled = dataNames.disabled(option);
		const label = dataNames.label(option);

		let icon: ReactNode;

		if (isLoading) {
			icon = <Icon.Spinner className={bem('loading-icon')} />;
		} else if (isSelected) {
			icon = <Icon name="success" className={bem('selected-icon')} />;
		}

		return (
			<li
				key={idx}
				role="menuitemradio"
				tabIndex={isDisabled ? undefined : isSelected ? 0 : -1}
				aria-checked={isSelected ? 'true' : undefined}
				aria-disabled={isDisabled ? 'true' : undefined}
				className={bem('option', {
					selected: isSelected,
					disabled: isDisabled,
					loading: isLoading,
				})}
				style={{ color: isSelected ? activeColor : undefined }}
				onClick={() => handleSelect(tabIndex, option)}
			>
				{slots.option ? (
					slots.option(option, { selected: isSelected })
				) : (
					<span className={bem('label')}>{label}</span>
				)}
				{icon}
			</li>
		);
	};

	const renderTabs = () => {
		if (!tabs.length) {
			return;
		}

		return (
			<Tabs
				animated
				swipeable={swipeable}
				tabSwipeThreshold={0}
				className={bem('tabs')}
				activeKey={tabActive}
				trackColor={activeColor}
				onChange={(key) => setTabActive(parseInt(key, 10))}
			>
				{tabs.map((tab, idx) => {
					const prevTab = tabs[idx - 1];

					return (
						<Tabs.Panel
							key={idx}
							title={
								<span
									className={bem('tab-title', {
										unselected: !tab.active,
									})}
								>
									{tab.active
										? dataNames.label(tab.active)
										: placeholder || i18n.select}
								</span>
							}
						>
							{slots.optionsTop && slots.optionsTop(idx)}
							<div className={bem('options-container')}>
								<ul role="menu" className={bem('options')}>
									{tab.options.map((option, i) =>
										renderOption(
											idx,
											option,
											i,
											tab.active,
										),
									)}
								</ul>

								{prevTab &&
									prevTab.active &&
									dataNames.loading(prevTab.active) && (
										<Loading
											className={bem('loading')}
											color={activeColor}
											size={30}
										/>
									)}
							</div>
							{slots.optionsBottom && slots.optionsBottom(idx)}
						</Tabs.Panel>
					);
				})}
			</Tabs>
		);
	};

	return (
		<div className={classnames(bem(), className)} {...restProps} ref={ref}>
			{renderHeader()}
			{renderTabs()}
		</div>
	);
};

InternalCascader.displayName = 'Cascader';

export type {
	CascaderComponentProps,
	CascaderProps,
	CascaderDataNames,
	CascaderOption,
	CascaderValue,
	CascaderSlots,
} from './interface';

const Cascader = forwardRef<HTMLDivElement, CascaderProps>(
	InternalCascader,
) as <T = CascaderOption>(
	props: ForwardRefProps<CascaderProps<T>, HTMLDivElement>,
) => ReactElement;

export default Cascader;
