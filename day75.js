console.log('day75 started');


//1
// function flattenArray(arr){
//     // return arr.flat(Infinity)
    
//     // let x = arr.toString().split(',').map(Number);
    
//     // return x
    
//     let x = [];
    
//     for(let item of arr ){
//         if(Array.isArray(item)){
//             x.push(...flattenArray(item))
//         }else{
//             x.push(item)
//         }
//     }
//     return x
    
// }

// // For debugging
// console.log(flattenArray([1, [2, [3, 4], 5], 6]));


//2. Remove duplicates from array

// function unique(arr){
//     // return [...new Set(arr)]
//     let unique = [];
    
//     for(let dd of arr){
//         if(!unique.includes(dd)){
//             unique.push(dd)
//         }
//     }
//     return unique
    
// }

// console.log(unique([1,2,4,2,5,9]))

//3
// Find maximum number

// function findMax(arr){
//     // return Math.max(...arr)
//     let max = arr[0];
    
//     for(let dd of arr){
//         if(dd>max){
//             max = dd
//         }
//     }
//     return max
    
// }

// console.log(findMax([22,1,5,3]))

//4
// function findMin(arr){
//     return Math.min(...arr)
//     // let min = arr[0];
    
//     // for(let dd of arr){
//     //     if(dd<min){
//     //         min = dd
//     //     }
//     // }
//     // return min
    
// }

// console.log(findMin([22,1,5,3]))

//5
// Second largest element

function secondLargest(arr) {
     
     for(let i=0;i<=arr.length-1;i++){
         for(let j=0;j<=arr.length-1-i;j++){
             if(arr[j]>arr[j+1]){
                 let temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
             }
         }
     }
    return arr.length<1?null:(arr[1])
    
    // if(arr.length<1) return null
    

    // let unique = [...new Set(arr)];
   

    
}

console.log(secondLargest([22,44,1,4,99])); // 44
console.log(secondLargest([]));             // null
console.log(secondLargest([5,5]));            // null
console.log(secondLargest([5,5,4]));        // 4







console.log('day75 ended')