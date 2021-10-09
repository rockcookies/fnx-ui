import { createContext } from 'react';
import { RowContextData } from './interface';

const RowContext = createContext<RowContextData>({});

export default RowContext;
