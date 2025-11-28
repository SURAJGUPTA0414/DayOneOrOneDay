console.log("Day 41 started");

//1
// Reverse a string without using built-in methods

// function reverse(str){
//     let reverse = []
//     for(let i=str.length-1;i>=0;i--){
//         reverse.push(str[i])
//     }
//     console.log(reverse.join(''))
// }

// reverse('suraj')

//2
// Find the largest and smallest number in an array

// function largestandsmallest(arr){
// let max  = Math.max(...arr)
// let min  = Math.min(...arr)

// console.log('Max',max,' ','Min',min)
    
// }

// largestandsmallest([3, 7, 2, 9])

//3
// Check if two strings are anagrams

// function anagram(str1,str2){
//     if(str1.split('').sort().join('') === str2.split('').sort().join('')){
//         console.log('anagram')
//     }else{
//         console.log('not anagram')
//     }
    
// }

// anagram('listen','silent');
// anagram('suraj','shyam');

//4
// Find the Fibonacci sequence up to N terms

// function fibonaccie(n){
//     let fibbo = [0,1];
    
//     for(let i=2;i<=n;i++){
        
//         let x = fibbo[fibbo.length-1]+fibbo[fibbo.length-2];
//         fibbo.push(x)
        
        
//     }
    
//     console.log(fibbo)
    
// }

// fibonaccie(14)

//5
// Remove duplicates from an array


// function removeduplicate(arr){
//     console.log([...new Set(arr)])
    
// }
// removeduplicate([1, 2, 2, 3, 4, 4])



console.log("Day 41 ended");