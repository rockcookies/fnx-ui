#!/usr/bin/env node
import { Command } from 'commander';
import { cliVersion } from '.';
import { commitLint } from './commands/commit-lint';

const program = new Command();

program.version(`@fnx-ui/cli ${cliVersion}`);

program
	.command('commit-lint')
	.description('Lint commit message')
	.action(commitLint);

program.parse(process.argv);
