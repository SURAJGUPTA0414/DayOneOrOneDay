console.log("day108 started");



/*--------------------------------------------------*/
// Reverse a String without Built-in Methods
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
// Count Vowels in a String
// Input: "javascript"
// Output: 3

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));

/*--------------------------------------------------*/
// Find Missing Number in Array (1 to n)
// Input: [1,2,4,5]
// Output: 3

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let val of arr) {
    actualSum += val;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5));

/*--------------------------------------------------*/
//  Capitalize First Letter of Each Word
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
// Check if Array Contains Duplicates

function hasDuplicates(arr) {
  let seen = new Set();

  for (let val of arr) {
    if (seen.has(val)) {
      return true;
    }
    seen.add(val);
  }

  return false;
}

console.log(hasDuplicates([1, 2, 3, 4])); // false
console.log(hasDuplicates([1, 2, 2, 3])); // true

/*--------------------------------------------------*/

console.log("day108 ended");
