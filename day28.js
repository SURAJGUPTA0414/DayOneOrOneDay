console.log('day 28 started');
//1
// Write a function to reverse a string without using built-in reverse.

// function reversestrwithoutinbuilt(str){
//     let revereName = []
//     for(let i=str.length-1;i>=0;i--){
//         revereName.push(str[i])
//     }
//     console.log(revereName.join(''))
// }

// reversestrwithoutinbuilt('slsl')


//2

// Find the maximum occurring character in a string.

// function maxoccurechsr(str){
//     let x = str.split('');
//     // let dd = x.filter((a)=>x.indexOf(a)!==x.lastIndexOf(a));
//     // console.log(dd)
//     let obj = {}
//     for(let xx of x){
//         if(obj[xx]){
//             obj[xx] = obj[xx]+1
//         }else{
//             obj[xx] =1
//         }
//     }
//     let maxvalue = Math.max(...Object.values(obj));
//     let key = Object.keys(obj).find(key => obj[key] === maxvalue);
//     console.log('max occure char is :',key)
    
// }
// maxoccurechsr('skkkkkjfjsnkfjss')

//3
// Given an array, check if it is sorted in ascending order.

// function isSorted(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false; // found a violation
//     }
//   }
//   return true; // no violations
// }

// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 3, 2, 4])); // false


//4
// Find factorial of a number

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }       
//     return n * factorial(n - 1);
// }       
// console.log(factorial(9));
//5
// Check if two strings are anagrams

function areAnagrams(str1, str2) {
  
    const normalize = str => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
   
    return normalize(str1) === normalize(str2);
}        

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false


console.log('day 28 ended done');
