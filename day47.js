console.log("Day 47 started");

// 1. Find the Missing Number in a Sequence (Without using sum formulas)

// Input: [1,2,3,5]

// Output: 4


// function findmissingnumber(arr){
//     let x = []
//     for(let i=1;i<=Math.max(...arr)+1;i++){
//         x.push(i)
        
//     }
//     let nums = [...arr,...x];
//     console.log(nums);
    
//     let missingnums = nums.filter((x)=>nums.indexOf(x) === nums.lastIndexOf(x));
//     console.log(missingnums[0])
    
    
// }
// findmissingnumber([1,2,3,4,5])

//2
// Check if Two Strings are Anagrams (Without sorting or built-ins)

// function sortAlphabet(str, str1) {
//     let arr = str.split('');
//     let arr1 = str1.split('');
    
//     // Bubble sort for arr
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
    
//     // Bubble sort for arr1
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1.length - i - 1; j++) {
//             if (arr1[j] > arr1[j + 1]) {
//                 let temp = arr1[j];
//                 arr1[j] = arr1[j + 1];
//                 arr1[j + 1] = temp;
//             }
//         }
//     }
    
//     // Return both results
//   if(arr.join('') === arr1.join('')){
//       console.log('anagram')
//   }else{
//       console.log('not anagram')
//   }
// }

// sortAlphabet("suraj", "shyam");
// sortAlphabet("silent", "listen");
// // Output: { sortedStr: 'ajrsu', sortedStr1: 'ahmsy' }


//3
// Find the First Non-Repeating Character in a String

// function firstnonrepeatingcharacter(word){
//     let x = word.split('');
//     let nonrepeatingchar = x.filter((a)=>x.indexOf(a) === x.lastIndexOf(a));
//     console.log(nonrepeatingchar[0])
    
// }
// firstnonrepeatingcharacter('swiss')

//4
// Rotate an Array by k Steps (Without built-ins)

// Input: [1,2,3,4,5], k=2

// Output: [4,5,1,2,3];

// function rotatearraybyk(arr,k){
//     // console.log(arr,k);
    
//     let newarr = [];
    
//     for(let i=arr.length-1;i>=arr.length-k;i--){
//         newarr.push(arr[i])
        
//     }
//     for(let i=0;i<=arr.length-1-k;i++){
//       newarr.push(arr[i])
        
//     }
//     console.log(newarr)
    
// }
// rotatearraybyk([1,2,3,4,5],2)
// rotatearraybyk([1,2,3,4,5],4)

//5
// Find Intersection of Two Arrays (Without using Set or built-ins)

// [1, 2, 3, 4, 5], [3, 4, 6, 7]
// [3, 4]

function commonelementbetweentwoarr(arr1,arr2){
    let s = [...arr1,...arr2];
    
    let y = s.filter((a)=>s.indexOf(a) !== s.lastIndexOf(a))
    let unique = [];
    
    for(let dd of y){
        if(!unique.includes(dd)){
            unique.push(dd)
        }
    }
    console.log(unique)
    
}
// commonelementbetweentwoarr([1, 2, 3, 4, 5], [3, 4, 6, 7]);

// function commonelementbetweentwoarr(arr1, arr2) {
//     let result = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 if (!result.includes(arr1[i])) {
//                     result.push(arr1[i]);
//                 }
//             }
//         }
//     }
    
//     console.log(result);
// }

commonelementbetweentwoarr([1, 2, 3, 4, 5], [3, 4, 6, 7]); // [3,4]
commonelementbetweentwoarr([1,1,2], [2,3]); // [2]





console.log("Day 47 ended");