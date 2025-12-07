console.log('day 50 started')

// 📌 DAY 2 — Array Basics

// Reverse an array

// Find max number in array

// Find min number in array

// Find second largest number

// Sum of array elements

// Average of array

// Remove duplicates from array

// Flatten nested array

// Rotate array by k steps

// Count frequency of each element

// Find missing number in sequence

// Find intersection of two arrays

// Find union of two arrays

// Move zeros to the end

// Find pair with given sum


// // 📌 DAY 2 — Array Basics

// //1

// // Reverse an array
// function reversearr(arr){
//     console.log(arr.reverse())
// }

// reversearr([2,1,5,99])



// //2
// // Find max number in array

// function findmax(arr){
//     console.log(Math.max(...arr))
// }

// findmax([2,1,5,99])

// //3
// // Find min number in array
// function findmin(arr){
//     console.log(Math.min(...arr))
// }

// findmin([2,1,5,99])


// //4
// // Find second largest number

// function secondlargest(arr){
//     let x = arr.sort((a,b)=>b-a)
//     console.log(x[1])
// }

// secondlargest([2,1,5,99])


//5
// Sum of array elements

// function sumarr(arr){
//     let x = arr.reduce((a,b)=>a+b)
//     console.log(x)
// }

// sumarr([2,1,5,99])

//6
// Average of array
// function avgarr(arr){
//     let x = arr.reduce((a,b)=>a+b)
//     console.log(x/(arr.length))
// }

// avgarr([2,1,5,99])

//7
// Remove duplicates from array

// function removedup(arr){
   
//     console.log([...new Set(arr)])
// }

// removedup([2,1,5,99,2,1])

//8
// Flatten nested array

// function flattenarr(arr){
//     let x = arr.flat(Infinity)
   
//     console.log(x)
// }

// flattenarr([2,1,5,99,2,1,[2,4,[5]]])

//9
// Rotate array by k steps
// arr = [1, 2, 3, 4, 5]
// k = 2

// function rotatearr(arr,k){
    
//     let finalarr = [];
    
//     for(let i=arr.length-k;i<=arr.length-1;i++){
        
//         finalarr.push(arr[i])
//     }
  
//   for(let i=0;i<=arr.length-1-k;i++){
        
//         finalarr.push(arr[i])
//     }
   
//     console.log(finalarr)
// }

// rotatearr([2,1,5,99,2,1],2)
// rotatearr([2,1,3,51],2)


//10
// Count frequency of each element

// function countfreqofeachelement(arr){
//     let obj = {};
    
//     for(let x of arr){
//         if(obj[x]){
//             obj[x] = obj[x]+1
//         }else{
//             obj[x] = 1
//         }
//     }
//     console.log(obj)
// }

// countfreqofeachelement([1,2,4,5,7,1])

//11
// Find missing number in sequence

// function findmissing(arr){
//     let x = [...arr];
    
//     for(let i=1;i<=Math.max(...arr)+1;i++){
//         x.push(i)
//     }
    
//     let y = x.filter((a)=>x.indexOf(a) === x.lastIndexOf(a));
//     console.log(y[0])
    
// }

// findmissing([1,2,4])


//12
// Find intersection of two arrays
// function intersecrtionofarr(arr1,arr2){
//     let x1 = [...new Set(arr1)]
//     let x2 = [...new Set(arr2)]
//     let x = [...x1,...x2];
    
//     let dd = x.filter((a)=>x.indexOf(a) !== x.lastIndexOf(a));
//     let final = [...new Set(dd)]
//     console.log(final)
    
// }
// intersecrtionofarr([2,4,6],[3,5,6])
// intersecrtionofarr([2,4,6,7],[3,5,6,7])

//13
// Find union of two arrays

// function unionofarr(arr1,arr2){
//     let x1 = [...new Set(arr1)]
//     let x2 = [...new Set(arr2)]
//     let x = [...x1,...x2];
    
   
//     let final = [...new Set(x)]
//     console.log(final)
    
// }
// unionofarr([2,4,6],[3,5,6])
// unionofarr([2,4,6,7],[3,5,6,7])


//14
// Move zeros to the end

// function movezerotoend(arr){
    
//     let final = []
    
//     for(let x of arr){
//         if(x>0){
//             final.push(x)
//         }
        
//     }
    
//     for(let x of arr){
//         if(x === 0){
//             final.push(x)
//         }
        
//     }
//     console.log(final)
    
// }

// movezerotoend([3,5,0,6,0,7])

//15
// Find pair with given sum

// Boilerplate: Find pair with given sum

