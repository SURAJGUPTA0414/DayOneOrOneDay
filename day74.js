console.log('day74 started');


// Find Duplicate Elements in Array

function findDuplicateinarr(arr){
    let duplicates = arr.filter((a,b)=>arr.indexOf(a) !== arr.lastIndexOf(a));
    console.log(duplicates)
}

findDuplicateinarr([1,3,2,4,1])

//2
// Remove Duplicates from Array

// function removeDuplicate(arr){
//   let unique = [];
  
//   for(let dd of arr){
//       if(!unique.includes(dd)){
//           unique.push(dd)
//       }
//   }
//   console.log(unique)
    
    
// }
// removeDuplicate([1,2,1,3,4,29,2,44,55])

//3
//  Debounce Function (Very Important) 

// function debounce(fn,delay){
//     let timer;
    
//     return function(...args){
//         clearTimeout(timer);
        
//       timer =  setTimeout(()=>{
//           fn(...args)
            
//         },delay)
//     }
// }

//4
// Throttle Function

// function Throttle(fn,delay){
//     let lastcall = 0
    
//     return function(...args){
//         let now = Date.now();
//         if(now-lastcall<delay) return
//         else
//         lastcall = now
//         return fn(...args)
        
//     }
// }

//5
// Find Max Number in Array

function maxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
}

maxNumber([44, 2, 33]);







console.log('day74 ended')