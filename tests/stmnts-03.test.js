const {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
} = require('../src/stmnts-03');

test('rectanglePerimeter', () => {
  expect(rectanglePerimeter(2, 3)).toBe(10);
  expect(rectanglePerimeter(3, 4)).toBe(14);
  expect(rectanglePerimeter(4, 5)).toBe(18);
});

test('rectangleArea', () => {
  expect(rectangleArea(2, 3)).toBe(6);
  expect(rectangleArea(3, 4)).toBe(12);
  expect(rectangleArea(4, 5)).toBe(20);
});

test('circleCircumference', () => {
  expect(circleCircumference(2)).toBe(12.56);
  expect(circleCircumference(3)).toBe(18.84);
  expect(circleCircumference(4)).toBe(25.12);
});

test('circleArea', () => {
  expect(circleArea(2)).toBe(12.56);
  expect(circleArea(3)).toBe(28.27);
  expect(circleArea(4)).toBe(36.96);
});

test('triangleArea', () => {
  expect(triangleArea(2, 3)).toBe(3);
  expect(triangleArea(3, 4)).toBe(6);
  expect(triangleArea(4, 5)).toBe(10);
});

test('pythagorean', () => {
  expect(pythagorean(3, 4)).toBe(5);
  expect(pythagorean(4, 7)).toBe(8.06);
});
