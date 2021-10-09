import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonType =
	| 'default'
	| 'primary'
	| 'success'
	| 'warning'
	| 'danger';

export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export type ButtonShape = 'rect' | 'radius' | 'round';

export interface ButtonComponentProps {
	type?: ButtonType;
	size?: ButtonSize;
	icon?: ReactNode;
	iconPosition?: 'left' | 'right';
	loading?: boolean;
	loadingIcon?: ReactNode;
	loadingChildren?: ReactNode;
	disabled?: boolean;
	hairline?: boolean;
	plain?: boolean;
	shape?: ButtonShape;
	block?: boolean;
	color?: string;
	htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export type ButtonProps = ButtonComponentProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
