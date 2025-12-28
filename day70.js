console.log('day70 started');
//1
//frequency of each element

// function frequecnycheck(str){
//       let obj = {

//       }

//       for(let dd of str){
//         if(obj[dd]){
//             obj[dd] = obj[dd] + 1

//         }else{
//             obj[dd] = 1
//         }
//       }
    
// console.log(obj)
// }

// frequecnycheck('suraj');

//valid parenthesysy

// function validparenthesys(str){
//     let stack = [];
//     let map = {
//         ')' : '(',
//         '}' : '{',
//         ']':'['
//     }

//     for(let xx of str){
//         if(xx === '(' || xx=== '{' || xx === '['){
//             stack.push(xx)
//         }else{
//             if (stack.pop() !== map[xx]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0

// }
// console.log(validparenthesys('(){'))

//3
// function debounce(fn,delay){
//     let timer;

//     return function(...args){
//         clearTimeout(timer);

//         timer = setTimeout(()=>{
//             fn(...args)
//         },delay)

//     }
// }

//4 
// throttle
// function throttle(fn, delay) {
//     let lastCall = 0;

//     return function (...args) {
//         const now = Date.now();

//         if (now - lastCall < delay) {
//             return;
//         }

//         lastCall = now;
//         fn(...args);
//     };
// }

//5
// sort array without inbuilt

function sortarray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortarray([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]




console.log('day 70 ended')