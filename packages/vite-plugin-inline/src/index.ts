import { createFilter } from '@rollup/pluginutils';
import type { Plugin } from 'vite';
import { Options } from './interface';
import { resolveOptions } from './options';
import fs from 'fs';
import url from 'url';
import mime from 'mime-types';

const template = (data: string) => `
  var data = "${data}";
  export default data;
`;

function VitePluginInline(userOptions: Options = {}): Plugin {
	const options = resolveOptions(userOptions);

	const filter = createFilter(options.include, options.exclude);

	return {
		name: '@fnx-ui/vite-plugin-inline',
		enforce: 'pre',
		transform: async function (_raw, id) {
			const { query, search } = url.parse(id, true);
			const file = id.replace(search || '?', '');

			const encoding = query.inline;

			if (
				!filter(file) ||
				!(
					typeof encoding === 'string' &&
					[
						'ascii',
						'utf8',
						'utf-8',
						'utf16le',
						'ucs2',
						'ucs-2',
						'base64',
						'base64url',
						'latin1',
						'binary',
						'hex',
					].includes(encoding)
				)
			) {
				return;
			}

			try {
				const content = await fs.promises.readFile(file, {
					encoding: encoding as any,
				});

				const mimetype = mime.lookup(file);

				return template(`data:${mimetype};${encoding},${content}`);
			} catch (e: any) {
				this.error(e);
			}
		},
	};
}

export type { Options, ResolvedOptions } from './interface';
export default VitePluginInline;
