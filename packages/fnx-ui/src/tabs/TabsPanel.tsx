import React, { useContext, useEffect, useState } from 'react';
import configComponentProps from '../hooks/config-component-props';
import Swipe from '../swipe';
import { createForwardRef } from '../utils/react';
import { TabsContext, TabsPanelContext } from './context';
import { TabsPanelProps } from './interface';
import { _bem as bem } from './utils';

const useProps = configComponentProps<
	Required<Pick<TabsPanelProps, 'title' | 'disabled' | 'forceRender'>>
>({
	title: null,
	disabled: false,
	forceRender: false,
});

const TabsPanel = createForwardRef<HTMLDivElement, TabsPanelProps>(
	'TabsPanel',
	(_props, ref) => {
		const [{ forceRender }, { className, children, ...restProps }] =
			useProps(_props);

		const key = (restProps as any)['data-fnx-tab-panel-key'];
		const { activeKey, animated, swipeable } = useContext(TabsContext);
		const isActive = key === activeKey;

		const [shouldRender, setShouldRender] = useState<boolean>(
			() => isActive || forceRender,
		);

		useEffect(() => {
			if (isActive) {
				setShouldRender(true);
			}
		}, [isActive]);

		const renderChildren = () => {
			return (
				<TabsPanelContext.Provider value={{ active: isActive }}>
					{shouldRender && children}
				</TabsPanelContext.Provider>
			);
		};

		if (animated || swipeable) {
			return (
				<Swipe.Item
					role="tabpanel"
					className={bem('swipe-item', { inactive: !isActive })}
					aria-hidden={!isActive}
					{...restProps}
				>
					<div className={bem('panel', className)} ref={ref}>
						{renderChildren()}
					</div>
				</Swipe.Item>
			);
		}

		return (
			<div
				role="tabpanel"
				className={bem('panel', className)}
				{...restProps}
				ref={ref}
				style={{
					display: !isActive ? 'none' : undefined,
					...restProps.style,
				}}
			>
				{renderChildren()}
			</div>
		);
	},
);

export default TabsPanel;
