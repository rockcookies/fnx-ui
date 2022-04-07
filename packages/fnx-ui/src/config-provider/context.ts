import { createContext } from 'react';
import defaultLocale from '../locale/default';
import { ConfigContextData } from './interface';

export const DEFAULT_CONFIG_CONTEXT: ConfigContextData = {
	locale: defaultLocale,
	safeAreaInsetTop: false,
	safeAreaInsetBottom: false,
	transitionDuration: 300,
	mountTo: () => document.body,
};

export const ConfigContext = createContext<ConfigContextData>(
	DEFAULT_CONFIG_CONTEXT,
);
