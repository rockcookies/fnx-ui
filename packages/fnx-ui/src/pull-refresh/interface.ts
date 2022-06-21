import { HTMLAttributes, ReactNode } from 'react';

export type PullRefreshIndicatorNode =
	| ReactNode
	| ((distance: number) => ReactNode);

export type PullRefreshStatus =
	| 'normal'
	| 'loading'
	| 'loosing'
	| 'pulling'
	| 'success';

export interface PullRefreshComponentProps {
	disabled?: boolean;
	successDuration?: number;
	transitionDuration?: number;
	slots?: PullRefreshSlots;
	indicatorHeight?: number;
	refreshing?: boolean;
	onRefresh?: () => void;
	onChange?: (data: { status: PullRefreshStatus }) => void;
}

export type PullRefreshProps = PullRefreshComponentProps &
	HTMLAttributes<HTMLDivElement>;

export interface PullRefreshSlots {
	loading?: PullRefreshIndicatorNode;
	loosing?: PullRefreshIndicatorNode;
	pulling?: PullRefreshIndicatorNode;
	success?: PullRefreshIndicatorNode;
}
