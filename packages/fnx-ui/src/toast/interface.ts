import {
	ForwardRefExoticComponent,
	HTMLAttributes,
	ReactNode,
	RefAttributes,
} from 'react';
import { PopupComponentProps } from '../popup';

export type ToastPosition = 'top' | 'middle' | 'bottom';

export interface ToastComponentProps
	extends Omit<PopupComponentProps, 'position'> {
	position?: ToastPosition;
	message?: string;
	icon?: ReactNode;
	duration?: number;
	forbidClick?: boolean;
	clickCloseable?: boolean;
}

export type ToastProps = ToastComponentProps & HTMLAttributes<HTMLDivElement>;

export type ToastComponent = ForwardRefExoticComponent<
	ToastProps & RefAttributes<HTMLDivElement>
>;

export interface ToastContext {
	show: (props: string | ToastProps) => ToastInstance;
	loading: (props: string | ToastProps) => ToastInstance;
	success: (props: string | ToastProps) => ToastInstance;
	fail: (props: string | ToastProps) => ToastInstance;
}

export interface ToastExportExtra {
	show: (props: string | ToastProps) => ToastInstance;
	loading: (props: string | ToastProps) => ToastInstance;
	success: (props: string | ToastProps) => ToastInstance;
	fail: (props: string | ToastProps) => ToastInstance;
	useToast: () => ToastContext;
	allowMultiple: (allow: boolean) => void;
	clearAll: () => void;
}

export interface ToastInstance {
	update: (props: ToastProps) => void;
	clear: () => void;
}
