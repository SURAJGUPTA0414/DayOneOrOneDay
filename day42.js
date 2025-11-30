console.log("Day 42 started");


//1
// capitalize first word

// function capitalizrfisrtword(str){
//     let ss = str.split(' ');
//     let result = []
//     console.log(ss);
   
//         for(let x of ss){
//             let word = x.charAt(0).toUpperCase() + x.slice(1);
//             result.push(word)
            
          
//         }
//         console.log(result.join(' '));
    
// }
// capitalizrfisrtword('suraj gupta')


//2 reverse str

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// reversestr('suraj');

// 3
// sort an array without inbuilt

function bubbleSort(arr) {


   for(let i=0;i<=arr.length-1;i++){
    //   console.log(arr[i]);
       
       
       for(let j=0;j<=arr.length-1-i;j++){
           if(arr[j]>arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
       }
   }
   console.log(arr)
}

console.log(bubbleSort([5, 1, 4, 2, 8]));


// function sortarray(arr){
//     let sortedArray = arr.sort((a,b)=>a-b)
//     console.log(sortedArray)
// }
// sortarray([1,44,6,2,4])


//4
// find unique value

// function unique(arr){
//     console.log([...new Set(arr)])
// }
// unique([1,2,55,55,6,7])

//5
// Check palindrome

// function palindrome(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }
// palindrome('madam')
// palindrome('madadm')


console.log("Day 42 ended");