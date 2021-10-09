import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import debug from 'gulp-debug';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import { join } from 'path';
import through from 'through2';
import vfs from 'vinyl-fs';
import { DIRS } from '../core/constants';
import { pipeline } from '../core/utils';

export const getPostcss = ({ minify }) => {
	return postcss([
		autoprefixer(),
		...(minify
			? [
					cssnano({
						restructure: false,
						debug: false,
						comments: false,
					}),
			  ]
			: []),
	]);
};

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
			.pipe(debug({ title: 'transform to css' }))
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
			.pipe(debug({ title: 'transform css.js' }))
			.pipe(
				through.obj(function transform(file: any, encoding, cb: any) {
					this.push(file.clone());
					const content = file.contents.toString(encoding);
					file.contents = Buffer.from(cssInjection(content));
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
