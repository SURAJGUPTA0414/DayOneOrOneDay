console.log("day103 started");

/*--------------------------------------------------*/
// 1️⃣ Find Second Largest Number in Array
// Input: [10, 5, 8, 20, 15]
// Output: 15

function secondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }

  return secondMax;
}

console.log(secondLargest([10, 5, 8, 20, 15]));

/*--------------------------------------------------*/
// 2️⃣ Reverse Words in a String
// Input: "hello world from js"
// Output: "js from world hello"

function reverseWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }

  return result.join(" ");
}

console.log(reverseWords("hello world from js"));

/*--------------------------------------------------*/
// 3️⃣ Check if Array is Sorted (Ascending)
// Input: [1, 2, 3, 4, 5]
// Output: true

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));

/*--------------------------------------------------*/
// 4️⃣ Find Missing Number in Array
// Input: [1, 2, 4, 5]
// Output: 3

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5]));

/*--------------------------------------------------*/
// 5️⃣ Count Even and Odd Numbers in Array
// Input: [1, 2, 3, 4, 5, 6]
// Output: { even: 3, odd: 3 }

function countEvenOdd(arr) {
  let result = { even: 0, odd: 0 };

  for (let num of arr) {
    if (num % 2 === 0) {
      result.even++;
    } else {
      result.odd++;
    }
  }

  return result;
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));

/*--------------------------------------------------*/
console.log("day103 ended");
