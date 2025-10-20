//find uniques elements in an array

// function uniqueElements(arr) {
//     let uniqueArr  = arr.filter((a,b)=> arr.indexOf(a) === arr.lastIndexOf(a));
//     console.log(uniqueArr);
// }

// uniqueElements([1, 2, 3, 4, 5,5,6,6,7,8,9,9,9,10]);


//reverse a string

// let str = "suraj";

// console.log(str.split('').reverse().join(''))

//check palindrom


function findMissing(arr){
    let x = arr.sort((a,b)=>a+b);
    
    let ff = [];
    
    // console.log(x)
    for(let i=x[0];i<=x[x.length-1];i++){
        ff.push(i)
    }
    // console.log(ff);
    let consolidate = [...arr,...ff];
    
    let xx = consolidate.filter((a,b)=> consolidate.indexOf(a) === consolidate.lastIndexOf(a) )
    
    
    console.log(xx);
    
}

findMissing([2,5,99])

// function palindrom(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('its palindrom')
//     }else{
//         console.log('not palindrom')
//     }
    
// }

// palindrom('suraj');
// palindrom('madam')

//fibonacci series

// function fibonacci(n){
//     let fibbo = [0,1];
    
//     for(let i=2;i<n;i++){
//         x = fibbo[fibbo.length -1] + fibbo[fibbo.length -2]
//         fibbo.push(x)
//     }
//     console.log(fibbo)
// }

// fibonacci(5)

//factorial of number

// function factorial(n){
//     let mult = 1
//     for(let i=1;i<=n;i++){
//         mult = mult * i
//     }
//     console.log(mult)
// }

// factorial(5)

//prime number

// function primeNumber(n) {
//     let flag = true;

//     if (n <= 1) {
//         flag = false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             flag = false;
//             break; // Exit early if a divisor is found
//         }
//     }

//     if (flag) {
//         console.log('prime');
//     } else {
//         console.log('not prime');
//     }
// }

// primeNumber(7); // Output: prime


//count vowel and consonant
// function countvowelandconsonant(str){
    
//     let vowel = str.match(/[aeiou]/gi)
//     let consonat = str.match(/[bcdfghjklmnpqrstvwxyz]/gi)
//     console.log(vowel,consonat)
//     console.log('vowel count is :',vowel.length)
//      console.log('vowel count is :',consonat.length)
    
// }

// countvowelandconsonant('suraj')

//find largest element in array

// function largestElementinArray(arr){
//     console.log(Math.max(...arr))
// }

// largestElementinArray([2,4,5,33,5,0])

//remove duplicate from array

// function duplicateElementinArrayremove(arr){
//     console.log([...new Set(arr)])
// }

// duplicateElementinArrayremove([2,5,6,5,8,99])

