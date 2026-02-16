console.log('day120 started');

/*--------------------------------------------------*/
// 1️⃣ Right Triangle Star Pattern
// Input: 5
// Output:
// *
// **
// ***
// ****
// *****

function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

rightTriangle(5);


/*--------------------------------------------------*/
// 2️⃣ Inverted Right Triangle Star Pattern
// Input: 5
// Output:
// *****
// ****
// ***
// **
// *

function invertedRightTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

invertedRightTriangle(5);


/*--------------------------------------------------*/
// 3️⃣ Pyramid Star Pattern
// Input: 5
// Output:
//     *
//    ***
//   *****
//  *******
// *********

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

pyramid(5);


/*--------------------------------------------------*/
// 4️⃣ Inverted Pyramid Star Pattern
// Input: 5
// Output:
// *********
//  *******
//   *****
//
