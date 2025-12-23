// Date Format
export const dateFormat = (value: string | Date) => {
  // If the value is a string 'YYYY-MM-DD', new Date() will parse it as UTC.
  // If it's a Date object, we'll use it as is.
  const date = typeof value === "string" ? new Date(value) : value;

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Treat the date as UTC and format it as UTC
  };
  
  const dateFormated = date.toLocaleDateString('pt-BR', options);

  return dateFormated;
};

