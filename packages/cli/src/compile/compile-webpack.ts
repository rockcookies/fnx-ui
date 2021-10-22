import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { DIRS } from '../core/constants';
import { getBabelOptions } from './get-babel-options';

export async function compileWebpack() {
	const compile = webpack({
		entry: {
			fnx: './index.ts',
			'fnx.min': './index.ts',
		},
		context: path.resolve(DIRS.src),
		mode: 'production',
		output: {
			filename: '[name].js',
			library: 'FNX',
			libraryTarget: 'umd',
			path: path.resolve(DIRS.dist),
			globalObject: 'this',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.json', '.js'],
		},
		optimization: {
			minimize: true,
			minimizer: [
				new TerserPlugin({
					include: /\.min\.js$/,
					extractComments: false,
				}),
			],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: getBabelOptions('umd'),
					},
				},
			],
		},
		externals: [
			{
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		],
		plugins: [new ProgressBarPlugin()],
	});

	return new Promise<void>((resolve, reject) => {
		compile.run((err, stats) => {
			if (err || stats.hasErrors()) {
				console.error(err);
				reject(err);
				return;
			}

			resolve();
		});
	});
}
