console.log('day71  started');
//1 
// swap variable all three methods

// let a = 10;
// let b = 20;

// let temp = a;   
// a = b
// b = temp;


// [a,b] = [b,a]

// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b)

//2
// Capitalize first letter of each word
// function capitalize(words){
//     let x =  words.split(' ');
//     let y = []

//     console.log(x);

//     for(let xx of x){
//         console.log(xx);
//         let dd = xx.charAt(0).toUpperCase() + xx.slice(1);
//        y.push(dd)
//     }
//     console.log(y.join(' '))

// }
// capitalize('hello suraj')

//3
// Find the largest of 3 numbers

let a = 100;
let b = 20;
let c = 5;

function largestofthree(a,b,c){
    if(a>b){
        if(a>c){
                console.log(a)
        }else{
            console.log(c)
        }
        

    }else{
          if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
largestofthree(a,b,c)

//4
// Reverse a number

// function reverse(n){
//     let x = n.toString().split('').reverse();
//     console.log(+x.join(''));


// }

// reverse(123)

//5
// Move all zeros to end
// [0,1,0,3] → [1,3,0,0]

function movezerotoend(arr){
    let arr1 = [];

    for (let dd of arr) {
        if (dd !== 0) {
            arr1.push(dd);
        }
    }

    for (let dd of arr) {
        if (dd === 0) {
            arr1.push(dd);
        }
    }

    console.log(arr1);
}

movezerotoend([0,1,0,3]);







console.log('day71 ended')