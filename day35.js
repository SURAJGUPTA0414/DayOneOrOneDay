console.log('Day 35 started');
// 1. Reverse a String

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))

// }

// reversestr('suraj')

//2
// 2. Palindrome Check

// function palindrome(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }

// }

// palindrome('palindrome')
// palindrome('madam')

//3
// 3. Find Largest Number in an Array

// function largestnum(arr){
//     console.log(Math.max(...arr))
// }
// largestnum([1,4,2,8,3,0,5])

//4
// 4. Sum of Digits

// function sumofdigits(num){
//     let sum = 0;
//     let strnum = num.toString();    
//     for(let x of strnum){
//         sum += Number(x)
//     }
//     // console.log(sum)
//     if(sum > 9){   //estra logic
//         sumofdigits(sum)
//     }

// }
// sumofdigits(12345)

//5

// 5. Factorial of a Number

// function factorial(n){
//     let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact = fact * i
//     }
//     console.log(fact)
// }
// factorial(5);

console.log('day 35 ended');