import { createContext } from 'react';
import { PopupContextData } from './interface';

export const PopupContext = createContext<PopupContextData>({
	visible: false,
});
