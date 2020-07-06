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
function getMiddle(s)
{
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
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

/*
KATA: Highest and Lowest

INSTRUCTIONS: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
function highAndLow(numbers){
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
