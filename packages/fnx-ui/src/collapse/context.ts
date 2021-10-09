import { createContext } from 'react';
import { noop } from '../utils/misc';
import { CollapseContextData } from './interface';

const CollapseContext = createContext<CollapseContextData>({
	activeKey: [],
	onChange: noop,
	ghost: false,
});

export default CollapseContext;
