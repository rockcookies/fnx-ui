import React, {
	cloneElement,
	isValidElement,
	useCallback,
	useMemo,
} from 'react';
import useControlledState from '../hooks/use-controlled-state';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef, toElementArray } from '../utils/react';
import CollapseContext from './context';
import { CollapseProps } from './interface';

const NS = 'fnx-collapse';
const bem = createBEM(NS);

const parseKeys = (keys: string | string[]): string[] => {
	const formatted: string[] = [];

	for (const key of Array.isArray(keys) ? keys : [keys]) {
		formatted.push(key);
	}

	return formatted;
};

const Collapse = createDefaultsForwardRef<
	HTMLDivElement,
	CollapseProps,
	Required<Pick<CollapseProps, 'defaultActiveKey' | 'accordion' | 'ghost'>>
>(
	'Collapse',
	{
		defaultActiveKey: [],
		accordion: false,
		ghost: false,
	},
	(
		{
			defaultActiveKey: _defaultActiveKey,
			accordion,
			ghost,
			// optionals
			activeKey: __activeKey,
			onChange: _onChange,
			className,
			children,
			...restProps
		},
		ref,
	) => {
		const _activeKeys = useMemo<string[] | undefined>(
			() => (__activeKey == null ? undefined : parseKeys(__activeKey)),
			[__activeKey],
		);

		const defaultActiveKeys = useMemo<string[]>(
			() => parseKeys(_defaultActiveKey != null ? _defaultActiveKey : []),
			[_defaultActiveKey],
		);

		const { value: activeKey, onChangeRef } = useControlledState({
			value: _activeKeys,
			defaultValue: defaultActiveKeys,
			onChange: _onChange,
		});

		const onChange = useCallback(
			(v: string[]) => onChangeRef.current(v),
			[onChangeRef],
		);

		return (
			<CollapseContext.Provider
				value={{
					activeKey,
					onChange,
					accordion,
					ghost,
				}}
			>
				<div
					className={classnames(bem(), className)}
					{...restProps}
					ref={ref}
				>
					{toElementArray(children).map((child, idx) => {
						if (isValidElement<any>(child)) {
							const key =
								child.key != null ? `${child.key}` : `${idx}`;

							return cloneElement(child, {
								...child.props,
								key,
								'data-fnx-collapse-item-key': key,
							});
						}
					})}
				</div>
			</CollapseContext.Provider>
		);
	},
);

export default Collapse;
