import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';
import { ResolvedOptions } from './interface';

function extractCustomBlock(html: string, options: ResolvedOptions) {
	const blocks: string[] = [];
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

const stringify = (src: any) =>
	JSON.stringify(src)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

function exportContext() {
	const exports: string[] = [];
	let contextCode = '';

	return {
		add: (key: string, code: string): void => {
			exports.push(key);
			contextCode += `const ${key} = ${code};\n`;
		},

		build: (): string => {
			return [contextCode, `export { ${exports.join(', ')} }`].join('\n');
		},
	};
}

export function createMarkdown(options: ResolvedOptions) {
	let markdown: MarkdownIt;

	if (
		options.markdownIt instanceof MarkdownIt ||
		(options.markdownIt as any)?.constructor?.name === 'MarkdownIt'
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

	return (id: string, raw: string): string => {
		const { transforms } = options;

		raw = raw.trimStart();

		if (transforms.before) raw = transforms.before(raw, id);

		const { content: md, data: attributes } = options.frontmatter
			? matter(raw)
			: { content: raw, data: null };

		let html = markdown.render(md, { id });

		if (transforms.after) html = transforms.after(html, id);

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
