#!/usr/bin/env node
import cac from 'cac';
import { cliVersion } from '.';
import { commitLint } from './commands/commit-lint';
import { build } from './commands/build';
import { clean } from './commands/clean';
import { lint } from './commands/lint';
import { compileSite, runSiteServer } from './compile/compile-site';

const cli = cac();

cli.version(`@fnx-ui/cli ${cliVersion}`);

cli.command('lint', 'Run eslint').action(lint);

cli.command('commit-lint', 'Lint commit message').action(commitLint);

cli.command('dev', 'Run vite dev server')
	.option('--base <path>', `[string] public base path (default: ./)`)
	.option('--host [host]', `[string] specify hostname`)
	.option('--port <port>', `[number] specify port`)
	.action(runSiteServer);

cli.command('build', 'Compile components in production mode').action(build);

cli.command('build-site', 'Compile site in production mode')
	.option('--base <path>', `[string] public base path (default: ./)`)
	.option('--outDir <dir>', `[string] output directory (default: dist)`)
	.action(compileSite);

cli.command('clean', 'Clean all dist files').action(clean);

cli.parse(process.argv);
