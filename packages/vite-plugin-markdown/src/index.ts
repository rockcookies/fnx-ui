import { Options } from './interface';
import { createMarkdown } from './markdown';
import { resolveOptions } from './options';
import type { Plugin } from 'vite';
import { createFilter } from '@rollup/pluginutils';

function VitePluginMarkdown(userOptions: Options = {}): Plugin {
	const options = resolveOptions(userOptions);
	const compile = createMarkdown(options);

	const filter = createFilter(options.include, options.exclude);

	return {
		name: '@fnx-ui/vite-plugin-markdown',
		enforce: 'pre',
		transform(raw, id) {
			if (!filter(id)) return;
			try {
				return compile(id, raw);
			} catch (e: any) {
				this.error(e);
			}
		},
		async handleHotUpdate(ctx) {
			if (!filter(ctx.file)) return;

			const defaultRead = ctx.read;
			ctx.read = async function () {
				return compile(ctx.file, await defaultRead());
			};
		},
	};
}

export type { Options, ResolvedOptions } from './interface';
export default VitePluginMarkdown;
