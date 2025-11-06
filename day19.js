console.log("Day 19 started");

//1

// Search Insert Position


// Share
// Array
// Binary Search
// Problem Statement:

// Given a sorted array of integers and a target value, your task is to find the index where the target value should be inserted into the array to maintain its sorted order. If the target value is already present in the array, return its index. If the target value is not present in the array, return the index where it should be inserted.


// var insertPosition = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length; // If target is greater than all elements
// };

//2
// Count Digits

// function countDigits(n) {
//     let count = 0;
//     while(n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }
//     console.log(count);
// }

//3
// Print Digits in Reverse
// function printDigitsReverse(n) {
//     while (n > 0) {
//         console.log(n % 10);
//         n = Math.floor(n / 10);
//     }
// }
// printDigitsReverse(123);

//4
// Count Even and Odd Digits

// function countEvenOddDigits(n) {
//     let even = 0, odd = 0;
//     while (n > 0) {
//         let digit = n % 10;
//         if (digit % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//         n = Math.floor(n / 10);
//     }
//     console.log("Even:", even);
//     console.log("Odd:", odd);
// }
// countEvenOddDigits(12345);

//5
// Sum of Digits

function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}
sumOfDigits(123);



console.log("Day 19 ended correctly");