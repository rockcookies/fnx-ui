import _Field from './Field';
import FieldInput from './FieldInput';
import FieldTextArea from './FieldTextArea';
import { FieldExportExtra } from './interface';

const Field: typeof _Field & FieldExportExtra = _Field as any;
Field.Input = FieldInput;
Field.TextArea = FieldTextArea;

export type {
	FieldProps,
	FieldInputComponentProps,
	FieldInputProps,
	FieldInputRef,
	FieldTextAreaComponentProps,
	FieldTextAreaProps,
	FieldTextAreaRef,
	FieldTextAreaCountFormatter,
	FieldInputType,
} from './interface';

export default Field;
