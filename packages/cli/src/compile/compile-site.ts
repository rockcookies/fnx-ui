import { createLogger, createServer, LogLevel, UserConfig, build } from 'vite';
import { COMPILE_TARGETS, DIRS } from '../core/constants';
import chalk from 'chalk';
import { performance } from 'perf_hooks';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import markdown from '@fnx-ui/vite-plugin-markdown';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItPrism from 'markdown-it-prism';
import { slugify } from 'transliteration';

const DEFAULT_BASE = './';
const DEFAULT_PORT = 8000;
const DEFAULT_HOST = '0.0.0.0';
const DEFAULT_LOG_LEVEL: LogLevel = 'info';

const getViteOptions = (): Partial<UserConfig> => {
	return {
		root: DIRS.cwd,
		plugins: [
			react(),
			markdown({
				markdownItUses: [
					[markdownItAnchor, { slugify }],
					markdownItPrism,
				],
			}),
			legacy({
				targets: COMPILE_TARGETS,
			}),
		],
		esbuild: {
			target: 'es2020',
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
			},
		},
	};
};

export async function runSiteServer(
	options: {
		port?: number;
		host?: string;
		base?: string;
		log?: LogLevel;
	} = {},
): Promise<void> {
	const logLevel = options.log || DEFAULT_LOG_LEVEL;

	try {
		const startTime = performance.now();

		const server = await createServer({
			...getViteOptions(),
			logLevel,
			base: options.base || DEFAULT_BASE,
			configFile: false,
			server: {
				port: options.port || DEFAULT_PORT,
				host: options.host || DEFAULT_HOST,
			},
		});

		if (!server.httpServer) {
			throw new Error('HTTP server not available');
		}

		await server.listen();

		const info = server.config.logger.info;

		info(
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			chalk.cyan(`\n  vite v${require('vite/package.json').version}`) +
				chalk.green(` dev server running at:\n`),
			{
				clear: !server.config.logger.hasWarned,
			},
		);

		server.printUrls();

		const startupDuration = performance.now() - startTime;
		info(
			`\n  ${chalk.cyan(`ready in ${Math.ceil(startupDuration)}ms.`)}\n`,
		);
	} catch (e) {
		createLogger(logLevel).error(
			chalk.red(`error when starting dev server:\n${e.stack}`),
			{ error: e },
		);
		process.exit(1);
	}
}

export async function compileSite(
	options: {
		base?: string;
		dest?: string;
		log?: LogLevel;
	} = {},
): Promise<void> {
	const logLevel = options.log || DEFAULT_LOG_LEVEL;

	try {
		await build({
			...getViteOptions(),
			configFile: false,
			logLevel,
			base: options.base || DEFAULT_BASE,
			build: {
				outDir: options.dest,
			},
		});
	} catch (e) {
		createLogger(logLevel).error(
			chalk.red(`error during build:\n${e.stack}`),
			{ error: e },
		);
		process.exit(1);
	}
}
