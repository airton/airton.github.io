// Split Date Helper
export const splitDate = (value: string) => {
	let dateArr = value.split('-'),
		valYear = dateArr[0],
		valMonth = parseInt(dateArr[1], 10) < 10 ? `0${parseInt(dateArr[1], 10)}` : dateArr[1],
		valDay = dateArr[2];

	const splittedDate = {
		valDay,
		valMonth,
		valYear
	}

	return splittedDate
}
