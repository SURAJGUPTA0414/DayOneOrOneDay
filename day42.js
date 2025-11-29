console.log("Day 42 started");


//1
// capitalize first word

function capitalizrfisrtword(str){
    let ss = str.split(' ')
    console.log(ss);
    for(let x of ss){
    
       
      for(let i=0;i<=x.length-1;i++){
          console.log(x[i])
      }
        
    }
}
capitalizrfisrtword('suraj gupta')


//2 reverse str

// function reversestr(str){
//     console.log(str.split('').reverse().join(''))
// }

// reversestr('suraj');

//3
// sort an array without inbuilt

//4
// find unique value

// function unique(arr){
//     console.log([...new Set(arr)])
// }
// unique([1,2,55,55,6,7])

//5
// Check palindrome

// function palindrome(str){
//     if(str === str.split('').reverse().join('')){
//         console.log('palindrome')
//     }else{
//         console.log('not palindrome')
//     }
// }
// palindrome('madam')
// palindrome('madadm')


console.log("Day 42 ended");