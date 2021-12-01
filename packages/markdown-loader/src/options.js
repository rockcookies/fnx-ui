export function resolveOptions(userOptions) {
	const options = Object.assign(
		{
			frontmatter: true,
			customSfcBlocks: ['route', 'i18n', 'style'],
			escapeCodeTagInterpolation: true,
			markdownIt: null,
			markdownItOptions: {},
			markdownItUses: [],
			markdownItSetup: (MarkdownIt) => MarkdownIt,
			transforms: {},
		},
		userOptions,
	);

	return options;
}
