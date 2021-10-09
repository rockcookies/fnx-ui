import { HTMLAttributes } from 'react';

export type RowAlign = 'top' | 'middle' | 'bottom' | 'stretch';

export type RowJustify =
	| 'start'
	| 'end'
	| 'center'
	| 'space-around'
	| 'space-between';

export interface RowContextData {
	gutter?: number;
}

export interface RowComponentProps {
	gutter?: number;
	align?: RowAlign;
	justify?: RowJustify;
}

export type RowProps = RowComponentProps & HTMLAttributes<HTMLDivElement>;
