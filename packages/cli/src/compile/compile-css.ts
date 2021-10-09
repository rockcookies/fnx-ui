import fs from 'fs-extra';
import debug from 'gulp-debug';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import path from 'path';
import through from 'through2';
import vfs from 'vinyl-fs';
import { DIRS } from '../core/constants';
import { pipeline } from '../core/utils';
import { getPostcss } from './compile-less';

const buildCss = async (options: { minify: boolean }): Promise<void> => {
	await pipeline(
		vfs
			.src([path.join(DIRS.dist, '*.less')], {
				allowEmpty: true,
				base: DIRS.dist,
			})
			.pipe(plumber())
			.pipe(less({ javascriptEnabled: true }))
			.pipe(getPostcss({ minify: options.minify }))
			.pipe(
				through.obj(function transform(file, encoding, cb) {
					if (options.minify) {
						file.path = file.path.replace(/\.css/, '.min.css');
					}

					this.push(file);
					cb();
				}),
			)
			.pipe(debug({ title: 'build css' }))
			.pipe(plumber.stop())
			.pipe(vfs.dest(DIRS.dist)),
	);
};

export async function compileCss() {
	await fs.ensureDir(DIRS.dist);

	await fs.writeFile(
		path.join(DIRS.dist, 'fnx.less'),
		"@import '../es/index.less';\n",
	);

	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const createTheme = require(path.join(DIRS.src, 'style/theme.js'));

	for (const theme of ['light', 'dark']) {
		const variables = createTheme(theme);

		let css = ':root {\n';

		for (const key in variables) {
			css += `${key}: ${variables[key]};\n`;
		}

		css += `}\n`;

		await fs.writeFile(
			path.join(DIRS.dist, `fnx-theme-${theme}.less`),
			css,
		);
	}

	await buildCss({ minify: false });
	await buildCss({ minify: true });
}
