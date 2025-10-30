console.log('day 12 started');
//1Find the GCD of Two Numbers

function findGCD(num1, num2) {
    let x = []
    for (let i = 1; i <= num2 ; i++){
        if (num1 % i === 0 && num2 %i ===0) {
            // console.log(i);
            x.push(i)
        }
    }
      return x[x.length - 1]
}


console.log('day 13 ended');