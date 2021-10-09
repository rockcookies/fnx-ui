/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/display-name */
import React, { useCallback, useState } from 'react';
import Uploader, { UploaderFile } from '..';
// @ts-ignore
import demo01 from '../../../site/assets/demo-dog-01.jpg';
// @ts-ignore
import demo02 from '../../../site/assets/demo-dog-02.jpg';
// @ts-ignore
import demo03 from '../../../site/assets/demo-dog-03.jpg';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import useDestroyedRef from '../../hooks/use-destroyed-ref';
import Icon from '../../icon';
import Toast from '../../toast';
import { Dictionary } from '../../utils/interface';
import { sleep } from '../../utils/misc';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-uploader');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		uploadStatus: '上传状态',
		uploading: '上传中...',
		failed: '上传失败',
		maxCount: '限制上传数量',
		disabled: '禁用文件上传',
		upload: '上传文件',
		customUpload: '自定义上传样式',
		invalidType: '请上传 jpg 格式图片',
		imageName: '图片名称',
		previewCover: '自定义预览样式',
		beforeRead: '上传前置处理',
		fileName: '刀.png',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		uploadStatus: 'Upload Status',
		uploading: 'Uploading...',
		failed: 'Failed',
		maxCount: 'Max Count',
		disabled: 'Disabled Uploader',
		upload: 'Upload File',
		customUpload: 'Custom Upload Area',
		invalidType: 'Please upload an image in jpg format',
		imageName: 'Image Name',
		previewCover: 'Preview Cover',
		beforeRead: 'Upload On Read',
		fileName: 'Blade.png',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const [uploaderData, _setUploaderData] = useState<
		Dictionary<UploaderFile[]>
	>(() => {
		return {
			basicUsage: [
				{
					url: demo01,
					status: 'done',
				},
				{
					thumbnail: false,
					url: demo01,
					status: 'done',
					name: i18n.fileName,
				},
			],
			uploadStatus: [
				{
					status: 'uploading',
					message: i18n.uploading,
					content: demo01,
				},
				{
					status: 'failed',
					message: i18n.failed,
					content: demo02,
				},
			],
			maxCount: [
				{
					url: demo03,
					status: 'done',
				},
			],
			disabled: [],
			customUpload: [],
			invalidType: [],
			previewCover: [
				{
					url: demo02,
					status: 'done',
					file: {
						name: i18n.imageName,
					} as any,
				},
			],
			beforeRead: [],
		};
	});

	const setUploaderData = (
		key: string,
		next: UploaderFile[] | ((p: UploaderFile[]) => UploaderFile[]),
	) => {
		_setUploaderData((prev) => {
			const fileList =
				typeof next === 'function' ? next(prev[key]) : next;

			return {
				...prev,
				[key]: fileList,
			};
		});
	};

	const destroyedRef = useDestroyedRef();

	const delay = useCallback(
		(action: () => void, ms = 1000) => {
			sleep(ms).then(() => {
				if (!destroyedRef.current) {
					action();
				}
			});
		},
		[destroyedRef],
	);

	return (
		<>
			<DemoBlock cardMode={true} title={i18n.basicUsage}>
				<Uploader defaultValue={uploaderData.basicUsage} />
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.uploadStatus}>
				<Uploader
					value={uploaderData.uploadStatus}
					onChange={(v) => setUploaderData('uploadStatus', v)}
					onRead={(fileList) =>
						fileList.map((file) => ({
							...file,
							status: 'uploading',
							message: i18n.uploading,
						}))
					}
					onUpload={(fileList) =>
						delay(() =>
							setUploaderData('uploadStatus', (prev) =>
								prev.map<UploaderFile>((file) => {
									if (
										fileList.findIndex(
											(item) => item.uid === file.uid,
										) >= 0
									) {
										return {
											...file,
											status: 'failed',
											message: i18n.failed,
										};
									}

									return file;
								}),
							),
						)
					}
				/>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.maxCount}>
				<Uploader
					defaultValue={uploaderData.maxCount}
					maxCount={2}
					onRead={(fileList) =>
						fileList.map((file) => ({
							...file,
							status: 'done',
						}))
					}
				/>
			</DemoBlock>
			<DemoBlock cardMode={true} title={i18n.customUpload}>
				<Uploader
					defaultValue={uploaderData.customUpload}
					onRead={(fileList) =>
						fileList.map((file) => ({
							...file,
							status: 'done',
						}))
					}
				>
					<Button icon={<Icon name="plus" />} type="primary">
						{i18n.upload}
					</Button>
				</Uploader>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.previewCover}>
				<Uploader
					defaultValue={uploaderData.previewCover}
					onRead={(fileList) =>
						fileList.map((file) => ({
							...file,
							status: 'done',
						}))
					}
					slots={{
						filePreviewCover: ({ file }) => (
							<div className={bem('preview-cover')}>
								{file && file.name}
							</div>
						),
					}}
				/>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.beforeRead}>
				<Uploader
					defaultValue={uploaderData.beforeRead}
					onRead={(fileList) => {
						if (
							fileList.findIndex(
								({ file }) => file.type !== 'image/jpeg',
							) >= 0
						) {
							Toast.show(i18n.invalidType);
							return [];
						}

						return fileList.map((file) => ({
							...file,
							status: 'done',
						}));
					}}
					slots={{
						filePreviewCover: ({ file }) => (
							<div className={bem('preview-cover')}>
								{file && file.name}
							</div>
						),
					}}
				/>
			</DemoBlock>

			<DemoBlock cardMode={true} title={i18n.disabled}>
				<Uploader
					defaultValue={uploaderData.disabled}
					onRead={(fileList) =>
						fileList.map((file) => ({
							...file,
							status: 'done',
						}))
					}
					disabled={true}
				/>
			</DemoBlock>
		</>
	);
}
