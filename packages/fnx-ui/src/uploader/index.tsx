import { UploaderComponent, UploaderExportExtra } from './interface';
import _Uploader from './Uploader';
import UploaderPreviewItem from './UploaderPreviewItem';

const Uploader: UploaderComponent & UploaderExportExtra = _Uploader as any;
Uploader.PreviewItem = UploaderPreviewItem;

export type {
	UploaderFileStatus,
	UploaderFile,
	UploaderMarkedFile,
	UploaderFileItem,
	UploaderSlots,
	UploaderComponentProps,
	UploaderProps,
	UploaderRef,
	UploaderPreviewItemComponentProps,
	UploaderPreviewItemProps,
} from './interface';

export default Uploader;
