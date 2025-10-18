console.log('day 1');

// let arr = [1, 2, 3, 4, 5,5,6,6,7,8,9,9,9,10];
let arr = ['shyam', 'ram', 'ram', 'mohan', 'sohan', 'shyam'];

let v = [...new Set(arr)]
console.log(v);

let x = arr.filter((a,b)=> arr.indexOf(a) !==arr.lastIndexOf(a));
// console.log(x);

let obj = {}

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// for(let temp in arr) {
//     console.log(arr[temp]);
//     obj[temp] = arr[temp];
// }

// for(let temp of arr) {
//     console.log(temp);
// }


console.log('day 1 end');


