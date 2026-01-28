console.log("day102 started");

/*--------------------------------------------------*/
// 6️⃣ Find Minimum Number in Array
// Input: [8, 3, 6, 2, 9]
// Output: 2

function findMin(arr) {
  // write your logic here
  return Math.min(...arr)
}

console.log(findMin([8, 3, 6, 2, 9]));

/*--------------------------------------------------*/
// 7️⃣ Count Occurrences of Each Character
// Input: "hello"
// Output: { h:1, e:1, l:2, o:1 }

function charCount(str) {
  // write your logic here
  let obj = {}

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1
  }

  return obj
}

console.log(charCount("hello"));

/*--------------------------------------------------*/
// 8️⃣ Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true

function isAnagram(str1, str2) {
  // write your logic here
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(isAnagram("listen", "silent"));

/*--------------------------------------------------*/
// 9️⃣ Find Sum of All Numbers in Array
// Input: [1, 2, 3, 4, 5]
// Output: 15

function sumArray(arr) {
  // write your logic here
  return arr.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]));

/*--------------------------------------------------*/
// 🔟 Find First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"

function firstNonRepeatingChar(str) {
  // write your logic here
  let count = {}

  for (let char of str) {
    count[char] = (count[char] || 0) + 1
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char
    }
  }
}

console.log(firstNonRepeatingChar("aabbcdd"));

/*--------------------------------------------------*/
console.log("day102 ended");
