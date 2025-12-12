console.log('day55 started');


//1
// const search = (query) => {
//     console.log('searching for',query)
// }


// const debounce = (fn,delay) => {
//     let timer;
    
//     return function(...args){
//         clearTimeout(timer);
        
//         timer = setTimeout(()=>{
//             fn(...args)
//         },delay)
        
//     }
    
// }

// const searchwithdebounce = debounce(search,1000)

// searchwithdebounce('h')
// searchwithdebounce('ha')
// searchwithdebounce('har')
// searchwithdebounce('hard')
// searchwithdebounce('hard ')
// searchwithdebounce('hard js')



//2
// function sendMessage(msg){
    
//     console.log('snedmessage ',msg)
    
// }

// function throttle(fn,delay){
//     let lastcall = 0;
    
//     return function(...args){
//         let now = Date.now();
//         console.log(now)
        
//         if(now - lastcall < delay){
//             return
//         }
//         lastcall = now;
//         return fn(...args)
//     }
    
// }

// const sendMessagewithslowmode = throttle(sendMessage,1000)

// sendMessagewithslowmode('hi')
// sendMessagewithslowmode('hi bro') 
// sendMessagewithslowmode('hi bro are you') 
// sendMessagewithslowmode('hi bro are you there');


// ---------------------------
// Practice Problem 1
// Reverse a String
// Input: A single string `s`
// Output: Return the string reversed
// Constraints: 1 <= s.length <= 10^5
// Example:
// Input: "hello"
// Output: "olleh"
// function reverseString(s) {
//   // write your code here
//   return s.split('').reverse().join('')
// }

// console.log(reverseString('hello'))

// ---------------------------
// Practice Problem 2
// Rotate Array (right) by K
// Input: An array `arr` and non-negative integer `k`
// Output: Modify `arr` in-place (or return a new rotated array) where elements are rotated right by k positions
// Constraints: 1 <= arr.length <= 10^5, 0 <= k <= 10^9
// Example:
// Input: arr = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// function rotateArray(arr, k) {
//   // write your code here
//   let newarr = [];

//   for(let i=arr.length-k;i<=arr.length-1;i++){
//     newarr.push(arr[i])
//   }

//   for(let i=0;i<=arr.length-1-k;i++){
//     newarr.push(arr[i])
//   }
//   console.log(newarr)
// }
// rotateArray([1,2,3,4,5],2)

// ---------------------------
// Practice Problem 3
// Check Prime Number
// Input: An integer `n` (n >= 0)
// Output: Return true if `n` is prime, otherwise false
// Constraints: 0 <= n <= 10^9
// Example:
// Input: 17
// Output: true
function isPrime(n) {
  // write your code here
  let flag = false;

  for(let i=2;i<n;i++){
    if(n%i === 0){
        flag = true;
        break;
    }
  }
  if(flag){
    console.log('flase')
  }else{
    console.log('true')
  }
}

isPrime(17)


console.log('day55 ended')