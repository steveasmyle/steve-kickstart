const formats = {
  date: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  } as Intl.DateTimeFormatOptions,
  longDate: {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  } as Intl.DateTimeFormatOptions,
  time: {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  } as Intl.DateTimeFormatOptions,
  tooltipDate: {
    month: "long",
    day: "numeric",
    year: "numeric",
  } as Intl.DateTimeFormatOptions,
  tooltipWeekday: {
    weekday: "long",
  } as Intl.DateTimeFormatOptions,
};

export default formats;
