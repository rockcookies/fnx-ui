import { createContext } from 'react';
import { TabsContextData, TabsPanelContextData } from './interface';

export const TabsContext = createContext<TabsContextData>({});

export const TabsPanelContext = createContext<TabsPanelContextData>({});
