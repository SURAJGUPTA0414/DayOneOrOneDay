console.log('day5 starts here');

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Write a program to print the maximum of two numbers using Ternary operator.



// Example:-

// Input:-

// a=3, b=5

// Output:-

// 5

// function ternary(a,b){
//     console.log(a>b?a:b);
// }

// ternary(1,4)

//2
// Check Equality of Arrays

// function checkArraysEquality(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//     return false
//     }


//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }
//     }
//     return true
    
// }
// checkArraysEquality()

//3
// count zeros
// var countZeros = function (nums) {
//     let matches = nums.toString().match(/0/gi);
//     return matches ? matches.length : 0;
// };

// console.log(countZeros(3030))

//4
// Missing number in array

// Examples:

// Input:

// Array: 9 6 4 2 3 5 7 0 1

// Output : 8

// Explanation: In the given array, the missing number is 8.

// var missingNumber = function (nums) {
//     // Sort the array
//     let sorted = nums.sort((a, b) => a - b);

//     // Create a full range from 0 to the highest number
//     let fullRange = [];
//     for (let i = 0; i <= nums.length; i++) {
//         fullRange.push(i);
//     }

//     // Combine both arrays
//     let combined = [...sorted, ...fullRange];

//     // Filter out numbers that appear only once (i.e., the missing one)
//     let missing = combined.filter(num => combined.indexOf(num) === combined.lastIndexOf(num));

//     // Return the missing number (as a number, not a string)
//     return Number(missing[0]);
// };

//5
// Hours into mintue and seconds
// function convertIntoMinutes(hours) {
//   return hours*60
    
// }

// // Function to get the remaining seconds
// function convertIntoSeconds(hours) {
// return hours*3600
// }

console.log('day5 end here');