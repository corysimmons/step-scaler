const stepScaler = require('./bundle')

test('stepScaler', () => {
  expect(stepScaler(1, 3, 3)).toEqual([1, 2, 3])
  expect(stepScaler(1, 10, 3)).toEqual([1, 5.5, 10])
})