#!/usr/bin/env node
import { Command } from 'commander';
import { cliVersion } from '.';
import { commitLint } from './commands/commit-lint';
import { build } from './commands/build';
import { clean } from './commands/clean';
import { lint } from './commands/lint';

const program = new Command();

program.version(`@fnx-ui/cli ${cliVersion}`);

program.command('lint').description('Run eslint and stylelint').action(lint);

program
	.command('commit-lint')
	.description('Lint commit message')
	.action(commitLint);

program
	.command('build')
	.description('Compile components in production mode')
	.action(build);

program.command('clean').description('Clean all dist files').action(clean);

program.parse(process.argv);
