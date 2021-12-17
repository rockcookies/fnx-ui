import React from 'react';
import configComponentProps from '../hooks/config-component-props';
import Icon from '../icon';
import Image from '../image';
import { isPromise } from '../utils/detect';
import { noop } from '../utils/misc';
import { classnames } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { UploaderPreviewItemProps } from './interface';
import { _bem as bem } from './utils';

const useProps = configComponentProps<
	Required<
		Pick<
			UploaderPreviewItemProps,
			'file' | 'onPreview' | 'onBeforeRemove' | 'onRemove'
		>
	>
>({
	file: {},
	onPreview: noop,
	onBeforeRemove: () => true,
	onRemove: noop,
});

const UploaderPreviewItem = createForwardRef<
	HTMLDivElement,
	UploaderPreviewItemProps
>('UploaderPreviewItem', (_props, ref) => {
	const [
		{ file, onPreview, onBeforeRemove, onRemove },
		{ className, children, ...restProps },
	] = useProps(_props);

	const handleRemove = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();

		const res = onBeforeRemove();

		const handler = (r: boolean | void) => {
			if (r !== false) {
				onRemove();
			}
		};

		if (isPromise(res)) {
			res.then(handler);
		} else {
			handler(res);
		}
	};

	const renderMask = () => {
		const { status, message } = file;

		if (status === 'uploading' || status === 'failed') {
			const icon =
				status === 'failed' ? (
					<Icon name="close-o" className={bem('mask-icon')} />
				) : (
					<Icon.Spinner className={bem('mask-icon-loading')} />
				);

			return (
				<div className={bem('mask')}>
					{icon}
					{message && (
						<div className={bem('mask-message')}>{message}</div>
					)}
				</div>
			);
		}
	};

	const renderPreview = () => {
		const { content, url, thumbnail, name } = file;

		const cover = children && (
			<div className={bem('preview-cover')}>{children}</div>
		);

		if (thumbnail !== false) {
			return (
				<Image
					fit="cover"
					src={content || url}
					className={bem('preview-image')}
					onClick={onPreview}
				>
					{cover}
				</Image>
			);
		}

		return (
			<div className={bem('file')} onClick={onPreview}>
				<Icon name="file-o" className={bem('file-icon')} />
				<div className={bem('file-name')}>{name}</div>
				{cover}
			</div>
		);
	};

	const renderRemoveHandler = () => {
		const { status, removable } = file;

		if (removable === false || status === 'uploading') {
			return;
		}

		return (
			<div
				role="button"
				tabIndex={0}
				className={bem('preview-remove')}
				onClick={handleRemove}
			>
				<Icon name="cross" className={bem('preview-remove-icon')} />
			</div>
		);
	};

	return (
		<div
			className={classnames(bem('preview'), className)}
			{...restProps}
			ref={ref}
		>
			{renderPreview()}
			{renderMask()}
			{renderRemoveHandler()}
		</div>
	);
});

export default UploaderPreviewItem;
