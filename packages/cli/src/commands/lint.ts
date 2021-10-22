import execa from 'execa';
import { SCRIPT_EXTS } from '../core/constants';
import { signal } from '../core/logger';

type RunCommandMessages = {
	start: string;
	succeed: string;
	failed: string;
};

function runCommand(
	cmd: string,
	options: string[],
	messages: RunCommandMessages,
) {
	signal.info(messages.start);

	return new Promise((resolve) => {
		execa(cmd, options, {})
			.then(() => {
				signal.success(messages.succeed);
				resolve(true);
			})
			.catch((err: any) => {
				signal.error(messages.failed);
				console.log(err.stdout);
				resolve(false);
			});
	});
}

function eslint() {
	return runCommand(
		'eslint',
		['./src', '--fix', '--ext', SCRIPT_EXTS.join(',')],
		{
			start: 'Running eslint...',
			succeed: 'ESLint Passed.',
			failed: 'ESLint failed!',
		},
	);
}

function stylelint() {
	return runCommand(
		'stylelint',
		['src/**/*.css', 'src/**/*.less', 'src/**/*.sass', '--fix'],
		{
			start: 'Running stylelint...',
			succeed: 'Stylelint Passed.',
			failed: 'Stylelint failed!',
		},
	);
}

export async function lint() {
	const eslintPassed = await eslint();
	const stylelintPassed = await stylelint();

	if (!eslintPassed || !stylelintPassed) {
		process.exit(1);
	}
}
