console.log("Day 17 started");

//1
// Maximum Occurring Character
// var maxOccuringChar = function(s) {
//     let x = s.split('');

//     let y = x.filter((a) => x.indexOf(a) !== x.lastIndexOf(a));
//   return(y[0])
// };

//half logic above

//2

// Question:
// Write a program that takes an integer N as input and prints the following pattern for N rows:



// A  

// AB  

// ABC  

// ABCD  

// ABCDE  
function printAlphabetPattern(n) {
    for (let i = 1; i <= n; i++){
        let str = "";
        for (let j = 1; j <= i ; j++){
            str += String.fromCharCode(64 + j)
        }
        console.log(str)
    }

}




console.log('day17 ended');