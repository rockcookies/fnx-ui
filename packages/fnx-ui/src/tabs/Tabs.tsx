import React, {
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import { TabsRef } from '.';
import ConfigProvider from '../config-provider';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import useCreation from '../hooks/use-creation';
import useDefaults from '../hooks/use-defaults';
import Sticky from '../sticky';
import Swipe from '../swipe';
import { SwipeRef } from '../swipe/interface';
import { clamp } from '../utils/format';
import { classnames } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { TabsContext } from './context';
import useTabMetaList from './hooks/use-tab-meta-list';
import { TabsProps } from './interface';
import TabsHeader, { TabsHeaderRef } from './TabsHeader';
import { _bem as bem } from './utils';

const useProps = configComponentProps<
	Required<
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
	>
>({
	border: false,
	animated: false,
	ellipsis: true,
	sticky: false,
	stickyProps: {},
	tabSwipeThreshold: 4,
	swipeable: false,
	slots: {},
});

const Tabs = createForwardRef<TabsRef, TabsProps>('Tabs', (_props, ref) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const swipeRef = useRef<SwipeRef>(null);
	const tabsHeaderRef = useRef<TabsHeaderRef>(null);

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
	] = useProps(_props);

	useImperativeHandle<TabsRef, TabsRef>(
		ref,
		() => {
			return {
				root: rootRef.current,
				reset: () => {
					tabsHeaderRef.current?.reset();
					swipeRef.current?.reset();
				},
			};
		},
		[tabsHeaderRef],
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
				ref={tabsHeaderRef}
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

export default Tabs;
