console.log("Day 48 started");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// level1


//1
// Reverse a String

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// reversestr('suraj')

//2
// Check if a Number is Prime

// function prime(n){
//     let flag = false;
    
//     for(let i=2;i<n;i++){
//         if(n%i === 0){
//             flag = true;
//             break;
//         }
//     }
//     if(flag){
//         console.log('not prime')
//     }else{
//         console.log('prime')
//     }
// }

// prime(7)
// prime(10)

//3
// Count Vowels in a String

// function countvowel(str){
    
//     console.log(str.match(/[aeiou]/gi).length)
    
// }
// countvowel('suraj')

//4
// Find Largest Number in Array

// function findlargest(arr){
//     console.log(Math.max(...arr))
// }

// findlargest([1,10,2])

//5
// Remove Duplicates From Array
// function removedup(arr){
//     console.log([...new Set(arr)])
    
// }

// removedup([1,1,2,3,3,4])

//6
// Check if Two Strings are Anagrams

// function anagram(str1,str2){
//     if(str1.split('').sort().join('') === str2.split('').sort().join('')){
//         console.log('anagram',true)
//     }else{
//         console.log('not anagrma',false)
//     }
// }

// anagram("listen", "silent")

//7
// FizzBuzz (Common in Infosys + Wipro)

// Print 1–N replacing

// multiples of 3 → "Fizz"

// multiples of 5 → "Buzz"

// multiples of both → "FizzBuzz"

// function fizzbuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3 ===0 && i%5 ===0){
//             console.log('FizzBuzz')
//         }else if(i%3 ===0){
//             console.log('Fizz')
//         }else if(i%5 === 0){
//              console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzbuzz(20)

//8
// Find Second Largest Number

// function secondlargest(arr){
//     let x = arr.sort((a,b)=>a-b)
//     console.log(x[x.length-2])
// }

// secondlargest([1,4,8])

//9
// Reverse Words in a Sentence

// function reverseword(word){
//     console.log(word.split(' ').reverse().join(' '))
// }

// reverseword('i love js')

//10
// Check Palindrome String

// function palindrom(str){
//     if(str === str.split('').reverse().join('')){
//         console.log(true,'palindrome')
//     }else{
//           console.log(false,'not palindrome')
//     }
// }

// palindrom('madam')
// palindrom('suraj')

//11

// Longest Word in a Sentence

// function longestwordinsent(str){
//     let x = str.split(' ');
//     let lengthofeach = [];
    
//     for(let dd of x){
//         lengthofeach.push(dd.length)
//         console.log(dd)
//     }
//     console.log(lengthofeach);
    
//     let ff = x.filter((x)=>x.length === Math.max(...lengthofeach))
//     console.log(ff[0])
// }

// longestwordinsent('i love sana')

//12

// 1️⃣2️⃣ Find Missing Number in Sequence

// function findmissingnuminseq(arr){
    
//     let x = [...arr]
    
//     for(let i=1;i<=Math.max(...arr)+1;i++){
//         x.push(i)
//         // console.log(i)
//     }
    
//     let ff = x.filter((a)=>x.indexOf(a) === x.lastIndexOf(a));
//     console.log(ff[0])
// }

// findmissingnuminseq([1,2,3,5])

//13
// Flatten Nested Array (Important for Cognizant)

// function flateanarray(arr){
//     let x = arr.flat(Infinity);
//     console.log(x)
// }

// flateanarray([1, [2, [3, 4]], 5])


//14
// Frequency Count of Characters

// function frequencycountoreachchar(str){
//     let x = str.split('')
//     let obj= {}
    
//     for(let dd of x){
//         if(obj[dd]){
//             obj[dd] = obj[dd]+1
//         }else{
//             obj[dd] = 1
//         }
//     }
//     console.log(obj)
// }

// frequencycountoreachchar('banana')


//15
// Find First Non-Repeating Character

function firstnonrepeatingcharacter(str){
    let x = str.split('');
    
    let y = x.filter((a)=>x.indexOf(a) === x.lastIndexOf(a));
    console.log(y[0])
    
    
}

firstnonrepeatingcharacter('aabbcdd')


console.log("Day 48 ended");