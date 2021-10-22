import { TransformOptions } from '@babel/core';
import { COMPILE_TARGETS } from '../core/constants';

export function getBabelOptions(type: 'cjs' | 'esm' | 'umd'): TransformOptions {
	return {
		presets: [
			[
				require.resolve('@babel/preset-env'),
				{
					targets: { browsers: COMPILE_TARGETS },
					modules: type === 'cjs' ? 'auto' : false,
				},
			],
			[require.resolve('@babel/preset-typescript')],
			[
				require.resolve('@babel/preset-react'),
				{
					runtime: 'classic',
				},
			],
		],
		plugins: [
			require.resolve('babel-plugin-react-require'),
			...(type === 'cjs'
				? [
						[
							require.resolve(
								'@babel/plugin-transform-modules-commonjs',
							),
							{
								lazy: true,
							},
						],
				  ]
				: []),
			...(type === 'umd'
				? [
						[
							require.resolve('@babel/plugin-transform-runtime'),
							{
								useESModules: false,
								// eslint-disable-next-line @typescript-eslint/no-var-requires
								version: require('@babel/runtime/package.json')
									.version,
							},
						],
				  ]
				: []),
		],
		// 不读取外部的babel.config.js配置文件，全采用babelOpts中的babel配置来构建
		configFile: false,
	};
}
