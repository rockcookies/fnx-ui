import { defineConfig } from 'umi';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItPrism from 'markdown-it-prism';
import { slugify } from 'transliteration';

export default defineConfig({
	hash: true,
	outputPath: 'dist-site',
	publicPath: './',
	favicon: './favicon.ico',
	targets: {
		ie: 11,
	},
	nodeModulesTransform: {
		type: 'none',
	},
	dynamicImport: {
		loading: '@/../site/components/PageLoading/index.tsx',
	},
	history: { type: 'hash' },
	routes: [
		{
			path: '/demo',
			component: '../../site/pages/Demo/index.tsx',
		},
		{
			component: '../../site/layout/index.tsx',
		},
	],
	devServer: {
		port: 8000,
		host: '0.0.0.0',
	},
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
				return {
					markdownItUses: [
						[markdownItAnchor, { slugify }],
						markdownItPrism,
					],
				};
			});

		config.module
			.rule('plaintext')
			.test(/\.(txt|text)$/)
			.use('raw-loader')
			.loader(require.resolve('@umijs/deps/compiled/raw-loader'));
	},
});
