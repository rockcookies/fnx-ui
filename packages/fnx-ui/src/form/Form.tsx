import RcFieldForm from 'rc-field-form';
import React, {
	forwardRef,
	ForwardRefRenderFunction,
	HTMLAttributes,
	ReactElement,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import { useLocale } from '../locale';
import { ForwardRefProps } from '../utils/interface';
import { deepAssign, deepClone } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { FormContext } from './context';
import useForm from './hooks/use-form';
import { FormContextData, FormInstance, FormProps } from './interface';

const NS = 'fnx-form';
const bem = createBEM(NS);

const FormContainer = forwardRef<
	HTMLFormElement,
	HTMLAttributes<HTMLFormElement>
>((props, ref) => {
	const formRef = useRef<HTMLFormElement>(null);
	useImperativeHandle<HTMLFormElement | null, HTMLFormElement | null>(
		ref,
		() => formRef.current,
	);

	const [wrapForm] = useForm();
	wrapForm.__INTERNAL__.formRef = formRef;

	return <form {...props} ref={formRef}></form>;
});

FormContainer.displayName = 'FormContainer';

const InternalForm: ForwardRefRenderFunction<FormInstance, FormProps> = (
	props,
	ref,
) => {
	const {
		colon,
		requiredMark,
		labelAlign,
		labelWidth,
		helpAlign,
		form,
		className,
		validateMessages,
		...restProps
	} = props;

	const [wrapForm] = useForm(form);

	const formContextValue = useMemo<FormContextData>(
		() => ({
			colon,
			requiredMark,
			labelAlign,
			labelWidth,
			helpAlign,
		}),
		[colon, requiredMark, labelAlign, labelWidth, helpAlign],
	);

	useImperativeHandle(ref, () => wrapForm);

	const { validate } = useLocale('form');

	const messages = useMemo<any>(() => {
		if (!validate) {
			return validateMessages;
		}

		if (!validateMessages) {
			return validate;
		}

		return deepAssign(deepClone(validate), validateMessages);
	}, [validate, validateMessages]);

	return (
		<FormContext.Provider value={formContextValue}>
			<RcFieldForm
				{...restProps}
				validateMessages={messages}
				form={wrapForm}
				className={classnames(bem(), className)}
				component={FormContainer}
			/>
		</FormContext.Provider>
	);
};

InternalForm.displayName = 'Form';

const Form = forwardRef<FormInstance, FormProps>(InternalForm) as <
	Values = any,
>(
	props: ForwardRefProps<FormProps<Values>, FormInstance<Values>>,
) => ReactElement;

export default Form;
