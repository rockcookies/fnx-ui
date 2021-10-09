import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import Uploader from '../';
import TestsDOM from '../../../test/dom';
import { sleep } from '../../utils/misc';
import { UploaderFileItem, UploaderProps } from '../interface';

describe('<Uploader/>', () => {
	const mockFile = new File([new ArrayBuffer(10000)], 'foo.png', {
		type: 'image/png',
	});

	const mockFileDataUrl = 'data:image/test';

	function mockReadAsText(this: FileReader) {
		if (this.onload) {
			this.onload({
				target: {
					result: mockFileDataUrl,
				},
			} as ProgressEvent<FileReader>);
		}
	}

	Object.defineProperty(window.FileReader.prototype, 'readAsText', {
		value: mockReadAsText,
	});

	Object.defineProperty(window.FileReader.prototype, 'readAsDataURL', {
		value: mockReadAsText,
	});

	function createUploader(props: UploaderProps) {
		const { container, rerender } = render(<Uploader {...props} />);

		return {
			container,
			input: () =>
				TestsDOM.mustQuerySelector<HTMLInputElement>(
					container,
					'.fnx-uploader__input',
				),
			rerender,
		};
	}

	it('disabled', async () => {
		const onUpload = jest.fn();

		const { input } = createUploader({
			disabled: true,
			onUpload,
		});

		fireEvent.change(input(), { target: { files: [mockFile] } });

		await waitFor(() => expect(onUpload).toBeCalledTimes(0));
	});

	it('read file', async () => {
		const onUpload = jest.fn();

		const { input } = createUploader({
			onUpload: ([file]) => {
				expect(file.content).toBe(mockFileDataUrl);
				onUpload();
			},
		});

		fireEvent.change(input(), { target: { files: [mockFile] } });

		await waitFor(() => expect(onUpload).toBeCalledTimes(1));
	});

	it('onRead', async () => {
		const onUpload = jest.fn();
		const onRead = jest.fn();

		const fileList: UploaderFileItem[] = [
			{ uid: '1', content: '1', file: mockFile },
		];

		const { input } = createUploader({
			onRead: async (files) => {
				onRead(files.length);
				return sleep(10).then(() => fileList);
			},
			onUpload: (files) => {
				onUpload(files);
			},
		});

		fireEvent.change(input(), { target: { files: [mockFile] } });

		await waitFor(() => expect(onRead).toBeCalledWith(1));
		await waitFor(() => expect(onUpload).toBeCalledWith(fileList));
	});

	it('thumbnail', async () => {
		const fileUrl = 'https://upload.com/foo.txt';
		const imageUrl = 'https://dummyimage.com/300x200/fff.png';

		const { container } = createUploader({
			value: [
				{
					status: 'uploading',
					content: imageUrl,
				},
				{
					status: 'failed',
					content: imageUrl,
					message: 'failed',
				},
				{
					status: 'done',
					content: fileUrl,
					message: 'done',
				},
				{
					status: 'done',
					content: fileUrl,
					removable: false,
					message: 'done',
				},
			],
		});

		expect(container).toMatchSnapshot();
	});

	it('max-count', async () => {
		const onUpload = jest.fn();

		const { input } = createUploader({
			maxCount: 2,
			multiple: true,
			defaultValue: [
				{
					uid: '1',
					url: 'https://dummyimage.com/600x400/000/fff.png',
					status: 'uploading',
					thumbnail: false,
				},
			],
			onUpload: (files) => {
				onUpload(files.length);
			},
		});

		fireEvent.change(input(), {
			target: { files: [mockFile, mockFile, mockFile] },
		});

		await waitFor(() => expect(onUpload).toBeCalledWith(1));
	});

	it('render children', () => {
		const { container } = createUploader({
			showFileList: false,
			defaultValue: [],
			children: <div>children</div>,
		});

		expect(container).toMatchSnapshot();
	});

	it('test preview', async () => {
		const onPreview = jest.fn();

		const { container } = createUploader({
			defaultValue: [
				{
					uid: 'file',
					url: 'https://upload.com/foo.txt',
					status: 'done',
					thumbnail: false,
				},
				{
					uid: 'image',
					url: 'https://dummyimage.com/300x200/fff.png',
					status: 'done',
					content: 'https://dummyimage.com/50/fff.png',
				},
			],
			onPreview: (file) => {
				onPreview(file.uid);
			},
		});

		const file = TestsDOM.mustQuerySelector(
			container,
			'.fnx-uploader__file',
		);

		fireEvent.click(file);

		expect(onPreview).toBeCalledWith('file');

		const image = TestsDOM.mustQuerySelector(
			container,
			'.fnx-uploader__preview-image',
		);

		fireEvent.click(image);

		expect(onPreview).toBeCalledWith('image');
	});

	it('test remove', async () => {
		const onRemoveFalse = jest.fn().mockResolvedValue(false);

		const { container, rerender } = createUploader({
			defaultValue: [
				{
					uid: 'file',
					url: 'https://upload.com/foo.txt',
					status: 'done',
					thumbnail: false,
				},
				{
					uid: 'image',
					url: 'https://dummyimage.com/300x200/fff.png',
					status: 'done',
					content: 'https://dummyimage.com/50/fff.png',
				},
			],
			onRemove: onRemoveFalse,
		});

		expect(container).toMatchSnapshot();

		const target = TestsDOM.mustQuerySelector(
			container,
			'.fnx-uploader__preview-remove',
		);

		fireEvent.click(target);
		await waitFor(() => expect(onRemoveFalse).toBeCalledTimes(1));
		expect(container).toMatchSnapshot();

		const onRemoveTrue = jest.fn().mockReturnValue(true);

		rerender(<Uploader onRemove={onRemoveTrue} />);
		fireEvent.click(target);
		await waitFor(() => expect(onRemoveTrue).toBeCalledTimes(1));
		expect(container).toMatchSnapshot();
	});
});
