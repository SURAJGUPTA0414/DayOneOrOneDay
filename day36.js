console.log("Day 36 started");

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//1
// Count Vowels in a String

// function countvowel(str){
// let x = str.match(/[aeiou]/gi).length
// console.log(x)
    
// }
// countvowel('suraj')

//2
// Check Armstrong Number

function armstrong(num){
    let str = num.toString();
    let power = str.length;
    let sum = 0;

    for(let digit of str){
        sum += Math.pow(Number(digit), power);
    }

    if(sum === num){
        console.log(num + ' is an Armstrong number');
    }else{
        console.log(num + ' is not an Armstrong number');
    }
}

// Test cases
armstrong(153); // Armstrong
armstrong(9474); // Armstrong
armstrong(123); // Not Armstrong


//3
// Find Second Largest Number in an Array
function secondlargest(arr){
    let x = arr.sort((a,b)=>a-b)
    console.log(x[x.length-2])
}
secondlargest([1,5,8,2])

//4
// Remove Duplicates from an Array
function removeDuplicates(arr){
    let unique = [...new Set(arr)];
    console.log(unique);
}

// Test case
removeDuplicates([1,2,2,3,4,4,5]); // [1,2,3,4,5]


//5
// Find Prime Numbers in a Range

function prime(n) {
    if (n <= 1) {
        console.log('not prime');
        return;
    }

    let flag = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {   // check divisibility of n
            flag = true;
            break;
        }
    }

    if (flag) {
        console.log('not prime');
    } else {
        console.log('prime');
    }
}

// Test cases
prime(2);   // prime
prime(9);   // not prime
prime(17);  // prime
prime(20);  // not prime



console.log('day 36 ended')