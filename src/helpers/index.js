// Split Date Helper
export const splitDate = (value) => {
  console.log('value',value)
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

// Date Format
export const dateFormat = (value) => {
  const objDate = splitDate(value)
  const UTCDate = `${objDate.valMonth}/${objDate.valDay}/${objDate.valYear}`
	const date = new Date(UTCDate)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const dateFormated = date.toLocaleDateString('pt-BR', options)

	return dateFormated;
};
