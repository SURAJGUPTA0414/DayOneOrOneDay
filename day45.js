console.log("Day 45 started");



//1
// Reverse a String Without Using Built-in Reverse

// function reversestr(str){
//     let reverse = []
//     for(let i=str.length-1;i>=0;i--){
//         reverse.push(str[i])
//     }
//     console.log(reverse.join(''))
// }
// reversestr('suraj');

//2
// Find the Maximum Number in an Array (Without Math.max)

// function max(arr){
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;j<=arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr[arr.length-1])
// }

// max([11,4,1])

//3
// Check if a String is a Palindrome (Without reverse)

// function checkstrpalindrom(str){
//     let reverse = []
//     for(let i=str.length-1;i>=0;i--){
//         reverse.push(str[i])
//     }
//   if(str === reverse.join('')){
//       console.log('palindrome')
//   }else{
//       console.log('not palindrome')
//   }
    
// }
// checkstrpalindrom('madam')
// checkstrpalindrom('suraj')

//4
// Find Second Largest Number in Array (Without sorting or Math functions)


// function secondlargest(arr){
    
//         for(let i=0;i<=arr.length-1;i++){
//         for(let j=0;j<=arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log(arr[arr.length-2])
    
// }
// secondlargest([11,4,1])

//5
// Convert Sentence to CamelCase

function camelCase(str){
    
    let dd  = str.split(' ');
    let camel = []
   
    
    for(let x of dd){
        let words = x.charAt(0).toUpperCase() + x.slice(1)
        console.log(words);
        camel.push(words)
    }
    camel[0] = camel[0][0].toLowerCase()+ camel[0].slice(1);
    console.log(camel.join(''))
}
camelCase('hello world my name is suraj')

console.log("Day 45 ended");