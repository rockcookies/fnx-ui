import { HTMLAttributes } from 'react';

export interface ColComponentProps {
	offset?: number;
	span?: number;
}

export type ColProps = ColComponentProps & HTMLAttributes<HTMLDivElement>;
