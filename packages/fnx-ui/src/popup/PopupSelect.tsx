import React, {
	cloneElement,
	isValidElement,
	ReactElement,
	ReactNode,
	useCallback,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import { ForwardRefProps } from '../utils/interface';
import { noop } from '../utils/misc';
import { createForwardRef } from '../utils/react';
import { PopupSelectProps } from './interface';
import Popup from './Popup';

const useProps = configComponentProps<
	Required<
		Pick<
			PopupSelectProps,
			| 'selectConfirmTrigger'
			| 'selectCancelTrigger'
			| 'selectDefaultValuePropName'
			| 'trigger'
			| 'disabled'
			| 'onClose'
		>
	>
>({
	selectConfirmTrigger: 'onConfirm',
	selectCancelTrigger: 'onCancel',
	selectDefaultValuePropName: 'defaultValue',
	trigger: 'onClick',
	disabled: false,
	onClose: noop,
});

const PopupSelect = createForwardRef<HTMLDivElement, PopupSelectProps>(
	'PopupSelect',
	(_props, ref) => {
		const [
			{
				selectConfirmTrigger,
				selectCancelTrigger,
				selectDefaultValuePropName,
				trigger,
				disabled,
				onClose,
			},
			{
				visible: _visible,
				value: _value,
				defaultValue,
				onChange: _onChange,
				select,
				position,
				children,
				...restProps
			},
		] = useProps(_props);

		const { value: visible, onChangeRef: setVisibleRef } =
			useControlledState({
				value: _visible,
				defaultValue: false,
			});

		const { value, onChangeRef } = useControlledState({
			value: _value,
			defaultValue,
			onChange: _onChange,
		});

		const call = useCallback(
			(eventName: string, props: any, ...args: any[]) => {
				if (props && typeof props[eventName] === 'function') {
					props[eventName](...args);
				}
			},
			[],
		);

		const renderSelect = (): ReactNode => {
			if (!isValidElement(select)) {
				return select;
			}

			return cloneElement(select, {
				...select.props,
				[selectDefaultValuePropName]:
					value !== undefined
						? value
						: select.props[selectDefaultValuePropName],
				[selectConfirmTrigger]: (...args: any[]) => {
					call(selectConfirmTrigger, select.props, ...args);
					(onChangeRef.current as any)(...args);
					setVisibleRef.current(false);
				},
				[selectCancelTrigger]: (...args: any[]) => {
					call(selectCancelTrigger, select.props, ...args);
					setVisibleRef.current(false);
					onClose();
				},
			});
		};

		const renderChildren = (): ReactNode => {
			let child = children;

			if (typeof children === 'function') {
				child = (children as any)(value);
			}

			if (!isValidElement(child)) {
				return child;
			}

			return cloneElement(child, {
				...child.props,
				[trigger]: (...args: any[]) => {
					if (!disabled) {
						setVisibleRef.current(true);
					}

					call(trigger, child && (child as any).props, ...args);
				},
			});
		};

		return (
			<>
				<Popup
					visible={visible}
					{...restProps}
					position={position || 'bottom'}
					onClose={() => {
						setVisibleRef.current(false);
						onClose();
					}}
					ref={ref}
				>
					{renderSelect()}
				</Popup>
				{renderChildren()}
			</>
		);
	},
) as <T = any>(
	props: ForwardRefProps<PopupSelectProps<T>, HTMLDivElement>,
) => ReactElement;

export default PopupSelect;
