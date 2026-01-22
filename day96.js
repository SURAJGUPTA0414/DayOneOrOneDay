console.log('day96 started');

/*--------------------------------------------------*/
// 1. Find Longest Word in a Sentence
function longestWord(str) {
  let words = str.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("I am learning javascript logic building"));
// "javascript"

/*--------------------------------------------------*/
// 2. Count Vowels in a String
function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Javascript"));
// 3

/*--------------------------------------------------*/
// 3. Flatten a Nested Array (1 level)
function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, 3], [4, 5], 6]));
// [1, 2, 3, 4, 5, 6]

/*--------------------------------------------------*/
// 4. Find Maximum Sum of Array (Kadane’s simplified)
function maxSubArraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, -2, 3, 4, -1, 2]));
// 8

/*--------------------------------------------------*/
// 5. Check if Array is Sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
// true

console.log('day96 ended');
