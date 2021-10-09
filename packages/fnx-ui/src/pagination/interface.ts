import { HTMLAttributes, ReactNode } from 'react';

export type PaginationMode = 'multi' | 'simple';

export interface PaginationComponentProps {
	total?: number;
	defaultCurrent?: number;
	current?: number;
	pageSize?: number;
	hideOnSinglePage?: boolean;
	forceEllipses?: boolean;
	onChange?: (current: number, pageSize: number) => void;
	pageItemCount?: number;
	mode?: PaginationMode;
	slots?: PaginationSlots;
}

export type PaginationProps = PaginationComponentProps &
	Omit<HTMLAttributes<HTMLUListElement>, 'onChange'>;

export interface PaginationSlots {
	prev?: ReactNode;
	next?: ReactNode;
}
