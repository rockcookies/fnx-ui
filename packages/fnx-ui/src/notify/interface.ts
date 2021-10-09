import { HTMLAttributes } from 'react';
import { PopupComponentProps } from '../popup';

export type NotifyType = 'primary' | 'success' | 'warning' | 'danger';

export interface NotifyComponentProps extends PopupComponentProps {
	type?: NotifyType;
	message?: string;
	duration?: number;
	color?: string;
	background?: string;
}

export type NotifyProps = NotifyComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'type'>;

export interface NotifyContext {
	show: (props: string | NotifyProps) => NotifyInstance;
}

export interface NotifyExportExtra {
	show: (props: string | NotifyProps) => NotifyInstance;
	useNotify: () => NotifyContext;
	allowMultiple: (allow: boolean) => void;
	clearAll: () => void;
}

export interface NotifyInstance {
	update: (props: NotifyProps) => void;
	clear: () => void;
}
