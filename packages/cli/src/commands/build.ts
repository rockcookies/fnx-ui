import fb from 'father-build';
import { compileCss } from '../compile/compile-css';
import { compileLess } from '../compile/compile-less';
import { compileWebpack } from '../compile/compile-webpack';
import { DIRS } from '../core/constants';
import { signal } from '../core/logger';
import { clean } from './clean';
import execa from 'execa';

async function buildComponentScriptEntry() {
	await fb({
		cwd: DIRS.cwd,
		rootConfig: {
			cjs: {
				type: 'babel',
				lazy: true,
			},
			esm: {
				type: 'babel',
			},
		},
	});
}

async function buildTypeDeclarations() {
	for (const dir of ['es', 'lib']) {
		await execa(
			`tsc --declaration --emitDeclarationOnly --rootDir src --declarationDir ${dir}`,
		);
	}
}

const tasks = Array.from<{
	text: string;
	task: () => Promise<void>;
}>([
	{
		text: 'Build Component Script Entry',
		task: buildComponentScriptEntry,
	},
	{
		text: 'Build Component Style Entry',
		task: compileLess,
	},
	{
		text: 'Build Package Style Outputs',
		task: compileCss,
	},
	{
		text: 'Build Type Declarations',
		task: buildTypeDeclarations,
	},
	{
		text: 'Build CommonJS Outputs',
		task: compileWebpack,
	},
]);

async function runBuildTasks() {
	for (const { task, text } of tasks) {
		try {
			signal.info(text + '...');
			await task();
		} catch (err) {
			signal.error(err);
			throw err;
		}
	}

	signal.success('Compile successfully');
}

export async function build() {
	try {
		await clean();
		await runBuildTasks();
	} catch (err) {
		signal.error('Build failed');
		process.exit(1);
	}
}
