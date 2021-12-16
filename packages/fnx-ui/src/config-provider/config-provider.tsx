import React, { useContext, useEffect, useRef } from 'react';
import { changeConfirmLocale } from '../dialog/locale';
import { createFC } from '../utils/react';
import { ConfigContext } from './context';
import { ConfigContextData, ConfigProviderProps } from './interface';

const ConfigProvider = createFC(
	'ConfigProvider',
	({ children, locale, ...restProps }: ConfigProviderProps) => {
		const parentContext = useContext(ConfigContext);

		const next: ConfigContextData = {
			...parentContext,
			...restProps,
			locale: locale || parentContext.locale,
		};

		const contextRef = useRef<ConfigContextData>();

		if (contextRef.current != null) {
			const prev = contextRef.current;

			const prevKeys = Object.keys(prev);
			const nextKeys = Object.keys(next);

			contextRef.current =
				prevKeys.length === nextKeys.length &&
				prevKeys.every(
					(key) => (prev as any)[key] === (next as any)[key],
				)
					? prev
					: next;
		} else {
			contextRef.current = next;
		}

		useEffect(() => {
			if (locale) {
				changeConfirmLocale(locale.dialog);

				return () => {
					changeConfirmLocale();
				};
			}
		}, [locale]);

		return (
			<ConfigContext.Provider value={contextRef.current}>
				{children}
			</ConfigContext.Provider>
		);
	},
);

export default ConfigProvider;
