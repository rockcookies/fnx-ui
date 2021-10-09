import { useForm as useRcForm } from 'rc-field-form';
import { useMemo } from 'react';
import { FormInstance } from '../interface';

export default function useForm<Values = any>(
	form?: FormInstance<Values>,
): [FormInstance<Values>] {
	const [rcForm] = useRcForm();

	const wrapForm: FormInstance<Values> = useMemo(() => {
		if (form) {
			return form;
		}

		/* const findFieldNode = (name: NamePath): Element | null => {
			const fieldKey = getFieldId(name);

			if (!fieldKey) {
				return null;
			}

			const containerRef = wrapForm.__INTERNAL__.formRef;
			const container = containerRef && containerRef.current;

			if (!container || !IS_BROWSER) {
				return null;
			}

			return container.querySelector(
				`[data-form-field-key="${fieldKey}"]`,
			);
		}; */

		return (
			form || {
				...rcForm,
				__INTERNAL__: {},
			}
		);
	}, [form, rcForm]);
	return [wrapForm];
}
