import { splitDate } from "./splitDate";

// Date Format
export const dateFormat = (value: string | Date) => {
  let date: Date;
  if (typeof value === "string") {
    const objDate = splitDate(value);
    const UTCDate = `${objDate.valMonth}/${objDate.valDay}/${objDate.valYear}`;
    date = new Date(UTCDate);
  } else {
    date = value;
  }

  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateFormated = date.toLocaleDateString(
    "pt-BR",
    options as Record<string, string>
  );

  return dateFormated;
};
