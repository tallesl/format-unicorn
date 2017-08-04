# :rainbow: Format Unicorn

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][version-img]][version]

A string format function made and used by Stack Exchange on their various websites. [*][meta] [*][so]

[build]:               https://travis-ci.org/tallesl/format-unicorn
[build-img]:           https://travis-ci.org/tallesl/format-unicorn.svg
[coverage]:            https://coveralls.io/r/tallesl/format-unicorn
[coverage-img]:        https://coveralls.io/repos/tallesl/format-unicorn/badge.svg
[dependencies]:        https://david-dm.org/tallesl/format-unicorn
[dependencies-img]:    https://david-dm.org/tallesl/format-unicorn.svg
[devdependencies]:     https://david-dm.org/tallesl/format-unicorn#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/format-unicorn/dev-status.svg
[version]:             http://badge.fury.io/js/format-unicorn
[version-img]:         https://badge.fury.io/js/format-unicorn.svg
[meta]:                http://meta.stackexchange.com/q/207128
[so]:                  http://stackoverflow.com/a/18234317/1316620

## Usage

```
$ npm install format-unicorn
(...)
$ node
> require('format-unicorn') // this adds formatUnicorn to String.prototype
{}
> 'We are not in {place} anymore.'.formatUnicorn({ place: 'Kansas' })
'We are not in Kansas anymore.'
> let formatUnicorn = require('format-unicorn/safe') // 'safer' version if you don't wanna mess with String's prototype
undefined
> formatUnicorn('We are not in {place} anymore.', { place: 'Kansas' })
'We are not in Kansas anymore.'
```
