import MarkdownIt from 'markdown-it';
import { Options, ResolvedOptions } from './interface';

export function resolveOptions(userOptions: Options): ResolvedOptions {
	const options = Object.assign(
		{
			frontmatter: true,
			customSfcBlocks: ['route', 'i18n', 'style'],
			escapeCodeTagInterpolation: true,
			markdownIt: null,
			markdownItOptions: {},
			markdownItUses: [],
			markdownItSetup: (MarkdownIt: MarkdownIt) => MarkdownIt,
			transforms: {},
			include: /\.md$/,
			exclude: null,
		},
		userOptions,
	);

	return options;
}
