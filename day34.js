console.log('day 34 started');
//1

// fibonacci series

// function fibonacii(n){
//     let fib = [0,1];
//      console.log("fib",fib)
//     for(let i=2;i<=n;i++){
//         x = fib[fib.length-1] + fib[fib.length-2];
//         fib.push(x)
     
//     }
//     console.log("fib",fib)
    
// }
// fibonacii(5)

//2
// Check for Anagrams

// function anagram(str1,str2){
//     if(str1.split('').sort().join('') === str2.split('').sort().join('') ){
//         console.log('anagram')
//     }else{
//         console.log('not anagram')
//     }
// }
// anagram('listen','silent');
// anagram('suraj','shyan')

//3
// Count Occurrences of Each Character

// function countOccurence(str){
//     let obj = {};
    
//     for(let x of str){
//         if(obj[x]){
//             obj[x] = obj[x]+1
//         }else{
//             obj[x] = 1
//         }
//     }
//     console.log(obj)
// }

// countOccurence('surajbhai')

//4
//  FizzBuzz (Classic Logic Test)

// Question:
// Print numbers 1 to 50.

// If divisible by 3 → print "Fizz"

// If divisible by 5 → print "Buzz"

// If divisible by both → "FizzBuzz"

function fizbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3 === 0 && i%5 === 0){
            console.log('FizzBuzz');
        }else if(i%3 === 0){
            console.log('Fizz');
        }else if(i%5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}

fizbuzz(50)

//5
// Find the Missing Number in an Array

// function findmissingnum(arr){
//     console.log(arr);
//     let x = [...arr]
//     for(let i=1;i<=Math.max(...arr)+1;i++){
//         console.log(i);
//         x.push(i)
//     }
//     console.log(x);
    
//     let ff = x.filter((a)=>x.indexOf(a)===x.lastIndexOf(a));
//     console.log(ff)
// }

// findmissingnum([1,4,2,4])

console.log('day 34 ended')