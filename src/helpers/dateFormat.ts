import { splitDate } from "./splitDate";

// Date Format
export const dateFormat = (value: string) => {
  const objDate = splitDate(value);
  const UTCDate = `${objDate.valMonth}/${objDate.valDay}/${objDate.valYear}`;
  const date = new Date(UTCDate);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateFormated = date.toLocaleDateString(
    "pt-BR",
    options as Record<string, string>
  );

  return dateFormated;
};
