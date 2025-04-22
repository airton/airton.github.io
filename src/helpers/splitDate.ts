// Split Date Helper
export const splitDate = (value: string) => {
  const dateArr = value.split("-");
  const valYear = dateArr[0];
  const valMonth =
    parseInt(dateArr[1], 10) < 10 ? `0${parseInt(dateArr[1], 10)}` : dateArr[1];
  const valDay = dateArr[2];

  const splittedDate = {
    valDay,
    valMonth,
    valYear,
  };

  return splittedDate;
};
