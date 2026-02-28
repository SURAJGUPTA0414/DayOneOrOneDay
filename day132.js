console.log('day 132 started');

// Question 1: Right-angled triangle
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

console.log(''); // spacing

// Question 2: Inverted right-angled triangle
for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

console.log(''); // spacing

// Question 3: Pyramid pattern
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let s = 1; s <= 5 - i; s++) {
    row += ' ';
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    row += '*';
  }
  console.log(row);
}

console.log(''); // spacing

// Question 4: Diamond pattern

// Upper pyramid
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let s = 1; s <= 5 - i; s++) {
    row += ' ';
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    row += '*';
  }
  console.log(row);
}

// Lower inverted pyramid
for (let i = 4; i >= 1; i--) {
  let row = '';
  for (let s = 1; s <= 5 - i; s++) {
    row += ' ';
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    row += '*';
  }
  console.log(row);
}

console.log(''); // spacing

// Question 5: Floyd’s Triangle
let num = 1;
for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += num + ' ';
    num++;
  }
  console.log(row);
}

console.log('day 132 ended');