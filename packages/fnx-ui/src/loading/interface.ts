import { HTMLAttributes } from 'react';

export interface LoadingProps extends HTMLAttributes<HTMLSpanElement> {
	vertical?: boolean;
	size?: number | string;
	color?: string;
	text?: string;
	textColor?: string;
	textSize?: number | string;
}
