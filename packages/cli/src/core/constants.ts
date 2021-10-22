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

export const COMPILE_TARGETS = ['last 2 versions', 'IE 10'];

export const CONFIG_DIR = join(__dirname, '../config');

export const JEST_BABEL_FILE = join(CONFIG_DIR, 'jest.babel.js');
export const JEST_SETUP_FILE = join(CONFIG_DIR, 'jest.setup.js');
export const JEST_CONFIG_FILE = join(CONFIG_DIR, 'jest.config.js');
