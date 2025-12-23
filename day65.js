console.log('day65 started');

//1
//count frequency of each character in a string

function charFrequency(str) {
    const frequency = {};   
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;   
}       
const inputString = "hello world";      
const result = charFrequency(inputString);
console.log(result);    

//2
//find the largest and smallest number in an array  

function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];      

    for (let num of arr) {      

        if (num > largest) {        

            largest = num;    


        }               if (num < smallest) {
            smallest = num;     
        }           
    }           
    return { largest, smallest };   
}               
const numbers = [3, 5, 1, 8, -2, 7];
const extremes = findLargestAndSmallest(numbers);
console.log(extremes);


//3
//check if a number is prime        
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) return false;
    }


    return true;        
}
const numberToCheck = 29;      
const primeStatus = isPrime(numberToCheck);
console.log(`${numberToCheck} is prime: ${primeStatus}`);    


//4
//reverse a string        
function reverseString(str) {
    return str.split('').reverse().join('');    
}   
const stringToReverse = "JavaScript";   
const reversedString = reverseString(stringToReverse);
console.log(reversedString);

//5
//find the factorial of a number        
function factorial(n) {
    if (n === 0 || n === 1) return 1;   
    return n * factorial(n - 1);    
}       
const numForFactorial = 5;  
const factResult = factorial(numForFactorial);
console.log(`Factorial of ${numForFactorial} is ${factResult}`);        
                        



console.log('day65 ended');