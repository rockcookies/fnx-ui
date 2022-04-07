import { Context, ReactNode } from 'react';
import { Locale } from '../locale/interface';

export interface ConfigContextData {
	locale: Locale;
	safeAreaInsetTop: boolean;
	safeAreaInsetBottom: boolean;
	transitionDuration: number;
	mountTo: () => HTMLElement;
}

export interface ConfigProviderProps extends Partial<ConfigContextData> {
	children?: ReactNode;
}

export interface ConfigProviderExportExtra {
	Context: Context<ConfigContextData>;
}
