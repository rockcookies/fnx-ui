import { HTMLAttributes } from 'react';

export type CircleLinecap = 'butt' | 'round' | 'square';

export type CircleGapPosition = 'top' | 'right' | 'bottom' | 'left';

export type CircleStringGradients = { [percentage: string]: string };

export interface CircleProps extends HTMLAttributes<HTMLDivElement> {
	size?: string | number;
	strokeColor?: string | CircleStringGradients;
	strokeLinecap?: CircleLinecap;
	strokeWidth?: string | number;
	trailColor?: string;
	progress?: number;
	clockwise?: boolean;
	speed?: number;
	fill?: string;
	gapDegree?: number;
	gapPosition?: CircleGapPosition;
}
