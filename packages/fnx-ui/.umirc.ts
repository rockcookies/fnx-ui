import { defineConfig } from 'umi';

export default defineConfig({
	nodeModulesTransform: {
		type: 'none',
	},
	favicon: '/favicon.ico',
	outputPath: 'dist-site',
	hash: true,
	// webpack5: {},
	dynamicImport: {},
	history: { type: 'browser' },
	fastRefresh: {},
	routes: [
		{
			path: '/demo',
			component: '../../site/pages/Demo/index.tsx',
		},
		{
			component: '../../site/layout/index.tsx',
		},
	],
	chainWebpack(config: any) {
		const plainTextRule = config.module.rule('plaintext');

		// 清除已有的所有 loader。
		// 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
		plainTextRule.uses.clear();

		config.module
			.rule('markdown')
			.test(/\.md$/)
			.use('@fnx-ui/markdown-loader')
			.loader(require.resolve('@fnx-ui/markdown-loader'))
			.tap(() => {
				// loader options
				return {};
			});

		config.module
			.rule('plaintext')
			.test(/\.(txt|text)$/)
			.use('raw-loader')
			.loader(require.resolve('@umijs/deps/compiled/raw-loader'));
	},
});
