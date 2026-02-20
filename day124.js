console.log('day124 started');

/*--------------------------------------------------*/
// 1️⃣ Kadane’s Algorithm (Optimized Max Subarray)
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6  (subarray: [4,-1,2,1])

function maxSubarrayKadane(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubarrayKadane([-2,1,-3,4,-1,2,1,-5,4]));


/*--------------------------------------------------*/
// 2️⃣ Rotate Array Right by K Steps
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

function rotateArray(arr, k) {
  k = k % arr.length;

  let part1 = arr.slice(-k);
  let part2 = arr.slice(0, arr.length - k);

  return part1.concat(part2);
}

console.log(rotateArray([1,2,3,4,5], 2));


/*--------------------------------------------------*/
// 3️⃣ Factorial Using Recursion
// Input: 5
// Output: 120

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));


/*--------------------------------------------------*/
// 4️⃣ Fibonacci Using Recursion
// Input: 6
// Output: 8

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));


/*--------------------------------------------------*/
// 5️⃣ Flatten Nested Array
// Input: [1,[2,[3,4]],5]
// Output: [1,2,3,4,5]

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flattenArray([1,[2,[3,4]],5]));

/*--------------------------------------------------*/

console.log('day124 ended');
