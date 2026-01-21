console.log('day95 started');

/*--------------------------------------------------*/
// 1. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  let words = str.split(' ');
  let result = [];

  for (let w of words) {
    result.push(w.charAt(0).toUpperCase() + w.slice(1));
  }

  return result.join(' ');
}

console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"

/*--------------------------------------------------*/
// 2. Find First Repeating Character
function firstRepeatingChar(str) {
  let seen = new Set();

  for (let ch of str) {
    if (seen.has(ch)) {
      return ch;
    }
    seen.add(ch);
  }

  return null;
}

console.log(firstRepeatingChar("abca"));
// "a"

/*--------------------------------------------------*/
// 3. Remove Falsy Values from Array
function removeFalsyValues(arr) {
  let result = [];

  for (let item of arr) {
    if (item) {
      result.push(item);
    }
  }

  return result;
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null]));
// [1, 2, 3]

/*--------------------------------------------------*/
// 4. Find Second Largest Number in Array (without sort)
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

console.log(secondLargest([10, 5, 20, 8]));
// 10

/*--------------------------------------------------*/
// 5. Check if String is Palindrome
function isPalindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed = cleanStr.split('').reverse().join('');

  return cleanStr === reversed;
}

console.log(isPalindrome("A man a plan a canal Panama"));
// true

console.log('day95 ended');
