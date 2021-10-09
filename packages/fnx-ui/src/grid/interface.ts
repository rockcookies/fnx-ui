import { HTMLAttributes } from 'react';
import GridItem from './GridItem';

export interface GridExportExtra {
	Item: typeof GridItem;
}

export interface GridComponentProps {
	columnSize?: number;
	clickable?: boolean;
	gutter?: string | number;
	border?: boolean;
	square?: boolean;
}

export type GridProps = GridComponentProps & HTMLAttributes<HTMLDivElement>;

export type GridContextData = GridComponentProps;

export interface GridItemComponentProps {
	clickable?: boolean;
	square?: boolean;
}

export type GridItemProps = GridItemComponentProps &
	HTMLAttributes<HTMLDivElement>;
