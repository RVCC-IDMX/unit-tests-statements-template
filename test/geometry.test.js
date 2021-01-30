/* geometry.test.js */

const {
  perimeterRectangle,
  areaRectangle,
  circumferenceCircle,
  areaCircle,
  pythagorean,
} = require('../src/geometry');


test('Should be the perimeter of rectangle to 2 places', () => {
  expect(perimeterRectangle(5, 2)).toBe(14);
});

test('Should be the area of rectangle to 2 places', () => {
  expect(areaRectangle(5, 2)).toBe(10);
});

test('Should be the circumference of circle to 2 places', () => {
  expect(circumferenceCircle(5)).toBe(31.42);
});

test('Should be the area of circle to 2 places', () => {
  expect(areaCircle(5)).toBe(78.54);
});


test('Should be hypothenuse of triangle to 2 places', () => {
  expect(pythagorean(3,4)).toBe(5);
});

test('Should be hypothenuse of triangle to 2 places', () => {
  expect(pythagorean(8,12)).toBe(14.42);
});

