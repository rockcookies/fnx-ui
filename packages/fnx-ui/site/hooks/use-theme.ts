import { useMemo } from 'react';
import dark from '../../src/style/dark.json';
import light from '../../src/style/light.json';
import { Dictionary } from '../../src/utils/interface';
import useHeadStyle from './use-head-style';

function useTheme(_theme: string | null | undefined): void {
	const theme = _theme === 'dark' ? 'dark' : 'light';

	const css = useMemo(() => {
		const variables: Dictionary<string> = theme !== 'dark' ? light : dark;
		let css = ':root {\n';

		for (const key in variables) {
			css += `${key}: ${variables[key]};\n`;
		}

		css += `}`;

		return css;
	}, [theme]);

	useHeadStyle(css);
}

export default useTheme;
