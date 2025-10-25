//thecodehelp2

// Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// function greet(name){
//     console.log(name)
    
// }
// greet('suraj')

//2
// Write a function called 'getSquare' that takes a number parameter and returns its square.

// function getSquare(n){
//     console.log(n**2)
    
// }
// getSquare(8)

//3
// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// function countLetter(str){
    
//     let xx = str.split('');
//     console.log(xx)
//     let obj = {}
    
    
//     for(let i of xx){
//         console.log(i)
//         if(obj[i]){
//             obj[i] = obj[i] + 1
//         }else{
//             obj[i] = 1
//         }
//     }
//     console.log(obj)
    

    
// }
// countLetter('surajbhai')



// //4
// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.


// function createCounter(){
//     let count = 0
//     return function() {
//         count = count + 1
//         return count
//     }
    
// }

// let x = createCounter();
// console.log(x())
// console.log(x())

//5
// Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array


// function sumEvenNumbers(arr){
//     let sumEven = 0
//     for(let x of arr){
//         if(x%2 === 0){
//             sumEven = sumEven + x
//         }
//     }
//   return sumEven 
// }
// console.log(sumEvenNumbers([2,4,3,8,99,5]))

//6
// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.

// function sumarr(arr){
//     let x = arr.reduce((a,b)=> a+b)
//     console.log(x)
// }
// sumarr([3,6,88,9])

//7
// Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

// function lengthmorethanfive(str){
//     let x = str.filter((x)=> x.length>5)
//     console.log(x)
    
// }
// lengthmorethanfive(['skg','shyam','abhimanyu','dkdkdkdkd'])

//8
// Write a function that takes an object and returns an array of all the keys in the object.

// function arrofobjkey(obj){
//     let arr = [];
//     console.log(obj);
    
//     for(let x in obj){
//         console.log(x);
//         arr.push(x)
//     }
//     console.log(arr)
// }
// let obj1 = {
//     name:"suraj",
//     age:25,year:1997
    
// };

// arrofobjkey(obj1)

//9
// Write a function that takes an array of objects and returns an array of all the values of a specified property name.

//10
// Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function highestvalue(x){
    let xx = x.filter((x)=>x.value)
    console.log(xx)
}

let arrobj = [
    {
    name:'suraj',
    age :27,
    value:4
    
},
{
    name:'shyam',
    age :32,
    value:410
    
},
{
    name:'sanchita',
    age :2,
    value:9
    
}
    
    
    ]
    
    highestvalue(arrobj)