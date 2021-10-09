import { HTMLAttributes } from 'react';

export type TagType = 'default' | 'primary' | 'success' | 'danger' | 'warning';

export type TagSize = 'sm' | 'md' | 'lg';

export type TagTheme = 'plain' | 'round' | 'mark';

export interface TagComponentProps {
	type?: TagType;
	size?: TagSize;
	color?: string;
	textColor?: string;
	visible?: boolean;
	theme?: TagTheme;
	closeable?: boolean;
	closeIcon?: React.ReactNode;
	transitionDuration?: number;
	onClose?: () => void;
}

export type TagProps = TagComponentProps & HTMLAttributes<HTMLDivElement>;
