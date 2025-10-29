console.log('day10 started');


//1
// Sum of elements

// function sumOfElements(arr) {

// return arr.reduce((a,b)=>a+b)

// }

//1 Remove duplicate characters


/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicates = function (s) {

//     let x = s.split('');

//   let y = [... new Set(x)]
//     return y.join('')
// };


//2

// /**
//  * @param {number[]} nums - Array of integers.
//  * @return {number} - .
//  **/
// function count(arr, target) {

//     if(arr.length === 0) return 0

//     let obj = {};

//     for (let x of arr) {
//         // console.log(x);
//         if (obj[x]) {
//             obj[x] = obj[x] + 1;
//         } else {
//             obj[x] = 1
//         }
//     }
//     return (obj[target])



// }

//3
// First unique character
// var firstUniqueChar = function (s) {
//     let x = s.split('');
    
//     let y = x.filter((a) => x.indexOf(a) === x.lastIndexOf(a))
    
//     let ff = s.indexOf(y[0])
// return ff
    
// };

//4
// First repeating character


// /**
//  * @param {string} s
//  * @return {char}
//  */
// var repeatingChar = function (s) {
    
//     let x = s.split('')
//     if (x.length === 0) {
//         console.log('#')
//     }
//     let y = x.filter((a) => x.indexOf(a) !== x.lastIndexOf(a));

//      return (y.length>0?y[0]:'#')
    
// };     
     



console.log('day10 ended');