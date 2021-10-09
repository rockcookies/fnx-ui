import { useContext, useMemo } from 'react';
import { Dictionary } from '../../src/utils/interface';
import DemoContext from '../pages/Demo/context';

function useDemoTranslate(
	locales: Dictionary<Dictionary>,
	defaultLocale: string,
): [Dictionary] {
	const { locale } = useContext(DemoContext);

	const translate = useMemo<Dictionary<string>>(() => {
		return locales[locale] || locales[defaultLocale];
	}, [locale, locales, defaultLocale]);

	return [translate];
}

export default useDemoTranslate;
