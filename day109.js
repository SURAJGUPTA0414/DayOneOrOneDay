console.log('day109 started');

/*--------------------------------------------------*/
// 1️⃣ Check if Number is Palindrome
// Input: 121
// Output: true

function isPalindromeNumber(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return original === reversed;
}

console.log(isPalindromeNumber(121)); // true
console.log(isPalindromeNumber(123)); // false

/*--------------------------------------------------*/
// 2️⃣ Sum of Digits of a Number
// Input: 123
// Output: 6

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(123)); // 6

/*--------------------------------------------------*/
// 3️⃣ Check if Number is Prime

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

/*--------------------------------------------------*/
// 4️⃣ Move All Zeros to End of Array
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

/*--------------------------------------------------*/
// 5️⃣ Find First Non-Repeating Element
// Input: [1,2,2,3,3,4]
// Output: 1

function firstNonRepeating(arr) {
  let freq = {};

  for (let val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }

  for (let val of arr) {
    if (freq[val] === 1) {
      return val;
    }
  }

  return null;
}

console.log(firstNonRepeating([1, 2, 2, 3, 3, 4]));





console.log('day109 ended')