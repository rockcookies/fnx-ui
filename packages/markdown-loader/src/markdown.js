/* eslint-disable @typescript-eslint/no-var-requires */
const MarkdownIt = require('markdown-it');
const matter = require('gray-matter');

function extractCustomBlock(html, options) {
	const blocks = [];
	for (const tag of options.customSfcBlocks) {
		html = html.replace(
			new RegExp(`<${tag}[^>]*\\b[^>]*>[^<>]*<\\/${tag}>`, 'mg'),
			(code) => {
				blocks.push(code);
				return '';
			},
		);
	}

	return { html, blocks };
}

const stringify = (src) =>
	JSON.stringify(src)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

function exportContext() {
	const exported = [];

	return {
		add: (key, code) => {
			exported.push(`${key}: ${code}`);
		},

		build: () => {
			return `module.exports = {\n ${exported.join(',\n')}\n };`;
		},
	};
}

export function createMarkdown(options) {
	let markdown;

	if (
		options.markdownIt instanceof MarkdownIt ||
		options.markdownIt?.constructor?.name === 'MarkdownIt'
	) {
		markdown = options.markdownIt;
	} else {
		markdown = new MarkdownIt({
			html: true,
			linkify: true,
			typographer: true,
			...options.markdownItOptions,
		});

		markdown.linkify.set({ fuzzyLink: false });

		options.markdownItUses.forEach((e) => {
			const [plugin, options] = Array.isArray(e) ? e : [e];

			markdown.use(plugin, options);
		});

		options.markdownItSetup(markdown);
	}

	return (raw) => {
		const { transforms } = options;

		raw = raw.trimLeft();

		if (transforms.before) raw = transforms.before(raw);

		const { content: md, data: attributes } = options.frontmatter
			? matter(raw)
			: { content: raw, data: null };

		let html = markdown.render(md, {});

		if (transforms.after) html = transforms.after(html, attributes || {});

		if (options.escapeCodeTagInterpolation) {
			// escape curly brackets interpolation in <code>, https://github.com/antfu/vite-plugin-md/issues/14
			html = html.replace(/<code(.*?)>/g, '<code$1 v-pre>');
		}

		const customBlocks = extractCustomBlock(html, options);
		html = customBlocks.html;

		const context = exportContext();

		context.add('attributes', stringify(attributes));
		context.add('html', stringify(html));

		return context.build();
	};
}
