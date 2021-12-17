import React, {
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useGetState from '../hooks/use-get-state';
import useUpdateEffect from '../hooks/use-update-effect';
import useWindowSize from '../hooks/use-window-size';
import { BORDER_TOP_BOTTOM } from '../utils/constants';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { classnames } from '../utils/namespace';
import { doubleRaf } from '../utils/raf';
import { createForwardRef } from '../utils/react';
import { TabMeta } from './hooks/use-tab-meta-list';
import { TabsComponentProps, TabsSlots } from './interface';
import { scrollLeftTo, _bem as bem } from './utils';

export interface TabsHeaderRef {
	reset: () => void;
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

		const windowSize = useWindowSize();

		const trackWidth = useMemo(
			() => addUnit(props.trackWidth),
			[props.trackWidth],
		);
		const trackHeight = useMemo(
			() => addUnit(props.trackHeight),
			[props.trackHeight],
		);

		const [trackLeft, setTrackLeft, getTrackLeft] =
			useGetState<number>(undefined);

		const scrollTo = useCallback(
			(index: number) => {
				doubleRaf(() => {
					const tab = tabRefs.current[index];
					const tabList = tabListRef.current;

					if (tab == null || tabList == null) {
						return;
					}

					const duration =
						getTrackLeft() == null
							? 0
							: transitionDurationRef.current;
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
						duration,
					);
				});
			},
			[getTrackLeft, setTrackLeft, transitionDurationRef],
		);

		useImperativeHandle<TabsHeaderRef, TabsHeaderRef>(
			ref,
			() => {
				return {
					reset: () => scrollTo(activeIndexRef.current),
				};
			},
			[activeIndexRef, scrollTo],
		);

		useEffect(() => {
			scrollTo(activeIndex);
		}, [activeIndex, scrollTo]);

		useUpdateEffect(() => {
			scrollTo(activeIndexRef.current);
		}, [windowSize, activeIndexRef, scrollTo]);

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
						{trackLeft != null && (
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
