console.log('day78 started');



//1

// function reverseWords(sentence) {
//     return sentence.replace(/\S+/g, word =>
//         word.split('').reverse().join('')
//     );
// }

// module.exports = reverseWords;


//2
//sum of n natural number
// function sumN(n) {
//   // reject invalid inputs
//   if (
//     typeof n !== 'number' ||
//     n < 0 ||
//     !Number.isInteger(n)
//   ) {
//     return false;
//   }

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// module.exports = { sumN };

//3
// make counter
// function makeCounter(initialValue = 0) {
//     let count = initialValue;          // current value
//     const startValue = initialValue;   // store initial value for reset

//     return {
//         increment() {
//             count++;
//             return count;
//         },
//         decrement() {
//             count--;
//             return count;
//         },      
//         reset() {
//             count = startValue;
//             return count;
//         }
//     };
// }

// module.exports = makeCounter;

//4
// power on two

// function isPowerOfTwo(n) {
//   if (n <= 0) return false;

//   while (n > 1) {
//     n = n / 2;
//   }

//   return n === 1;
// }

// module.exports = { isPowerOfTwo };

//5
// power of four
function isPowerOfFour(n) {
  if (n <= 0) return false;

  while (n > 1) {
    n = n / 4;
  }

  return n === 1;
}

module.exports = { isPowerOfFour };


























console.log('day78 ended')