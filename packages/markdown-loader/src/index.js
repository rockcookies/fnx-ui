/* eslint-disable @typescript-eslint/no-var-requires */
const loaderUtils = require('loader-utils');
const { createMarkdown } = require('./markdown');

module.exports = function (source) {
	const options = loaderUtils.getOptions(this);
	const render = createMarkdown(options);
	return render(source);
};
