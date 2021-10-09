import { createContext } from 'react';
import { noop } from '../../src/utils/misc';
import { SiteContextData } from '../site-protocol';

export const SiteContext = createContext<SiteContextData>({
	theme: 'light',
	locale: 'en-US',
	responsive: {},
	setTheme: noop,
});
