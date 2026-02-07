console.log('day112 started');

/*--------------------------------------------------*/

// Input: "I love JavaScript"
// Output: "JavaScript love I"

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("I love JavaScript"));

/*--------------------------------------------------*/

// Input: 5
// Output: 120

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

/*--------------------------------------------------*/

// Input: 7
// Output: true

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

/*--------------------------------------------------*/

// Input: [1,2,4,5], n = 5
// Output: 3

function findMissingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5], 5));

/*--------------------------------------------------*/

// Input: "javascript is awesome"
// Output: "Javascript Is Awesome"

function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("javascript is awesome"));

/*--------------------------------------------------*/






console.log('day112 ended');