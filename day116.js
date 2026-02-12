console.log('day116 started');

/*--------------------------------------------------*/
// 1️⃣ Find Frequency of Characters in String
// Input: "javascript"
// Output: { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }

function charFrequency(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(charFrequency("javascript"));

/*--------------------------------------------------*/
// 2️⃣ Find Sum of All Digits in a Number
// Input: 12345
// Output: 15

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(12345)); // 15

/*--------------------------------------------------*/
// 3️⃣ Check if Array Contains Duplicate
// Input: [1,2,3,4,1]
// Output: true

function containsDuplicate(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

console.log(containsDuplicate([1,2,3,4,1])); // true

/*--------------------------------------------------*/
// 4️⃣ Find All Even Numbers from Array
// Input: [1,2,3,4,5,6]
// Output: [2,4,6]

function findEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([1,2,3,4,5,6]));

/*--------------------------------------------------*/
// 5️⃣ Capitalize First Letter of Each Word
// Input: "frontend developer interview"
// Output: "Frontend Developer Interview"

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("frontend developer interview"));

/*--------------------------------------------------*/

console.log('day116 ended');
