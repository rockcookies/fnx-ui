import type MarkdownIt from 'markdown-it';
import type { FilterPattern } from '@rollup/pluginutils';

export interface Options {
	/**
	 * Parse for frontmatters
	 *
	 * @default true
	 */
	frontmatter?: boolean;

	/**
	 * Remove custom SFC block
	 *
	 * @default ['route', 'i18n']
	 */
	customSfcBlocks?: string[];

	/**
	 * Add `v-pre` to `<code>` tag to escape curly brackets interpolation
	 *
	 * @see https://github.com/antfu/vite-plugin-md/issues/14
	 * @default true
	 */
	escapeCodeTagInterpolation?: boolean;

	/**
	 * MarkdownIt Instance
	 */
	markdownIt?: MarkdownIt | null;

	/**
	 * Options passed to Markdown It
	 */
	markdownItOptions?: MarkdownIt.Options;
	/**
	 * Plugins for Markdown It
	 */
	markdownItUses?: (
		| MarkdownIt.PluginSimple
		| [MarkdownIt.PluginSimple | MarkdownIt.PluginWithOptions<any>, any]
		| any
	)[];
	/**
	 * A function providing the Markdown It instance gets the ability to apply custom settings/plugins
	 */
	markdownItSetup?: (MarkdownIt: MarkdownIt) => void;

	/**
	 * Custom tranformations apply before and after the markdown transformation.
	 */
	transforms?: {
		before?: (code: string, id: string) => string;
		after?: (code: string, id: string) => string;
	};

	include?: FilterPattern;
	exclude?: FilterPattern;
}

export type ResolvedOptions = Required<Options>;
