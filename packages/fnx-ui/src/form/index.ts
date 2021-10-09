import _Form from './Form';
import FormItem from './FormItem';
import FormList from './FormList';
import useForm from './hooks/use-form';
import { FormExportExtra } from './interface';

const Form: typeof _Form & FormExportExtra = _Form as any;
Form.Item = FormItem;
Form.List = FormList;
Form.useForm = useForm;

export {
	NamePath,
	FormMeta,
	FormLabelAlign,
	FormHelpAlign,
	FormRequiredMark,
	FormInstance,
	FormItemChildren,
	FormItemProps,
	FormListField,
	FormListOperations,
	FormListProps,
	FormProps,
} from './interface';
export default Form;
