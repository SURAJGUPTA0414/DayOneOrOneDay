console.log('day 12 started');

//1
// First and Last Occurence of Element
// var element_search = function (nums, target) {
//     let x1 = nums.indexOf(target)
//     let x2 = nums.lastIndexOf(target)

//      return [x1,x2]
    
// };

//2
// Check for Perfect Number (Sum of Divisor =

// function isPerfectNumber(n) {
//     let sum = 0;

//     for (let i = 1; i < n; i++){
//         if (n % i === 0) {
//             sum = sum + i
//         }
//     }
//     if (n === sum) {
//         return true
//     } else {
//         return false
//     }

// }

//4 Nth Fibonacci number

// /**
//  * @param {number} n - a positive integer
//  * @return {number}
//  */
// var fibonacciNumber = function (n) {
//     let x = [0, 1];

//     for (let i = 2; i < n;i++) {
//          let fibo = x[x.length - 1] + x[x.length - 2]
// // console.log(fibo)
//     x.push(fibo);
//     }

   
//  return (x[n-1])
    
// };

// Length of Last Word

// var lastWordLength = function (s) {

//     let x = s.trim().split(' ')
//      return (x[x.length - 1].length)
// };

//5
// Find the Second Largest Element
// class SecondLargest {
//     /**
//      * Finds the second largest element in an array.
//      * 
//      * @param {number[]} arr - The input array of integers.
//      * @returns {number} The second largest integer in the array, or -1 if not found.
//      */
//     findSecondLargest(arr) {
        
//         let x = [... new Set(arr.sort((a, b) => a - b))];
//         if(x.length === 1) return -1
//         return (x[x.length - 2])
        
     
//     }
// }

console.log('day 12 ended');