import React, {
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import useDefaultsRef from '../hooks/use-defaults-ref';
import { BORDER_TOP_BOTTOM } from '../utils/constants';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { classnames } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { TabMeta } from './hooks/use-tab-meta-list';
import { TabsComponentProps, TabsSlots } from './interface';
import { scrollLeftTo, _bem as bem } from './utils';

export interface TabsHeaderRef {
	resize: () => void;
}

const TabsHeader = createForwardRef<
	TabsHeaderRef,
	{
		transitionDuration: number;
		activeIndex: number;
		scrollable: boolean;
		ellipsis: boolean;
		slots: TabsSlots;
		metaList: TabMeta[];
		trackWidth?: string | number;
		trackHeight?: string | number;
		trackColor?: string;
		border?: boolean;
		onChange: (key: string, option: { index: number }) => void;
		onTabClick?: TabsComponentProps['onTabClick'];
	}
>(
	'TabsHeader',
	(
		{
			activeIndex,
			scrollable,
			ellipsis,
			transitionDuration,
			trackColor,
			slots,
			border,
			metaList,
			onChange,
			...props
		},
		ref,
	) => {
		const transitionDurationRef = useDefaultsRef(transitionDuration);
		const activeIndexRef = useDefaultsRef(activeIndex);

		const tabListRef = useRef<HTMLDivElement>(null);
		const tabRefs = useRef<Dictionary<HTMLDivElement | null>>({});

		const scrollTimerRef = useRef<() => void>();

		const [initialized, setInitialized] = useState(false);
		const initializedRef = useDefaultsRef(initialized);

		const trackWidth = useMemo(
			() => addUnit(props.trackWidth),
			[props.trackWidth],
		);
		const trackHeight = useMemo(
			() => addUnit(props.trackHeight),
			[props.trackHeight],
		);

		const [trackLeft, setTrackLeft] = useState(0);

		const scrollTo = useCallback(
			(index: number, options?: { immediate?: boolean }) => {
				const tab = tabRefs.current[index];
				const tabList = tabListRef.current;

				if (tab == null || tabList == null) {
					return;
				}

				const immediate = options && options.immediate;

				setTrackLeft(tab.offsetLeft + tab.offsetWidth / 2);

				// cancel scroll animate
				if (scrollTimerRef.current) {
					scrollTimerRef.current();
					scrollTimerRef.current = undefined;
				}

				const to =
					tab.offsetLeft -
					(tabList.offsetWidth - tab.offsetWidth) / 2;

				scrollTimerRef.current = scrollLeftTo(
					tabList,
					to,
					immediate ? 0 : transitionDurationRef.current,
				);
			},
			[transitionDurationRef],
		);

		useImperativeHandle<TabsHeaderRef, TabsHeaderRef>(
			ref,
			() => {
				return {
					resize: () => {
						scrollTo(activeIndexRef.current);
					},
				};
			},
			[activeIndexRef, scrollTo],
		);

		useEffect(() => {
			// 初始化时取消动画
			setInitialized(true);
			scrollTo(activeIndex, { immediate: !initializedRef.current });
		}, [activeIndex, initializedRef, scrollTo]);

		useEffect(() => {
			const tabList = tabListRef.current;

			let observer: ResizeObserver | undefined;

			if (tabList) {
				observer = new ResizeObserver(() => {
					scrollTo(activeIndexRef.current, { immediate: true });
				});

				observer.observe(tabList);
			}

			return () => {
				observer && observer.disconnect();
			};
		}, [activeIndexRef, scrollTo]);

		return (
			<div
				className={classnames(
					bem('header'),
					border ? BORDER_TOP_BOTTOM : undefined,
				)}
			>
				<div className={bem('nav')}>
					{slots.navLeft && (
						<div className={bem('nav-left')}>{slots.navLeft}</div>
					)}
					<div
						className={bem('tab-list', { scrollable })}
						role="tablist"
						ref={tabListRef}
					>
						{metaList.map((meta, idx) => {
							return (
								<div
									key={meta.key}
									role="tab"
									aria-selected={idx === activeIndex}
									className={bem('tab', {
										disabled: meta.disabled,
										active:
											idx === activeIndex &&
											!meta.disabled,
									})}
									onClick={(e) => {
										if (props.onTabClick) {
											props.onTabClick(e, {
												disabled: meta.disabled,
												index: idx,
												key: meta.key,
											});
										}

										if (
											!meta.disabled &&
											activeIndex !== idx
										) {
											onChange(meta.key, { index: idx });
										}
									}}
									ref={(ref) => {
										tabRefs.current[idx] = ref;
									}}
								>
									<div
										className={bem('tab-title', {
											ellipsis: !scrollable && ellipsis,
										})}
									>
										{meta.title}
									</div>
								</div>
							);
						})}
						{initialized && (
							<div
								className={bem('track')}
								style={{
									background: trackColor,
									height: trackHeight,
									width: trackWidth,
									left: trackLeft,
									transitionDuration: `${transitionDuration}ms`,
								}}
							/>
						)}
					</div>
					{slots.navRight && (
						<div className={bem('nav-right')}>{slots.navRight}</div>
					)}
				</div>
				{slots.navBottom}
			</div>
		);
	},
);

export default TabsHeader;
