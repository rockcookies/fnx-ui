import { HTMLAttributes } from 'react';

type DividerContentPosition = 'left' | 'right' | 'center';

export interface DividerComponentProps {
	dashed?: boolean;
	hairline?: boolean;
	contentPosition?: DividerContentPosition;
}

export type DividerProps = DividerComponentProps &
	HTMLAttributes<HTMLDivElement>;
