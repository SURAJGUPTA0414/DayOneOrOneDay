console.log('day119 started');

/*--------------------------------------------------*/
// 1️⃣ Remove Duplicates from Array
// Input: [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]

function removeDuplicates(arr) {
  let unique = [];

  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

console.log(removeDuplicates([1,2,2,3,4,4,5]));


/*--------------------------------------------------*/
// 2️⃣ Find Second Largest Number in Array
// Input: [10, 5, 8, 20]
// Output: 10

function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 8, 20]));


/*--------------------------------------------------*/
// 3️⃣ Check if Array is Sorted (Ascending)
// Input: [1,2,3,4]
// Output: true

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1,2,3,4]));
console.log(isSorted([1,3,2]));


/*--------------------------------------------------*/
// 4️⃣ Find Missing Number in Array (1 to n)
// Input: [1,2,4,5]
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

console.log(findMissingNumber([1,2,4,5]));


/*--------------------------------------------------*/
// 5️⃣ Capitalize First Letter of Each Word
// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));

/*--------------------------------------------------*/

console.log('day119 ended');
