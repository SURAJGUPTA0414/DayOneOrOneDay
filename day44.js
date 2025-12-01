console.log("Day 44 started");

//1 capitalize first word in 

// function capitalizefirstword(str){
    
//     let xx = str.split(' ');
//     let words = []
    
//     for(let d of xx){
//         let ff = d.charAt(0).toUpperCase() + d.slice(1);
//         console.log(ff)
//     }
    
// }
// capitalizefirstword('suraj gupta is great')

//2
// sort array without inbuild

// function sortarrwithoutinbuilt(arr){
    
//     for(let i=0;i<=arr.length-1;i++){
//         for(j=0;j<=arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr)
    
// }
// sortarrwithoutinbuilt([1,8,5,7,0])

//3

// function fibonaccie(n){
//     let fibb = [0,1];
//     for(let i=2;i <= n ;i++){
//         console.log(i)
//         let x = fibb[fibb.length-1] + fibb[fibb.length-2];
//         fibb.push(x)
//     }
//     console.log(fibb)
    
// }


// fibonaccie(5)

//4
// Remove Duplicates from Array

// function removedupwithoutset(arr){
//     let unique = []
//     for(let x of arr){
//         if(!unique.includes(x)){
            
//             unique.push(x)
//         }
//     }
//     console.log(unique)
// }
// removedupwithoutset([1,5,7,1,2,4])

//5
// Count Character Frequency

// function countchar(str){
//     let word = str.split(' ').join('')
//     let obj={};
    
    
//     for(let x of word){
//         if(obj[x]){
//             obj[x] = obj[x]+1
//         }else{
//             obj[x] = 1
//         }
        
//     }
//     console.log(obj)
// }
// countchar('suraj gupta is doing good')

console.log("Day 44 ended");