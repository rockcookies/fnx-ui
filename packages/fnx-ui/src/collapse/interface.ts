import { HTMLAttributes, ReactNode } from 'react';
import { CellProps } from '../cell';
import CollapseItem from './CollapseItem';

export interface CollapseComponentProps {
	accordion?: boolean;
	activeKey?: string | string[];
	defaultActiveKey?: string | string[];
	onChange?: (key: string[]) => void;
	ghost?: boolean;
}

export type CollapseProps = CollapseComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export interface CollapseItemComponentProps {
	title?: ReactNode;
	titleProps?: HTMLAttributes<HTMLDivElement>;
	headerProps?: CellProps;
	disabled?: boolean;
	ghost?: boolean;
	transitionDuration?: number;
}

export type CollapseItemProps = CollapseItemComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface CollapseContextData {
	accordion?: boolean;
	activeKey: string[];
	onChange: (key: string[]) => void;
	ghost: boolean;
}

export interface CollapseExportExtra {
	Item: typeof CollapseItem;
}
