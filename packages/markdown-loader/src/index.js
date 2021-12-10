/* eslint-disable @typescript-eslint/no-var-requires */
const loaderUtils = require('loader-utils');
const { createMarkdown } = require('./markdown');
const { resolveOptions } = require('./options');

module.exports = function (source) {
	let options = loaderUtils.getOptions(this);
	options = resolveOptions(options);
	const render = createMarkdown(options);
	return render(source);
};
