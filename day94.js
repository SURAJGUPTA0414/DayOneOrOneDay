console.log('day94 started');

/*--------------------------------------------------*/
// 6. Reverse Each Word in a Sentence
function reverseEachWord(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseEachWord("hello world")); 
// "olleh dlrow"

/*--------------------------------------------------*/
// 7. Find the Most Repeated Character
function mostRepeatedChar(str) {
  let freq = {};
  let maxChar = '';
  let maxCount = 0;

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > maxCount) {
      maxCount = freq[ch];
      maxChar = ch;
    }
  }

  return maxChar;
}

console.log(mostRepeatedChar("javascript")); 
// "a"

/*--------------------------------------------------*/
// 8. Check if Two Strings Are Anagrams
function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase().split('').sort().join('');
  let s2 = str2.toLowerCase().split('').sort().join('');

  return s1 === s2;
}

console.log(isAnagram("listen", "silent")); 
// true

/*--------------------------------------------------*/
// 9. Find Missing Number in Array (1 to n)
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); 
// 3

/*--------------------------------------------------*/
// 10. Count Occurrences of Each Element in Array
function countOccurrences(arr) {
  let result = {};

  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}

console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
// { 1: 1, 2: 2, 3: 3 }

console.log('day94 ended');
