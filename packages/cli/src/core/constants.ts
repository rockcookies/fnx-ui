import { join } from 'path';

const cwd = process.cwd();

export const DIRS = {
	cwd,
	dist: join(cwd, 'dist'),
	src: join(cwd, 'src'),
	es: join(cwd, 'es'),
	lib: join(cwd, 'lib'),
};

export const SCRIPT_EXTS = ['.js', '.jsx', '.ts', '.tsx'];
export const STYLE_EXTS = ['.css', '.less', '.scss'];
