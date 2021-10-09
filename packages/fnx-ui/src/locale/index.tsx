import { useContext, useMemo } from 'react';
import ConfigProvider from '../config-provider';
import { Dictionary } from '../utils/interface';

export function useLocale(key: string): Dictionary {
	const { locale } = useContext(ConfigProvider.Context);

	return useMemo(() => {
		const output: any = locale || {};
		return output[key] || {};
	}, [locale, key]);
}
