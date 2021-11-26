import { ComponentType, HTMLAttributes, SVGAttributes, SVGProps } from 'react';
import Icon from './Icon';
import IconSpinner from './IconSpinner';

export interface IconComponentProps {
	name?: string;
	component?: ComponentType<SVGProps<SVGSVGElement>>;
	viewBox?: string;
	spin?: boolean;
	size?: string | number;
	color?: string;
}

export type IconProps = IconComponentProps & HTMLAttributes<HTMLSpanElement>;

export interface IconSpinnerComponentProps {
	size?: string | number;
	color?: string;
}

export type IconSpinnerProps = IconSpinnerComponentProps &
	HTMLAttributes<HTMLSpanElement>;

export interface IconExportExtra {
	createFromIconfontCN(
		scriptUrl: string,
		options?: SVGAttributes<any>,
	): typeof Icon;

	Spinner: typeof IconSpinner;
}
