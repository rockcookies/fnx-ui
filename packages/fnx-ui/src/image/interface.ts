import { ImgHTMLAttributes, ReactNode } from 'react';

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type ImagePosition =
	| 'center'
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| string;

export interface ImageSlots {
	loading?: ReactNode;
	error?: ReactNode;
}

export interface ImageComponentProps {
	src?: string;
	fit?: ImageFit;
	position?: ImagePosition;
	alt?: string;
	width?: number | string;
	height?: number | string;
	radius?: number | string;
	round?: boolean;
	lazy?: boolean;
	slots?: ImageSlots;
}

export type ImageProps = ImageComponentProps &
	ImgHTMLAttributes<HTMLImageElement>;
