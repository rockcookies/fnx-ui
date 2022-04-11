import {
	ComponentType,
	ForwardRefExoticComponent,
	HTMLAttributes,
	SVGAttributes,
	SVGProps,
} from 'react';
import Icon from './Icon';
import IconSpinner from './IconSpinner';

export interface IconCustomComponentProps {
	name?: string;
	viewBox?: string;
	spin?: boolean;
	size?: string | number;
	color?: string;
}

export interface IconComponentProps extends IconCustomComponentProps {
	component?:
		| ComponentType<IconCustomComponentProps | SVGProps<SVGSVGElement>>
		| ForwardRefExoticComponent<IconCustomComponentProps>;
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
