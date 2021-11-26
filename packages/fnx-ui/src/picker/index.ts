import { PickerExportExtra } from './interface';
import _Picker from './Picker';
import PickerCascade from './PickerCascade';
import PickerMulti from './PickerMulti';

const Picker: typeof _Picker & PickerExportExtra = _Picker as any;
Picker.Multi = PickerMulti;
Picker.Cascade = PickerCascade;

export type {
	PickerProps,
	PickerComponentProps,
	PickerRef,
	PickerMultiComponentProps,
	PickerMultiProps,
	PickerMultiRef,
	PickerCascadeComponentProps,
	PickerCascadeProps,
	PickerCascadeRef,
	PickerValue,
	PickerDataNames,
	PickerOption,
	PickerOptionOrValue,
} from './interface';

export default Picker;
