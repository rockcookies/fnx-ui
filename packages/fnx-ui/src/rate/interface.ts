import { HTMLAttributes, ReactNode } from 'react';

export interface RateComponentProps {
	value?: number;
	defaultValue?: number;
	onChange?: (value: number) => void;
	size?: number | string;
	color?: string;
	voidColor?: string;
	disabledColor?: string;
	voidDisabledColor?: string;
	gutter?: string | number;
	readonly?: boolean;
	disabled?: boolean;
	allowHalf?: boolean;
	count?: number;
	touchable?: boolean;
	character?: ReactNode;
	voidCharacter?: ReactNode;
}

export type RateProps = RateComponentProps &
	Omit<HTMLAttributes<HTMLUListElement>, 'color' | 'onChange'>;
