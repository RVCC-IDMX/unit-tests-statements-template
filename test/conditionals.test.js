/* conditionals.test.js */

const {
  numberOfOdds,
  gradeGenerator,
  getGrade,
} = require('../src/conditionals');


test('should be 2 for the odds in 0,1,2,3,4', () => {
  expect(numberOfOdds(5)).toBe(2);
});

test('should be 66 for the odds in 0->132', () => {
  expect(numberOfOdds(132)).toBe(66);
});

test('should be F for grade 55', () => {
  expect(gradeGenerator(55)).toBe('F');
});

test('should be D for grade 60', () => {
  expect(gradeGenerator(60)).toBe('D');
});

test('should be C for grade 75', () => {
  expect(gradeGenerator(75)).toBe('C');
});

test('should be B for grade 82', () => {
  expect(gradeGenerator(82)).toBe('B');
});

test('should be A for grade 99', () => {
  expect(gradeGenerator(99)).toBe('A');
});

test('should be Francine got an A', () => {
  expect(getGrade('Francine',99)).toBe('Francine got an A');
});

test('should be David got a B', () => {
  expect(getGrade('David',87)).toBe('David got a B');
});