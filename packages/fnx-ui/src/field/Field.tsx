import React, {
	cloneElement,
	forwardRef,
	isValidElement,
	useContext,
	useMemo,
} from 'react';
import Cell from '../cell';
import { FormContext, FormItemContext } from '../form/context';
import useDefaults from '../hooks/use-defaults';
import useProps from '../hooks/use-props';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { FieldProps } from './interface';

const NS = 'fnx-field';
const bem = createBEM(NS);

type FieldRequiredProps = Required<
	Pick<
		FieldProps,
		| 'labelAlign'
		| 'helpAlign'
		| 'colon'
		| 'required'
		| 'labelProps'
		| 'controlProps'
		| 'titleProps'
		| 'contentProps'
		| 'disabled'
		| 'help'
	>
>;

const Field = forwardRef<HTMLDivElement, FieldProps>((_props, ref) => {
	const formContext = useContext(FormContext);
	const { meta, isRequired: fieldIsRequired } = useContext(FormItemContext);

	const requiredProps = useMemo<FieldRequiredProps>(() => {
		return {
			labelAlign: formContext.labelAlign || 'left',
			helpAlign: formContext.helpAlign || 'left',
			colon: formContext.colon != null ? formContext.colon : false,
			required:
				typeof formContext.requiredMark === 'boolean'
					? formContext.requiredMark
					: false,
			labelProps: {},
			controlProps: {},
			titleProps: {},
			contentProps: {},
			disabled: false,
			help: [],
		};
	}, [
		formContext.colon,
		formContext.helpAlign,
		formContext.labelAlign,
		formContext.requiredMark,
	]);

	const [
		{
			labelAlign,
			helpAlign,
			colon,
			required,
			labelProps,
			controlProps,
			titleProps,
			contentProps,
			disabled,
			help,
		},
		{
			labelWidth: _labelWidth,
			label,
			controlPrefix,
			controlSuffix,
			className,
			children,
			...restProps
		},
	] = useProps<FieldRequiredProps, FieldProps>(requiredProps, _props);

	const labelWidth = useDefaults<string | number | undefined>(
		undefined,
		_labelWidth,
		formContext.labelWidth,
	);

	let helps = (meta && meta.errors) || [];

	if (Array.isArray(help)) {
		helps = [...help, ...helps];
	} else {
		helps = [help, ...helps];
	}

	const classes: Dictionary = {};

	if (meta && meta.validating) {
		classes.validating = true;
	} else if (helps.length > 0) {
		classes.error = true;
	} else if (meta && meta.touched) {
		classes.success = true;
	}

	const renderChildren = () => {
		if (!isValidElement(children)) {
			return children;
		}

		if (children.props.disabled != null) {
			return children;
		}

		return cloneElement(children, {
			...children.props,
			disabled,
		});
	};

	return (
		<Cell
			{...restProps}
			className={classnames(
				bem([
					{
						...classes,
						required:
							fieldIsRequired != null
								? fieldIsRequired
								: required,
						disabled,
					},
				]),
				className,
			)}
			ref={ref}
			title={label}
			titleProps={{
				...labelProps,
				className: classnames(
					bem('label', [`text-${labelAlign}`, { colon }]),
					labelProps.className,
					titleProps.className,
				),
				style: {
					...(labelWidth !== 0 ? { width: addUnit(labelWidth) } : {}),
					...titleProps.style,
				},
			}}
			contentProps={{
				...controlProps,
				...contentProps,
				className: classnames(
					bem('control'),
					controlProps.className,
					contentProps.className,
				),
			}}
		>
			<div className={bem('control-body')}>
				{controlPrefix && (
					<div className={bem('control-prefix')}>{controlPrefix}</div>
				)}
				<div className={bem('control-item')}>{renderChildren()}</div>
				{controlSuffix && (
					<div className={bem('control-suffix')}>{controlSuffix}</div>
				)}
			</div>
			{helps.length > 0 && (
				<div className={bem('help', [`text-${helpAlign}`])}>
					{helps.map((err, idx) => (
						<div key={idx}>{err}</div>
					))}
				</div>
			)}
		</Cell>
	);
});

Field.displayName = 'Field';

export default Field;
