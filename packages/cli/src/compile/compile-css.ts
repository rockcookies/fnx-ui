import fs from 'fs-extra';
import less from 'gulp-less';
import plumber from 'gulp-plumber';
import path from 'path';
import through from 'through2';
import vfs from 'vinyl-fs';
import { DIRS } from '../core/constants';
import { signal } from '../core/logger';
import { onRelative, pipeline } from '../core/utils';
import { getPostcss } from './compile-less';
import chalk from 'chalk';

const relative = onRelative(DIRS.cwd);

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

					signal.info(`Build CSS ${chalk.blue(relative(file.path))}`);

					this.push(file);
					cb();
				}),
			)
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

	const dark = await fs.readJSON(path.join(DIRS.src, 'style/dark.json'));
	const light = await fs.readJSON(path.join(DIRS.src, 'style/light.json'));

	for (const [theme, variables] of Array.from<[string, any]>([
		['dark', dark],
		['light', light],
	])) {
		let css = ':root {\n';

		for (const key in variables) {
			css += `${key}: ${variables[key]};\n`;
		}

		css += `}\n`;

		const dest = path.join(DIRS.dist, `fnx-theme-${theme}.less`);

		signal.info(`Build Theme ${chalk.blue(relative(dest))}`);

		await fs.writeFile(dest, css);
	}

	await buildCss({ minify: false });
	await buildCss({ minify: true });
}
