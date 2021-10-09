import { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface SwitchComponentProps {
	size?: string | number;
	disabled?: boolean;
	loading?: boolean;

	checkedColor?: string;
	unCheckedColor?: string;
	checkedChildren?: ReactNode;
	unCheckedChildren?: ReactNode;

	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	onClick?: (checked: boolean, event: MouseEvent<HTMLDivElement>) => void;
}

export type SwitchProps = SwitchComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick'>;
