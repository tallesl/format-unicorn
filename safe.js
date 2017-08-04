const formatUnicorn = require('./format-unicorn')

module.exports = function () {
  const args = Array.prototype.slice.call(arguments)
  return formatUnicorn.apply(args.shift(), args)
}
