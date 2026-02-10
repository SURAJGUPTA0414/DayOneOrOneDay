console.log('day114 started');

/*--------------------------------------------------*/
// 1️⃣ Find Missing Number in Array (1 to N)
// Input: [1, 2, 4, 5]
// Output: 3

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

/*--------------------------------------------------*/
// 2️⃣ Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  return str1.split('').sort().join('') ===
         str2.split('').sort().join('');
}

console.log(isAnagram("listen", "silent")); // true

/*--------------------------------------------------*/
// 3️⃣ Find First Non-Repeating Character
// Input: "aabbccde"
// Output: "d"

function firstNonRepeatingChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbccde")); // d

/*--------------------------------------------------*/
// 4️⃣ Remove Duplicates from Array
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/*--------------------------------------------------*/
// 5️⃣ Find Second Largest Number in Array
// Input: [10, 5, 20, 8]
// Output: 10

function secondLargest(arr) {
  let uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr[1];
}

console.log(secondLargest([10, 5, 20, 8])); // 10

/*--------------------------------------------------*/

console.log('day114 ended');
