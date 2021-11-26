import { HTMLAttributes, ReactNode } from 'react';
import { ButtonProps } from '../button/interface';
import { PopupComponentProps } from '../popup/interface';

export interface DialogLocale {
	confirm: string;
	cancel: string;
}

export type DialogMessageAlign = 'left' | 'right' | 'center';

export interface DialogComponentProps
	extends Omit<PopupComponentProps, 'onClose'> {
	title?: ReactNode;
	footer?: ReactNode;
	width?: number | string;
	message?: ReactNode;
	messageAlign?: DialogMessageAlign;
	confirmButton?: ReactNode;
	confirmText?: string;
	confirmLoading?: boolean;
	confirmButtonProps?: ButtonProps;
	cancelButton?: ReactNode;
	cancelText?: string;
	cancelLoading?: boolean;
	cancelButtonProps?: ButtonProps;
	bodyProps?: HTMLAttributes<HTMLDivElement>;
	onConfirm?: () => void;
	onCancel?: () => void;
}

export type DialogProps = DialogComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export interface DialogStaticProps extends DialogProps {
	onConfirm?: () => Promise<any> | any;
	onCancel?: () => Promise<any> | any;
}

export interface DialogInstance {
	update: (props: DialogProps) => void;
	clear: () => void;
}

export interface DialogContext {
	show: (props: DialogProps) => DialogInstance;
}

export interface DialogExportExtra {
	show: (props: DialogProps) => DialogInstance;
	useDialog: () => DialogContext;
	clearAll: () => void;
}
