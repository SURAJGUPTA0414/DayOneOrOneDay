console.log('day122 started');

/*--------------------------------------------------*/
// 1️⃣ Find First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"

function firstNonRepeating(str) {
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeating("aabbcdd"));


/*--------------------------------------------------*/
// 2️⃣ Move All Zeros to End
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let num of arr) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

console.log(moveZeros([0,1,0,3,12]));


/*--------------------------------------------------*/
// 3️⃣ Find Longest Word in Sentence
// Input: "I love JavaScript programming"
// Output: "programming"

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("I love JavaScript programming"));


/*--------------------------------------------------*/
// 4️⃣ Check if Two Arrays Are Equal
// Input: [1,2,3], [1,2,3]
// Output: true

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1,2,3], [1,2,3]));


/*--------------------------------------------------*/
// 5️⃣ Find Duplicate Elements in Array
// Input: [1,2,3,2,4,1]
// Output: [2,1]

function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

console.log(findDuplicates([1,2,3,2,4,1]));

/*--------------------------------------------------*/

console.log('day122 ended');
