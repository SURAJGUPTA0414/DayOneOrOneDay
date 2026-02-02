console.log("day107 started");

/*--------------------------------------------------*/
// Reverse a Number
// Input: 1234
// Output: 4321

function reverseNumber(num) {
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reversed;
}

console.log(reverseNumber(1234));

/*--------------------------------------------------*/
// Check if Array is Sorted

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2]));    // false

/*--------------------------------------------------*/
// Count Occurrences of Each Element

function countElements(arr) {
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    count[val] = (count[val] || 0) + 1;
  }

  return count;
}

console.log(countElements([1, 2, 2, 3, 3, 3]));

/*--------------------------------------------------*/
// Find Second Largest Number in Array

function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest([10, 20, 30, 40]));

/*--------------------------------------------------*/
// Remove Duplicates from Array

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

/*--------------------------------------------------*/

console.log("day107 ended");
