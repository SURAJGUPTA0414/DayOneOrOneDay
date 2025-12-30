console.log("day72 started");

// Check if a number is even or odd

function evenodd(n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenodd(-2);

//2
// Check if a number is positive, negative, or zero

function posnegorzero(n) {
  if (n > 0) {
    console.log("positive");
  } else if (n < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}
posnegorzero(-2);
posnegorzero(2);
posnegorzero(0);

//3
// Check if a number is prime

// function prime(n){
//     let flag = false;

//     for(let i=2;i<n;i++){
//         if(n%i === 0){
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

// prime(3)
//  prime(4)

//4

// Print all prime numbers between 1 and 100

// function prime(n){
//     if (n <= 1) {
//         console.log(n + " is not prime");
//         return;
//     }

//     let flag = false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             flag = true;
//             break;
//         }
//     }

//     if (flag) {
//         console.log(n + " is not prime");
//     } else {
//         console.log(n + " is prime");
//     }
// }

// // print 1 to 10
// for (let i = 1; i <= 10; i++) {
//     prime(i);
// }

//5
// 	Find the factorial of a number

// function factorial(n){
//     let fact = 1;

//     for(let i=1;i<=n;i++){
//         fact = fact * i
//     }
//     console.log(fact)

// }
// factorial(5)




console.log("day72 ended");
