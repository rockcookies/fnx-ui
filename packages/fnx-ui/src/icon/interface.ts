import {
	ComponentType,
	ForwardRefExoticComponent,
	HTMLAttributes,
	RefAttributes,
	SVGAttributes,
	SVGProps,
} from 'react';

export interface IconComponentProps {
	name?: string;
	component?: ComponentType<SVGProps<SVGSVGElement>>;
	viewBox?: string;
	spin?: boolean;
	size?: string | number;
	color?: string;
}

export type IconProps = IconComponentProps & HTMLAttributes<HTMLSpanElement>;

export type IconComponent = ForwardRefExoticComponent<
	IconProps & RefAttributes<HTMLSpanElement>
>;

export interface IconSpinnerComponentProps {
	size?: string | number;
	color?: string;
}

export type IconSpinnerProps = IconSpinnerComponentProps &
	HTMLAttributes<HTMLSpanElement>;

export type IconSpinnerComponent = ForwardRefExoticComponent<
	IconSpinnerProps & RefAttributes<HTMLSpanElement>
>;

export interface IconExportExtra {
	createFromIconfontCN(
		scriptUrl: string,
		options?: SVGAttributes<any>,
	): IconComponent;

	Spinner: IconSpinnerComponent;
}
