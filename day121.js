console.log('day121 started');

/*--------------------------------------------------*/
// 1️⃣ Left Aligned Triangle (With Leading Spaces)
// Input: 5
// Output:
//     *
//    **
//   ***
//  ****
// *****

function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(i);
    console.log(spaces + stars);
  }
}

leftTriangle(5);


/*--------------------------------------------------*/
// 2️⃣ Hollow Right Triangle
// Input: 5
// Output:
// *
// **
// * *
// *  *
// *****

function hollowRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

hollowRightTriangle(5);


/*--------------------------------------------------*/
// 3️⃣ Hollow Pyramid
// Input: 5

function hollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let row = "";

    for (let j = 1; j <= (2 * i - 1); j++) {
      if (j === 1 || j === (2 * i - 1) || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(spaces + row);
  }
}

hollowPyramid(5);


/*--------------------------------------------------*/
// 4️⃣ Square Star Pattern
// Input: 5
// Output:
// *****
// *****
// *****
// *****
// *****

function squarePattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(n));
  }
}

squarePattern(5);


/*--------------------------------------------------*/
// 5️⃣ Hollow Square Pattern
// Input: 5
// Output:
// *****
// *   *
// *   *
// *   *
// *****

function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

hollowSquare(5);

/*--------------------------------------------------*/

console.log('day121 ended');
