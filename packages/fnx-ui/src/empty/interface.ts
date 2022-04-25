import { HTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';

export interface EmptyComponentProps {
	image?: ReactNode;
	imageProps?: ImgHTMLAttributes<HTMLImageElement>;
	title?: ReactNode;
	description?: ReactNode;
}

export type EmptyProps = EmptyComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'title'>;
