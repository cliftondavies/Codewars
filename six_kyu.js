/*
KATA: Multiples of 3 or 5

INSTRUCTIONS: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
function solution(number) {
  var sum = 0;
  for (var i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

/*
KATA: Find the odd int

INSTRUCTIONS: Given an array, find the integer that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let x = A.indexOf(A[i]); count = 0;
    while (x != -1) { count++; x = A.indexOf(A[i], x + 1); }
    if (count % 2 == 1) { return A[i]; }
  }
}

/*
KATA: Sum of Digits / Digital Root

INSTRUCTIONS: Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.
*/
function digital_root(n) {
  return 1 + ((n - 1) % 9); // Digital Root Formula
}

/*
KATA: Stop gninnipS My sdroW!

INSTRUCTIONS: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/
function spinWords(s) {
  return s.replace(/\w{5,}/gi, (w) => w.split("").reverse().join(""));
}

/*
KATA: Find The Parity Outlier

INSTRUCTIONS: You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.
*/
function findOutlier(integers) {
  let e = integers.filter((n) => n % 2 === 0); o = integers.filter((n) => n % 2 !== 0);
  return e.length === 1 ? e[0] : o[0];
}

/*
KATA: Who likes it?

INSTRUCTIONS: You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/
function likes(n) {
  let l = n.length;
  switch (l) {
    case 0: return "no one likes this";
    case 1: return `${n[0]} likes this`;
    case 2: return `${n[0]} and ${n[1]} like this`;
    case 3: return `${n[0]}, ${n[1]} and ${n[2]} like this`;
    default: return `${n[0]}, ${n[1]} and ${l - 2} others like this`;
  }
}

/*
KATA: Bit Counting

INSTRUCTIONS: Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative.
*/
var countBits = function(n) {
  return n.toString(2).split("0").join("").length;
};

/*
KATA: Persistent Bugger

INSTRUCTIONS: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence.
This is the number of times you must multiply the digits in num until you reach a single digit.
*/
function persistence(num) {
  for (var i = 0; num >= 10; i++) {
    num = `${num}`.split("").reduce((a, b) => Number(a) * Number(b));
  }
  return i;
}

/*
KATA: Create Phone Number

INSTRUCTIONS: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/
function createPhoneNumber(numbers) {
  let pn = numbers.join('').match(/(\w{3})(\w{3})(\w{4})/);
  return `(${pn[1]}) ${pn[2]}-${pn[3]}`;
}

/*
KATA: Array.diff

INSTRUCTIONS: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
*/
function array_diff(a, b) {
  return a.filter((v) => !b.includes(v));
}

/*
KATA: Take a Ten Minute Walk

INSTRUCTIONS: You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones --
everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block in a direction and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point. Return false otherwise.
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).
*/
function isValidWalk(walk) {
  let n = walk.filter((d) => d === "n").length; s = walk.filter((d) => d === "s").length;
  let w = walk.filter((d) => d === "w").length; e = walk.filter((d) => d === "e").length;
  return (walk.length === 10 && n === s && w === e);
}

/*
KATA: Dubstep

INSTRUCTIONS: Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance.
Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
Let's assume that a song consists of some number of words (that don't contain WUB).
To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero),
after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words),
and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed.
Help Jonny restore the original song.
Input:
The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
Output:
Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
*/
function songDecoder(song) {
  return song.split('WUB').filter((w) => w.length > 0).join(' ');
}

/*
KATA: Tribonacci Sequence

INSTRUCTIONS: Well met with Fibonacci bigger brother, AKA Tribonacci.
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place,
you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements -
signature included of the so seeded sequence.
Signature will always contain 3 numbers; n will always be a non-negative number;
if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata
[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast,
and for showing me this mathematical curiosity too with his usual contagious passion :)]
*/
function tribonacci(s, n) {
  let c = [...s];
  if (n == 0) { return s = []; }
  else if (n < 3) { return s.slice(0, n); }
  while (s.length < n && n >= 4) {
    let e = c.reduce((a, b) => a + b, 0);
    s.push(e); c.push(e); c.shift();
  }
  return s;
}

/*
KATA: Counting Duplicates

INSTRUCTIONS: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/
function duplicateCount(t) {
  let cd = t.toLowerCase().split("").sort().join("").match(/(\w).*\1/g);
  return (t.length > 0 && cd !== null ) ? cd.length : 0;
}

/*
KATA: Duplicate Encoder

INSTRUCTIONS: The goal of this exercise is to convert a string to a new string where each character in the new string is:
"(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/
function duplicateEncode(w) {
  w = w.toLowerCase();
  return w.replace(/./g, (l) => w.indexOf(l) == w.lastIndexOf(l) ? '(' : ')');
}

/*
KATA: Unique In Order

INSTRUCTIONS: Implement the function unique_in_order which takes as argument a sequence and returns a list of items,
without any elements with the same value next to each other and preserving the original order of elements.
*/
var uniqueInOrder = function(i) {
  if (Array.isArray(i)) { return [...new Set(i)]; }
  i = i.match(/(.)\1+|(.)/g);
  return i === null ? [] : i.map(l => l.slice(0, 1));
}

/*
KATA: Your order, please

INSTRUCTIONS: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/
function order(s) {
  let digit = w => (w.split("").find(Number));
  return s.split(' ').sort((a, b) => digit(a) - digit(b)).join(' ');
}

/*
KATA: Playing with digits

INSTRUCTIONS: Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:
Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
Note: n and p will always be given as strictly positive integers.
*/
function digPow(n, p) {
  let a = [...String(n)]; sum = 0;
  for (var i = 0; i < a.length; i++) { sum = sum + Math.pow(Number(a[i]), p); p++; }
  return !Number.isInteger(sum / n) ? -1 : sum / n;
}

/*
KATA: IQ Test

INSTRUCTIONS: Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others.
Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers,
he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/
function iqTest(n) {
  n = n.split(' ');
  let o = n.filter(d => d % 2 == 1); e = n.filter(d => d % 2 == 0);
  return e.length > 1 ? n.indexOf(o[0]) + 1 : n.indexOf(e[0]) + 1;
}

/*
KATA: Replace With Alphabet Position

INSTRUCTIONS: Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
*/
function alphabetPosition(t) {
  const al = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
  m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24,
  y: 25, z: 26 };
  t = t.toLowerCase().split('');
  return t.filter(l => /[a-z]/.test(l)).map(l => al[l]).join(' ');
}

/*
KATA: Equal Sides Of An Array

INSTRUCTIONS: You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.
*/
function findEvenIndex(a) {
  for (let i = 0; i < a.length; i++) {
    let a1 = a.filter((n, p) => a.indexOf(n, p) < i); a2 = a.filter((n, p) => a.indexOf(n, p) > i);
    if (a1.reduce((a, b) => a + b, 0) === a2.reduce((a, b) => a + b, 0)) { return i; }
  }
  return -1;
}
