console.log('day97 started');

/*--------------------------------------------------*/
// 1. Find First Non-Repeating Character
function firstNonRepeatingChar(str) {
  let freq = {};

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (freq[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbccddeeef"));
// "f"

/*--------------------------------------------------*/
// 2. Remove Duplicate Elements from Array
function removeDuplicates(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

/*--------------------------------------------------*/
// 3. Find Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
  let set2 = new Set(arr2);
  let result = [];

  for (let item of arr1) {
    if (set2.has(item) && !result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

/*--------------------------------------------------*/
// 4. Find Pair with Given Sum
function pairWithSum(arr, target) {
  let seen = new Set();

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }

  return null;
}

console.log(pairWithSum([2, 7, 11, 15], 9));
// [2, 7]

/*--------------------------------------------------*/
// 5. Rotate Array Right by K Steps
function rotateArray(arr, k) {
  k = k % arr.length;

  let part1 = arr.slice(-k);
  let part2 = arr.slice(0, arr.length - k);

  return [...part1, ...part2];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log('day97 ended');
