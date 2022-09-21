import { PickerExportExtra } from './interface';
import _Picker from './Picker';
import InternalPickerCascade from './PickerCascade';
import InternalPickerMulti from './PickerMulti';

const Picker: typeof _Picker & PickerExportExtra = _Picker as any;
Picker.Multi = InternalPickerMulti;
Picker.Cascade = InternalPickerCascade;

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
