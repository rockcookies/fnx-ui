import { HTMLAttributes, ReactNode } from 'react';

export type CascaderValue = string | number;

export interface CascaderOption {
	label?: ReactNode;
	value?: CascaderOption;
	loading?: boolean;
	disabled?: boolean;
	children?: CascaderOption[];
	// for custom filed names
	[key: string]: any;
}

export interface CascaderDataNames {
	label?: string | string[];
	value?: string | string[];
	loading?: string | string[];
	disabled?: string | string[];
	children?: string | string[];
}

export interface CascaderComponentProps<T = CascaderOption> {
	defaultValue?: CascaderValue[];
	data?: T[];
	dataNames?: CascaderDataNames;
	onLoadData?: (options: T[]) => void;
	onConfirm?: (value: CascaderValue[], options: T[]) => void;
	onCancel?: () => void;
	onChange?: (value: CascaderValue[], options: T[]) => void;
	title?: ReactNode;
	placeholder?: ReactNode;
	swipeable?: boolean;
	closeIcon?: ReactNode;
	activeColor?: string;
}

export type CascaderProps<T = CascaderOption> = CascaderComponentProps<T> &
	Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'title' | 'onChange'>;
