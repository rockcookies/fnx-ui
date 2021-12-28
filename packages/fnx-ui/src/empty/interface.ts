import { HTMLAttributes, ReactNode } from 'react';

export interface EmptyComponentProps {
	image?: ReactNode;
	title?: ReactNode;
	description?: ReactNode;
}

export type EmptyProps = EmptyComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;
