console.log("Day 40 started");

//1 count frequency of each word

function eachwordcount(str){
    let word = str.split(' ');
    let obj = {};
    
    for(let dd of word){
        if(obj[dd]){
            obj[dd] = obj[dd] + 1
        }else{
            obj[dd] = 1
        }
    }
    console.log(obj)
}

eachwordcount('suraj bhai is great suraj')


//2
// prime number


function prime(n){
    let flag = false;
    
    for(let i=2;i<n;i++){
        if(n%i ===0){
            flag = true;
            break;
        }
    }
    if(flag){
        console.log('not prime')
    }else{
        console.log('prime')
    }
}

prime(7);

//3
// armstrong num;


function armstrong(n){
    
  
    let nums = n.toString().split('')
    
    let sum = 0
    for(let i=0;i<=nums.length-1;i++){
        let x = +(nums[i]);
        sum = sum + (x)**nums.length
        
        
    }
   if(sum === n){
       console.log('armstrong')
   }else{
       console.log('not armstrong')
   }
    
}

armstrong(153);

//4
// Check if a number is a Palindrome

// function palindrome(num){
//     if(num.toString() === num.toString().split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }

// palindrome(121);


//5
// Find Factorial of a Number


function factorial(num){
    let mult = 1;
    
    for(let i=1;i<=num;i++){
        mult = mult * i
    }
    console.log(mult)
    
    
}

factorial(5)



console.log("Day 40 ended");