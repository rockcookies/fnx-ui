import { ReactNode, HTMLAttributes } from 'react';

export type BadgeProps = BadgeComponentProps &
	Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;

export interface BadgeComponentProps {
	count?: ReactNode;
	showZero?: boolean;
	dot?: boolean;
	max?: string | number;
	color?: string;
	offset?: [number | string, number | string];
}
