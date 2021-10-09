import qs from 'qs';
import { Dictionary } from '../../src/utils/interface';

export function parseSearchParams(
	search: string | null | undefined,
): Dictionary<string | undefined> {
	const query: any = qs.parse((search || '').replace(/^\?/, '')) || {};

	for (const key of Object.keys(query)) {
		if (Array.isArray(query[key])) {
			query[key] = query[key][0];
		}
	}

	return query;
}

export function appendQuery(url: string, _query: string | Dictionary): string {
	const query =
		typeof _query === 'string'
			? _query
			: qs.stringify(_query, { skipNulls: true });
	const urlSign = url.indexOf('?') !== -1 ? '&' : '?';

	return `${url}${urlSign}${query}`;
}

export function stringifyQuery(query: Dictionary): string {
	return qs.stringify(query, { skipNulls: true });
}
