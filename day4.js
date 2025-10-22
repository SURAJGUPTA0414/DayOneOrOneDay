console.log('day4 starts here');

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Use of IF ELSE
// Example:

// Suppose the program is given the following student scores:

// 45

// 58

// 70

// 80



// The program should output the corresponding grades for each student:

// D

// C

// B

// A



// Note you will be just given one Input and you just need to output one grade



// Explanation

// Characters represent the grades assigned to each student based on the specified criteria.

//   function assignGrades(score) {
//         // Your implementation to assign grades based on the given criteria
//         // Output the corresponding grade
//         if (score <= 50) {
//             console.log('D')
//         } else if (score < 60) {
//             console.log('C')
//         } else if (score < 75) {
//             console.log('B')
//         } else {
//             console.log('A')
//         }
//     }
    
//     assignGrades(60)

//2

// First Duplicate Element


// function findFirstDuplicateElement(arr, length) {
//         let duplicate = arr.filter((a)=>arr.indexOf(a) !== arr.lastIndexOf(a))
//         return duplicate[0]

//     }
    
//   let x = findFirstDuplicateElement([2,4,5,7,4,8])
//   console.log(x)


//3
// Find unique value
// function findUniqueMagicalKey(arr, length) {
//      let duplicate = arr.filter((a)=>arr.indexOf(a) === arr.lastIndexOf(a))
       
//     if(duplicate.length !== 0) {
    
              
//     return duplicate[0];
//     } else {
//         return -1
//     }
  
//     }

//4

// Write a program to generate the following pattern given below:

// 1             5     5
 
// 12            5     6

// 123                  7

// 1234           5     8

// y = mx + c
// jend = 1i+c
// 8 = 1*4 + c
// c=4
// jend = I + 4


// for(let i=1;i<=4;i++){
//     let str = " "
//     for(let j=1;j<=i;j++){
//         str = str + j
//     }
//     console.log(str)
// }


//5
// Pattern - 2


// Share
// Looping
// Printing
// Variables
// Write a program to generate the following pattern given below:

// 1
// 222
// 33333
// 4444444
// 555555555

// y = mx+c
// jend = 2*i + c
// 5 = 2*1 + c
// c = 5-2 =3
// jend 2i+3


function pattern(){
    
for(let i=1;i<=5;i++){
   var x = "";
    for(let j=5;j<=2*i+3;j++){
        x = x + i
    }
    console.log(x)
}
    
}










cons4ole.log('day4 ends here');