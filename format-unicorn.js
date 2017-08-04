module.exports = function () {
  let str = this.toString()

  if (arguments.length) {
    const type = typeof arguments[0]
    const args = type === 'string' || type === 'number' ? Array.prototype.slice.call(arguments) : arguments[0]

    for (const arg in args) str = str.replace(new RegExp(`\\{${arg}\\}`, 'gi'), args[arg])
  }

  return str
}
