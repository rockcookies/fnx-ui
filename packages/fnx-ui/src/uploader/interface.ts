import { HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { SetRequired } from '../utils/interface';
import InternalUploader from './Uploader';
import UploaderPreviewItem from './UploaderPreviewItem';

export type UploaderFileStatus = 'failed' | 'done' | 'uploading';

export interface UploaderFile {
	uid?: string;
	name?: string;
	size?: number;
	type?: string;
	lastModified?: number;
	removable?: boolean;
	content?: string;
	status?: UploaderFileStatus;
	thumbnail?: boolean;
	message?: string;
	file?: File;
	url?: string;
}

type PromiseOrNot<T> = T | Promise<T>;

export type UploaderMarkedFile<T extends UploaderFile = UploaderFile> =
	SetRequired<T, 'uid'>;

export type UploaderFileItem<T extends UploaderFile = UploaderFile> =
	SetRequired<T, 'uid' | 'file'>;

export interface UploaderSlots<T extends UploaderFile = UploaderFile> {
	filePreviewCover?: (item: UploaderMarkedFile<T>) => ReactNode;
	fileList?: ReactNode;
}

export interface UploaderComponentProps<T extends UploaderFile = UploaderFile> {
	accept?: string | string[];
	multiple?: boolean;
	disabled?: boolean;
	capture?: InputHTMLAttributes<HTMLInputElement>['capture'];
	showFileList?: boolean;
	maxCount?: number;
	value?: T[];
	defaultValue?: T[];
	onRead?: (e: UploaderFileItem<T>[]) => PromiseOrNot<UploaderFileItem<T>[]>;
	onUpload?: (e: UploaderFileItem<T>[]) => void;
	onChange?: (e: UploaderMarkedFile<T>[]) => void;
	onPreview?: (file: UploaderMarkedFile<T>) => void;
	onRemove?: (file: UploaderMarkedFile<T>) => PromiseOrNot<boolean | void>;
	slots?: UploaderSlots<T>;
}

export type UploaderProps<T extends UploaderFile = UploaderFile> =
	UploaderComponentProps<T> &
		Omit<
			HTMLAttributes<HTMLDivElement>,
			'onChange' | 'value' | 'defaultValue'
		>;

export interface UploaderRef {
	element: HTMLDivElement | null;
	input: HTMLInputElement | null;
}

export interface UploaderPreviewItemComponentProps {
	file?: UploaderFile;
	onPreview: () => void;
	onBeforeRemove?: () => PromiseOrNot<boolean | void>;
	onRemove?: () => void;
}

export type UploaderPreviewItemProps = UploaderPreviewItemComponentProps &
	HTMLAttributes<HTMLDivElement>;

export type UploaderComponent = typeof InternalUploader;
export type UploaderPreviewItemComponent = typeof UploaderPreviewItem;

export interface UploaderExportExtra {
	PreviewItem: UploaderPreviewItemComponent;
}
