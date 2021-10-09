import { HTMLAttributes, ReactNode } from 'react';
import CellGroup from './CellGroup';

export type CellItemsAlign = 'top' | 'middle' | 'bottom';

export interface CellComponentProps {
	title?: ReactNode;
	titleProps?: HTMLAttributes<HTMLDivElement>;
	content?: ReactNode;
	contentProps?: HTMLAttributes<HTMLDivElement>;
	description?: ReactNode;
	descriptionProps?: HTMLAttributes<HTMLDivElement>;
	leftIcon?: ReactNode;
	leftIconProps?: HTMLAttributes<HTMLSpanElement>;
	rightIcon?: ReactNode;
	rightIconProps?: HTMLAttributes<HTMLSpanElement>;
	border?: boolean;
	itemsAlign?: CellItemsAlign;
	clickable?: boolean;
	size?: 'md' | 'lg';
}

export type CellProps = CellComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface CellGroupComponentProps {
	title?: ReactNode;
	titleProps?: HTMLAttributes<HTMLDivElement>;
	border?: boolean;
	insert?: boolean;
	bodyProps?: HTMLAttributes<HTMLDivElement>;
}

export type CellGroupProps = CellGroupComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface CellExportExtra {
	Group: typeof CellGroup;
}
