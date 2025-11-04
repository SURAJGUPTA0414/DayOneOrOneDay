console.log("Day 17 started");

//1
// Maximum Occurring Character
// var maxOccuringChar = function(s) {
//     let x = s.split('');

//     let y = x.filter((a) => x.indexOf(a) !== x.lastIndexOf(a));
//   return(y[0])
// };

//half logic above

//2 Pattern of Consecutive Numbers

// function printConsecutivePattern(n) {
//     let num = 1;
//   for (let i = 1; i <= n; i++) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//       line += num + ' ';
//       num++;
//     }
//     console.log(line.trim());
//   }

// }

//3
// Print Pattern using Alphabets -1

// function printAlphabetPattern(n) {
//     for (let i = 1; i <= n; i++){
//         let str = "";
//         for (let j = 1; j <= i ; j++){
//             str += String.fromCharCode(64 + j)
//         }
//         console.log(str)
//     }

// }

//4
// Reverse Staircase pattern for alphabets

// function printReverseAlphabetPattern(n) {
//   for (let i = n; i >= 1; i--) {
//     let str = "";
//     for (let j = i; j <= n; j++) {
//       str += String.fromCharCode(64 + j);
//     }
//     console.log(str);
//   }
// }
//5


// Pattern-4

// ****
//  ***
//   **
//    *
   
//   based on n
   

// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";

//     // First loop: print i spaces
//     for (let j = 0; j < i; j++) {
//       str += " ";
//     }

//     // Second loop: print (n - i) asterisks
//     for (let j = 0; j < n - i; j++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }
console.log('day17 ended');