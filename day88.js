console.log('day88 started');

// function removeDuplicate(arr){
//     // return [...new Set(arr)]
//     let unique = [];
    
//     for(let dd of arr){
//         if(!unique.includes(dd)){
//             unique.push(dd)
//         }
//     }
//     return unique
    
// }

// console.log(removeDuplicate([1,5,2,1,6,8,5]))

//2
// Find max number

// function findMax(arr){
    
//     // return Math.max(...arr);
    
   
    
// //   return  arr.reduce((max,curr)=>{ return curr>max?curr:max },arr[0]);


    
// }

//3
// Palindrome
// function palindrome(str){
//     if(str === str.split('').reverse().join('')){
//         return 'palindrome'
//     }else{
//         return 'not palindrome'
//     }
// }

// console.log(palindrome('aka1'))

//4
// Flatten array

// function flatInfinity(arr){
//     // return arr.flat(Infinity)
//     // let flatarr = [];
    
//     // for(let dd of arr){
//     //     if(Array.isArray(dd)){
//     //         flatarr.push(...flatInfinity(dd))
            
//     //     }else{
//     //         flatarr.push(dd)
//     //     }
//     // }
//     // return flatarr
    
//   return  arr.toString().split(',').map(Number)
    
// }

// console.log(flatInfinity([1,5,2,[2,4,[7,1]],1,6,8,5]))

//5
// Count character frequency

function countFrequency(str){
    // let obj = {};
    
    // for(let dd of arr){
    //     if(obj[dd]){
    //         obj[dd] = obj[dd] + 1
    //     }else{
    //         obj[dd] = 1
    //     }
    // }
    // return obj
    
    return str.split('').reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

    
    
}

console.log(countFrequency('suraj'))


console.log('day88 ended')