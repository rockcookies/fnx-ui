import React, { CSSProperties, forwardRef } from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useProps from '../hooks/use-props';
import Icon from '../icon';
import { addUnit } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { SwitchProps } from './interface';

const NS = 'fnx-switch';
const bem = createBEM(NS);

type SwitchRequiredProps = Required<
	Pick<SwitchProps, 'disabled' | 'defaultChecked' | 'loading' | 'onClick'>
>;

const DEFAULT_PROPS: SwitchRequiredProps = {
	disabled: false,
	defaultChecked: false,
	loading: false,
	onClick: noop,
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>((_props, ref) => {
	const [
		{ disabled, defaultChecked, loading, onClick },
		{
			size,
			checkedColor,
			unCheckedColor,
			checkedChildren,
			unCheckedChildren,
			checked: _checked,
			onChange: _onChange,
			className,
			style,
			...restProps
		},
	] = useProps<SwitchRequiredProps, SwitchProps>(DEFAULT_PROPS, _props);

	const { value: checked, onChangeRef } = useControlledState<boolean>({
		value: _checked,
		defaultValue: defaultChecked,
		onChange: _onChange,
	});

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (disabled || loading) {
			return;
		}

		const nextChecked = !checked;

		onChangeRef.current(nextChecked);
		onClick(nextChecked, e);
	};

	const formatStyle = (): CSSProperties => {
		const formattedStyle: CSSProperties = {
			fontSize: addUnit(size),
			backgroundColor: checked ? checkedColor : unCheckedColor,
		};

		return { ...formattedStyle, ...style };
	};

	return (
		<div
			role="switch"
			className={classnames(
				bem({
					on: checked,
					loading,
					disabled,
				}),
				className,
			)}
			style={formatStyle()}
			aria-checked={checked}
			onClick={handleClick}
			ref={ref}
			{...restProps}
		>
			<span className={bem('handle')}>
				{loading && (
					<Icon.Spinner
						className={bem('loading')}
						color={checked ? checkedColor : unCheckedColor}
					/>
				)}
			</span>
			<span className={bem('inner')}>
				<span className={bem('children')}>
					{checked ? checkedChildren : unCheckedChildren}
				</span>
			</span>
		</div>
	);
});

Switch.displayName = 'Switch';

export type { SwitchComponentProps, SwitchProps } from './interface';

export default Switch;
