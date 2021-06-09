# Absolute timestamp

[![version](https://img.shields.io/npm/v/absolute-timestamp.svg)](https://www.npmjs.com/package/absolute-timestamp)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/absolute-timestamp.svg)](https://www.npmjs.com/package/absolute-timestamp)
[![downloads](https://img.shields.io/npm/dt/absolute-timestamp.svg)](https://www.npmjs.com/package/absolute-timestamp)

`AbsoluteTimestamp` is a React 17+ component for display Unix timestamps in
absolute format, e.g. `"December 31, 1969, 16:00 PST"`.

## Install

- `npm install absolute-timestamp` or
- `yarn add absolute-timestamp`

## Use

```javascript
import AbsoluteTimestamp from 'absolute-timestamp';

function App() {
  return <AbsoluteTimestamp>{Date.now()}</AbsoluteTimestamp>;
}
```

## Props

### `locales`

Type: `string | string[]` _optional_

Default: `'en-US'`

In order to get the format of the language used in the user interface of your
application, make sure to specify that language (and possibly some fallback
languages).

See also:
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

### `timeZone`

Type: `string` _optional_

Default: `undefined`

`timeZone` specifies the time zone to use. The only value guaranteed to be
recognized is `'UTC'`; the default is the runtime's default time zone.
Devices may also recognize the time zone names of the IANA time zone database,
such as `'Asia/Shanghai'`, `'Asia/Kolkata'`, or `'America/New_York'`.

See also:
[`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

## Contributing

- `yarn set version latest`
- `yarn`
- `yarn up * && yarn up @*/*`
- `yarn dlx @yarnpkg/pnpify --sdk vscode`
