import type { ReactElement } from 'react';
import useAbsoluteTimestamp from './absolute-timestamp.hook';

interface Props {
  readonly children: number | string;
  readonly locales?: string[] | string;
  readonly timeZone?: string;
}

export default function AbsoluteTimestamp({
  children,
  locales,
  timeZone,
}: Props): ReactElement {
  const { absoluteTimestamp, dateTime, title } = useAbsoluteTimestamp({
    children,
    locales,
    timeZone,
  });

  return (
    <time dateTime={dateTime} title={title}>
      {absoluteTimestamp}
    </time>
  );
}
