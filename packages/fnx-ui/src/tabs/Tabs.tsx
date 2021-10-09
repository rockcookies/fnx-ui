import React, {
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import ConfigProvider from '../config-provider';
import useControlledState from '../hooks/use-controlled-state';
import useCreation from '../hooks/use-creation';
import useDefaults from '../hooks/use-defaults';
import useProps from '../hooks/use-props';
import Sticky from '../sticky';
import Swipe from '../swipe';
import { SwipeRef } from '../swipe/interface';
import { clamp } from '../utils/format';
import { classnames } from '../utils/namespace';
import { TabsContext } from './context';
import useTabMetaList from './hooks/use-tab-meta-list';
import { TabsProps } from './interface';
import TabsHeader from './TabsHeader';
import { _bem as bem } from './utils';

type RequiredTabsProps = Required<
	Pick<
		TabsProps,
		| 'border'
		| 'animated'
		| 'ellipsis'
		| 'sticky'
		| 'stickyProps'
		| 'tabSwipeThreshold'
		| 'swipeable'
		| 'slots'
	>
>;

const DEFAULT_PROPS: RequiredTabsProps = {
	border: false,
	animated: false,
	ellipsis: true,
	sticky: false,
	stickyProps: {},
	tabSwipeThreshold: 4,
	swipeable: false,
	slots: {},
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>((_props, ref) => {
	const [
		{
			border,
			animated,
			ellipsis,
			sticky,
			stickyProps,
			tabSwipeThreshold,
			swipeable,
			slots,
		},
		{
			defaultActiveKey,
			activeKey: _activeKey,
			onChange: _onChange,
			onTabClick,
			trackWidth,
			trackHeight,
			trackColor,
			transitionDuration: _transitionDuration,
			children,
			className,
			...restProps
		},
	] = useProps<RequiredTabsProps, TabsProps>(DEFAULT_PROPS, _props);

	const rootRef = useRef<HTMLDivElement>(null);
	const swipeRef = useRef<SwipeRef>(null);

	useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
		ref,
		() => rootRef.current,
		[],
	);

	const configContext = useContext(ConfigProvider.Context);

	const transitionDuration = useDefaults<number>(
		configContext.transitionDuration,
		_transitionDuration,
	);

	const { value: activeKey, onChangeRef } = useControlledState<
		string | undefined
	>({
		value: _activeKey != null ? String(_activeKey) : undefined,
		defaultValue: () =>
			defaultActiveKey != null ? String(defaultActiveKey) : undefined,
		onChange:
			_onChange != null
				? (v) => {
						if (v != null) {
							_onChange(v);
						}
				  }
				: undefined,
	});

	const [metaKeyList, metaList] = useTabMetaList(children);

	const activeIndex = useCreation<number>(
		(prev) => {
			const next = metaKeyList.findIndex((key) => key === activeKey);

			return clamp(
				next < 0 ? prev || 0 : next,
				0,
				Math.max(metaKeyList.length - 1, 0),
			);
		},
		[metaKeyList, activeKey],
	);

	const [swipeActiveIndex, setSwipeActiveIndex] =
		useState<number>(activeIndex);

	// whether the tabList is scrollable
	const scrollable = useMemo(() => {
		return metaList.length > tabSwipeThreshold || !ellipsis;
	}, [metaList.length, tabSwipeThreshold, ellipsis]);

	useEffect(() => {
		if (swipeRef.current && swipeActiveIndex !== activeIndex) {
			swipeRef.current.swipeTo(activeIndex, { animation: true });
			setSwipeActiveIndex(activeIndex);
		}
	}, [activeIndex, swipeActiveIndex]);

	const renderHeader = () => {
		return (
			<TabsHeader
				transitionDuration={transitionDuration}
				activeIndex={activeIndex}
				scrollable={scrollable}
				ellipsis={ellipsis}
				slots={slots}
				metaList={metaList}
				trackWidth={trackWidth}
				trackHeight={trackHeight}
				trackColor={trackColor}
				border={border}
				onChange={(key) => {
					onChangeRef.current(key);
				}}
				onTabClick={onTabClick}
			/>
		);
	};

	const renderChildren = () => {
		if (animated || swipeable) {
			return (
				<Swipe
					defaultActiveIndex={activeIndex}
					className={bem('swipe')}
					loop={false}
					autoplay={0}
					duration={transitionDuration}
					touchable={swipeable}
					indicator={false}
					onActiveIndexChange={(idx) => {
						onChangeRef.current(metaList[idx].key);
						setSwipeActiveIndex(idx);
					}}
					ref={swipeRef}
				>
					{metaList.map((meta) => meta.panel)}
				</Swipe>
			);
		}

		return metaList.map((meta) => meta.panel);
	};

	return (
		<div
			className={classnames(bem(), className)}
			{...restProps}
			ref={rootRef}
		>
			{sticky ? (
				<Sticky {...stickyProps} container={() => rootRef.current}>
					{renderHeader()}
				</Sticky>
			) : (
				renderHeader()
			)}

			<div className={bem('content', { animated })}>
				<TabsContext.Provider
					value={{
						activeKey:
							metaList[activeIndex] && metaList[activeIndex].key,
						animated,
						swipeable,
					}}
				>
					{renderChildren()}
				</TabsContext.Provider>
			</div>
		</div>
	);
});

Tabs.displayName = 'Tabs';

export default Tabs;
