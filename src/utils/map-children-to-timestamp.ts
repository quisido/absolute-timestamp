export default function mapChildrenToTimestamp(
  children: number | string,
): number {
  if (typeof children === 'number') {
    return children;
  }

  return parseInt(children, 10);
}
