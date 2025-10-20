console.log('day2');



// Sum of Multiples in a Range
// Sample Examples:

// 1.

// Input: N = 10, X = 3

// Output: 18

// Explanation: The multiples of 3 between 1 and 10 are 3, 6, and 9. The sum of these multiples is 3 + 6 + 9 = 18.


// function sumOfMultiples(n,x){
//     var sum = 0
//   for(let i=1;i<=n;i++){
//       if(i%x===0){
//           sum = sum + i
//       }
//   }
    
//  console.log(sum)   
// }
// sumOfMultiples(10,3)


// Find Largest Element
// Example:



// Input:

// 5

// 12 7 31 18 25

// Output:

// 31


// /**
//  * @param {number[]} nums - Array of integers.
//  * @return {number} - Maximum of array.
//  **/
// function find_maximum(arr) {
//     console.log(Math.max(...arr))

// }
// find_maximum([2,12,5,6])

// Table of 2 , 3 and 4
// Examples : 



// Output :

// 2 4 6 8 10 12 14 16 18 20

// 3 6 9 12 15 18 21 24 27 30

// 4 8 12 16 20 24 28 32 36 40

// function printTables(){
//     let two = []
//     let three = []
//     let four = []
    
//     for(let i =1;i<=10;i++){
//         two.push(i*2)
//         three.push(i*3)
//         four.push(i*4)
//     }
//     console.log(two.join(' '))
//     console.log(three.join(' '))
//     console.log(four.join(' '))
    

    
    
// }
// printTables()

// Print Perfect Squares in a Range
// Sample Examples:

// 1.

// Input: N = 15

// Output: 1 4 9

// Explanation: The perfect squares between 1 and 15 are 1, 4, and 9.

// 2.

// Input: N = 25

// Output: 1 4 9 16 25

// Explanation: The perfect squares between 1 and 25 are 1, 4, 9, 16, and 25.



// function perfectSquares(n){
//     for(let i=1;i*i<=n;i++){
//         console.log(i*i)
//     }

    
    
// }
// perfectSquares(25)

// Factorial of a number


function factorial(n){
    let mult = 1;
    for(let i=1;i<=n;i++){
        mult = mult * i
    }
    console.log(mult)
    

    
    
}
factorial(5)



console.log('day 2 end');