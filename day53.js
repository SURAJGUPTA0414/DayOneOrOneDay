console.log('day53 started');

// Check if number is prime

// function prime(n){
//     let flag = false;

//     for(let i=2;i<n;i++){
//         if(n%i ===0){
//             flag = true;
//             break;
//         }
//     }
//     if(flag){
//         console.log('not prime')
//     }else{
//         console.log('prime')
//     }

// }

// prime(7)
// prime(8)

// Generate Fibonacci series

// function fibonacci(n){
//     let fibb = [0,1];

//     for(let i=2;i<=n;i++){
//         x = fibb[fibb.length-1] + fibb[fibb.length-2];
//         fibb.push(x)
//     }
//     console.log(fibb)

// }

// fibonacci(5)

// Find factorial

// function factorial(n){
//     let fact = 1;

//     for(let i=1;i<=n;i++){
//         fact = fact * i
//     }
//     console.log(fact)

// }
// factorial(5)

// Check Armstrong number

// function armstrong(n){

//     let x = n.toString().split('');
//     // console.log(x);
//     let sum = 0;

//     for(let xx of x){
//         sum = (+xx)**(x.length) + sum
//     }
//     // console.log(sum);

//     if(n === sum){
//         console.log('armstrong')
//     }else{
//         console.log('not armstromng')
//     }

// }
// armstrong(153)
// armstrong(1523)

// Check perfect number

// function checkperfectnumber(n){
//     let divisor = [];

//     for(let i=1;i<n;i++){
//         if(n%i ===0){
//             divisor.push(i)
//         }
//     }
//     console.log(divisor);
//     let x = divisor.reduce((a,b)=>a+b);
//     // console.log(x)
//     if(n === x){
//         console.log('perfect number')
//     }else{
//         console.log('not perfect number')
//     }



// }

// checkperfectnumber(6)


// Sum of digits
// function sumofdigit(n){
//     let x = n.toString().split('');
//     let sum = 0
//     for(let dd of x){
//         sum = +dd + sum
//     }
//     console.log(sum)
// }

// sumofdigit(153)

// Reverse digits of number

// function reversedigit(n){
//     let x = Number(n.toString().split('').reverse().join(''));
//     console.log(x)
// }
// reversedigit(123)

// Find GCD of two numbers

// function findGCD(a, b) {
//     let divisorsA = [];
//     let divisorsB = [];

//     // Collect divisors of a
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) {
//             divisorsA.push(i);
//         }
//     }

//     // Collect divisors of b
//     for (let i = 1; i <= b; i++) {
//         if (b % i === 0) {
//             divisorsB.push(i);
//         }
//     }

//     // Find common divisors
//     let common = divisorsA.filter(val => divisorsB.includes(val));

//     // Largest common divisor = GCD
//     console.log(Math.max(...common));
// }

// // Example usage
// findGCD(12, 18); 


// Find LCM


// function findLCM(a, b) {
//     let a1 = [];
//     let a2 = [];

  
//     for (let i = 1; i <= 100; i++) {
//         a1.push(a * i);
//         a2.push(b * i);
//     }

    
//     for (let val of a1) {
//         if (a2.includes(val)) {
//             return val; // first common multiple = LCM
//         }
//     }

//     return 'not found';
// }

// // Example usage
// console.log(findLCM(12, 18)); // ✅ Output: 36
// console.log(findLCM(25, 40)); // ✅ Output: 200



// Convert decimal → binary

// function decimaltobinary(num) {
//     let x = [];
     
//     // use for loop instead of while
//     for (; num > 0; num = Math.floor(num / 2)) {
//         let remainder = num % 2;   // get remainder (0 or 1)
//         x.push(remainder);         // store it
//     }

//     // reverse remainders to get correct binary
//     return x.reverse().join('');
// }

// // Example usage
// console.log(decimaltobinary(13)); // ✅ Output: "1101"
// console.log(decimaltobinary(6));  // ✅ Output: "110"
// console.log(decimaltobinary(28)); // ✅ Output: "11100"



// Convert binary → decimal

// Convert binary → decimal
function binaryToDecimal(binStr) {
    return parseInt(binStr, 2);
}

console.log(binaryToDecimal("1101")); // ✅ Output: 13
console.log(binaryToDecimal("11100")); // ✅ Output: 28


// Find largest digit

// function largestdigit(n){

//     let x = n.toString().split('');

//     console.log(Math.max(...x));



// }
// largestdigit(1231)
// largestdigit(9213)

// Find smallest digit

// function smallestdigit(n){

//     let x = n.toString().split('');

//     console.log(Math.min(...x));



// }
// smallestdigit(1231)
// smallestdigit(9213)

// Check automorphic number

// function automorphic(n) {
//     let square = (n * n).toString();   // square as string
//     let numStr = n.toString();         // original number as string
    
//     // check if square ends with the number string
//     if (square.endsWith(numStr)) {
//         console.log(n + " is automorphic");
//     } else {
//         console.log(n + " is not automorphic");
//     }
// }

// automorphic(5);   // automorphic
// automorphic(25);  // automorphic
// automorphic(76);  // automorphic
// automorphic(75);  // not automorphic


// Generate prime numbers in range

function primeinrange(n){
    for(let num = 1; num <= n; num++){   // loop through 1 to n
        let flag = false;

        if(num < 2){   // handle 0 and 1
            console.log(num + " is not prime");
            continue;
        }

        for(let i = 2; i < num; i++){
            if(num % i === 0){
                flag = true;
                break;
            }
        }

        if(flag){
            console.log(num + " is not prime");
        }else{
            console.log(num + " is prime");
        }
    }
}

primeinrange(10);  // check primes up to 10




console.log('day53 ended')