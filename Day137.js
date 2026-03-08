console.log('day137 started');

/*
Q1: Reverse Words in a String
Input: "I love coding"
Output: "coding love I"
*/

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love coding"));

/*
Q2: Check if Array is Sorted
Return true if array is sorted in ascending order
Input: [1,2,3,4]
Output: true
*/

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([1,2,3,4]));

/*
Q3: Find Missing Number in Array
Array contains numbers from 1 to n with one missing
Input: [1,2,4,5]
Output: 3
*/

function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((a, b) => a + b, 0);
  return total - sum;
}

console.log(findMissing([1,2,4,5], 5));

/*
Q4: Find Duplicate Element in Array
Input: [1,3,4,2,2]
Output: 2
*/

function findDuplicate(arr) {
  let set = new Set();
  for (let num of arr) {
    if (set.has(num)) return num;
    set.add(num);
  }
}

console.log(findDuplicate([1,3,4,2,2]));

/*
Q5: Count Frequency of Characters
Input: "hello"
Output: {h:1, e:1, l:2, o:1}
*/

function charFrequency(str) {
  let map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  return map;
}

console.log(charFrequency("hello"));

console.log('day137 ended');
