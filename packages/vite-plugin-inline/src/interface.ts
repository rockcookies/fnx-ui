import type { FilterPattern } from '@rollup/pluginutils';

export interface Options {
	include?: FilterPattern;
	exclude?: FilterPattern;
}

export type ResolvedOptions = Required<Options>;
