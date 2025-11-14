console.log('day27 started')

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
/*Flatten a Nested Array*/

// Example: [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]

//1
// function Flattennested(arr){
//     console.log(arr.flat(Infinity))
// }

// Flattennested([1, [2, [3, 4]], 5])

//2
// Remove Duplicates from an Array

// [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]

// function removeduplicate(arr){
//     let removedup= [...new Set(arr)]
    
//     console.log(removedup)
    
// }

// removeduplicate([1, 2, 2, 3, 4, 4])

//3
// Find the First Non-Repeating Character

// Example: "swiss" → "w"

// function firstnonrepeating(str){
    
//     let x = str.split('').filter((a)=>str.split('').indexOf(a) === str.split('').lastIndexOf(a))
    
//     console.log(x[0])
    
// }
// firstnonrepeating('shyansss')

//4
// Reverse Words in a String

function reverseWords(str) {
    let reversed = str.split(' ').reverse().join(' ');
    console.log(reversed);
}

reverseWords("Hello World");


//5
// 5. Count Occurrences of Each Character

function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
        if(charCount[char]){
            charCount[char] = charCount[char] + 1
        }else{
            charCount[char] =1
        }
        
    
}
console.log(charCount);
}

countCharacters("programming");


console.log('day27 ended done')