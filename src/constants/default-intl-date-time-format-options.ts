const DEFAULT_INTL_DATE_TIME_FORMAT_OPTIONS: Intl.DateTimeFormatOptions =
  Object.freeze({
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: 'long',
    timeZoneName: 'short',
    year: 'numeric',
  });

export default DEFAULT_INTL_DATE_TIME_FORMAT_OPTIONS;
