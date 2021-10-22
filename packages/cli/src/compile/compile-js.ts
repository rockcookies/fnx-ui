import { transformSync } from '@babel/core';
import chalk from 'chalk';
import _if from 'gulp-if';
import plumber from 'gulp-plumber';
import path from 'path';
import through from 'through2';
import vfs from 'vinyl-fs';
import { DIRS } from '../core/constants';
import { signal } from '../core/logger';
import { onRelative, pipeline } from '../core/utils';
import { getBabelOptions } from './get-babel-options';

function isTransform(path: string) {
	return /\.(t|j)sx?$/.test(path) && !path.endsWith('.d.ts');
}

async function compileFiles(options: { type: 'cjs' | 'esm'; dest: string }) {
	const relative = onRelative(DIRS.cwd);

	await pipeline(
		vfs
			.src(
				[
					path.join(DIRS.src, '**/*'),
					`!${path.join(DIRS.src, '**/fixtures{,/**}')}`,
					`!${path.join(DIRS.src, '**/demos{,/**}')}`,
					`!${path.join(DIRS.src, '**/__test__{,/**}')}`,
					`!${path.join(DIRS.src, '**/__tests__{,/**}')}`,
					`!${path.join(DIRS.src, '**/*.mdx')}`,
					`!${path.join(DIRS.src, '**/*.md')}`,
					`!${path.join(
						DIRS.src,
						'**/*.+(test|e2e|spec).+(js|jsx|ts|tsx)',
					)}`,
					`!${path.join(DIRS.src, '**/tsconfig{,.*}.json')}`,
				],
				{
					allowEmpty: true,
					base: DIRS.src,
				},
			)
			.pipe(plumber())
			.pipe(
				_if(
					(file) => isTransform(file.path),
					through.obj(function t(file: any, encoding, cb: any) {
						try {
							const rs = transformSync(
								file.contents.toString(encoding),
								{
									...getBabelOptions(options.type),
									filename: file.path,
								},
							);

							if (!rs.code) {
								throw new Error('no code');
							}

							signal.info(
								`Transform to ${options.type} for ${chalk.blue(
									relative(file.path),
								)}`,
							);

							file.contents = Buffer.from(rs.code);
							// .jsx -> .js
							file.path = file.path.replace(
								path.extname(file.path),
								'.js',
							);

							cb(null, file);
						} catch (e) {
							signal.error(`Compiled faild: ${file.path}`);
							console.log(e);
							cb(null);
						}
					}),
				),
			)
			.pipe(plumber.stop())
			.pipe(vfs.dest(options.dest)),
	);
}

export async function compileJs() {
	await compileFiles({ type: 'cjs', dest: DIRS.lib });
	await compileFiles({ type: 'esm', dest: DIRS.es });
}
