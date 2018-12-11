# [@fav/math.gcd][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates the greatest common divisor of two integers.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/math.gcd
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/math.gcd/` directory manually.*


## Usage

For Node.js:

```js
var gcd = require('@fav/math.gcd');
gcd(12, 34) // => 2
gcd(12, -34) // => 2
gcd(1, 12) // => 1

gcd(0, 12) // => 1
gcd(0, 0) // => 1
```

For Web browsers:

```html
<script src="fav.math.gcd.min.js"></script>
<script>
var gcd = fav.math.gcd;
gcd(12, 34) // => 2
</script>
```


## API

### <u>gcd(x, y) : number</u>

Calculates the greatest common divisor of two integers.

This function assumes that both `x` and `y` are integers within `Number.MIN_SAFE_INTEGER` 〜 `Number.MAX_SAFE_INTEGER`.

If `x` or `y` is 0, this function returns 1.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                    |
|:----------|:------:|:-------------------------------|
| *x*       | number | An integer to be calculated.   |
| *y*       | number | An integer to be calculated.   | 

#### Returns:

The greatest common divisor of two integer parameters.

**Type:** number

## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-math.gcd/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/math.gcd
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-math.gcd.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-math.gcd
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-math.gcd?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-math-gcd
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-math-gcd/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-math.gcd?branch=master
