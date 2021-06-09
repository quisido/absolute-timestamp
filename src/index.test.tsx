import { render } from '@testing-library/react';
import AbsoluteTimestamp from '.';

describe('AbsoluteTimestamp', (): void => {
  // Set the local time zone to `America/Los_Angeles` via the `TZ` environment
  //   variable. For CI, this is set in the `.travis.yml` file.
  it('should render local time', (): void => {
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
