console.log('day91 started');


//1
// function searchElement(arr,n){
//     // return arr.findIndex((x)=>x === n);
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i] === n){
//           return i;
//           break;
//       }
//     }
//     return -1
    
// }

// console.log(searchElement([3,1,5,2,8,0],77))

//2 countNegative


// function countNegative(arr){
    
//     let count = 0;
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i] < 0 ){
//           count = count +1
//       }
//     }
//     return count
    
// }

// console.log(countNegative([3,1,5,2,8,0,-2,33,-44]))

//3
//find largest

// function findlargest(arr){
    
//     let largest = -Infinity;
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]  > largest ){
//           largest = arr[i]
//       }
//     }
//     return largest;
   
    
// }

// console.log(findlargest([3,1,5,2,8,0,-2,33,-44]));


//4
//find smallest

// function findsmallest(arr){
    
//     let smallest = Infinity;
    
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]  < smallest ){
//           smallest = arr[i]
//       }
//     }
//     return smallest;
   
    
// }

// console.log(findsmallest([3,1,5,2,8,0,-2,33,-44]))

//5
//second largest

function secondlargest(arr){
    
    let largest = -Infinity;
    let secondlargest = -Infinity;
    
    for(let i=0;i<arr.length;i++){
       if(arr[i]  > largest ){
           secondlargest = largest
           largest = arr[i]
       }else if( arr[i]>secondlargest && arr[i] !== largest){
           
           secondlargest  = arr[i]
       }
    }
    return secondlargest;
   
    
}

console.log(secondlargest([3,1,5,2,8,0,-2,33,-44]));




console.log('day91 ended')