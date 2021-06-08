import mapChildrenToTimestamp from '../utils/map-children-to-timestamp';

export default function mapChildrenToDate(children: number | string): Date {
  const timestamp: number = mapChildrenToTimestamp(children);
  return new Date(timestamp);
}
