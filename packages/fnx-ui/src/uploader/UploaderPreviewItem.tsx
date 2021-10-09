import React, { forwardRef } from 'react';
import useProps from '../hooks/use-props';
import Icon from '../icon';
import Image from '../image';
import { isPromise } from '../utils/detect';
import { noop } from '../utils/misc';
import { classnames } from '../utils/namespace';
import { UploaderPreviewItemProps } from './interface';
import { _bem as bem } from './utils';

type UploaderPreviewItemRequiredProps = Required<
	Pick<
		UploaderPreviewItemProps,
		'file' | 'onPreview' | 'onBeforeRemove' | 'onRemove'
	>
>;

const DEFAULT_PROPS: UploaderPreviewItemRequiredProps = {
	file: {},
	onPreview: noop,
	onBeforeRemove: () => true,
	onRemove: noop,
};

const UploaderPreviewItem = forwardRef<
	HTMLDivElement,
	UploaderPreviewItemProps
>((_props, ref) => {
	const [
		{ file, onPreview, onBeforeRemove, onRemove },
		{ className, children, ...restProps },
	] = useProps<UploaderPreviewItemRequiredProps, UploaderPreviewItemProps>(
		DEFAULT_PROPS,
		_props,
	);

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
					<Icon name="close" className={bem('mask-icon')} />
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
				<Icon name="file" className={bem('file-icon')} />
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
			<div className={bem('preview-remove')} onClick={handleRemove}>
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

UploaderPreviewItem.displayName = 'UploaderPreviewItem';

export default UploaderPreviewItem;
