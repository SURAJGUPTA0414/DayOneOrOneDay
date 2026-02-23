console.log('day127 started');

/*--------------------------------------------------*/
// 1️⃣ Find the Second Largest Number in an Array
// Input: [10, 5, 8, 20, 15]
// Output: 15

function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 5, 8, 20, 15]));


/*--------------------------------------------------*/
// 2️⃣ Count Vowels in a String
// Input: "javascript"
// Output: 3

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));


/*--------------------------------------------------*/
// 3️⃣ Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  let format = str => str.toLowerCase().split('').sort().join('');
  return format(str1) === format(str2);
}

console.log(isAnagram("listen", "silent"));


/*--------------------------------------------------*/
// 4️⃣ Find Missing Number in Array (1 to n)
// Input: [1,2,3,5]
// Output: 4

function findMissing(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return total - sum;
}

console.log(findMissing([1, 2, 3, 5]));


/*--------------------------------------------------*/
// 5️⃣ Flatten a Nested Array
// Input: [1, [2, [3, 4]], 5]
// Output: [1,2,3,4,5]

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5]));


/*--------------------------------------------------*/

console.log('day127 ended');