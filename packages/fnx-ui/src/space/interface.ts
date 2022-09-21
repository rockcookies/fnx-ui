import { HTMLAttributes } from 'react';

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export type SpaceDirection = 'vertical' | 'horizontal';

export type SpaceSize = string | number;

export interface SpaceComponentProps {
	direction?: SpaceDirection;
	align?: SpaceAlign;
	size?: SpaceSize | SpaceSize[];
	wrap?: boolean;
	fill?: boolean;
}

export type SpaceProps = SpaceComponentProps & HTMLAttributes<HTMLDivElement>;
