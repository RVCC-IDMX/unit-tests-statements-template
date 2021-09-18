const { isString, isBlank, sayHelloOrBye } = require('../src/stmnts-06');

test('isString', () => {
  expect(isString('32')).toBe(true);
  expect(isString(32)).toBe(false);
  expect(isString('')).toBe(true);
  expect(isString(' ')).toBe(true);
  expect(isString(null)).toBe(false);
});

test('isBlank', () => {
  expect(isBlank('')).toBe(true);
  expect(isBlank(' ')).toBe(false);
  expect(isBlank(32)).toBe(false);
});

test('sayHelloOrBye', () => {
  expect(sayHelloOrBye('Woody', 0)).toBe('Hello Woody');
  expect(sayHelloOrBye('Buzz Lightyear', 1)).toBe('Bye Buzz Lightyear');
});
