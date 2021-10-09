import { devWarning } from '../utils/misc';
import { createBEM } from '../utils/namespace';
import { UploaderFile } from './interface';

export const _bem = createBEM('fnx-uploader');

const now = +new Date();
let index = 0;

export function getFileUid() {
	return `fn-upload-${now}-${++index}`;
}

// https://github.com/react-component/upload/blob/master/src/attr-accept.ts
/* istanbul ignore next */
export function fileAccept(
	file: File,
	acceptedFiles?: string | string[],
): boolean {
	if (file && acceptedFiles) {
		const acceptedFilesArray = Array.isArray(acceptedFiles)
			? acceptedFiles
			: acceptedFiles.split(',');
		const fileName = file.name || '';
		const mimeType = file.type || '';
		const baseMimeType = mimeType.replace(/\/.*$/, '');

		return acceptedFilesArray.some((type) => {
			const validType = type.trim();
			// This is something like */*,*  allow all files
			if (/^\*(\/\*)?$/.test(type)) {
				return true;
			}

			// like .jpg, .png
			if (validType.charAt(0) === '.') {
				const lowerFileName = fileName.toLowerCase();
				const lowerType = validType.toLowerCase();

				let affixList = [lowerType];
				if (lowerType === '.jpg' || lowerType === '.jpeg') {
					affixList = ['.jpg', 'jpeg'];
				}

				return affixList.some((affix) => lowerFileName.endsWith(affix));
			}

			// This is something like a image/* mime type
			if (/\/\*$/.test(validType)) {
				return baseMimeType === validType.replace(/\/.*$/, '');
			}

			// Full match
			if (mimeType === validType) {
				return true;
			}

			// Invalidate type should skip
			if (/^\w+$/.test(validType)) {
				devWarning(
					false,
					'Uploader',
					`Upload takes an invalidate 'accept' type '${validType}'.Skip for check.`,
				);
				return true;
			}

			return false;
		});
	}
	return true;
}

const isImageFileType = (type: string): boolean => type.indexOf('image/') === 0;

export function readFileContent({
	file,
	content,
}: UploaderFile): Promise<string | undefined> {
	if (content != null) {
		return Promise.resolve(content || undefined);
	}

	if (file == null || file.type == null || !isImageFileType(file.type)) {
		return Promise.resolve(undefined);
	}

	return new Promise<string | undefined>((resolve) => {
		const reader = new FileReader();

		reader.onload = (event) => {
			resolve((event.target as FileReader).result as string);
		};

		reader.readAsDataURL(file);
	});
}
