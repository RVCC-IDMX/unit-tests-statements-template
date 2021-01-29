/* conditionals.js */

function numberOfOdds(num) {
  // num is a positive integer greater than 0
  // loop from 0 to num, iterating by 1
  // return the count of odd numbers
  // for example, if num is 5 you will check 0,1,2,3,and 4
  // and count of the odd values is 2
  // write your code here

}

function gradeGenerator(score) {
  // score is a positive integer 0 through 100
  // generate a letter grade based on the following
  // table
  // < 60	F
  // < 70	D
  // < 80	C
  // < 90	B
  // < 100	A
  // return the letter grade as a string
  // write your code here

}

function getGrade(name, score) {
  // this function is passed 2 parameters
  // name is a string and score is a number
  // 0 through 100
  //
  // call the above gradeGenerator() function
  // to find a letter grade with that score
  // return a string written like:
  // Francine got an A
  // David got a B
  // note it's "an A" (not a A)

}



module.exports = {
  numberOfOdds,
  gradeGenerator,
  getGrade,
};