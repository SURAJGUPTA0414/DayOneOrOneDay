console.log('day 9 started');


// Check Divisibility by 3 or 5 Using % Operator

// 
// Function to check divisibility by 3 or 5
// function checkDivisibility(num) {
//     // Write your code here: Check divisibility by 3 or 5
//     if (num % 3 === 0 || num % 5 === 0) {
//         console.log('Divisible')
//     } else {
//         console.log('Not Divisible')
//     }
// }

// checkDivisibility(10)


//2

// function checkPalindrome(str){
//     //write the code here. If a string is a palindrome .If the string is palindrome return true else false



//     //dont change the below code. If changed click on reset.

//     if (str === str.split('').reverse().join('')) {
//         return 'Yes'
//     } else {
//         return 'No'
//     }
   
// }

//3
// Ternary Operator for Maximum of Three




// function findMaximum(num1, num2, num3) {
//     // Write your code here using ternary operator to find the maximum

//     let x = (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2>num3?num2:num3)
//     return x
// }

//4
// Check Leap Year Using IF ELSE

// function checkYEAR(year){
//     //write the code here
//     if (year % 400 === 0) {
//     return true
//     } else if (year % 400 !== 0 && year % 100 === 0) {
//     return false
//     } else if (year % 100 !== 0 && year % 4 === 0) {
//     return true
//     } else {
//     return false
//   }
    
    
    
//     //dont change the below code. If changed click on reset.
   
// }



//5
// countVowels
// function countVowels(str) {

//     let x = str.match(/[aeiou]/gi)
//     return x.length

// }

console.log('day 9 ended');