console.log('day104 started');
//1 remove duplicate form array

// function removeduparr(arr){
//     let unique = [];
    
//     for(let dd of arr){
//         if(!unique.includes(dd)){
//             unique.push(dd)
//         }
//     }
//     console.log(unique)
// }

// removeduparr([1,5,2,7,9,9,5])

//2
// write a js fn that takes array of num and returns a new array with only the even number
// function arrevennum(arr){
//     let evenNum = [];
    
//     for(let dd of arr){
//         if(dd%2 === 0){
            
//           evenNum.push(dd) 
//         }
//     }
//     console.log(evenNum)
// }

// arrevennum([1,5,2,7,9,9,5])

//3
// check palindrom

// function palindrom(str){
//      if(str === str.split('').reverse().join('')) {return true}else{
//          return false
//      }
// }
// console.log(palindrom('madam'))

//4
// factorial of num
// function fact(n){
//     let fact = 1;
    
//     for(let i=1;i<=n;i++){
//         fact = fact*i
//     }
//     return fact
// }
// console.log(fact(5))

//5
function longestwordinsentence(word){
    let x = word.split(' ');
    
    let longestword = x[0];
    
    for(let dd of x){
        if(dd.length>longestword.length){
            longestword = dd
        }
    }
    return longestword
    
}

console.log(longestwordinsentence('i am suraj bro'))



console.log('day104 ended')