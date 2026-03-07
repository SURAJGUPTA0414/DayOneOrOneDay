console.log('day136 started');


/*
Question 1: Reverse a String
Write a function that takes a string and returns it reversed.

Example:
Input: "hello"
Output: "olleh"
*/
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));



/*
Question 2: Check if a Number is Prime
Write a function that checks whether a given number is prime or not.

Example:
Input: 7
Output: true
*/
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));



/*
Question 3: Find the Largest Number in an Array

Example:
Input: [3, 7, 2, 9, 5]
Output: 9
*/
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([3,7,2,9,5]));



/*
Question 4: Remove Duplicates from an Array

Example:
Input: [1,2,2,3,4,4]
Output: [1,2,3,4]
*/
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4]));



/*
Question 5: Find Factorial of a Number

Example:
Input: 5
Output: 120
*/
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(factorial(5));


console.log('day136 ended');
