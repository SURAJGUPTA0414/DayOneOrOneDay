// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
//1
// First Duplicate Element

// function findFirstDuplicateElement(arr, length) {
//         let duplicate = arr.filter((a)=>arr.indexOf(a) !== arr.lastIndexOf(a))
//         return duplicate[0]

//     }
    
//   let x = findFirstDuplicateElement([2,4,5,7,4,8])
//   console.log(x)

//2
// Find unique value
// function findUniqueMagicalKey(arr, length) {
//      let duplicate = arr.filter((a)=>arr.indexOf(a) === arr.lastIndexOf(a))
       
//     if(duplicate.length !== 0) {
    
              
//     console.log(duplicate[0]);
//     } else {
//         console.log(-1)
//     }
  
//     }
    
//     findUniqueMagicalKey([2,4,5,7,4,8])

//3
// Reverse a String (Character by Character)

// /**
//  * Function to reverse a string by iterating over each character.
//  * @param {string} str - The input string that needs to be reversed.
//  * @returns {string} - The reversed string.
//  */
// function reverseString(str) {
//     // Write your code here
//     return(str.split('').reverse().join(''))
// }

//4

// Fetch the Last Digit of a Number
// function getLastDigit(num) {
//     let x = num.toString().split('')
//     return x[x.length-1]
//     // Write your code here
// }

//5
// Ternary Operator for Maximum of Three

function findMaximum(num1, num2, num3) {
    // Write your code here using ternary operator to find the maximum

    let x = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2>num3?num2:num3)
    console.log(x)
}

findMaximum(2,55,6)