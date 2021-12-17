import React, { cloneElement, isValidElement, useContext } from 'react';
import Cell from '../cell';
import { FormHelpAlign, FormLabelAlign } from '../form';
import { FormContext, FormItemContext } from '../form/context';
import configComponentProps from '../hooks/config-component-props';
import useDefaults from '../hooks/use-defaults';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { FieldProps } from './interface';

const NS = 'fnx-field';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			FieldProps,
			| 'labelProps'
			| 'controlProps'
			| 'titleProps'
			| 'contentProps'
			| 'disabled'
			| 'help'
		>
	>
>({
	labelProps: {},
	controlProps: {},
	titleProps: {},
	contentProps: {},
	disabled: false,
	help: [],
});

const Field = createForwardRef<HTMLDivElement, FieldProps>(
	'Field',
	(_props, ref) => {
		const [
			{
				labelProps,
				controlProps,
				titleProps,
				contentProps,
				disabled,
				help,
			},
			{
				labelAlign: _labelAlign,
				helpAlign: _helpAlign,
				colon: _colon,
				required: _required,
				labelWidth: _labelWidth,
				label,
				controlPrefix,
				controlSuffix,
				className,
				children,
				...restProps
			},
		] = useProps(_props);

		const formContext = useContext(FormContext);
		const { meta, isRequired: fieldIsRequired } =
			useContext(FormItemContext);

		const labelAlign = useDefaults<FormLabelAlign>(
			'left',
			_labelAlign,
			formContext.labelAlign,
		);

		const helpAlign = useDefaults<FormHelpAlign>(
			'left',
			_helpAlign,
			formContext.helpAlign,
		);
		const colon = useDefaults<boolean>(false, _colon, formContext.colon);
		const required = useDefaults<boolean>(
			formContext.requiredMark === true,
			_required,
		);

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
						...(labelWidth !== 0
							? { width: addUnit(labelWidth) }
							: {}),
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
						<div className={bem('control-prefix')}>
							{controlPrefix}
						</div>
					)}
					<div className={bem('control-item')}>
						{renderChildren()}
					</div>
					{controlSuffix && (
						<div className={bem('control-suffix')}>
							{controlSuffix}
						</div>
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
	},
);

export default Field;
