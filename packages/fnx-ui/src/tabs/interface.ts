import { HTMLAttributes, Key, MouseEvent, ReactNode } from 'react';
import { StickyProps } from '../sticky';
import { TabsContext, TabsPanelContext } from './context';
import TabsPanel from './TabsPanel';

export interface TabsComponentProps {
	defaultActiveKey?: string | number;
	activeKey?: string | number;
	onChange?: (key: string) => void;
	tabSwipeThreshold?: number;
	onTabClick?: (
		e: MouseEvent<HTMLDivElement>,
		option: { disabled: boolean; key: string; index: number },
	) => void;
	trackWidth?: number | string;
	trackHeight?: number | string;
	trackColor?: string;
	border?: boolean;
	transitionDuration?: number;
	animated?: boolean;
	ellipsis?: boolean;
	sticky?: boolean;
	stickyProps?: StickyProps;
	swipeable?: boolean;
	slots?: TabsSlots;
}

export interface TabsRef {
	element: HTMLDivElement | null;
	reset: () => void;
}

export interface TabsSlots {
	navLeft?: ReactNode;
	navRight?: ReactNode;
	navBottom?: ReactNode;
}

export type TabsProps = TabsComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export interface TabsPanelComponentProps {
	title?: ReactNode;
	disabled?: boolean;
	forceRender?: boolean;
}

export type TabsPanelProps = TabsPanelComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface TabsExportExtra {
	Panel: typeof TabsPanel;
	Context: typeof TabsContext;
	PanelContext: typeof TabsPanelContext;
}

export interface TabsContextData {
	activeKey?: Key;
	animated?: boolean;
	swipeable?: boolean;
}

export interface TabsPanelContextData {
	active?: boolean;
}
