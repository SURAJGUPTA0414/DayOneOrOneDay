console.log("day111 started");

/*--------------------------------------------------*/
// 1️⃣ Find Second Largest Number in an Array
// Input: [10, 20, 30, 40]
// Output: 30

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([10, 20, 30, 40]));

/*--------------------------------------------------*/
// 2️⃣ Remove Duplicates from Array
// Input: [1,2,2,3,4,4]
// Output: [1,2,3,4]

function removeDuplicates(arr) {
  let unique = [];

  for (let val of arr) {
    if (!unique.includes(val)) {
      unique.push(val);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/*--------------------------------------------------*/
// 3️⃣ Count Vowels in a String
// Input: "javascript"
// Output: 3

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));

/*--------------------------------------------------*/
// 4️⃣ Move All Zeros to End
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let num of arr) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

/*--------------------------------------------------*/
// 5️⃣ Check if Two Strings Are Anagrams
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freq[char]) {
      return false;
    }
    freq[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false

/*--------------------------------------------------*/

console.log("day111 ended");
