import markdown from '@fnx-ui/vite-plugin-markdown';
import inline from '@fnx-ui/vite-plugin-inline';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import * as color from 'colorette';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItPrism from 'markdown-it-prism';
import { performance } from 'perf_hooks';
import { slugify } from 'transliteration';
import {
	build,
	createLogger,
	createServer,
	LogLevel,
	UserConfig,
	version,
} from 'vite';
import { COMPILE_TARGETS, DIRS } from '../core/constants';

const DEFAULT_BASE = './';
const DEFAULT_PORT = 8000;
const DEFAULT_HOST = '0.0.0.0';
const DEFAULT_LOG_LEVEL: LogLevel = 'info';

const getViteOptions = (): Partial<UserConfig> => {
	return {
		root: DIRS.cwd,
		plugins: [
			react({}),
			inline({
				include: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot|mp3|mp4|svg)$/,
			}),
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
					modifyVars: {},
				},
			},
			postcss: {
				plugins: [
					autoprefixer({
						overrideBrowserslist: COMPILE_TARGETS,
					}),
				],
			},
		},
	};
};

export async function runSiteServer(
	options: {
		port?: number;
		host?: string;
		log?: LogLevel;
	} = {},
): Promise<void> {
	const logLevel = options.log || DEFAULT_LOG_LEVEL;

	try {
		const config = getViteOptions();

		const startTime = performance.now();

		const server = await createServer({
			...config,
			logLevel,
			base: '/',
			configFile: false,
			server: {
				...config.server,
				port: options.port || DEFAULT_PORT,
				host: options.host || DEFAULT_HOST,
			},
		});

		if (!server.httpServer) {
			throw new Error('HTTP server not available');
		}

		await server.listen();

		const info = server.config.logger.info;

		const startupDurationString = color.dim(
			`ready in ${color.reset(
				color.bold(Math.ceil(performance.now() - startTime)),
			)} ms`,
		);

		info(
			`\n  ${color.green(
				`${color.bold('VITE')} v${version}`,
			)}  ${startupDurationString}\n`,
			{
				clear: !server.config.logger.hasWarned,
			},
		);

		server.printUrls();
	} catch (e) {
		createLogger(logLevel).error(
			color.red(`error when starting dev server:\n${e.stack}`),
			{ error: e },
		);
		process.exit(1);
	}
}

export async function compileSite(
	options: {
		base?: string;
		outDir?: string;
		log?: LogLevel;
	} = {},
): Promise<void> {
	const logLevel = options.log || DEFAULT_LOG_LEVEL;

	try {
		const config = getViteOptions();

		await build({
			...config,
			configFile: false,
			logLevel,
			base: options.base || DEFAULT_BASE,
			build: {
				...config.build,
				outDir: options.outDir || 'dist',
			},
		});
	} catch (e) {
		createLogger(logLevel).error(
			color.red(`error during build:\n${e.stack}`),
			{ error: e },
		);
		process.exit(1);
	}
}
