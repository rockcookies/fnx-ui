/* eslint-disable @typescript-eslint/no-var-requires */
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const { slugify } = require('transliteration');
const loaderUtils = require('loader-utils');
const frontMatter = require('front-matter');
const markdownItPrism = require('markdown-it-prism');

const stringify = (src) =>
	JSON.stringify(src)
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');

function getNormalizedMarkdownCompiler(options) {
	// If you've specified the markdown option, hand over control
	if (options.markdown) {
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
}

module.exports = function (source) {
	const options = loaderUtils.getOptions(this);

	let exported = '';

	const addProperty = (key, value) => {
		exported += `
      ${key}: ${value},
    `;
	};

	const fm = frontMatter(source);
	const markdownCompiler = getNormalizedMarkdownCompiler(options);
	fm.html = markdownCompiler.render(fm.body);

	addProperty('attributes', stringify(fm.attributes));
	addProperty('html', stringify(fm.html));
	addProperty('meta', stringify({ resourcePath: this.resourcePath }));

	return `module.exports = { ${exported} }`;
};
