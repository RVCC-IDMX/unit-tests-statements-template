const times = require('../src/stmnts-01');

test('times', () => {
  expect(times(2, 3)).toBe(6);
  expect(times(3, 3)).toBe(9);
  expect(times(0, 3)).toBe(0);
  expect(times(-5, 4)).toBe(-20);
});
