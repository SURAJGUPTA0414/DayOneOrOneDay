console.log('day82 started');


//1
// valid parenthesys

function validParenthesys(str){
    let stack = [];
    
    let map = {
        ')':'(',
        '}':'{',
        ']':'[',        
    }
    
    for(let xx of str){
        if(xx === '(' || xx === '{' || xx === '['){
            stack.push(xx)
        }else{
            if(stack.pop() !== map[xx]){
                return false
            }
        }
    }
    return stack.length === 0 ? 'valid' : 'invalid'
    
    
    
}

console.log(validParenthesys('(){}('))


//2

// find largest

// function largest(arr){
//     if(arr.length === 0 ) return -1
    
//     let max = arr[0];
    
//     for(let dd of arr){
//         if(dd>max){
//             max = dd
//         }
//     }
//     return max
    
// }

// console.log(largest([1,5,2,9]));

// console.log(largest([]))

//3
// flattenArray

// function flattenArray(arr){
//     // return arr.flat(Infinity);
    
//     // return arr.toString().split(',').map(Number)
// }

// console.log(flattenArray([1,3,[2,44]]))

//4
// function generateAtoZ() {
//   let result = [];

//   for (let i = 65; i <= 90; i++) {
//     result.push(String.fromCharCode(i));
//   }

//   return result;
// }

// module.exports = { generateAtoZ };

//5
// reversestr

function reverseStr(str){
    
    let reverse = "";
    
    for(let i = str.length-1;i>=0;i--){
        reverse =reverse + str[i]
    }
    
    return reverse
    
}

console.log(reverseStr('siuraj'))


console.log('day82 ended');
