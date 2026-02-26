console.log('day130 started');


/*--------------------------------------------------*/
// 1️⃣ Find the Sum of All Elements in an Array
// Input: [1, 2, 3, 4]
// Output: 10

function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4]));


/*--------------------------------------------------*/
// 2️⃣ Check if a String is Palindrome
// Input: "madam"
// Output: true

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome("madam"));


/*--------------------------------------------------*/
// 3️⃣ Find the Maximum Occurring Element in an Array
// Input: [1,2,2,3,3,3,4]
// Output: 3

function maxOccurring(arr) {
  let freq = {};
  let maxCount = 0;
  let result = null;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      result = num;
    }
  }

  return result;
}

console.log(maxOccurring([1,2,2,3,3,3,4]));


/*--------------------------------------------------*/
// 4️⃣ Remove Duplicates from an Array
// Input: [1,2,2,3,4,4]
// Output: [1,2,3,4]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1,2,2,3,4,4]));


/*--------------------------------------------------*/
// 5️⃣ Find the Fibonacci Number (nth position)
// Input: 6
// Output: 8

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));


/*--------------------------------------------------*/





console.log('day130 ended')