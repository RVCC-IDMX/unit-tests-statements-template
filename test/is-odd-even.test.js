const {
  isOdd,
  isEven,
} = require('../src/is-odd-even');


test('Should be an even value', () => {
  expect(isEven(32)).toBe(true);
});

test('Should be an odd value', () => {
  expect(isOdd(13)).toBe(true);
});

test('Should not be an even value', () => {
  expect(isEven(87)).toBe(false);
});

test('Should not be an odd value', () => {
  expect(isOdd(-40)).toBe(false);
});

