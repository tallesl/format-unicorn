const assert = require('assert')
const formatUnicorn = require('./safe')

require('./unsafe')

/* global it */

it('should replace correctly when a replacement is provided', () => {
  // arrange
  const expected = 'It\'s me, Mario!'
  const toFormat = 'It\'s me, {name}!'
  const replacements = { name: 'Mario' }

  // act
  const actualSafe = formatUnicorn(toFormat, replacements)
  const actualUnsafe = toFormat.formatUnicorn(replacements)

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)
})

it('should replace correctly when various replacements are provided', () => {
  // arrange
  const expected = 'The itsy bitsy spider climbed up the waterspout.' +
  ' Down came the rain and washed the spider out.' +
  ' Out came the sun and dried up all the rain and the itsy bitsy spider climbed up the spout again.'

  const toFormat = 'The {adjective} {animal} climbed up the waterspout.' +
  ' Down came the rain and washed the {animal} out.' +
  ' Out came the sun and dried up all the rain and the {adjective} {animal} climbed up the spout again.'

  const replacements = { adjective: 'itsy bitsy', animal: 'spider' }

  // act
  const actualSafe = toFormat.formatUnicorn(replacements)
  const actualUnsafe = formatUnicorn(toFormat, replacements)

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)
})

it('should leave string alone when there is no replacements', () => {
  // arrange
  const expected = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
  'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
  ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
  ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
  ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  // act
  const actualSafe = expected.formatUnicorn({ })
  const actualUnsafe = formatUnicorn(expected, { })

  // assert
  assert.strictEqual(actualSafe, expected)
  assert.strictEqual(actualUnsafe, expected)
})
