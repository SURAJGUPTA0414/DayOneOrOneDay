console.log('day117 started');

/*--------------------------------------------------*/
// 1️⃣ Find Missing Number in Array (1 to N)
// Input: [1,2,4,5]
// Output: 3

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1,2,4,5])); // 3


/*--------------------------------------------------*/
// 2️⃣ Remove Duplicates from Array (Without Using Set)
// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));


/*--------------------------------------------------*/
// 3️⃣ Find First Non-Repeating Character
// Input: "aabbcddee"
// Output: "c"

function firstNonRepeatingChar(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbcddee")); // c


/*--------------------------------------------------*/
// 4️⃣ Rotate Array by K Positions (Right Rotation)
// Input: [1,2,3,4,5], k=2
// Output: [4,5,1,2,3]

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

console.log(rotateArray([1,2,3,4,5], 2));


/*--------------------------------------------------*/
// 5️⃣ Flatten Nested Array (1 Level)
// Input: [1, [2,3], 4, [5,6]]
// Output: [1,2,3,4,5,6]

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let val of item) {
        result.push(val);
      }
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1, [2,3], 4, [5,6]]));


/*--------------------------------------------------*/

console.log('day117 ended');
