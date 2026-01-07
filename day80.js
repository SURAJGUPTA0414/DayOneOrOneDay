console.log('day80 started');
// Find unique elements from an array without using in-built methods

//1
// function uniquewithoutinbuilt(str){
//     let reverse = ""
    
//     for(let i=str.length-1;i>=0;i--){
//         reverse = reverse + str[i]
//     }
//     return reverse
// }

// console.log(uniquewithoutinbuilt('suraj'))

// 2 Find Unique Elements (NO inbuilt methods)

// function unique(arr){
//     let unique = [];
    
//     for(let x of arr){
//         if(!unique.includes(x)){
//             unique.push(x)
//         }
//     }
//     return unique
// }

// console.log(unique([1,4,1,6,9]))

//3
// sort without inbuilt

//bubble sort
// function sortarr(arr){
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;j<=arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
            
//         }
//     }
//     return arr
// }
// console.log(sortarr([44,2,5,1]))


//4
// Count Frequency of Elements (without in-built)


// function frequency(str){
//     let obj = {};
    
//     for(let dd of str){
//         if(obj[dd]){
//             obj[dd] = obj[dd]  + 1
//         }else{
//             obj[dd] = 1
//         }
//     }
//     return obj
    
// }
// console.log(frequency('surajs'))

//5

function findMax(arr) {
  
  if (!Array.isArray(arr)) {
    return false;
  }

 
  if (arr.length === 0) {
    return null;
  }

 
  for (let x of arr) {
    if (typeof x !== "number" || Number.isNaN(x)) {
      return false;
    }
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([1,6,2,9]))


console.log('day 80 ended')