import { createContext } from 'react';
import { FormContextData, FormItemContextData } from './interface';

export const FormContext = createContext<FormContextData>({});

export const FormItemContext = createContext<FormItemContextData>({});
