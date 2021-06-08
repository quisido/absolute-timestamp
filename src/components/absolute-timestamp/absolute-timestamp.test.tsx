import { render } from '@testing-library/react';
import AbsoluteTimestamp from '.';

describe('AbsoluteTimestamp', (): void => {
  beforeEach((): void => {
    process.env.TZ = 'UTC';
  });

  it('should render local time', (): void => {
    process.env.TZ = 'America/Los_Angeles';
    const { getByText } = render(<AbsoluteTimestamp>0</AbsoluteTimestamp>);
    expect((): void => {
      getByText('December 31, 1969, 16:00 PST');
    }).not.toThrow();
  });

  it('should render UTC time', (): void => {
    const { getByText } = render(
      <AbsoluteTimestamp locales="en-US" timeZone="UTC">
        0
      </AbsoluteTimestamp>,
    );
    expect((): void => {
      getByText('January 01, 1970, 24:00 UTC');
    }).not.toThrow();
  });

  it('should render custom time zones', (): void => {
    const { getByText } = render(
      <AbsoluteTimestamp locales="en-US" timeZone="America/Los_Angeles">
        0
      </AbsoluteTimestamp>,
    );
    expect((): void => {
      getByText('December 31, 1969, 16:00 PST');
    }).not.toThrow();
  });

  it('should render numbers', (): void => {
    const { getByText } = render(
      <AbsoluteTimestamp locales="en-US" timeZone="UTC">
        {0}
      </AbsoluteTimestamp>,
    );
    expect((): void => {
      getByText('January 01, 1970, 24:00 UTC');
    }).not.toThrow();
  });
});
