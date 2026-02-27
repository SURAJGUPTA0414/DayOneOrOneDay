console.log('day131 started');



console.log('day131 ended')console.log('day131 started');

/*--------------------------------------------------*/
// 1️⃣ Find Second Largest Number in an Array
// Input: [10, 5, 20, 8, 20]
// Output: 10 (without using sort)

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 5, 20, 8, 20]));

/*--------------------------------------------------*/
// 2️⃣ Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));

/*--------------------------------------------------*/
// 3️⃣ Count Vowels in a String
// Input: "JavaScript Developer"
// Output: 7

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("JavaScript Developer"));

/*--------------------------------------------------*/
// 4️⃣ Flatten a Nested Array (1 level only)
// Input: [1, 2, [3, 4], 5]
// Output: [1, 2, 3, 4, 5]

function flattenOneLevel(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flattenOneLevel([1, 2, [3, 4], 5]));

/*--------------------------------------------------*/
// 5️⃣ Find First Non-Repeating Character
// Input: "aabbcddbe"
// Output: "c"

function firstNonRepeating(str) {
  const map = {};

  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (let char of str) {
    if (map[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(firstNonRepeating("aabbcddbe"));

/*--------------------------------------------------*/

console.log('day131 ended');