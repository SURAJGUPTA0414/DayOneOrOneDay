console.log("day 1");

// Series Printing - 1
// Question to Print 1 to N numbers using any Looping technique
// Note: Every number should be printed on a new Line
// Input
// A single line with integer N
// Constraints
// 1 <= N <= 1000
// Example:
// Sample Input
// 5
// Sample Output
// 1
// 2
// 3
// 4
// 5

function print_series(n){
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}
print_series(5);

// Series Printing - 2
// Question to Print all odd numbers between 1 to N using any loop
// Note: Every number should be printed on a new Line
// Input
// A single line with integer N
// Constraints
// 1 <= N <= 1000
// Example:
// Sample Input
// 10
// Sample Output
// 1
// 3
// 5
// 7
// 9

function print_series(n){
    /* Print the following series
       1 2 3 4 5 to n. Note print all the numbers in a seperate line*/

    for(let i = 1; i <= n; i++) {
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
print_series(10);

//3
// Series printing-3

// Share
// Dynamic Programming
// Math
// Memoization
// Problem Statement:

// The task is to find the nth number in the Fibonacci series.

// The Fibonacci series is defined as follows: the first two numbers are 0 and 1, and each subsequent number is the sum of the two preceding numbers. The series begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

// Constraints:

// 0 <= n <= 40

// Input Format:
// An integer, 'n', representing the position of the desired Fibonacci number.

// Output Format:
// An integer, the nth Fibonacci number.

// Sample Examples:
// 1.
// Input: 6
// Output: 5
// Explanation: The 6th Fibonacci number is 5.

// 2.
// Input: 9
// Output: 21
// Explanation: The 9th Fibonacci number is 21

function print_series(n) {
  /* write code here*/
  let fibonacci = [0, 1];

  if (n === 1) {
    console.log(0);
  } else {
    for (let i = 2; i < n; i++) {
      let dd =
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(dd);
    }

    console.log(fibonacci[fibonacci.length - 1]);
  }
}

print_series(9);

//4 Sum of first N natural numbers
//Share
//Looping
//Math
//Variables
//Problem Statement:
//Calculate the sum of all integers from 1 to N using a loop.
//Constraints:
//1 <= N <= 10^5
//Input Format:
//An integer 'N' representing the upper limit of the range for which the sum needs to be calculated.
//Output Format:
//An integer, representing the sum of all numbers from 1 to N.
//Sample Examples:
//1.
//Input: 5
//Output: 15
//Explanation: The sum of numbers from 1 to 5 is 1 + 2 + 3 + 4 + 5 = 15.
//2.
//Input: 10
//Output: 55
//Explanation: The sum of numbers from 1 to 10 is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55.


function sumOfNaturalNumbers(n){
    var sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);

    
    
}
sumOfNaturalNumbers(5);


//5
console.log("Hello Sharpenerians");

console.log("day 1 end");
