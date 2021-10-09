module.exports = {
	roots: ['<rootDir>/src'],
	// preset: 'ts-jest',
	// testRegex: '^.+\\.spec\\.(ts|tsx)$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	// setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
	coveragePathIgnorePatterns: ['demos', 'style', '.umi'],
};
