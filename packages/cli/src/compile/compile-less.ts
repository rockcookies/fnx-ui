import autoprefixer from 'autoprefixer';
import chalk from 'chalk';
import cssnano from 'cssnano';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import { join } from 'path';
import through from 'through2';
import vfs from 'vinyl-fs';
import { COMPILE_TARGETS, DIRS } from '../core/constants';
import { signal } from '../core/logger';
import { onRelative, pipeline } from '../core/utils';

export const getPostcss = ({ minify }) => {
	return postcss([
		autoprefixer({
			overrideBrowserslist: COMPILE_TARGETS,
		}),
		...(minify
			? [
					cssnano({
						restructure: false,
						debug: false,
						comments: false,
					} as any),
			  ]
			: []),
	]);
};

const relative = onRelative(DIRS.cwd);

const cssInjection = (content: string) => {
	return content
		.replace(/\/style\/?'/g, "/style/css'")
		.replace(/\/style\/?"/g, '/style/css"')
		.replace(/\.less/g, '.css');
};

async function compileLessEntry(cwd: string): Promise<void> {
	await pipeline(
		vfs
			.src(
				[
					join(cwd, '**/index.less'),
					join(cwd, '**/style/base.less'),
					`!${join(cwd, './index.less')}`,
				],
				{
					allowEmpty: true,
					base: cwd,
				},
			)
			.pipe(plumber())
			.pipe(
				through.obj(function transform(file: any, encoding, cb: any) {
					signal.info(
						`Transform to css for ${chalk.blue(
							relative(file.path),
						)}`,
					);
					this.push(file);
					cb();
				}),
			)
			.pipe(less({ javascriptEnabled: true }))
			.pipe(getPostcss({ minify: false }))
			.pipe(plumber.stop())
			.pipe(vfs.dest(cwd)),
	);
}
async function compileCssEntry(cwd: string): Promise<void> {
	await pipeline(
		vfs
			.src([join(cwd, '**/style/index.js')], {
				allowEmpty: true,
				base: cwd,
			})
			.pipe(plumber())
			.pipe(
				through.obj(function transform(file: any, encoding, cb: any) {
					this.push(file.clone());
					const content = file.contents.toString(encoding);
					file.contents = Buffer.from(cssInjection(content));

					signal.info(
						`Transform to css.js for ${chalk.blue(
							relative(file.path),
						)}`,
					);

					file.path = file.path.replace(/index\.js/, 'css.js');
					this.push(file);
					cb();
				}),
			)
			.pipe(plumber.stop())
			.pipe(vfs.dest(cwd)),
	);
}

export async function compileLess() {
	await compileLessEntry(DIRS.es);
	await compileLessEntry(DIRS.lib);
	await compileCssEntry(DIRS.es);
	await compileCssEntry(DIRS.lib);
}
