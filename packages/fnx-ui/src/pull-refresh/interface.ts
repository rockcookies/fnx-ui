import { HTMLAttributes, ReactNode } from 'react';

export type PullRefreshIndicatorNode =
	| ReactNode
	| ((distance: number) => ReactNode);

export interface PullRefreshComponentProps {
	disabled?: boolean;
	successDuration?: number;
	transitionDuration?: number;
	slots?: PullRefreshSlots;
	indicatorHeight?: number;
	refreshing?: boolean;
	onRefresh?: () => void;
}

export type PullRefreshProps = PullRefreshComponentProps &
	HTMLAttributes<HTMLDivElement>;

export interface PullRefreshSlots {
	loading?: PullRefreshIndicatorNode;
	loosing?: PullRefreshIndicatorNode;
	pulling?: PullRefreshIndicatorNode;
	success?: PullRefreshIndicatorNode;
}
