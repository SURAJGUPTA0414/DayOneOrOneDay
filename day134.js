console.log('day134 started');

/*--------------------------------------------------*/
// 1️⃣ Find the Maximum Subarray Sum (Kadane's Algorithm)
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6

function maxSubarraySum(arr) {
  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

/*--------------------------------------------------*/
// 2️⃣ Check if a Number is Prime
// Input: 29
// Output: true

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(29)); // true
console.log(isPrime(15)); // false

/*--------------------------------------------------*/
// 3️⃣ Move All Zeroes to End
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

function moveZeroes(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }

  while (index < arr.length) {
    arr[index] = 0;
    index++;
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

/*--------------------------------------------------*/
// 4️⃣ Find Missing Number in Range 1 to N
// Input: [1, 2, 4, 5], N = 5
// Output: 3

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5)); // 3

/*--------------------------------------------------*/
// 5️⃣ Rotate Array by K Steps (Right Rotation)
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;

  return arr.slice(n - k).concat(arr.slice(0, n - k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

/*--------------------------------------------------*/






console.log('day134 ended')
