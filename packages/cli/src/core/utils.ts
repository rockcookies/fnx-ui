import path from 'path';

export const pipeline = (pipe: any): Promise<void> =>
	new Promise<void>((resolve) => {
		pipe.on('end', () => {
			resolve();
		});
	});

export const onRelative = (p: string) => {
	p = path.resolve(p);

	return (s: string) => path.relative(p, s);
};
