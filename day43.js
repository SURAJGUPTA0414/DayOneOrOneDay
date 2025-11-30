console.log("Day 43 started");

//1
// Count vowels in a string

// function countvowel(str){
//     let x = str.match(/[aeiou]/gi);
//     console.log(x.length)
// }

// countvowel('suraj');


//2
// Find the maximum number in an array (without Math.max)
// Code

// function maxnumberinarr(arr){
//     let x = arr.sort((x,y)=>x-y);
//     console.log(x[x.length-1])
    
// }
// maxnumberinarr([2,4,6,4,2,1])

// function findMax(arr) {
//     let max = arr[0];

//     for (let x of arr) {
//         if (x > max) {
//             max = x;
//         }
//     }

//     console.log(max);
// }

// findMax([10, 55, 23, 90, 3]);

//3
// Remove duplicates from array (without Set)

// function removeDuplicate(arr){
//     let unique = [];
    
//     for(let x of arr){
//         if(!unique.includes(x)){
//             unique.push(x)
//         }
//     }
//     console.log(unique)
    
// }

// removeDuplicate([1,2,3,4,5,5,6,3,1]);

//4
// Count occurrences of each element in an array


// function countoccurenceofeachelement(str){
//     let dd = str.split(' ').join('');
//     let obj = {};
    
//     for(let x of dd){
//         if(obj[x]){
//             obj[x] = obj[x]+1
//         }else{
//             obj[x] = 1
//         }
//     }
//     console.log(obj)
    
// }

// countoccurenceofeachelement('suraj gupta')

//5
// Find the second largest number in an array

// function secondelargest(arr){
//     let x = arr.sort((a,b)=>a-b);
//     console.log(x[x.length-2])
// }
// secondelargest([3,4,1,7,2])



console.log("Day 43 ended");