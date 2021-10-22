import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItPrism from 'markdown-it-prism';
import { TransformResult } from 'rollup';
import { slugify } from 'transliteration';
import { Plugin } from 'vite';
import Frontmatter from 'front-matter';

const stringify = (src: any) =>
	JSON.stringify(src)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

export interface PluginOptions {
	markdown?: (body: string) => string;
	markdownIt?: MarkdownIt | MarkdownIt.Options;
	className?: string;
}

const markdownCompiler = (
	options: PluginOptions,
): MarkdownIt | { render: (body: string) => string } => {
	if (options.markdownIt) {
		if (
			options.markdownIt instanceof MarkdownIt ||
			options.markdownIt?.constructor?.name === 'MarkdownIt'
		) {
			return options.markdownIt as MarkdownIt;
		} else if (typeof options.markdownIt === 'object') {
			return MarkdownIt(options.markdownIt);
		}
	} else if (options.markdown) {
		return { render: options.markdown };
	}

	const className = options.className;

	const parser = new MarkdownIt({ html: true })
		.use(markdownItAnchor, {
			level: 2,
			slugify,
		})
		.use(markdownItPrism);

	// when rendering table, wrap in div container
	parser.renderer.rules.table_open = function (
		tokens,
		idx,
		options,
		env,
		self,
	) {
		return (
			`<div class='${className ? className + '__' : ''}table-wrapper'>` +
			self.renderToken(tokens, idx, options)
		);
	};

	parser.renderer.rules.table_close = function (
		tokens,
		idx,
		options,
		env,
		self,
	) {
		return self.renderToken(tokens, idx, options) + `</div>`;
	};

	return parser;
};

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

const tf = (
	code: string,
	id: string,
	options: PluginOptions,
): TransformResult => {
	if (!id.endsWith('.md')) return null;

	const context = exportContext();

	const fm = Frontmatter(code);
	const html = markdownCompiler(options).render(fm.body);

	context.add('attributes', stringify(fm.attributes));
	context.add('html', stringify(html));

	return context.build();
};

export const plugin = (options: PluginOptions = {}): Plugin => {
	return {
		name: '@fnx-ui/vite-plugin-markdown',
		enforce: 'pre',
		transform(code, id) {
			return tf(code, id, options);
		},
	};
};

export default plugin;
exports.default = plugin;
