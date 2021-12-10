import { Dictionary } from '../../src/utils/interface';
import 'url-search-params-polyfill';

export function parseSearchParams(
	search: string | null | undefined,
): Dictionary<string | undefined> {
	const query: Dictionary<string | undefined> = {};

	for (const [key, value] of new URLSearchParams(
		(search || '').replace(/^\?/, ''),
	)) {
		if (value) {
			query[key] = value;
		}
	}

	return query;
}

export function stringifyQuery(query: Dictionary): string {
	const params: Dictionary = {};

	for (const key of Object.keys(query)) {
		const value = query[key];

		if (value != null) {
			params[key] = value;
		}
	}

	return new URLSearchParams(params).toString();
}

export function appendQuery(url: string, _query: string | Dictionary): string {
	const query = typeof _query === 'string' ? _query : stringifyQuery(_query);

	if (query) {
		const urlSign = url.indexOf('?') !== -1 ? '&' : '?';
		return `${url}${urlSign}${query}`;
	}

	return url;
}
