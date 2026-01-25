console.log('day99 started');

/*
Q1. Reverse a string
Ans:
*/
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Example: reverseString("hello") -> "olleh"

/*
Q2. Find the largest number in an array
Ans:
*/
function findMax(arr) {
  return Math.max(...arr);
}
// Example: findMax([2, 5, 1, 9]) -> 9

/*
Q3. Check if a number is palindrome
Ans:
*/
function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}
// Example: isPalindrome(121) -> true

/*
Q4. Find factorial of a number
Ans:
*/
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// Example: factorial(5) -> 120

/*
Q5. Find duplicate elements in an array
Ans:
*/
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
// Example: findDuplicates([1,2,3,2,4,1]) -> [2,1]

console.log('day99 ended');