// function findPair(arr, target) {
//     let x = []
    
//     for(let i=0;i<=arr.length-1;i++){
//         console.log(arr[i]);
        
//         for(let j=arr.length-1;j>=0;j--){
//             if(arr[i] + arr[j] === target){
//                 x.push(arr[i])
//                 x.push(arr[j])
//             }
//         }
        
        
//     }
//     console.log([...new Set(x)])
    
  
    
// }


// // let arr = [2, 7, 11, 15];
// // let target = 9;

// let arr = [1, 4, 5, 6, 10];
// let target = 11;
// // Expected pairs: [1, 10], [5, 6]


// findPair(arr, target); 




function findPair(arr, target) {
    let pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {  // start from i+1 to avoid self-pair and duplicates
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);  // store as a pair
            }
        }
    }
    
    console.log(pairs);
}

// Test cases
let arr1 = [2, 7, 11, 15];
let target1 = 9;
// Expected: [[2, 7]]
findPair(arr1, target1);

let arr2 = [1, 4, 5, 6, 10];
let target2 = 11;
// Expected: [[1, 10], [5, 6]]
findPair(arr2, target2);


//refined version

// 📌 DAY 2 — Array Basics

// 1. Reverse an array
function reversearr(arr){
    console.log(arr.slice().reverse()); // slice() avoids mutating original
}
reversearr([2,1,5,99]);

// 2. Find max number in array
function findmax(arr){
    console.log(Math.max(...arr));
}
findmax([2,1,5,99]);

// 3. Find min number in array
function findmin(arr){
    console.log(Math.min(...arr));
}
findmin([2,1,5,99]);

// 4. Find second largest number
function secondlargest(arr){
    let unique = [...new Set(arr)];
    unique.sort((a,b)=>b-a);
    console.log(unique[1]);
}
secondlargest([2,1,5,99,99]);

// 5. Sum of array elements
function sumarr(arr){
    let x = arr.reduce((a,b)=>a+b, 0);
    console.log(x);
}
sumarr([2,1,5,99]);

// 6. Average of array
function avgarr(arr){
    let x = arr.reduce((a,b)=>a+b, 0);
    console.log(x / arr.length);
}
avgarr([2,1,5,99]);

// 7. Remove duplicates from array
function removedup(arr){
    console.log([...new Set(arr)]);
}
removedup([2,1,5,99,2,1]);

// 8. Flatten nested array
function flattenarr(arr){
    let x = arr.flat(Infinity);
    console.log(x);
}
flattenarr([2,1,5,99,2,1,[2,4,[5]]]);

// 9. Rotate array by k steps
function rotatearr(arr,k){
    k = k % arr.length;
    let part1 = arr.slice(-k);
    let part2 = arr.slice(0, arr.length-k);
    console.log([...part1, ...part2]);
}
rotatearr([2,1,5,99,2,1],2);
rotatearr([2,1,3,51],2);

// 10. Count frequency of each element
function countfreqofeachelement(arr){
    let obj = {};
    for(let x of arr){
        obj[x] = (obj[x] || 0) + 1;
    }
    console.log(obj);
}
countfreqofeachelement([1,2,4,5,7,1]);

// 11. Find missing number in sequence (single missing)
function findmissing(arr){
    let n = arr.length + 1;
    let total = (n * (n+1)) / 2;
    let sum = arr.reduce((a,b)=>a+b,0);
    console.log(total - sum);
}
findmissing([1,2,4]);

// 12. Find intersection of two arrays
function intersectionofarr(arr1,arr2){
    let set1 = new Set(arr1);
    let result = arr2.filter(x => set1.has(x));
    console.log([...new Set(result)]);
}
intersectionofarr([2,4,6],[3,5,6]);
intersectionofarr([2,4,6,7],[3,5,6,7]);

// 13. Find union of two arrays
function unionofarr(arr1,arr2){
    let final = [...new Set([...arr1, ...arr2])];
    console.log(final);
}
unionofarr([2,4,6],[3,5,6]);
unionofarr([2,4,6,7],[3,5,6,7]);

// 14. Move zeros to the end
function movezerotoend(arr){
    let nonzeros = arr.filter(x => x !== 0);
    let zeros = arr.filter(x => x === 0);
    console.log([...nonzeros, ...zeros]);
}
movezerotoend([3,5,0,-6,0,7]);

// 15. Find pair with given sum
function findPair(arr, target) {
    let pairs = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(pairs);
}
findPair([2,7,11,15], 9);       // [[2,7]]
findPair([1,4,5,6,10], 11);     // [[1,10],[5,6]]



console.log('day 50 ended')