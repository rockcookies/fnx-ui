import { HTMLAttributes } from 'react';

export interface OverlayComponentProps {
	visible?: boolean;
	lockScroll?: boolean;
	zIndex?: number;
	transitionDuration?: number;
}

export type OverlayProps = OverlayComponentProps &
	HTMLAttributes<HTMLDivElement>;

/* export interface TransitionProps {
	nodeRef?: RefObject<Element>;
	in?: boolean;
	enter?: boolean;
	exit?: boolean;
	timeout?: number;
	onEnter?: () => void;
	onEntering?: () => void;
	onEntered?: () => void;
	onExit?: () => void;
	onExiting?: () => void;
	onExited?: () => void;
} */
