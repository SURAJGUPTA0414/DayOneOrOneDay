console.log('day22 started');

//1
// Check for prime number

// function prime(n){
//     let flag ;
    
//     for(let i=2;i<n;i++){
//         if(n%i === 0){
//           flag = true;
//           break;
//         }
//     }
//     if(flag){
//         console.log('not prime')
//     }else{
//         console.log('prime')
//     }
    
// }
// prime(8)

//2
// Print Perfect Squares in a Range

// function perfectSquare(n){
//     for(let i=1;i*i<=n;i++){
//         console.log(i*i)
//     }
    
// }
// perfectSquare(16)

//3
// Search an Element
// In your quest, you may encounter the following scenario:
// Input:
// 8
// 3 17 9 25 12 5 14 21
// 12
// Output:
// 4

// function searchForElement(arr, length, target) {
//         // Your implementation here
      
// console.log(arr,length,target);

// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]===target){
//         return i
//     }
    
// }
// return -1
        
//     }
    
    
//     searchForElement([3 ,17 ,9, 25 ,12, 5 ,14 ,21],8,12)

//4

//
// count zeros
// function countZeros(nums) {
//   let xx = nums.toString().split('');
//   let zeros = [];
//   for(let x of xx){
//      let dd = +x
//       if(dd === 0){
//           zeros.push(dd)
//       }
//   }
//   console.log(zeros.length)
// };

// console.log(countZeros(303023009800))

//5
// Missing number in array
// function missingArray(arr){
   
//     let x = []
//     for(let i=1;i<=Math.max(...arr);i++){
//         x.push(i)
//     }
//     let combined = [...arr,...x];
//     console.log(combined)
//     let miss = combined.filter((a)=>combined.indexOf(a)===combined.lastIndexOf(a)) 
//   console.log(miss)
// }

// missingArray([1,4,8])


console.log('day 22 ended done ....');