import { remove } from 'fs-extra';
import { DIRS } from '../core/constants';

export async function clean() {
	await Promise.all([remove(DIRS.dist), remove(DIRS.es), remove(DIRS.lib)]);
}
