console.log('Day 57 started');


// level1

//1
// Reverse a String
// function reversestr(str){
//     // your code here
//     let reverse = [];

//     for(let x of str){
//         reverse.unshift(x);     
//     }
//     console.log(reverse.join(''))
// }
// reversestr('suraj')

//2
// Check if a Number is Prime
// function prime(n){
//     // your code here

//     let flag = false;

//     for(let i=2;i<n;i++){
//       if(n%i === 0){
//           flag = true;
//           break;
//       }
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
function countvowel(str){
    // your code here
    // let vowels = str.match(/[aeiou]/gi);

    let count = 0;
    for(let char of str){
        if('aeiouAEIOU'.includes(char)){
            count++;
        }
    }
    console.log(count);
}
countvowel('suraj')

//4
// Find Largest Number in Array
function findlargest(arr){
    let max = arr[0];

    for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
        max = arr[i];
       }
    }
        
        console.log(max);
}
findlargest([1,10,2])

//5
// Remove Duplicates From Array
function removedup(arr){
    // your code here
    let unique = [];

    for(let x of arr){
        if(!unique.includes(x)){
            unique.push(x);
        }
    }
    console.log(unique);
}
removedup([1,1,2,3,3,4])

//6
// Check if Two Strings are Anagrams
function anagram(str1,str2){
    // your code here
    if(str1.split('').sort().join('') === str2.split('').sort().join('')){
        console.log('anagram',true)
    }else{
        console.log('not anagram',false)
    }
}
anagram("listen", "silent")



//8
// Find Second Largest Number
function secondlargest(arr){
    // your code here
    console.log([...new Set(arr)].sort((a,b)=>b-a)[1])
}
secondlargest([1,4,8])

//9
// Reverse Words in a Sentence
function reverseword(word){
    // your code here
    console.log(word.split(' ').reverse().join(' '))
}
reverseword('i love js')

//10
// Check Palindrome String
function palindrom(str){
    // your code here
    if(str === str.split('').reverse().join('')){
        console.log('palindrome')
    }
}
palindrom('madam')
palindrom('suraj')

//11
// Longest Word in a Sentence
function longestwordinsent(str){
    // your code here
    console.log(str.split(' ').reduce((a,b)=> a.length>=b.length ? a : b))
}
longestwordinsent('i love sana')

//12
// Find Missing Number in Sequence
function findmissingnuminseq(arr){
    // your code here
    console.log(((arr.length + 1)*(arr.length + 2))/2 - arr.reduce((a,b)=>a+b,0))
}
findmissingnuminseq([1,2,3,5])

//13
// Flatten Nested Array
function flateanarray(arr){
    // your code here
    // console.log(arr.flat(Infinity));
    let x = arr.toString().split(',');
    console.log(x.map(Number));
    

}
flateanarray([1, [2, [3, 4]], 5])

//14
// Frequency Count of Characters
function frequencycountoreachchar(str){
    // your code here
let freq = {};

for(let ch of str){
    if(freq[ch]){
        freq[ch]++;
    }else{
        freq[ch] = 1;
    }   

}       
console.log(freq);



}
frequencycountoreachchar('banana')

//15
// Find First Non-Repeating Character
function firstnonrepeatingcharacter(str){
    // your code here
    console.log(str.split('').find((a)=>str.indexOf(a) === str.lastIndexOf(a)));
}
firstnonrepeatingcharacter('aabbcdd')

