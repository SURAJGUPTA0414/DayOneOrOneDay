console.log('day16 started');

//1
// Swap Two Variables Using XOR Operator Only
// function swap(a, b) {
//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;

//     // don't change below code
//     console.log('a value is =', a);
//     console.log('b value is =', b);
// }

//2
// Check if an Array is Sorted

// function isSorted(arr) {


//     for (let i = 0; i < arr.length - 1; i++) {
//     //left vala bada hua to false else true
//         if (arr[i] > arr[i + 1]) {
//             return false; 
//         }
//     }
//     return true;
  
// }

//3
// Check whether a number is power of 2
// function isPowerofTwo(n)
// {
//   let x;
//   for (let i = 1; i*i <= n ; i++){
   
//     // console.log(i * i)
//   x = i*i
//   }
//   if (x === n) {
//     return 'YES'
//   } else {
//     return 'NO'
//   }

//     }
    
    //4
    // Remove duplicate characters
//     var removeDuplicates = function (s) {
//     let x = s.split('');
//     // let y = x.filter((a) => x.indexOf(a) !== x.lastIndexOf(a));
//     return([...new Set(x)].join(''))
    
// };

//5

// class Solution {
//     /**
//      * Function to check if two numbers have opposite signs.
//      * @param {number} a - The first integer.
//      * @param {number} b - The second integer.
//      * @return {boolean} True if they have opposite signs, otherwise False.
//      */
//     haveOppositeSigns(a, b) {
//         // Implementation here
//       return a * b < 0;
        
//     }
// }


console.log('day 16 ended');