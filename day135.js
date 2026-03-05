console.log('day135 started');

/*--------------------------------------------------*/
// 1️⃣ Check if Two Strings are Rotations
// Input: "abcd", "cdab"
// Output: true

function areRotations(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1 + str1).includes(str2);
}

console.log(areRotations("abcd", "cdab")); // true
console.log(areRotations("abcd", "acbd")); // false

/*--------------------------------------------------*/
// 2️⃣ Find Intersection of Two Arrays (Unique)
// Input: [1, 2, 2, 3], [2, 3, 4]
// Output: [2, 3]

function intersectionUnique(arr1, arr2) {
  const set1 = new Set(arr1);
  const result = [];

  for (let num of new Set(arr2)) {
    if (set1.has(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(intersectionUnique([1, 2, 2, 3], [2, 3, 4])); // [2, 3]

/*--------------------------------------------------*/
// 3️⃣ Find the Longest Word in a Sentence
// Input: "I love solving coding problems"
// Output: "problems"

function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord("I love solving coding problems")); // problems

/*--------------------------------------------------*/
// 4️⃣ Remove Duplicates from Sorted Array
// Input: [1, 1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return [];

  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicatesSorted([1, 1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

/*--------------------------------------------------*/
// 5️⃣ Check if Parentheses are Balanced
// Input: "({[]})"
// Output: true

function isBalanced(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (ch === ')' || ch === ']' || ch === '}') {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("({[]})")); // true
console.log(isBalanced("([)]"));   // false

/*--------------------------------------------------*/

console.log('day135 ended');
