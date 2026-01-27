console.log("day101 started");

/*--------------------------------------------------*/
// 1️⃣ Reverse a String
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  // write your logic here
  return str.split('').reverse().join('')
}

console.log(reverseString("hello"));

/*--------------------------------------------------*/
// 2️⃣ Check Palindrome
// Input: "madam"
// Output: true

function isPalindrome(str) {
  // write your logic here
  if(str === str.split('').reverse().join('')){
    return true
  }else{
    return false
  }
}

console.log(isPalindrome("madam"));

/*--------------------------------------------------*/
// 3️⃣ Find Maximum Number in Array
// Input: [3, 7, 1, 9, 4]
// Output: 9

function findMax(arr) {
  // write your logic here
  return Math.max(...arr)
}

console.log(findMax([3, 7, 1, 9, 4]));

/*--------------------------------------------------*/
// 4️⃣ Count Vowels in a String
// Input: "javascript"
// Output: 3

function countVowels(str) {
  // write your logic here
  let Vowels = str.match(/[aeiou]/gi)
  return Vowels.length
}

console.log(countVowels("javascript"));

/*--------------------------------------------------*/
// 5️⃣ Remove Duplicates from Array
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  // write your logic here
  return [...new Set(arr)]
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/*--------------------------------------------------*/
console.log("day101 ended");
