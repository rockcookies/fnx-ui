import React, { useContext, useEffect } from 'react';
import { changeConfirmLocale } from '../dialog/locale';
import useCreation from '../hooks/use-creation';
import { createFC } from '../utils/react';
import { ConfigContext, DEFAULT_CONFIG_CONTEXT } from './context';
import { ConfigContextData, ConfigProviderProps } from './interface';

const ConfigProvider = createFC(
	'ConfigProvider',
	({ children, ...restProps }: ConfigProviderProps) => {
		const parentContext = useContext(ConfigContext);

		const context = useCreation<ConfigContextData>(
			(prev) => {
				const next: ConfigContextData = {
					...DEFAULT_CONFIG_CONTEXT,
					...parentContext,
					...restProps,
				};

				if (!prev) {
					return next;
				}

				const prevKeys = Object.keys(prev);
				const nextKeys = Object.keys(next);

				return prevKeys.length === nextKeys.length &&
					prevKeys.every(
						(key) => (prev as any)[key] !== (next as any)[key],
					)
					? prev
					: next;
			},
			[restProps, parentContext],
		);

		useEffect(() => {
			changeConfirmLocale(context.locale && context.locale.dialog);
		}, [context.locale]);

		return (
			<ConfigContext.Provider value={context}>
				{children}
			</ConfigContext.Provider>
		);
	},
);

export default ConfigProvider;
