import { useMemo } from 'react';
import DEFAULT_INTL_DATE_TIME_FORMAT_OPTIONS from '../../constants/default-intl-date-time-format-options';
import mapChildrenToDate from '../../utils/map-children-to-date';

interface Props {
  readonly children: number | string;
  readonly locales?: string[] | string;
  readonly timeZone?: string;
}

interface State {
  readonly absoluteTimestamp: string;
  readonly dateTime: string;
  readonly title: string;
}

export default function useAbsoluteTimestamp({
  children,
  locales = 'en-US',
  timeZone,
}: Props): State {
  const date: Date = useMemo(
    (): Date => mapChildrenToDate(children),
    [children],
  );

  const isoString: string = useMemo((): string => date.toISOString(), [date]);

  return {
    dateTime: isoString,
    title: isoString,

    absoluteTimestamp: useMemo(
      (): string =>
        date.toLocaleString(locales, {
          ...DEFAULT_INTL_DATE_TIME_FORMAT_OPTIONS,
          timeZone,
        }),
      [date, locales, timeZone],
    ),
  };
}
