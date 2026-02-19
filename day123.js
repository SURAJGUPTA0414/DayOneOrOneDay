console.log('day123 started');

/*--------------------------------------------------*/
// 1️⃣ Two Sum Problem
// Input: [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }

  return [];
}

console.log(twoSum([2,7,11,15], 9));


/*--------------------------------------------------*/
// 2️⃣ Check if String is Palindrome (Two Pointer)
// Input: "madam"
// Output: true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam"));


/*--------------------------------------------------*/
// 3️⃣ Maximum Sum Subarray (Brute Force)
// Input: [1,2,3,4]
// Output: 10

function maxSubarraySum(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }

  return max;
}

console.log(maxSubarraySum([1,2,3,4]));


/*--------------------------------------------------*/
// 4️⃣ Find Pair with Given Sum (Two Pointer - Sorted Array)
// Input: [1,2,3,4,6], target = 6
// Output: [2,4]

function findPair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log(findPair([1,2,3,4,6], 6));


/*--------------------------------------------------*/
// 5️⃣ Longest Substring Without Repeating Characters
// Input: "abcabcbb"
// Output: 3 ("abc")

function lengthOfLongestSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

/*--------------------------------------------------*/

console.log('day123 ended');
