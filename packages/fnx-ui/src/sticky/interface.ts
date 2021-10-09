import { HTMLAttributes } from 'react';

export type StickyPosition = 'top' | 'bottom';

export interface StickyComponentProps {
	zIndex?: number;
	container?: Element | (() => Element | undefined | null) | null;
	offsetTop?: number | string;
	offsetBottom?: number | string;
	position?: StickyPosition;
	onChange?: (option: { fixed: boolean }) => void;
	onScroll?: (option: { fixed: boolean; scrollTop: number }) => void;
}

export type StickyProps = StickyComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onScroll'>;

export interface StickyRef {
	root: HTMLDivElement | null;
	isFixed: () => boolean;
}
