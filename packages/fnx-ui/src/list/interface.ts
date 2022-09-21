import { HTMLAttributes, ReactNode } from 'react';

export type ListStatus = 'default' | 'loading' | 'finished' | 'error';

export type ListDirection = 'up' | 'down';

export interface ListComponentProps {
	status?: ListStatus;
	offset?: number;
	direction?: ListDirection;
	slots?: ListSlots;
	onLoad?: () => void;
	immediateCheck?: boolean;
	scrollListenTo?: HTMLElement | Window | (() => HTMLElement | Window) | null;
}

export type ListProps = ListComponentProps & HTMLAttributes<HTMLDivElement>;

export interface ListSlots {
	default?: ReactNode;
	loading?: ReactNode;
	finished?: ReactNode;
	error?: ReactNode;
}

export interface ListRef {
	element: HTMLDivElement | null;
	scrollParent: HTMLElement | Window | null;
	check: () => void;
}
