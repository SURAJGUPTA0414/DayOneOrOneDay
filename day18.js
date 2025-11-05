console.log("Day 18");

//1
// Find the Intersection of Two Sorted Arrays
// class Solution {
//     findIntersection(nums1, nums2) {
//         let x = [...nums1, ...nums2];
//         let y = x.filter((a) => x.indexOf(a) !== x.lastIndexOf(a));
//         return [([...new Set(y)].join(' '))]; // Placeholder for function implementation
//     }
// }

//2
// Multiply a Number by 7 Without Using Multiplication

// class Solution {
//     /**
//      * Function to multiply a number by 7 using bitwise operations.
//      * @param {number} N - The input integer.
//      * @return {number} - The result of N * 7.
//      */
//     multiplyBySeven(n) {
//         // Implementation here
//          return (n << 3) - n
//     }
// }

//3
// Leaders in an array

// var leaders = function (arr) {
 
//     let leaders = [];

//     for (let i = 0; i <= arr.length-1 ; i++){
    
//         let current = arr[i];
//         let rest = arr.slice(i + 1);
//         // console.log(current, rest)
//         if (current > Math.max(...rest)) {
//             leaders.push(current)
//         }
//     }
// return(leaders)
    
// };

//4

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var countOnes = function (arr) {
    
   
//     let count = 0
//     let streak = 0;

//     for (let i = 0; i <= arr.length-1; i++){
//         // console.log(arr[i])
//         if (arr[i] === 1) {
//             count++
//             if (count > streak) {
//                 streak = count
//             }
//         } else {
//             count = 0
//         }
//     }
//     return streak

    
// };

//5
// Problem Statement:

// Given a sorted array of integers and a target value, your task is to implement binary search to determine whether the target value exists in the array or not.

// If it exists return it's index else return -1

// var search = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             return i; // return index directly
//         }
//     }
//     return -1; // if not found
// };

console.log("Day 18 ended done");