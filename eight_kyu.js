/*
KATA: Multiply

INSTRUCTIONS: The code does not execute properly. Try to figure out why.
*/
function multiply(a, b) {
 return a * b;
}

/*
KATA: Even or Odd

INSTRUCTIONS: Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/*
KATA: String repeat

INSTRUCTIONS: Write a function called repeatString which repeats the given String src exactly count times.
*/
function repeatStr(n, s) {
  return s.repeat(n);
}

/*
KATA: Return Negative

INSTRUCTIONS: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/
function makeNegative(num) {
  return num < 0 ? num : -num;
}

/*
KATA: Convert boolean values to strings 'Yes' or 'No'.
INSTRUCTIONS: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

/*
KATA: Counting sheep...

INSTRUCTIONS: Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
*/
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((x, y) => y ? x + 1 : x, 0);
}

/*
KATA: Remove First and Last Character

INSTRUCTIONS: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/
function removeChar(str) {
 return str.slice(1, -1);
}

/*
KATA: Opposite number

INSTRUCTIONS: Very simple, given a number, find its opposite.
*/
function opposite(number) {
  return -number;
}

/*
KATA: Convert a Number to a String!

INSTRUCTIONS: We need a function that can transform a number into a string.
What ways of achieving this do you know?
*/
function numberToString(num) {
  return `${num}`;
}

/*
KATA: Sum of positive

INSTRUCTIONS: You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  return arr.reduce((a, c) => c > 0 ? a + c : a, 0);
}
