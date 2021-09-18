const { sum, betterSum } = require('../src/stmnts-02');

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 55)).toBe(54);
  expect(sum(0, 0)).toBe(0);
  expect(sum(0, -1)).toBe(-1);
  expect(sum(1, -1)).toBe(0);
});

test('betterSum', () => {
  expect(betterSum('1', '2')).toBe(3);
  expect(betterSum('-1', '55')).toBe(54);
  expect(betterSum('0', '0')).toBe(0);
  expect(betterSum(0, '-1')).toBe(-1);
});
