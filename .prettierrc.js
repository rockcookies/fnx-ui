module.exports = {
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 80,
	tabWidth: 4,
	overrides: [
		{
			files: ['*.json', '*.md'],
			options: {
				tabWidth: 2,
			},
		},
	],
};
