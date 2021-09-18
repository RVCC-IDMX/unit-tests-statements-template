/*
 * stmnts-07.js
 * Language: javascript
 * Test: tests/stmnts-07.test.js
 * Path: src/stmnts-07.js
 */

/**
 * Count the number of odd numbers from 0 to num (exclusive)
 * @param {number} num  - the number to count to
 * @returns {number} - the number of odd numbers from 0 to num
 * ? num is a positive integer greater than 0
 * ? using a for loop from 0 to num, iterating by 1
 * ? this required to be a for loop
 * ? return the count of odd numbers
 * ? for example, if num is 9 you will check 0,1,2,3,4,5,6,7,8
 * ? and count of the odd values is 4
 */
function numberOfOdds(num) {
  // write your code here & return
}

/**
 * Calculates the letter grade for a given score
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the letter grade for that score
 * ? score is a positive integer 0 through 100
 * ? generate a letter grade based on the following
 * ? table
 * ? < 60	F
 * ? < 70	D
 * ? < 80	C
 * ? < 90	B
 * ? <= 100	A
 * ? return the letter grade as a string
 */
function gradeGenerator(score) {
  // write your code here & return
}

/**
 * Calculates a string of the student's name and grade
 * @param {string} name - the name of the student
 * @param {number} score - the numeric grade score for a student
 * @returns {string} - the student's name and their letter grade
 * ? this function is passed 2 parameters
 * ? name is a string and score is a number
 * ? 0 through 100
 *
 * ? this function must call the above gradeGenerator() function
 * ? to find a letter grade with that score
 * ? return a string written like:
 * ? Francine got an A
 * ? David got a B
 * ? note it's "an A" (not a A)
 * ? write your code here & return
 */
function getGrade(name, score) {}

module.exports = {
  numberOfOdds,
  gradeGenerator,
  getGrade,
};
