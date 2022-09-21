module.exports = {
	roots: ['<rootDir>/src'],
	coveragePathIgnorePatterns: ['demos', 'style'],
	setupFilesAfterEnv: ['./test/setupAfterEnv.ts'],
	testMatch: [
		'<rootDir>/src/**/__test__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
	],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': ['@swc/jest', {}],
	},
	transformIgnorePatterns: [
		'[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
	],
};
