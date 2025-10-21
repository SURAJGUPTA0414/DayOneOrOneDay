console.log('day3 started');

// 1
// Compute the sum of elements
// Example:
// Input:
// 6
// 4 7 2 9 1 5
// Output:
// Explanation: In the given example, the array `arr` has six elements (4, 7, 2, 9, 1, 5). The sum of these elements is 4 + 7 + 2 + 9 + 1 + 5.

// function find_sum(arr, length) {

//     let sum = arr.reduce((a,b)=>a+b);
//     console.log(sum);





// }
// find_sum([4, 7, 2, 9, 1, 5]);


//2

// Print Input

// function printMessage(message) {
//         console.log(message)

//     }

//     printMessage("Hello, World!");


//3
// Reverse An Array

//  const reverseArray = (arr, length) => {
//         // Your implementation here to reverse the array and return a new array
//         return arr.reverse()

//     };

//     console.log(reverseArray([1, 2, 3, 4, 5]));


//4
// Add Two Variables
//   function addNumbers(a, b) {
//         // Your implementation to add two numbers and print the result
//         console.log(a+b)
//     }

//     addNumbers(7,-3)


//5

// Odd or Even

// function checkMagicalEnergy(n) {
//     if (n % 2 === 0) {
//             console.log('Even')
//     } else {
//             console.log('Odd')
//         }

//     }


//5
// Search an Element
// In your quest, you may encounter the following scenario:
// Input:
// 8
// 3 17 9 25 12 5 14 21
// 12
// Output:
// 4

function searchForElement(arr, length, target) {
        // Your implementation here
      
            for (let i = 0; i < arr.length; i++){
                if (target === arr[i]) {
                    return i
                    break;
                }
        }
            return -1
        
    }
    

console.log('day3 ended');
