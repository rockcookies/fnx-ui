import { HTMLAttributes } from 'react';

export type DividerContentPosition = 'left' | 'right' | 'center';

export interface DividerComponentProps {
	dashed?: boolean;
	hairline?: boolean;
	contentPosition?: DividerContentPosition;
}

export type DividerProps = DividerComponentProps &
	HTMLAttributes<HTMLDivElement>;
