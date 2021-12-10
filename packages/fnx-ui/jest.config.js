module.exports = {
	roots: ['<rootDir>/src'],
	coveragePathIgnorePatterns: ['demos', 'style', '.umi'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
};
