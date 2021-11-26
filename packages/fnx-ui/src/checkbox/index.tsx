import _Checkbox from './Checkbox';
import InternalCheckboxGroup from './CheckboxGroup';
import { CheckboxExportExtra } from './interface';

const Checkbox: typeof _Checkbox & CheckboxExportExtra = _Checkbox as any;
Checkbox.Group = InternalCheckboxGroup;

export type {
	CheckboxComponentProps,
	CheckboxProps,
	CheckboxRef,
	CheckboxGroupComponentProps,
	CheckboxGroupProps,
	CheckboxGroupRef,
	CheckboxBaseProps,
	CheckboxValue,
} from './interface';

export default Checkbox;
