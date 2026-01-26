console.log("day100 started");

/*--------------------------------------------------*/
// 1️⃣ Star Square Pattern
// Input: n = 4
// Output:
// ****
// ****
// ****
// ****

function starSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

starSquare(4);

/*--------------------------------------------------*/
// 2️⃣ Right Triangle Star Pattern
// Input: n = 5
// Output:
// *
// **
// ***
// ****
// *****

function rightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

rightTriangle(5);

/*--------------------------------------------------*/
// 3️⃣ Inverted Right Triangle
// Input: n = 5
// Output:
// *****
// ****
// ***
// **
// *

function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

invertedTriangle(5);

/*--------------------------------------------------*/
// 4️⃣ Number Pattern
// Input: n = 4
// Output:
// 1
// 12
// 123
// 1234

function numberPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

numberPattern(4);

/*--------------------------------------------------*/
// 5️⃣ Pyramid Star Pattern
// Input: n = 4
// Output:
//    *
//   ***
//  *****
// *******

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let space = " ".repeat(n - i);
    let star = "*".repeat(2 * i - 1);
    console.log(space + star);
  }
}

pyramid(4);

/*--------------------------------------------------*/
console.log("day100 ended");
