console.log('day118 started');

/*--------------------------------------------------*/
// 1️⃣ Find the Intersection of Two Arrays
// Input: [1,2,3,4], [3,4,5,6]
// Output: [3,4]

function findIntersection(arr1, arr2) {
  let result = [];

  for (let num of arr1) {
    if (arr2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(findIntersection([1,2,3,4], [3,4,5,6]));


/*--------------------------------------------------*/
// 2️⃣ Count Occurrences of Each Element in Array
// Input: [1,2,2,3,3,3]
// Output: {1:1, 2:2, 3:3}

function countOccurrences(arr) {
  let count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  return count;
}

console.log(countOccurrences([1,2,2,3,3,3]));


/*--------------------------------------------------*/
// 3️⃣ Find Maximum Number in Array (Without Math.max)
// Input: [5,1,9,3]
// Output: 9

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([5,1,9,3]));


/*--------------------------------------------------*/
// 4️⃣ Reverse a String (Without reverse())
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));


/*--------------------------------------------------*/
// 5️⃣ Check if Two Strings Are Anagrams
// Input: "listen", "silent"
// Output: true

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(areAnagrams("listen", "silent")); // true


/*--------------------------------------------------*/

console.log('day118 ended');
