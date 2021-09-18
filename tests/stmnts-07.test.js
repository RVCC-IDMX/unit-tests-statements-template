const {
  numberOfOdds,
  gradeGenerator,
  getGrade,
  addUpTheNumbers,
} = require('../src/stmnts-07');

test('numberOfOdds', () => {
  expect(numberOfOdds(5)).toBe(2);
  expect(numberOfOdds(10)).toBe(5);
  expect(numberOfOdds(15)).toBe(8);
});

test('gradeGenerator', () => {
  expect(gradeGenerator(55)).toBe('F');
  expect(gradeGenerator(60)).toBe('D');
  expect(gradeGenerator(75)).toBe('C');
  expect(gradeGenerator(82)).toBe('B');
  expect(gradeGenerator(99)).toBe('A');
  expect(gradeGenerator(100)).toBe('A');
});

test('getGrade', () => {
  expect(getGrade('Francine', 99)).toBe('Francine got an A');
  expect(getGrade('David', 87)).toBe('David got a B');
  expect(getGrade('Sophia', 75)).toBe('Sophia got a C');
  expect(getGrade('Yogi the Bear', 60)).toBe('Yogi the Bear got a D');
  expect(getGrade('Homer Simpson', 42)).toBe('Homer Simpson got an F');
});

test('addUpTheNumbers', () => {
  expect(addUpTheNumbers(0)).toBe(0);
  expect(addUpTheNumbers(5)).toBe(15);
  expect(addUpTheNumbers(10)).toBe(55);
});
