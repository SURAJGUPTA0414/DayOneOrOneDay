console.log("Day 21 started");

//1
// Detect if Two Numbers Have Opposite Signs
// class Solution {
//     /**
//      * Function to check if two numbers have opposite signs.
//      * @param {number} a - The first integer.
//      * @param {number} b - The second integer.
//      * @return {boolean} True if they have opposite signs, otherwise False.
//      */
//     haveOppositeSigns(a, b) {
//         // Implementation here
       
//         let x = a * b;
//          if (x === 0) {
//             return false
//         }
//         if (x > 0) {
//             return false
//         } else {
//             return true
//         }
        
        
//     }
// }

//revision 
// 2
/// Count Vowels in a String
// Return the number of vowels (a, e, i, o, u) in the given string.

// function countVowels(str) {
//     // Your logic here
//     let x = str.match(/[aeiou]/gi);
//     console.log(x.length)
  
// }

// countVowels("hello world");

//3
// function secondLargest(arr) {
//     // Your logic here
//     let x = arr.sort((a,b)=>b-a)
//     console.log(x[1])
// }

// secondLargest([2,4,0,4,8])


//4
// function countChar(str) {
//     // Your logic here
//     let obj = {}
//     for(let x of str){
//         console.log(x)
//         if(obj[x]){
//             obj[x] = obj[x]+1
//         }else{
//             obj[x] = 1
//         }
//     }
//     console.log(obj)
// }

// countChar('surajksl')


//5
// Print Even Numbers in Reverse
// function printEvenNumbersInReverse(n) {
//     // For loop to print even numbers in reverse
//     let even = []
//     for (let i = 1; i <= n; i++){
//         if (i % 2 == 0) {
//             even.push(i)
//         }
//     }
//     let x = even.reverse()
//     for (let temp of x) {
//         console.log(temp)
//      }
  
// }

// printEvenNumbersInReverse(10)



console.log("Day 21 ended done");