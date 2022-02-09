import { useForm as useRcForm } from 'rc-field-form';
import { FormInstance } from '../interface';

const useForm: <Values = any>(
	form?: FormInstance<Values>,
) => [FormInstance<Values>] = useRcForm;

export default useForm;
