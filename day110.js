console.log('day110 started');

/*--------------------------------------------------*/
// 1️⃣ Reverse a String
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // olleh

/*--------------------------------------------------*/
// 2️⃣ Find Largest Number in an Array
// Input: [10, 45, 2, 99, 23]
// Output: 99

function findLargest(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findLargest([10, 45, 2, 99, 23]));

/*--------------------------------------------------*/
// 3️⃣ Check if String is Palindrome
// Input: "madam"
// Output: true

function isPalindromeString(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(isPalindromeString("madam")); // true
console.log(isPalindromeString("hello")); // false

/*--------------------------------------------------*/
// 4️⃣ Count Occurrences of Each Element
// Input: [1,2,2,3,3,3]
// Output: {1:1, 2:2, 3:3}

function countOccurrences(arr) {
  let result = {};

  for (let val of arr) {
    result[val] = (result[val] || 0) + 1;
  }

  return result;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));

/*--------------------------------------------------*/
// 5️⃣ Find Missing Number (1 to N)
// Input: [1,2,4,5], N = 5
// Output: 3

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

/*--------------------------------------------------*/

console.log('day110 ended');
