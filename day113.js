console.log('day113 started');

/*--------------------------------------------------*/
// 1️⃣ Check if String is Palindrome
// Input: "madam"
// Output: true

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

/*--------------------------------------------------*/
// 2️⃣ Find Largest Element in an Array
// Input: [3, 7, 2, 9, 5]
// Output: 9

function findLargest(arr) {
  let max = -Infinity;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

console.log(findLargest([3, 7, 2, 9, 5]));

/*--------------------------------------------------*/
// 3️⃣ Count Occurrences of Each Character
// Input: "hello"
// Output: { h:1, e:1, l:2, o:1 }

function charCount(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
}

console.log(charCount("hello"));

/*--------------------------------------------------*/
// 4️⃣ Flatten a Nested Array (One Level)
// Input: [1, [2, 3], [4, 5]]
// Output: [1, 2, 3, 4, 5]

function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]]));

/*--------------------------------------------------*/
// 5️⃣ Find Fibonacci Number at Position n
// Input: 6
// Output: 8

function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(fibonacci(6));

/*--------------------------------------------------*/



console.log('day113 ended');