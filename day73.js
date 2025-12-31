console.log('started');
//1

// 12.	Print Fibonacci series 
// function fibonaccieSeries(n){
//     let fibb = [0,1]
    
//     for(let i=2;i<n;i++){
//         x = fibb[fibb.length-1] + fibb[fibb.length-2];
        
//         fibb.push(x)
//     }
//     console.log(fibb)
    
// }
// fibonaccieSeries(5);

// 13.	Find the sum of digits of a number

// function sumofdigit(n){
//     let x = n.toString()
//     let sum = 0;
//     for(let dd of x){
//         sum = sum + (Number(dd))
        
//     }
//     console.log(sum)
    
// }

// sumofdigit(123)
// 123 → 6
// 14.	Check if a number is a palindrome
// function palindrome(n){
//     if(n === Number(n.toString().split('').reverse().join(''))){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }

// palindrome(121)
// palindrome(123)
// 15.	Find LCM of two numbers

function lcmoftwonum(a,b){
    let lcm = []
    for(let i=1;i<=10;i++){
        let x = a*i
        lcm.push(x)
        let y = b*i
        lcm.push(y)
        
    }
    let ff = lcm.filter((a,b)=>lcm.indexOf(a) !== lcm.lastIndexOf(a));
    console.log(ff.length ===0 ? -1 : ff[0])
    
}

lcmoftwonum(12,18);
// 	Find GCD / HCF of two numbers

function gcd(a, b) {
  let min = Math.min(a, b);
  let hcf = 1;

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log(gcd(12, 18)); // 6



console.log('ended')