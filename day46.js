console.log("day 46 started");

//1

// Count Vowels in a String (Without using regex)

// function countvowel(str){
//     let x = str.match(/[aeiou]/gi);
//     console.log('vowel count is',x.length)
// }
// countvowel('suraj')

//2
//  7. Remove Duplicates from an Array (Without using Set)

// function removedupwithoutset(arr){
    
//     let unique = [];
    
//     for(let x of arr){
//         if(!unique.includes(x)){
//             unique.push(x)
//         }
//     }
//     console.log(unique)
    
// }
// removedupwithoutset([1,3,2,4,5,2])

//3
// Find Factorial of a Number (Without recursion)

// function factorial(n){
//     let fact = 1;
//     for(let i=1;i<=n;i++){
//         fact = fact*i
//     }
//     console.log(fact)
// }
// factorial(5)

//4
//  9. Find the Longest Word in a Sentence

// function longestwordinsentence(str){
//     let xx = str.split(' ');
    
//     let max = []
//     for(let x of xx){
//         max.push(x.length)
//     }
//     console.log(max)
    
//     let ff = xx.filter((x)=> x.length === Math.max(...max));
//     console.log(ff[0]);
// }
// longestwordinsentence('suraj is doing good')
// longestwordinsentence('suraj is doing good sjdsdhbshfbhs')

//5
//  10. Check if Two Strings are Anagrams (Without sorting)

function anagram(str1,str2){
    if(str1.split('').sort().join('') === str2.split('').sort().join('')){
        console.log('anagram')
    }else{
        console.log('not anagram')
    }
}

anagram('listen','silent');
anagram('suraj','shyam')


console.log("day 46 ended");