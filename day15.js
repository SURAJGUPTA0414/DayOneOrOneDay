console.log('day 15 started');
//1
// Remove Duplicates from a Sorted Array

// class Solution {
//     /**
//      * Removes duplicates from a sorted array in-place.
//      *
//      * @param {number[]} nums - A sorted array of integers.
//      * @returns {number} - The length of the modified array with unique elements.
//      */
//     removeDuplicates(nums) {
//         // Your logic here

//         let x = ([...new Set(nums)]);
//           x.map((x)=>console.log(x))
        
//     }
// }

//2

// First Non-Repeating Character in a String

// /**
//  * @param {string} s
//  * @return {string | number} The first non-repeating character or '' an empty string if all characters repeat.
//  */
// var firstNonRepeatingCharacter = function (s) {
//     let x = s.split('');

//     let ff = x.filter((a) => x.indexOf(a) === x.lastIndexOf(a))
//     console.log((ff.length === 0) ? 'Nothing' : ff[0])
  
// };

//
//3
// Find Unique Number in an Array using XOR
// var unique_element = function (arr) {
//     let x = arr.filter((a) => arr.indexOf(a) === arr.lastIndexOf(a));
//     return(x[0])
    
// };

//4
// Find Missing Number in an Array using XOR

// var missing_element = function (arr) {
//     let nummising = [...arr];
//     let N = arr.length + 1;

//     // Push numbers from 1 to N into the array
//     for (let i = 1; i <= N; i++) {
//         nummising.push(i);
//     }

//     // Find the number that appears only once
//     let x = nummising.filter((a) => nummising.indexOf(a) === nummising.lastIndexOf(a));
//     return x[0];
// };

//5
// Check If Array Has Duplicates

// class Solution {
//     /**
//      * Function to check if an array contains duplicates.
//      * @param {number[]} arr - The input array of integers.
//      * @returns {boolean} - True if duplicates exist, otherwise False.
//      */
//     hasDuplicates(arr) {
//         //   Implement here
//         if (arr.length == [...new Set(arr)].length) {
//         return false
//         } else {
//         return true
//       }
//     }
// }


console.log('day 15 ended');