import { PickerExportExtra } from './interface';
import _Picker from './Picker';
import PickerCascade from './PickerCascade';
import PickerMulti from './PickerMulti';

const Picker: typeof _Picker & PickerExportExtra = _Picker as any;
Picker.Multi = PickerMulti;
Picker.Cascade = PickerCascade;

export type {
	PickerValue,
	PickerDataNames,
	PickerOption,
	PickerProps,
	PickerComponentProps,
	PickerRef,
	PickerMultiProps,
	PickerMultiComponentProps,
	PickerMultiRef,
	PickerCascadeProps,
	PickerCascadeComponentProps,
	PickerCascadeRef,
} from './interface';

export default Picker;
