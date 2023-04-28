export const dateToString = (date) =>
	date.toLocaleString('en-US', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
