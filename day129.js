console.log('day129 started');




/*--------------------------------------------------*/
// 1️⃣ Find the Largest Element in an Array
// Input: [4, 10, 2, 8]
// Output: 10

function findLargest(arr) {
  return Math.max(...arr);
}

console.log(findLargest([4, 10, 2, 8]));


/*--------------------------------------------------*/
// 2️⃣ Reverse a String
// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));


/*--------------------------------------------------*/
// 3️⃣ Check if a Number is Prime
// Input: 7
// Output: true

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));


/*--------------------------------------------------*/
// 4️⃣ Find Duplicate Elements in Array
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

  return [...duplicates];
}

console.log(findDuplicates([1,2,3,2,4,1]));


/*--------------------------------------------------*/
// 5️⃣ Find the Factorial of a Number
// Input: 5
// Output: 120

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));


/*--------------------------------------------------*/




console.log('day129 ended');