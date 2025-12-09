console.log('day52 started');

// Check if array is sorted
// function checkarrsorted(arr){
//     let sorted = true;
    
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i]>arr[i+1]){
//           sorted = false;
//           break;
//       }
//     }
//     if(sorted){
//         console.log('sorted')
//     }else{
//         console.log('not sorted')
//     }
// }

// checkarrsorted([1,4,2])
// checkarrsorted([1,2,4])

// Sort array without using sort()
// function sortarrwithoutinbuilt(arr){
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;j<=arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr)
// }
// sortarrwithoutinbuilt([1,4,2])

// Find k-th largest element
// function kthLargestElement(arr, k) {
//     let sorted = [...arr].sort((a, b) => b - a);
//     if (k <= 0 || k > sorted.length) {
//         return null; // invalid k
//     }
//     return sorted[k - 1];
// }
// console.log(kthLargestElement([1, 4, 2], 2)); // 2
// console.log(kthLargestElement([10, 20, 30, 40], 1)); // 40
// console.log(kthLargestElement([10, 20, 30, 40], 4)); // 10
// console.log(kthLargestElement([10, 20, 30, 40], 5)); // null

// Separate even and odd numbers
// function Separateevenodd(arr){
//     let even = [];
//     let odd = []
//     for(let x of arr){
//         if(x%2 === 0){
//             even.push(x)
//         }else{
//             odd.push(x)
//         }
//     }
//     console.log(even,odd)
// }
// Separateevenodd([1,3,6])

// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    console.log(result);
}
mergeSortedArrays([1, 3, 5], [2, 4, 6]);

// Find difference between two arrays
function differencebetweentwoarr(arr1, arr2){
    let diff = arr1.filter(x => !arr2.includes(x))
                   .concat(arr2.filter(x => !arr1.includes(x)));
    console.log(diff);
}
differencebetweentwoarr([1,2,3],[2,3,4]);

// Chunk an array into groups
function chunkArray(arr, size){
    let result = [];
    for(let i=0; i<arr.length; i+=size){
        result.push(arr.slice(i, i+size));
    }
    console.log(result);
}
chunkArray([1,2,3,4,5,6,7],3);

// Find longest increasing subarray
function longestIncreasingSubarray(arr){
    let maxLen = 1, currLen = 1;
    let start = 0, maxStart = 0;
    for(let i=1; i<arr.length; i++){
        if(arr[i] > arr[i-1]){
            currLen++;
            if(currLen > maxLen){
                maxLen = currLen;
                maxStart = start;
            }
        }else{
            currLen = 1;
            start = i;
        }
    }
    let result = arr.slice(maxStart, maxStart+maxLen);
    console.log(result);
}
longestIncreasingSubarray([1,2,3,1,2,3,4,1]);

// Remove falsy values
// function removefalsyvalue(arr){
//     let y = []
//     for(let x of arr){
//         if(x){
//             y.push(x)
//         }
//     }
//     console.log(y)
// }
// removefalsyvalue(["suraj",null,undefined,0,1,""])

// Filter out numbers only
// function numonly(arr){
//     let x = [];
//     for(let xx of arr){
//         if(typeof(xx) === "number"){
//             x.push(xx)
//         }
//     }
//     console.log(x)
// }
// numonly([1,'suraj',22,"sh"])

// Filter out strings only
// function stringonly(arr){
//     let x = [];
//     for(let xx of arr){
//         if(typeof(xx) === 'string'){
//             x.push(xx)
//         }
//     }
//     console.log(x)
// }
// stringonly([1,'suraj',22,"sh"])

// Count even numbers
// function counteven(arr){
//     let x = arr.filter((a)=>a%2===0)
//     console.log(x.length)
// }
// counteven([1,4,6,33,8])

// Count odd numbers
// function countodd(arr){
//     let x = arr.filter((a)=>a%2!==0)
//     console.log(x.length)
// }
// countodd([1,4,6,33,8])

// Find sum of even numbers
// function evensum(arr){
//     let sum = 0;
//     for(let x of arr){
//         if(x%2===0){
//             sum = sum + x
//         }
//     }
//     console.log(sum)
// }
// evensum([1,4,6,33,8])

// Find sum of odd numbers
// function oddsum(arr){
//     let sum = 0;
//     for(let x of arr){
//         if(x%2!==0){
//             sum = sum + x
//         }
//     }
//     console.log(sum)
// }
// oddsum([1,4,6,33,8])

console.log('day52 ended');
