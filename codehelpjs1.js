// Write a function that takes two numbers as arguments and returns their sum

// function sum(a,b){
//     return a+b
// }
// let x = sum(2,3);
// console.log(x)

// Write a function that takes a string as an argument and returns its length.

// function strlength(str){
//     return str.length
// }

// let x= strlength('suraj');
// console.log(x)

// Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// function shodetail(a,b){
//     let sum = a+b;
//     let diff = a-b;
//     let prd = a*b;
//     let qution = a/b
    
//     console.log(sum, diff, prd, qution)
    
// }
// shodetail(2,3);

// Write a function that takes two numbers as arguments and returns the larger number.


// function largenumber(a,b){
//     if(a>b){
//         console.log(a)
//     }else{
//         console.log(b)
//     }
// }

// largenumber(44,66)

// Write a program that displays a string in reverse order.

// function reversestr(str){
//     return str.split('').reverse().join('')
    
// }
// let x = reversestr('suraj');
// console.log(x)


// Write a program that takes a number and checks whether it is positive, negative, or zero.

// function checkposnegzero(n){
//     if(n>0){
//         console.log('positive')
//     }else if(n<0){
//         console.log('negative')
//     }else{
//         console.log('zero')
//     }
// }

// checkposnegzero(-1.4)


// Write a program that takes a number and prints the multiplication table for that number.

// function multTable(n){
//     for(let i=1;i<=10;i++){
//         console.log(i*n)
//     }
// }
// multTable(9)

// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function sumnumber(n){
//     let sumofnum = 0;
    
//     for(let i=1;i<=n;i++){
//         sumofnum = sumofnum + i
//     }
//     console.log(sumofnum)
// }

// sumnumber(5)

// Write a program that takes a string and prints out the number of vowels in the string.


// function numvowe(str){
//     let vowelinstr = str.match(/[aeiou]/gi);
//     console.log(vowelinstr.length)
    
// }
// numvowe('suraj')


// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

function last(one,two){
    
    let x = [...one,...two];
    console.log(x);
    
    let gg = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a))
    console.log([...new Set(gg)])
    
    
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

last(arr1,arr2)

