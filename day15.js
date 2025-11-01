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

/**
 * @param {string} s
 * @return {string | number} The first non-repeating character or '' an empty string if all characters repeat.
 */
var firstNonRepeatingCharacter = function (s) {
    let x = s.split('');

    let ff = x.filter((a) => x.indexOf(a) === x.lastIndexOf(a))
    console.log((ff.length === 0) ? 'Nothing' : ff[0])
  
};

//3

// Find Missing Number in an Array using XOR



console.log('day 15 ended');