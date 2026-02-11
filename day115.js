console.log('day115 started');

/*--------------------------------------------------*/
// 1️⃣ Check if String is Palindrome (Ignoring Spaces)
// Input: "nurses run"
// Output: true

function isPalindrome(str) {
  let cleaned = str.replace(/\s+/g, '').toLowerCase();
  let reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log(isPalindrome("nurses run")); // true

/*--------------------------------------------------*/
// 2️⃣ Find Maximum Sum of Subarray (Kadane’s Algorithm)
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6  (subarray: [4,-1,2,1])

function maxSubArraySum(arr) {
  let maxSoFar = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentSum);
  }

  return maxSoFar;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6

/*--------------------------------------------------*/
// 3️⃣ Find Intersection of Two Arrays
// Input: [1,2,2,3], [2,2]
// Output: [2,2]

function intersection(arr1, arr2) {
  let map = {};
  let result = [];

  for (let num of arr1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
}

console.log(intersection([1,2,2,3], [2,2]));

/*--------------------------------------------------*/
// 4️⃣ Convert Array into Chunked Arrays
// Input: [1,2,3,4,5], size = 2
// Output: [[1,2],[3,4],[5]]

function chunkArray(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1,2,3,4,5], 2));

/*--------------------------------------------------*/
// 5️⃣ Find Longest Word Length in Sentence
// Input: "Frontend developer interview preparation"
// Output: 12

function longestWordLength(sentence) {
  let words = sentence.split(' ');
  let maxLength = 0;

  for (let word of words) {
    maxLength = Math.max(maxLength, word.length);
  }

  return maxLength;
}

console.log(longestWordLength("Frontend developer interview preparation"));

/*--------------------------------------------------*/

console.log('day115 ended');
