console.lpog('day24 started');

// . Reverse a String
//1
// function Reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// Reversestr('skahd')

//2
// 2. Check for Palindrome

// function palindrmo(a){
//     if(a === a.split('').reverse().join('')){
//         console.log('palindrpme')
//     }else{
//         console.log('not palindrome')
//     }
// }

// palindrmo('aka')

//3
// . Flatten a Nested Array

// Example:
// flatten([1, [2, [3, 4], 5]]); // Output: [1, 2, 3, 4, 5
// let x = [1, [2, [3, 4], 5]]
// console.log(x.flat(Infinity))

//4
// https://jsonplaceholder.typicode.com/posts) and logs the first post's title.
// JavaScriptasync function fetchFirstPostTitle() {  // Your code here}

// async function fetchdata(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let d2 = await data.json();
//     console.log(d2)
// }

// fetchdata()


//5
// Count Occurrences in Array


// // Example:

// // Output: { apple: 2, banana: 2, orange: 1 


function countOccurrences(arr){
    let obj = {}
    
    for(let x of arr){
       if(obj[x]){
           obj[x] = obj[x]+1
       }else{
           obj[x] = 1;
       }
    }
    console.log(obj)
    
}


countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana']);



console.log('day24 ended.....');