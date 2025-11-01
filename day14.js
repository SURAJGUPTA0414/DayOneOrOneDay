console.log('day14 started');

//1
// Intersection of two arrays
// var intersection = function (nums1, nums2) {

//     let x1 = [... new Set(nums1)]

//     let x2 = [... new Set(nums2)]

//     let x = [...x1, ...x2];

//     let ff = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a))

//     let hh = [...new Set(ff)]
//    return hh
// };

//2
// Move All Zeroes to the End of an Array

// moveZeroesToEnd(arr) {
//       // Write your code here
//       let x = [];

//       for (let i = 0; i <= arr.length - 1; i++){
       
//         if (arr[i] > 0) {
//           x.push(arr[i])
//         }
        
//       }

//       for (let i = 0; i <= arr.length - 1; i++){
        
//       if (arr[i] === 0) {
//           x.push(arr[i])
//         }
        
//       }
      
//       return x
      
//     }
// }

//3
// Question: Remove Duplicates from a String
// function removeDuplicates(s) {
//       let x = [...new Set(s.split(''))]
//      return x.join('')
// }

//4
// Check for Palindrome Array

// class Solution {
//     /**
//      * Checks if the given array is a palindrome.
//      * @param {number[]} nums - Array of integers.
//      * @returns {string} - "YES" if the array is a palindrome, otherwise "NO".
//      */
//     isPalindrome(nums) {

//         if (nums.join('') === nums.reverse().join('')) {
//             return 'YES'
//         } else {
//             return 'NO'
//         }

//     }
// }

//5
// Find the Most Frequent Element in an Array


// class Solution {
//     /**
//      * Function to find the most frequent element in an array.
//      * @param {number[]} arr - The input array of integers.
//      * @returns {number} - The element with the highest frequency.
//      */
//     mostFrequentElement(arr) {
//         // Implement logic here
//         if (arr.length === 1) return arr[0]
//           if(arr.length === 0) return -1
//         let x = arr.filter((a) => arr.indexOf(a) !== arr.lastIndexOf(a));

//         let obj = {};
//         let x1= []

//         for (let i of x) {
//             if (obj[i]) {
//                 obj[i] = obj[i] + 1
//             } else {
//                 obj[i] = 1
//             }
            
//         }

//         for (let ff in obj) {
//             x1.push(obj[ff])
           
            
//         }
//         let hh = Math.max(...x1)

//         const key = Object.keys(obj).find(key => obj[key] === hh);

//         return key
      
        

//     }
// }





console.log('day 14 ended');