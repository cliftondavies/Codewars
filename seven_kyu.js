/*
KATA: Vowel Count

INSTRUCTIONS: Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

/*
KATA: Get the Middle Character

INSTRUCTIONS: You are going to be given a word. Your job is to return the middle character of the word.
If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/
function getMiddle(s) {
  let stringIndex = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[stringIndex] : s.substring(stringIndex - 1, stringIndex + 1);
}

/*
KATA: Disemvowel Trolls

INSTRUCTIONS: Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/
function disemvowel(str) {
  return str.match(/[^aeiou]/ig).join("");
}

/*
KATA: You're a square!

INSTRUCTIONS: Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/
var isSquare = function(n) {
  return Number.isInteger(Math.sqrt(n));
}

/*
KATA: Highest and Lowest

INSTRUCTIONS: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
function highAndLow(numbers) {
  let arr1 = numbers.split(" ");
  return `${Math.max(...arr1)} ${Math.min(...arr1)}`;
}

/*
KATA: Mumbling

INSTRUCTIONS: This time no story, no theory. The examples below show you how to write function accum:
*/
function accum(s) {
  return s.split("").map((l, i) => l.toUpperCase() + l.toLowerCase().repeat(i)).join("-");
}

/*
KATA: Exes and Ohs

INSTRUCTIONS: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
  str = str.toLowerCase().split("");
  return str.filter((l) => l === "o").length === str.filter((l) => l === "x").length;
}

/*
KATA: Complementary DNA

INSTRUCTIONS: Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
If you want to know more http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
*/
function DNAStrand(dna) {
  return dna.replace(/(A|T|C|G)/g, x => x === "A" ? "T" : x === "T" ? "A" : x === "C" ? "G" : "C");
}

/*
KATA: Square Every Digit

INSTRUCTIONS: Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/
function squareDigits(num) {
  return parseInt((`${num}`.split("").map((n) => Math.pow(n, 2)).join("")), 10);
}

/*
KATA: Shortest Word

INSTRUCTIONS: Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/
function findShort(s) {
  let arr = s.split(" ").map((w) => w.length);
  return Math.min(...arr);
}

/*
KATA: Jaden Casing Strings

INSTRUCTIONS: Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.
For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/
String.prototype.toJadenCase = function () {
   return this.split(" ").map((s) => s.replace(s[0], s[0].toUpperCase())).join(" ");
};

/*
KATA: Descending Order

INSTRUCTIONS: Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(n) {
 return parseInt((`${n}`.split("").sort((a, b) => b - a).join("")), 10);
}

/*
KATA: Beginner Series #3 Sum of Numbers

INSTRUCTIONS: Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it.
If the two numbers are equal return a or b.
Note: a and b are not ordered!
*/
function GetSum(a, b) {
  return ((a + b) / 2) * (Math.abs(b - a) + 1); //Sum of an arithmetic sequence = Median of sequence * Number of values in sequence
}

/*
KATA: List Filtering

INSTRUCTIONS: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/
function filter_list(l) {
  return l.filter(n => typeof n === "number");
}

/*
KATA: Growth of a Population

INSTRUCTIONS: In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/
function nbYear(p0, percent, aug, p) {
    for (var yr = 0; p0 < p; yr++) {
      p0 += (p0 * percent/100) + aug;
    }
    return yr;
}

/*
KATA: Is this a triangle?

INSTRUCTIONS: Implement a method that accepts 3 integer values a, b, c.
The method should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).
*/
function isTriangle(a, b, c) {
   return (a + b > c && b + c > a && a + c > b);
}

/*
KATA: Sum of two lowest positive integers

INSTRUCTIONS: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

/*
KATA: Find the next perfect square!

INSTRUCTIONS: You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.
*/
function findNextSquare(sq) {
  let n = Math.sqrt(sq);
  return Number.isInteger(n) ? Math.pow(n + 1, 2) : -1;
}

/*
KATA: Isograms

INSTRUCTIONS: An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str) {
  return !str.match(/(\w).*\1/i);
}
