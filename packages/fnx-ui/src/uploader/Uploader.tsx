import React, {
	ChangeEvent,
	forwardRef,
	ReactElement,
	useCallback,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import Icon from '../icon';
import { useLocale } from '../locale';
import { isPromise } from '../utils/detect';
import { ForwardRefProps } from '../utils/interface';
import { noop } from '../utils/misc';
import { classnames } from '../utils/namespace';
import {
	UploaderFile,
	UploaderFileItem,
	UploaderMarkedFile,
	UploaderProps,
	UploaderRef,
} from './interface';
import UploaderPreviewItem from './UploaderPreviewItem';
import { fileAccept, getFileUid, readFileContent, _bem as bem } from './utils';

const useProps = configComponentProps<
	Required<
		Pick<
			UploaderProps,
			| 'multiple'
			| 'disabled'
			| 'showFileList'
			| 'maxCount'
			| 'defaultValue'
			| 'onRead'
			| 'onUpload'
			| 'onPreview'
			| 'onRemove'
			| 'slots'
		>
	>
>({
	multiple: false,
	disabled: false,
	showFileList: true,
	maxCount: Number.MAX_VALUE,
	defaultValue: [],
	onRead: (prev) => prev,
	onUpload: noop,
	onPreview: noop,
	onRemove: () => true,
	slots: {},
});

const parseUploaderFile = (file: UploaderFile): UploaderMarkedFile => {
	if (file.uid != null) {
		return file as UploaderMarkedFile;
	}

	return { ...file, uid: getFileUid() };
};

const InternalUploader = forwardRef<UploaderRef, UploaderProps>(
	(_props, ref) => {
		const locale = useLocale('uploader');

		const rootRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		const [
			{
				multiple,
				disabled,
				showFileList,
				maxCount,
				defaultValue: _defaultFileList,
				onRead,
				onUpload,
				onPreview,
				onRemove,
				slots,
			},
			{
				onChange: _onChange,
				capture,
				accept,
				value: _fileList,
				className,
				children,
				...restProps
			},
		] = useProps(_props);

		useImperativeHandle<UploaderRef, UploaderRef>(ref, () => ({
			root: rootRef.current,
			input: inputRef.current,
		}));

		const defaultFileList = useMemo<UploaderMarkedFile[]>(() => {
			return _defaultFileList.map((file) => parseUploaderFile(file));
		}, [_defaultFileList]);

		const propsFileList = useMemo<UploaderMarkedFile[] | undefined>(() => {
			return _fileList
				? _fileList.map((file) => parseUploaderFile(file))
				: undefined;
		}, [_fileList]);

		const { value, onChangeRef } = useControlledState<UploaderMarkedFile[]>(
			{
				value: propsFileList,
				defaultValue: defaultFileList,
				onChange: _onChange,
			},
		);

		const resetInput = useCallback(() => {
			const input = inputRef.current;

			if (input && input.value) {
				input.value = '';
			}
		}, []);

		const readFile = (files: UploaderFileItem[]) => {
			const remainCount = maxCount - value.length;

			if (files.length > remainCount) {
				files = files.slice(0, remainCount);
			}

			Promise.all(
				files.map((f) => readFileContent(f).catch(() => undefined)),
			).then((contents) => {
				const uploadList = files.map<UploaderFileItem>((file, idx) => {
					return {
						...file,
						content:
							file.content != null ? file.content : contents[idx],
					};
				});

				resetInput();
				onUpload(uploadList);
				onChangeRef.current([...value, ...uploadList]);
			});
		};

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			if (disabled) {
				return;
			}

			const files = e.target.files;

			const acceptedFiles = [...(files || [])]
				.filter((file) => fileAccept(file, accept))
				.map<UploaderFileItem>((file) => {
					return {
						...file,
						uid: getFileUid(),
						status: 'uploading',
						file,
					};
				});

			if (acceptedFiles.length <= 0) {
				return;
			}

			const res = onRead(acceptedFiles);

			if (isPromise(res)) {
				res.then(readFile).catch(resetInput);
			} else {
				readFile(res);
			}
		};

		const renderFileList = () => {
			if (!showFileList) {
				return;
			}

			return (
				slots.fileList ||
				value.map((file) => {
					return (
						<UploaderPreviewItem
							key={file.uid}
							file={file}
							onPreview={() => onPreview(file)}
							onBeforeRemove={() => onRemove(file)}
							onRemove={() =>
								onChangeRef.current(
									value.filter((f) => f.uid !== file.uid),
								)
							}
						>
							{slots.filePreviewCover &&
								slots.filePreviewCover(file)}
						</UploaderPreviewItem>
					);
				})
			);
		};

		const renderUpload = () => {
			if (value.length >= maxCount) {
				return;
			}

			const input = (
				<input
					className={bem('input')}
					ref={inputRef}
					type="file"
					capture={capture}
					multiple={multiple}
					disabled={disabled}
					onChange={handleChange}
				/>
			);

			if (children) {
				return (
					<div className={bem('input-wrapper')}>
						{children}
						{input}
					</div>
				);
			}

			return (
				<div className={bem('upload')}>
					<Icon className={bem('upload-icon')} name="plus" />
					<span className={bem('upload-text')}>{locale.upload}</span>
					{input}
				</div>
			);
		};

		return (
			<div
				className={classnames(bem({ disabled }), className)}
				{...restProps}
				ref={rootRef}
			>
				<div className={bem('wrapper')}>
					{renderFileList()}
					{renderUpload()}
				</div>
			</div>
		);
	},
);

InternalUploader.displayName = 'Uploader';

const Uploader = InternalUploader as <T extends UploaderFile = UploaderFile>(
	props: ForwardRefProps<UploaderProps<T>, UploaderRef>,
) => ReactElement;

export default Uploader;
