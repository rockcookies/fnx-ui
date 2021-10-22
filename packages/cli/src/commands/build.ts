import execa from 'execa';
import { compileCss } from '../compile/compile-css';
import { compileJs } from '../compile/compile-js';
import { compileLess } from '../compile/compile-less';
import { compileWebpack } from '../compile/compile-webpack';
import { signal } from '../core/logger';
import { clean } from './clean';

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
		task: compileJs,
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
