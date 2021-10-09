import { createContext } from 'react';

const DemoContext = createContext<{ locale: string; theme: string }>({
	locale: 'en-US',
	theme: 'light',
});

export default DemoContext;
