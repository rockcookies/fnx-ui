import { FC } from 'react';
import _ConfigProvider from './config-provider';
import { ConfigContext } from './context';
import { ConfigProviderExportExtra, ConfigProviderProps } from './interface';

const ConfigProvider: FC<ConfigProviderProps> & ConfigProviderExportExtra =
	_ConfigProvider as any;

ConfigProvider.Context = ConfigContext;

export type { ConfigContextData, ConfigProviderProps } from './interface';

export default ConfigProvider;
