# JS Unit Testing Statements

This project is written in [Node](https://nodejs.org/en/), and tested with [Jest - the delightful JavaScript Testing Framework](https://jestjs.io/).

---

## The assignment

When npm runs jest, all the tests are failing as seen at the end of its output to the console.

Fixing the code will make the tests pass and show in green in the console.

<div style="padding-top: 3rem;"></div>

# Instructions

## Install your dependencies

`npm install`

---

## Run tests on a single file

`npm test -- stmnts-01.test.js`

NOTE: The -- tells npm to pass along whatever following arguments there are to the program it is running.

The above npm command is equivalent to:

`npx jest stmnts-01.test.js`

or inside the package.json it would be the same as:

`"test": "jest stmnts-01.test.js"`

Since we have a number files that need individual editing, we want to run individual testing on each one of them as well.

---

By default, jest looks for files that end in .test.js and will search folders to find those files. Your JavaScript files are in a folder call tests.

So the above example tests the first file `tests/stmnts-01.test.js` and outputs the results to the console.

If a test fails, jest will identify it as failing and print one or more error messages, depending on the test expectations.

---

## Edit and test each file sequentially

One-by-one, edit each JavaScript file and follow the instructions for each coding skill. You should run the test after each completed skill and see the pass count increase. When one file passes completely, you are ready for the next file.

Start with stmnts-01.test.js and finish with stmnts-04.test.js

---

## Git is configured not to allow a commit if it sees any errors

Eslint needs to be properly running in this repo as it is configured to not allow you to commit with coding errors.

Be careful of any squigglies and get them properly fixed (do not add any eslint disable comments)

---

## Continue writing and fixing code until all tests pass

When you feel the coding skills are completed, the following command will test all files in the repo that end in test.js

`npm test`

---

## Coverage

To see the coverage my finding the created index.html file in the coverage/lcov-report folder. After you start testing, you can open that file using the Liver Server extension in VS Code.

---

## Notes

- It is best not to push changes to GitHub until you know your tests pass
- The above note does not stop you from doing separate commits each time you make a fix

---

## Commit and push after all tests pass

---

> "Unit testing ensures that all code meets quality standards before it's deployed."
> [The importance of unit testing](https://fortegrp.com/the-importance-of-unit-testing/)

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
