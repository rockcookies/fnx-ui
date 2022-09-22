import { Options, ResolvedOptions } from './interface';

export function resolveOptions(userOptions: Options): ResolvedOptions {
	const options = Object.assign(
		{
			include: null,
			exclude: null,
		},
		userOptions,
	);

	return options;
}
