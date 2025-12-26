console.log('day68 started');


// Write a JavaScript program to find the maximum number in an array.

//1

// function maxinarr(arr){
//     let max = arr[0];
    
//     for(let x of arr){
//         if(x>max){
//             max = x
//         }
//     }
//     console.log(max)
    
// }

// maxinarr([1,2,5,3,4])

//2
7.
// Write a JavaScript function to check if a given number is prime.

// function prime(n) {
//     if (n <= 1) {
//         console.log('not prime');
//         return;
//     }

//     let flag = false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             flag = true;
//             break;
//         }
//     }

//     if (flag) {
//         console.log('not prime');
//     } else {
//         console.log('prime');
//     }
// }

// prime(7);


//3
// . Program to find Reverse of a string without using built-in method ?

// function reverse(str){
//     let name = "";
//     for(let i=str.length-1;i>=0;i--){
        
//         name = name + str[i]
        
//     }
//     console.log(name)
// }

// reverse('suraj')

//4
// Find the smallest word in a given sentence ?

// function smallestword(word) {
//     let x = word.split(' ');
//     let smallest = x[0];

//     for (let dd of x) {
//         if (dd.length < smallest.length) {
//             smallest = dd;
//         }
//     }
//     console.log(smallest);
// }

// smallestword('i am suraj');


//5
// 10. Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

function sumarrthird(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i = i + 3) {
        sum = sum + arr[i];
    }

    console.log(sum);
}

sumarrthird([1, 2, 1, 3, 4]);






console.log('day68 ended');
