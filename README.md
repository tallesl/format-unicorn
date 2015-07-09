# :rainbow: Format Unicorn

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm-img]][npm]

A string format function made and used by Stack Exchange on their various websites [*][meta] [*][so]

[build]:     https://travis-ci.org/tallesl/format-unicorn
[build-img]: https://travis-ci.org/tallesl/format-unicorn.png

[coverage]:     https://coveralls.io/r/tallesl/format-unicorn?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/format-unicorn/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/format-unicorn
[dependencies-img]: https://david-dm.org/tallesl/format-unicorn.png

[devdependencies]:     https://david-dm.org/tallesl/format-unicorn#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/format-unicorn/dev-status.png

[module]:     http://badge.fury.io/js/format-unicorn
[module-img]: https://badge.fury.io/js/format-unicorn.png

[npm]:     https://nodei.co/npm/format-unicorn
[npm-img]: https://nodei.co/npm/format-unicorn.png?mini=true

[meta]: http://meta.stackexchange.com/q/207128
[so]:   http://stackoverflow.com/a/18234317/1316620

## Usage

```javascript
$ npm install format-unicorn
format-unicorn@1.1.0 node_modules/format-unicorn
$ node
> require('format-unicorn') // this adds formatUnicorn to String.prototype
{}
> 'We are not in {place} anymore.'.formatUnicorn({ place: 'Kansas' })
'We are not in Kansas anymore.'
> var formatUnicorn = require('format-unicorn/safe') // 'safer' version if you don't wanna mess with String's prototype
undefined
> formatUnicorn('We are not in {place} anymore.', { place: 'Kansas' })
'We are not in Kansas anymore.'
```

