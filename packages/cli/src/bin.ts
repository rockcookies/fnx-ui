#!/usr/bin/env node
import { Command } from 'commander';
import { cliVersion } from '.';
import { commitLint } from './commands/commit-lint';
import { build } from './commands/build';
import { clean } from './commands/clean';
import { lint } from './commands/lint';
import { compileSite, runSiteServer } from './compile/compile-site';

const program = new Command();

program.version(`@fnx-ui/cli ${cliVersion}`);

program.command('lint').description('Run eslint and stylelint').action(lint);

program
	.command('commit-lint')
	.description('Lint commit message')
	.action(commitLint);

program
	.command('dev')
	.description('Run vite dev server')
	.option('--base <path>', `[string] public base path (default: ./)`)
	.option('--host [host]', `[string] specify hostname`)
	.option('--port <port>', `[number] specify port`)
	.action(runSiteServer);

program
	.command('build')
	.description('Compile components in production mode')
	.action(build);

program
	.command('build-site')
	.description('Compile site in production mode')
	.option('--base <path>', `[string] public base path (default: ./)`)
	.option('--outDir <dir>', `[string] output directory (default: dist)`)
	.action(compileSite);

program.command('clean').description('Clean all dist files').action(clean);

program.parse(process.argv);
