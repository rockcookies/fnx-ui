export const pipeline = (pipe: any): Promise<void> =>
	new Promise<void>((resolve) => {
		pipe.on('end', () => {
			resolve();
		});
	});
