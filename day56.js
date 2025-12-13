console.log('day56 started');

// ---------------------------
// Practice Problem 4
// Count Vowels
// Input: A single string `s`
// Output: Return the number of vowels (a, e, i, o, u) in the string
// Constraints: 1 <= s.length <= 10^5
// Example:
// Input: "javascript"
// Output: 3
function countVowels(s) {
  // write your code here
  let vowels = s.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;

}

console.log('countVowels =>', countVowels('javascript'));


// ---------------------------
// Practice Problem 5
// Find Maximum in Array
// Input: An array of integers `arr`
// Output: Return the maximum element
// Constraints: 1 <= arr.length <= 10^5
// Example:
// Input: [3, 7, 2, 9, 4]
// Output: 9
function findMax(arr) {
  // write your code here
  return Math.max(...arr);

}

console.log('findMax =>', findMax([3, 7, 2, 9, 4]));


// ---------------------------
// Practice Problem 6
// Palindrome Check
// Input: A string `s`
// Output: Return true if `s` is a palindrome, otherwise false
// Constraints: 1 <= s.length <= 10^5
// Example:
// Input: "madam"
// Output: true
function isPalindrome(s) {
  // write your code here

  if(s === s.split('').reverse().join('')){
    return true;
  }else{
    return false;
  }

}

console.log('isPalindrome =>', isPalindrome('madam'));


// ---------------------------
// Practice Problem 7
// Sum of Digits
// Input: A number `n`
// Output: Return the sum of all digits
// Constraints: 0 <= n <= 10^9
// Example:
// Input: 987
// Output: 24
function sumOfDigits(n) {
  // write your code here
  let x = n.toString().split('');
  let sum = 0;
  for(let xx of x){
    sum += parseInt(xx);
  }
  return sum;

}

console.log('sumOfDigits =>', sumOfDigits(987));


// ---------------------------
// Practice Problem 8
// Remove Duplicates from Array
// Input: An array `arr`
// Output: Return a new array with duplicates removed
// Constraints: 1 <= arr.length <= 10^5
// Example:
// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]
function removeDuplicates(arr) {
  // write your code here
  return [...new Set(arr)];

}

console.log('removeDuplicates =>', removeDuplicates([1,2,2,3,4,4,5]));

console.log('day56 ended');
